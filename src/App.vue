<template>
    <navigation-vue />
    <router-view />
</template>

<script>
import NavigationVue from './components/Navigation.vue';

export default {
    components: {
        NavigationVue,
    },
    setup() {},
};
</script>

<style></style>
