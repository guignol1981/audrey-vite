<template>
    <navigation-vue />
    <router-view />
</template>

<script>
import LazyPhotoVue from './components/LazyPhoto.vue';
import NavigationVue from './components/Navigation.vue';

export default {
    components: {
        NavigationVue,
        LazyPhotoVue,
    },
    setup() {},
};
</script>

<style></style>
