<template>
    <section
        class="relative mx-auto max-w-full px-2 py-12 md:max-w-2xl lg:max-w-5xl"
    >
        <!-- <ul role="list" class="space-y-6">
            <li 
            > -->
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <service-card-vue
                v-for="(service, i) in services"
                :key="i"
                :service="service"
                :photo="photos.find((p) => p.id === service.photoId)"
            />
        </div>
        <!-- </li>
        </ul> -->
    </section>
</template>

<script>
import SecondaryButtonVue from '../components/buttons/SecondaryButton.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
import ServiceCardVue from '../components/ServiceCard.vue';

export default {
    components: {
        SecondaryButtonVue,
        ServiceCardVue,
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
