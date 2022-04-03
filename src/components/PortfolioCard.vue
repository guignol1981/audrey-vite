<template>
    <div
        ref="container"
        class="overflow-hidden transition first:hover:scale-110"
    ></div>
    <div
        ref="placeholder"
        :class="[
            photo.orientation === 'paysage' ? 'aspect-[3/2]' : 'aspect-[2/3]',
            'animate-pulse bg-gradient-to-tr from-sky-50 to-sky-600/30 blur-sm',
        ]"
    ></div>
    <div
        class="absolute inset-x-0 bottom-0 flex h-1/2 items-end justify-between bg-gradient-to-b from-transparent to-green-logo p-3 text-white opacity-0 transition group-hover:opacity-100"
    >
        <span
            class="translate-y-full text-xl tracking-wider transition group-hover:translate-y-0"
            >Professionnel</span
        >
        <div
            class="group translate-y-full space-y-1 transition group-hover:translate-y-0"
        >
            <a href="#">détails</a>
            <hr class="mx-auto w-full" />
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { AppPhoto } from '../models/photo';
export default {
    props: {
        photo: {
            type: AppPhoto,
        },
    },
    setup(props) {
        const container = ref(null);
        const placeholder = ref(null);

        const image = new Image();

        image.onload = () => {
            placeholder.value.style.display = 'none';
            container.value.append(image);
        };

        image.src = props.photo.photoUrl;

        return { container, placeholder };
    },
};
</script>
