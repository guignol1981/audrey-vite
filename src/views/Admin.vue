<template>
    <dashboard-vue>
        <router-view />
    </dashboard-vue>
</template>

<script>
import DashboardVue from '../components/admin/Dashboard.vue';

export default {
    components: {
        DashboardVue,
    },
    setup() {},
};
</script>
