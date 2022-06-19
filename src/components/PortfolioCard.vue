<template>
    <lazy-photo-vue
        :src="photo.photoUrl"
        :class="[
            photo.orientation === 'paysage' ? 'aspect-[3/2]' : 'aspect-[2/3]',
            'group relative cursor-pointer bg-green-logo/40 transition hover:z-10',
        ]"
        :imgClasses="['group-hover:scale-110', 'transition', 'duration-700']"
        @click.prevent="$emit('click')"
    >
        <div
            class="absolute inset-x-0 bottom-0 z-10 hidden h-1/3 items-end justify-end bg-gradient-to-b from-transparent to-green-logo p-3 text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:flex"
        >
            <a
                v-if="photo.serviceId || photo.boutique"
                href="#"
                class="translate-y-full rounded-md py-2 px-3 text-xl tracking-wider transition duration-700 hover:scale-105 group-hover:translate-y-0"
                >{{ photo.serviceId ? service.name : 'Détails' }}</a
            >
        </div>
    </lazy-photo-vue>
</template>

<script>
import { AppPhoto } from '../models/photo';
import LazyPhotoVue from './LazyPhoto.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
    components: {
        LazyPhotoVue,
    },
    props: {
        photo: {
            type: AppPhoto,
        },
    },
    setup(props) {
        const store = useStore();
        const service = computed(() =>
            store.state.services.find((s) => s.id === props.photo.serviceId)
        );

        return { service };
    },
};
</script>
