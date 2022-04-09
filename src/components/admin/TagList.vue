<template>
    <div class="bg-white">
        <div
            class="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h2 class="sr-only">Tags</h2>

            <ul role="list" class="divide-y divide-gray-200">
                <li v-for="group in groups" :key="group.name" class="flex py-4">
                    <a href="#" @click.prevent="$emit('edit', group.name)">
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">
                                {{ group.name }}
                            </p>
                            <p class="text-sm text-gray-500">
                                <span class="font-semibold">Tags: </span
                                >{{ group.count }}
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { AppTagDataConverter } from '@/models/photo';
import {
    collection,
    getFirestore,
    onSnapshot,
    query,
} from '@firebase/firestore';
import { computed, onBeforeUnmount, ref } from '@vue/runtime-core';

export default {
    setup() {
        const tags = ref([]);
        const db = getFirestore();

        const q = query(
            collection(db, 'tags').withConverter(AppTagDataConverter)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            tags.value = [];

            querySnapshot.forEach(async (doc) => {
                const data = await doc.data();
                tags.value.push(data);
            });
        });

        onBeforeUnmount(() => unsubscribe());

        const groups = computed(() => {
            const groupsMap = tags.value.reduce((acc, rec) => {
                acc[rec.group] = acc[rec.group] + 1 || 1;
                return acc;
            }, {});

            return Object.keys(groupsMap).map((k) => ({
                name: k,
                count: groupsMap[k],
            }));
        });

        return { groups };
    },
};
</script>
