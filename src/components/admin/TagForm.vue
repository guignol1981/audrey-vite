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
        <div class="space-y-5">
            <div>
                <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Nom du Groupe</label
                >
                <div class="mt-1">
                    <input
                        v-model="group"
                        type="text"
                        name="name"
                        id="name"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label for="tag" class="block text-sm font-medium text-gray-700"
                    >Nouveau tag</label
                >
                <p class="text-sm leading-5 text-gray-500">
                    Touche "Enter" pour ajouter
                </p>
                <div class="mt-1">
                    <input
                        ref="newTagInput"
                        type="text"
                        name="tag"
                        id="tag"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        @keypress.enter.prevent="addTag"
                    />
                </div>
            </div>
            <div>
                <ul
                    role="list"
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <li
                        v-for="tag in tags"
                        :key="tag"
                        class="relative flex justify-center divide-x-2 divide-gray-200 rounded-md border-2 border-gray-200 p-2"
                    >
                        <div v-if="editTag !== tag">
                            {{ tag.name }}
                        </div>
                        <input
                            v-else
                            class="absolute -top-2 w-3/4 rounded-sm"
                            type="text"
                            v-model="tag.name"
                            @change="editTag = null"
                        />
                        <div class="absolute -bottom-4 -right-2 flex space-x-2">
                            <button
                                type="button"
                                class="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                @click="editTag = editTag ? null : tag"
                            >
                                <PencilIcon
                                    class="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                            <button
                                type="button"
                                class="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                @click="removeTag(tag)"
                            >
                                <MinusSmIcon
                                    class="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
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
            <!-- v-if="id" -->
            <button
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
import { AppTag, AppTagDataConverter } from '@/models/photo';
import { ref } from '@vue/reactivity';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    updateDoc,
    where,
} from '@firebase/firestore';
import { MinusSmIcon, PencilIcon } from '@heroicons/vue/solid';
import { watch } from '@vue/runtime-core';

export default {
    components: {
        MinusSmIcon,
        PencilIcon,
    },
    props: {
        groupName: {
            type: String,
        },
    },
    setup(props, { emit }) {
        const group = ref('');
        const tags = ref([]);
        const newTagInput = ref(null);
        const db = getFirestore();
        const tagsToDelete = [];
        const loading = ref(false);
        const editTag = ref(null);

        watch(
            () => props.groupName,
            async (value) => {
                if (loading.value) {
                    return;
                }

                group.value = value;

                if (!group.value) return;

                const q = query(
                    collection(db, 'tags').withConverter(AppTagDataConverter),
                    where('group', '==', group.value)
                );

                const docs = await getDocs(q);

                tags.value = [];
                docs.forEach((doc) => {
                    tags.value.push(doc.data());
                });
            }
        );

        const submit = async () => {
            if (!group.value || !tags.value.length) return;

            loading.value = true;

            await Promise.all(
                tagsToDelete.map(async (tag) => {
                    const tagRef = doc(db, 'tags', tag.id);
                    await deleteDoc(tagRef);
                })
            );

            await Promise.all(
                tags.value
                    .filter((t) => !t.id)
                    .map(async (tag) => {
                        tag.group = group.value;

                        await addDoc(
                            collection(db, 'tags').withConverter(
                                AppTagDataConverter
                            ),
                            tag
                        );
                    })
            );

            await Promise.all(
                tags.value
                    .filter((t) => !!t.id)
                    .map(async (tag) => {
                        tag.group = group.value;

                        await updateDoc(
                            doc(db, 'tags', tag.id),
                            { name: tag.name },
                            { merge: true }
                        );
                    })
            );

            await Promise.all(
                tags.value
                    .filter((t) => t.id)
                    .map(async (tag) => {
                        const tagRef = doc(db, 'tags', tag.id);

                        await updateDoc(
                            tagRef,
                            { group: group.value },
                            { merge: true }
                        );
                    })
            );

            loading.value = false;

            emit('alert', 'Tag(s) sauvegardé(s)!');

            reset();
        };

        const remove = async () => {
            if (props.groupName === 'Collections') return;

            if (!confirm('Voulez vous vraiment supprimer le groupe de Tags?'))
                return;

            loading.value = true;

            await Promise.all(
                tags.value
                    .filter((t) => t.id)
                    .map(async (tag) => {
                        const tagRef = doc(db, 'tags', tag.id);
                        await deleteDoc(tagRef);
                    })
            );

            loading.value = false;

            emit('alert', 'Tag(s) supprimé(s)!');

            reset();
        };

        const reset = () => {
            group.value = '';
            tags.value = [];

            emit('reset');
        };

        const addTag = () => {
            const newTag = newTagInput.value.value.trim();

            if (!newTag || tags.value.map((t) => t.name).includes(newTag))
                return;

            tags.value.push(new AppTag(group.value, newTag));

            newTagInput.value.value = '';
        };

        const removeTag = (tag) => {
            tags.value.splice(
                tags.value.map((t) => t.name).indexOf(tag.name),
                1
            );

            if (tag.id) {
                tagsToDelete.push(tag);
            }
        };

        return {
            tags,
            submit,
            reset,
            remove,
            newTagInput,
            editTag,
            addTag,
            removeTag,
            group,
            loading,
        };
    },
};
</script>
