<template>
    <div
        class="min-h-screen columns-2 gap-2 space-y-2 px-2 py-12 md:columns-3 lg:columns-4 xl:columns-5"
    >
        <div
            v-for="(photo, i) in portfolio"
            :key="i"
            class="inner group relative break-inside-avoid overflow-hidden"
        >
            <portfolio-card-vue
                @selected="
                    store.commit('quickviewId', photo.id);
                    quickViewOpen = true;
                "
                :photo="photo"
            />
        </div>
    </div>
    <modal-vue :propOpen="quickViewOpen" @close="quickViewOpen = false">
        <quickview-vue :v-if="quickViewOpen" />
    </modal-vue>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from '@vue/runtime-core';
import PortfolioCardVue from '../components/PortfolioCard.vue';
import ModalVue from '../components/Modal.vue';
import QuickviewVue from '../components/Quickview.vue';

export default {
    components: {
        PortfolioCardVue,
        ModalVue,
        QuickviewVue,
    },
    setup() {
        const store = useStore();
        const quickViewOpen = ref(false);
        const portfolio = computed(() => store.getters.portfolio);

        return {
            portfolio,
            quickViewOpen,
            store,
        };
    },
};
</script>
