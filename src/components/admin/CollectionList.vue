<template>
    <div class="bg-white">
        <div
            class="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h2 class="sr-only">Collections</h2>

            <ul role="list" class="divide-y divide-gray-200">
                <li
                    v-for="collection in collections"
                    :key="collection.id"
                    class="flex py-4"
                >
                    <a href="#" @click.prevent="$emit('edit', collection.id)">
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">
                                {{ collection.name }}
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { collection, getFirestore, onSnapshot } from '@firebase/firestore';
import AppCollection from '../../models/collection';
import { ref } from '@vue/reactivity';
import { onBeforeUnmount } from '@vue/runtime-core';
export default {
    setup() {
        const db = getFirestore();
        const collections = ref([]);

        const unsubscribe = onSnapshot(
            collection(db, 'collections').withConverter(AppCollection),

            (qSnap) => {
                collections.value = [];
                qSnap.forEach((docSnap) => {
                    collections.value.push(docSnap.data());
                });
            }
        );

        onBeforeUnmount(() => unsubscribe());

        return {
            collections,
        };
    },
};
</script>
