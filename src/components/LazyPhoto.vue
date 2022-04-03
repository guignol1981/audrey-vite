<template>
    <div
        ref="container"
        :class="`h-full opacity-100 transition duration-200 empty:animate-pulse empty:bg-gradient-to-r empty:from-sky-50/20 empty:to-sky-400/20 empty:opacity-25 empty:blur-sm ${classes}`"
    ></div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        classes: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const container = ref(null);
        const image = new Image();

        image.onload = () => {
            container.value.append(image);
        };

        image.src = props.src;

        return {
            container,
        };
    },
};
</script>
