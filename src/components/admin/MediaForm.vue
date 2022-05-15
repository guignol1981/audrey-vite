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
                        v-model="media.title"
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
                        v-model="media.description"
                        type="text"
                        name="description"
                        id="description"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label for="url" class="block text-sm font-medium text-gray-700"
                    >Url</label
                >
                <div class="mt-1">
                    <input
                        v-model="media.url"
                        type="text"
                        name="url"
                        id="url"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label
                    for="date"
                    class="block text-sm font-medium text-gray-700"
                    >Date</label
                >
                <div class="mt-1">
                    <input
                        v-model="media.date"
                        type="date"
                        name="date"
                        id="date"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
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
import AppMedia from '@/models/media';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc,
} from '@firebase/firestore';
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

export default {
    props: {
        id: {
            type: String,
        },
    },
    setup(props, { emit }) {
        const loading = ref(false);
        const media = ref(new AppMedia());
        const db = getFirestore();

        watch(
            () => props.id,
            async (value) => {
                if (!value) return;

                const docSnap = await getDoc(
                    doc(db, 'medias', value).withConverter(AppMedia)
                );

                media.value = docSnap.data();
                console.log(media);
            }
        );

        const submit = async () => {
            if (
                !media.value.title ||
                !media.value.description ||
                !media.value.url ||
                !media.value.date
            ) {
                return;
            }

            loading.value = true;

            if (props.id) {
                const docRef = doc(db, 'medias', props.id);

                await setDoc(docRef, { ...media.value });
            } else {
                await addDoc(
                    collection(db, 'medias').withConverter(AppMedia),
                    media.value
                );
            }

            loading.value = false;

            emit('notif', 'Media sauvegardé!');

            reset();
        };

        const remove = async () => {
            loading.value = true;

            await deleteDoc(doc(db, 'medias', props.id));

            loading.value = false;

            emit('notif', 'Media supprimé!');

            reset();
        };

        const reset = async () => {
            media.value = new AppMedia();

            emit('reset');
        };

        return { loading, media, submit, remove, reset };
    },
};
</script>
