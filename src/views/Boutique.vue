<template>
    <div class="mx-auto max-w-full py-12 lg:max-w-7xl">
        <div>
            <h1 class="text-3xl font-semibold">Explorez mes collections</h1>
        </div>
        <collection-grid-vue class="mt-4" />
        <boutique-grid-vue />
    </div>
</template>

<script>
import BoutiqueGridVue from '../components/BoutiqueGrid.vue';
import CollectionGridVue from '../components/CollectionGrid.vue';

export default {
    components: {
        CollectionGridVue,
        BoutiqueGridVue,
    },
    setup() {},
};
</script>
