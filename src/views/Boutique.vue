<template>
    <div>
        <template v-if="!filters.collection && !filters.showAll">
            <collection-grid-vue class="mt-4" />
        </template>
        <div v-else>
            <boutique-filters-vue>
                <boutique-grid-vue />
            </boutique-filters-vue>
        </div>
    </div>
</template>

<script>
import BoutiqueGridVue from '../components/BoutiqueGrid.vue';
import CollectionGridVue from '../components/CollectionGrid.vue';
import { ArrowCircleRightIcon } from '@heroicons/vue/solid';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
import BoutiqueFiltersVue from '../components/BoutiqueFilters.vue';

export default {
    components: {
        CollectionGridVue,
        BoutiqueGridVue,
        ArrowCircleRightIcon,
        BoutiqueFiltersVue,
    },
    setup() {
        const store = useStore();

        const filters = computed(() => store.state.filters);

        return { filters };
    },
};
</script>
