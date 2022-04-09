<template>
    <div
        class="min-h-screen columns-2 gap-2 space-y-2 px-2 py-12 md:columns-3 lg:columns-4 xl:columns-5"
    >
        <div
            v-for="(photo, i) in portfolio"
            :key="i"
            class="inner group relative break-inside-avoid overflow-hidden"
        >
            <portfolio-card-vue :photo="photo" @click="onCardClick(photo)" />
        </div>
    </div>
    <modal-vue :propOpen="!!photoQuickviewId" @close="photoQuickviewId = ''">
        <quickview-vue :v-if="quickViewOpen" :photo-id="photoQuickviewId" />
    </modal-vue>
    <modal-vue
        :propOpen="!!serviceQuickviewId"
        @close="serviceQuickviewId = ''"
        class="mx-auto max-w-full sm:max-w-2xl"
    >
        <service-card-vue
            v-if="serviceQuickviewId"
            :service-id="serviceQuickviewId"
        />
    </modal-vue>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onBeforeUnmount, ref } from '@vue/runtime-core';
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
        const photoQuickviewId = ref('');
        const serviceQuickviewId = ref('');
        const portfolio = computed(() => store.getters.portfolio);

        const onCardClick = (photo) => {
            if (photo.boutique) {
                photoQuickviewId.value = photo.id;
            } else {
                serviceQuickviewId.value = photo.serviceId;
            }
        };

        onBeforeUnmount(() => {});

        return {
            portfolio,
            onCardClick,
            photoQuickviewId,
            serviceQuickviewId,
        };
    },
};
</script>
