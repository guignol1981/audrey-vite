<template>
    <navigation-vue />
    <lazy-photo-vue
        class="h-96"
        classes="aspect-[1/2]"
        src="https://images.unsplash.com/photo-1648957670387-cf9cbac8b4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
    />
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
