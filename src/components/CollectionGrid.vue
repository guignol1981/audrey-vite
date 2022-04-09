<template>
    <div
        class="mx-auto columns-1 space-y-4 md:max-w-5xl md:columns-2 lg:columns-3"
    >
        <collection-card-vue
            v-for="(collection, i) in collections"
            :key="i"
            :collection="collection"
            class="break-inside-avoid"
        />
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
import CollectionCardVue from './buttons/CollectionCard.vue';

export default {
    components: {
        CollectionCardVue,
    },
    setup() {
        const store = useStore();
        const collections = store.state.collections;

        return {
            collections,
        };
    },
};
</script>
