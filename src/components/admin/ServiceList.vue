<template>
    <ul role="list" class="mt-5 space-y-3 divide-y-2">
        <li
            v-for="service in services"
            :key="service.id"
            class="cursor-pointer"
            @click="$emit('edit', service.id)"
        >
            {{ service.name }}
        </li>
    </ul>
</template>

<script>
import { ref } from '@vue/reactivity';
import {
    collection,
    getFirestore,
    onSnapshot,
    query,
} from '@firebase/firestore';
import AppService from '../../models/service';
import { onBeforeUnmount } from '@vue/runtime-core';

export default {
    setup() {
        const services = ref([]);
        const db = getFirestore();

        const q = query(collection(db, 'services').withConverter(AppService));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            services.value = [];

            querySnapshot.forEach((docSnap) => {
                services.value.push(docSnap.data());
            });
        });

        onBeforeUnmount(() => unsubscribe());

        return { services };
    },
};
</script>
