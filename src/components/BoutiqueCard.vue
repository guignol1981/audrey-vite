<template>
    <div ref="container">
        <div
            ref="placeholder"
            :class="[
                photo.orientation === 'paysage'
                    ? 'aspect-[3/2]'
                    : 'aspect-[2/3]',
                'animate-pulse bg-gradient-to-tr from-sky-50 to-sky-600',
            ]"
        ></div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { AppPhoto } from '../models/photo';
export default {
    props: {
        photo: AppPhoto,
    },
    setup(props) {
        const image = new Image();
        const container = ref(null);
        const placeholder = ref(null);

        image.onload = () => {
            placeholder.value.style.display = 'none';
            container.value.append(image);
        };

        image.src = props.photo.photoUrl;

        return { container, placeholder };
    },
};
</script>
