<template>
    <div class="sm:col-span-2">
        <div
            class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
        >
            <div class="space-y-1 text-center">
                <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                >
                    <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <div class="text-sm text-gray-800">
                    <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                        <span>Téléverser la photo</span>
                        <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                            @change="onFileChange"
                        />
                    </label>
                    <span v-if="file" class="block">{{ file.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    getDownloadURL,
    getStorage,
    ref as storageRef,
    uploadBytes,
} from '@firebase/storage';
import { ref } from '@vue/reactivity';
import { onBeforeUnmount } from '@vue/runtime-core';
const file = ref(null);

export default {
    props: {
        photoUrl: {
            type: String,
        },
    },
    setup(props, { emit }) {
        const reader = new FileReader();

        const onFileChange = (e) => {
            const files = Array.from(e.target.files);

            if (!files.length) return;

            file.value = files[0];

            reader.addEventListener(
                'load',
                () => {
                    emit('file-changed', reader.result);
                },
                false
            );

            reader.readAsDataURL(file.value);
        };

        onBeforeUnmount(() => {
            file.value = null;
        });

        return {
            onFileChange,
            file,
        };
    },
    methods: {
        async upload(id) {
            if (!this.hasFile()) return;

            const storage = getStorage();
            const photoRef = storageRef(storage, id + '-main');

            await uploadBytes(photoRef, file.value, {
                customMetadata: { isMain: 'true', photoId: id },
            });

            file.value = null;

            return getDownloadURL(photoRef);
        },
        hasFile() {
            return !!file.value;
        },
        reset() {
            file.value = null;
        },
    },
};
</script>
