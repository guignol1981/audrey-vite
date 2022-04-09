<template>
    <div class="relative">
        <div class="fixed inset-x-0 -z-10 opacity-20">
            <img src="@/assets/wave1.svg" class="mt-12 w-full" alt="" />
        </div>
        <section
            class="relative mx-auto max-w-full px-2 py-12 md:max-w-2xl lg:max-w-5xl"
        >
            <gift-card-section-vue />
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <service-card-vue
                    v-for="(service, i) in services"
                    :key="i"
                    :service-id="service.id"
                    :photo="photos.find((p) => p.id === service.photoId)"
                />
            </div>
        </section>
    </div>
</template>

<script>
import SecondaryButtonVue from '../components/buttons/SecondaryButton.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
import ServiceCardVue from '../components/ServiceCard.vue';
import GiftCardSectionVue from '../components/GiftCardSection.vue';

export default {
    components: {
        SecondaryButtonVue,
        ServiceCardVue,
        GiftCardSectionVue,
    },
    setup() {
        const store = useStore();

        const services = computed(() => store.state.services);
        const photos = computed(() => store.state.photos);

        return {
            services,
            photos,
        };
    },
};
</script>
