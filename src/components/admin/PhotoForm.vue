<template>
    <div
        v-show="loading"
        class="flex h-full w-full flex-col items-center justify-center space-y-10"
    >
        <h1 class="text-2xl font-bold text-gray-900">Chargement</h1>
        <img
            src="@/assets/logo-bleu.png"
            alt="logo"
            class="h-52 w-52 animate-spin"
        />
    </div>
    <div v-show="!loading">
        <div v class="space-y-5">
            <div>
                <label
                    for="titre"
                    class="block text-sm font-medium text-gray-700"
                    >Titre</label
                >
                <div class="mt-1">
                    <input
                        v-model="photo.title"
                        type="text"
                        name="title"
                        id="title"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Description</label
                >
                <div class="mt-1">
                    <input
                        v-model="photo.description"
                        type="text"
                        name="description"
                        id="description"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label
                    for="ordre"
                    class="block text-sm font-medium text-gray-700"
                    >Ordre</label
                >
                <div class="mt-1">
                    <input
                        v-model="photo.ordre"
                        type="number"
                        name="ordre"
                        id="ordre"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <tag-select-vue
                :tagSelection="photo.tags"
                @selection-updated="photo.tags = $event"
            />
            <product-select-vue
                :productSelection="photo.supportedProducts"
                @selection-updated="photo.supportedProducts = $event"
            />

            <div>
                <label class="text-base font-medium text-gray-900"
                    >Visibilité</label
                >
                <p class="text-sm leading-5 text-gray-500">
                    Section(s) dans le(s)quelle(s) la photo sera visible
                </p>
                <div class="mt-4 divide-y divide-gray-200">
                    <div
                        v-for="(visibility, i) in PhotoVisibilities"
                        :key="i + 'visibility'"
                        class="relative flex items-start py-4"
                    >
                        <div class="min-w-0 flex-1 text-sm">
                            <label
                                :for="visibility"
                                class="select-none font-medium text-gray-700"
                                >{{ visibility }}</label
                            >
                        </div>
                        <div class="ml-3 flex h-5 items-center">
                            <input
                                v-model="photo[visibility]"
                                :id="visibility"
                                :name="visibility"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
             <div v-if="photo.service">
                <label
                    for="service"
                    class="block text-sm font-medium text-gray-700"
                    >Service</label
                >

                <select
                    name="service"
                    id="service"
                    v-model="photo.serviceId"
                    class="w-full rounded-md py-2 px-3"
                >
                    <option
                        v-for="service in services"
                        :key="service.id"
                        :value="service.id"
                    >
                        {{ service.name }}
                    </option>
                </select>
            </div>
            <div v-if="!photo.photoUrl">
                <label class="text-base font-medium text-gray-900"
                    >Le fichier de la photo</label
                >
                <p class="text-sm leading-5 text-gray-500">
                    Elle sera reduite en qualité sur le site web pour protégé le
                    piratage
                </p>
                <file-uploader-vue
                    class="mt-4"
                    ref="fileUploader"
                    @file-changed="previewUrl = $event"
                />
            </div>
            <div>
                <label class="text-base font-medium text-gray-900"
                    >Orientation</label
                >
                <p class="text-sm leading-5 text-gray-500">
                    L'orientation de la photo
                </p>
                <fieldset class="mt-4">
                    <legend class="sr-only">Orientation</legend>
                    <div
                        class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
                    >
                        <div
                            v-for="orientation in orientations"
                            :key="orientation"
                            class="flex items-center"
                        >
                            <input
                                :id="orientation"
                                :value="orientation"
                                name="notification-method"
                                type="radio"
                                v-model="photo.orientation"
                                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                                :for="orientation"
                                class="ml-3 block text-sm font-medium text-gray-700"
                            >
                                {{ orientation }}
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
        <div class="mt-8 flex space-x-3">
            <button
                type="button"
                :class="[
                    loading ? 'bg-gray-300' : 'bg-indigo-600',
                    'inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                ]"
                @click="submit"
            >
                Soumettre
            </button>
            <button
                type="button"
                class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click="reset"
            >
                Reinitialiser
            </button>
            <button
                v-if="id"
                type="button"
                class="bg-red inline-flex items-center rounded-md border border-red-300 px-3 py-2 text-sm font-medium leading-4 text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                @click="remove"
            >
                Supprimer
            </button>
        </div>
    </div>
</template>

<script>
import {
    AppPhoto,
    AppPhotoDataConverter,
    PhotoVisibilities,
} from '@/models/photo';
import { ref } from '@vue/reactivity';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getFirestore,
    updateDoc,
} from '@firebase/firestore';
import { watch } from '@vue/runtime-core';
import FileUploaderVue from './FileUploader.vue';
import TagSelectVue from './TagSelect.vue';
import ProductSelectVue from './ProductSelect.vue';
import { useStore } from 'vuex';

const orientations = ['paysage', 'portrait'];

export default {
    components: {
        FileUploaderVue,
        TagSelectVue,
        ProductSelectVue,
    },
    props: {
        id: {
            type: String,
        },
    },
    setup(props, { emit }) {
        const photo = ref(new AppPhoto());
        const previewUrl = ref('');
        const loading = ref(false);
        const fileUploader = ref(null);
        const db = getFirestore();
        const store = useStore();
        const services = ref(store.state.services);

        const cantSubmit = () => {
            return (
                loading.value ||
                !photo.value.title ||
                (!fileUploader.value?.hasFile() && !props.id)
            );
        };

        const submit = async () => {
            if (cantSubmit()) return;

            loading.value = true;

            try {
                if (props.id) {
                    const docRef = doc(db, 'photos', props.id);

                    await updateDoc(
                        docRef,
                        AppPhotoDataConverter.toFirestore(photo.value)
                    );
                } else {
                    const docRef = await addDoc(
                        collection(db, 'photos'),
                        AppPhotoDataConverter.toFirestore(photo.value)
                    );

                    await fileUploader.value.upload(docRef.id);
                }

                emit('alert', 'Photo sauvegardée!');

                reset();
            } catch (e) {
                console.error(e);
            } finally {
                loading.value = false;
            }
        };

        const reset = () => {
            photo.value = new AppPhoto();
            previewUrl.value = '';

            emit('reset');
        };

        const remove = async () => {
            if (!props.id) return;

            if (!confirm('Supprimer la photo?')) return;

            loading.value = true;

            const docRef = doc(db, 'photos', props.id);

            await deleteDoc(docRef);

            loading.value = false;

            emit('alert', 'Photo supprimée!');

            reset();
        };

        watch(
            () => props.id,
            async (id) => {
                if (loading.value) {
                    emit('reset');
                    return;
                }
                if (id) {
                    const docRef = doc(db, 'photos', id).withConverter(
                        AppPhotoDataConverter
                    );

                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        photo.value = docSnap.data();
                    }
                }
            }
        );

        return {
            PhotoVisibilities,
            fileUploader,
            photo,
            submit,
            reset,
            previewUrl,
            remove,
            orientations,
            loading,
            services,
        };
    },
};
</script>
