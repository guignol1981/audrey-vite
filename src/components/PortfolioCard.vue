<template>
    <lazy-photo-vue
        :src="photo.photoUrl"
        :class="[
            photo.orientation === 'paysage' ? 'aspect-[3/2]' : 'aspect-[2/3]',
            'group relative cursor-pointer bg-green-logo/40 transition hover:z-10',
        ]"
        :imgClasses="['group-hover:scale-110', 'transition']"
        @click.prevent="$emit('selected')"
    >
        <div
            class="absolute inset-x-0 bottom-0 z-10 hidden h-1/3 items-end justify-between bg-gradient-to-b from-transparent to-green-logo p-3 text-white opacity-0 transition group-hover:opacity-100 md:flex"
        >
            <span
                class="translate-y-full text-xl tracking-wider transition hover:scale-105 group-hover:translate-y-0"
                >Professionnel</span
            >
            <div
                class="group translate-y-full space-y-1 transition group-hover:translate-y-0"
            >
                <a
                    href="#"
                    class="underline underline-offset-1 transition hover:underline-offset-2"
                    @click.prevent="$emit('selected')"
                    >détails</a
                >
            </div>
        </div>
    </lazy-photo-vue>
</template>

<script>
import { ref } from '@vue/reactivity';
import { AppPhoto } from '../models/photo';
import LazyPhotoVue from './LazyPhoto.vue';

export default {
    components: {
        LazyPhotoVue,
    },
    props: {
        photo: {
            type: AppPhoto,
        },
    },
    setup() {},
};
</script>
