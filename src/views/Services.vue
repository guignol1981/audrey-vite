<template>
    <section
        class="relative mx-auto max-w-full px-2 py-12 md:max-w-2xl lg:max-w-5xl"
    >
        <ul role="list" class="space-y-6">
            <li v-for="(service, i) in services" :key="i">
                <service-card-vue
                    :service="service"
                    :photo="photos.find((p) => p.id === service.photoId)"
                />
            </li>
        </ul>
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
