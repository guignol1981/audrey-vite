<template>
    <div
        ref="container"
        :class="[
            loading ? 'animate-pulse bg-sky-400/10 opacity-25 blur-md' : '',
            'w-full opacity-100 transition',
        ]"
    >
        <slot />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        imgClasses: {
            type: [],
            default: [],
        },
    },
    setup(props) {
        const container = ref(null);
        const image = new Image();
        const loading = ref(true);

        image.onload = () => {
            props.imgClasses.forEach((c) => {
                image.classList.add(c);
            });
            container.value.append(image);
            loading.value = false;
        };

        image.src = props.src;

        return {
            container,
            loading,
        };
    },
};
</script>
