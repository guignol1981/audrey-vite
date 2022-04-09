<template>
    <lazy-photo-vue
        :src="photo.photoUrl"
        :class="[
            photo.orientation === 'paysage' ? 'aspect-[3/2]' : 'aspect-[2/3]',
            'group relative cursor-pointer bg-green-logo/40 transition hover:z-10',
        ]"
        :imgClasses="['group-hover:scale-110', 'transition']"
        @click.prevent="$emit('click')"
    >
        <div
            class="absolute inset-x-0 bottom-0 z-10 hidden h-1/3 items-end justify-end bg-gradient-to-b from-transparent to-green-logo p-3 text-white opacity-0 transition group-hover:opacity-100 md:flex"
        >
            <a
                v-if="photo.serviceId"
                href="#"
                class="translate-y-full text-2xl tracking-wider transition hover:scale-105 group-hover:translate-y-0"
                >{{ service.name }}</a
            >
            <div
                class="group translate-y-full space-y-1 justify-self-end transition group-hover:translate-y-0"
                v-else-if="photo.boutique"
            >
                <a
                    href="#"
                    class="underline underline-offset-1 transition hover:underline-offset-2"
                    >détails</a
                >
            </div>
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
