<template>
    <div class="mx-auto max-w-7xl px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-baseline sm:justify-between">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
                Explorez mes collections
            </h2>
            <a
                href="#"
                class="mt-2 block text-sm font-semibold text-yellow-logo hover:text-yellow-logo/60 sm:mt-0"
                @click.prevent="onShowAllClick"
                >Voir toutes les photos<span aria-hidden="true">
                    &rarr;</span
                ></a
            >
        </div>
        <div class="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <collection-card-vue
                v-for="(collection, i) in collections"
                :key="i"
                :collection="collection"
                class="break-inside-avoid"
            />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import CollectionCardVue from './buttons/CollectionCard.vue';
import LazyPhotoVue from './LazyPhoto.vue';

export default {
    components: {
        CollectionCardVue,
        LazyPhotoVue,
    },
    setup() {
        const store = useStore();
        const collections = store.state.collections;

        const onShowAllClick = () => {
            const filters = store.state.filters;
            filters.showAll = true;
            store.commit('filters', filters);
        };

        return {
            onShowAllClick,
            collections,
        };
    },
};
</script>
