<template>
    <div class="mx-auto max-w-full py-12 px-12">
        <template v-if="!filters.collection">
            <div class="flex justify-between space-x-4">
                <h1 class="text-3xl font-semibold">Explorez mes collections</h1>
                <a href="#" class="flex space-x-4">
                    <span class="underline">voir toutes les photos</span>
                    <ArrowCircleRightIcon class="block h-5 w-5" />
                </a>
            </div>
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
