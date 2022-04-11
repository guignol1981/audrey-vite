<template>
    <div class="flex flex-col items-center justify-center">
        <CameraIcon class="h-12 w-12 text-gray-500" />
        <h2 class="mt-2 text-lg font-medium text-gray-900">Aucun résultat</h2>
        <p class="mt-1 text-sm text-gray-500">
            Essayez une nouvelle rechercher depuis ces collections
        </p>
        <div class="mt-6 flex gap-4">
            <button
                v-for="collection in collections"
                :key="collection.id"
                class="rounded-md bg-yellow-logo py-2 px-4 text-white hover:shadow-md active:scale-95"
                @click="onCollectionClick(collection.id)"
            >
                {{ collection.name }}
            </button>
        </div>
    </div>
</template>

<script>
import { CameraIcon } from '@heroicons/vue/outline';
import { useStore } from 'vuex';

export default {
    components: {
        CameraIcon,
    },
    setup() {
        const store = useStore();
        const collections = store.state.collections;
        const filters = store.state.filters;

        const onCollectionClick = (collectionId) => {
            filters.collection = collectionId;

            filters.tags = [];

            store.commit('filters', filters);
        };

        return { collections, onCollectionClick };
    },
};
</script>
