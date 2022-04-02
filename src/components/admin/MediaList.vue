<template>
    <div class="bg-white">
        <div
            class="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h2 class="sr-only">Medias</h2>

            <ul role="list" class="divide-y divide-gray-200">
                <li v-for="media in medias" :key="media.id" class="py-4 flex">
                    <a href="#" @click="$emit('edit', media.id)">
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">
                                {{ media.title }}
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import {
    collection,
    getFirestore,
    onSnapshot,
    query,
} from '@firebase/firestore';
import { onUnmounted } from '@vue/runtime-core';
import AppMedia from '@/models/media';

export default {
    setup() {
        const medias = ref([]);
        const db = getFirestore();

        const unsubscribe = onSnapshot(
            query(collection(db, 'medias').withConverter(AppMedia)),
            (qSnap) => {
                medias.value = [];
                qSnap.forEach((docSnap) => {
                    medias.value.push(docSnap.data());
                });
            }
        );

        onUnmounted(() => {
            unsubscribe();
        });

        return { medias };
    },
};
</script>
