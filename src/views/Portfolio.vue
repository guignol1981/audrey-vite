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
                @service-selected="serviceQuickview = $event"
                :photo="photo"
            />
        </div>
    </div>
    <modal-vue :propOpen="quickViewOpen" @close="quickViewOpen = false">
        <quickview-vue :v-if="quickViewOpen" />
    </modal-vue>
    <modal-vue
        :propOpen="!!serviceQuickview"
        @close="serviceQuickview = null"
        class="mx-auto w-1/3"
    >
        <service-card-vue v-if="serviceQuickview" :service="serviceQuickview" />
    </modal-vue>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from '@vue/runtime-core';
import PortfolioCardVue from '../components/PortfolioCard.vue';
import ModalVue from '../components/Modal.vue';
import QuickviewVue from '../components/Quickview.vue';
import ServiceCardVue from '../components/ServiceCard.vue';

export default {
    components: {
        PortfolioCardVue,
        ModalVue,
        QuickviewVue,
        ServiceCardVue,
    },
    setup() {
        const store = useStore();
        const quickViewOpen = ref(false);
        const serviceQuickview = ref(null);
        const portfolio = computed(() => store.getters.portfolio);
        const photos = computed(() => store.state.photos);

        return {
            portfolio,
            quickViewOpen,
            serviceQuickview,
            store,
            photos,
        };
    },
};
</script>
