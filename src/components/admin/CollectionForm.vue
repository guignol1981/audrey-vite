<template>
    <form>
        <fieldset class="space-y-6">
            <div class="space-y-2">
                <label
                    class="block text-sm font-medium text-gray-700"
                    for="name"
                    >Nom de la collection</label
                >
                <input
                    type="text"
                    class="w-full rounded-md"
                    v-model="collection.name"
                />
            </div>
            <Disclosure as="div" class="space-y-2" v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full items-center justify-around rounded-md border-2 p-2"
                >
                    <span>Photo associée:</span>
                    <span v-if="collection.photoId">
                        {{
                            photos.find((p) => p.id === collection.photoId)
                                .title
                        }}
                    </span>
                    <ChevronDownIcon v-if="!open" class="h-5 w-5" />
                    <ChevronUpIcon v-else class="h-5 w-5" />
                </DisclosureButton>
                <DisclosurePanel>
                    <div class="grid grid-cols-4 gap-2">
                        <a
                            v-for="photo in photos"
                            :key="photo.id"
                            href="#"
                            @click.prevent="collection.photoId = photo.id"
                        >
                            <lazy-photo-vue :src="photo.photoUrl" />
                        </a>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </fieldset>
        <div class="mt-8 flex space-x-3">
            <button
                type="button"
                :class="[
                    'bg-indigo-600',
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
                type="button"
                class="bg-red inline-flex items-center rounded-md border border-red-300 px-3 py-2 text-sm font-medium leading-4 text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                @click="remove"
            >
                Supprimer
            </button>
        </div>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import AppCollection from '../../models/collection';
import { computed, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import {
    addDoc,
    doc,
    getDoc,
    setDoc,
    getFirestore,
    collection as fireStoreCollection,
    deleteDoc,
} from '@firebase/firestore';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import LazyPhotoVue from '../LazyPhoto.vue';

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        LazyPhotoVue,
        ChevronDownIcon,
        ChevronUpIcon,
    },
    props: {
        id: {
            type: String,
            default: '',
        },
    },
    setup(props, { emit }) {
        const db = getFirestore();
        const collection = ref(new AppCollection());
        const store = useStore();
        const photos = computed(() =>
            store.state.photos.filter((p) => p.orientation === 'portrait')
        );

        watch(
            () => props.id,
            async () => {
                if (props.id) {
                    const docRef = doc(
                        db,
                        'collections',
                        props.id
                    ).withConverter(AppCollection);

                    const docSnap = await getDoc(docRef);

                    collection.value = docSnap.data();
                } else {
                    collection.value = new AppCollection();
                }
            }
        );

        const submit = async () => {
            if (!collection.value.name || !collection.value.photoId) return;

            if (props.id) {
                const docRef = doc(db, 'collections', props.id);

                await setDoc(docRef, { ...collection.value });
            } else {
                await addDoc(
                    fireStoreCollection(db, 'collections').withConverter(
                        AppCollection
                    ),
                    collection.value
                );
            }

            if (props) emit('alert', 'Collection sauvegardée!');
            reset();
        };
        const remove = async () => {
            if (!confirm('voulez vous vraiment supprimer cette collection?'))
                return;
            const docRef = doc(db, 'collections', props.id);

            await deleteDoc(docRef);

            emit('alert', 'Collection supprimée!');
            reset();
        };

        const reset = async () => {
            collection.value = new AppCollection();

            emit('reset');
        };

        return {
            collection,
            photos,
            submit,
            reset,
            remove,
        };
    },
};
</script>
