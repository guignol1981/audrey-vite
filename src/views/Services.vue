<template>
    <section
        class="relative mx-auto max-w-full px-2 py-12 md:max-w-2xl lg:max-w-5xl"
    >
        <ul role="list" class="space-y-6">
            <li
                v-for="(service, i) in services"
                :key="i"
                class="border-b-2 odd:border-r-2 even:border-l-2 md:flex"
            >
                <div class="relative h-full">
                    <img
                        class="aspect-[3/2] w-full object-cover md:h-full"
                        :src="service.src"
                        alt="famille"
                    />
                    <div class="absolute inset-0 grid place-content-center">
                        <h2
                            class="bg-gradient-to-tr from-sky-100/60 to-sky-300/60 p-12 text-3xl font-bold uppercase tracking-widest text-white shadow-md backdrop-blur-sm backdrop-sepia"
                        >
                            {{ service.name }}
                        </h2>
                    </div>
                    <secondary-button-vue class="absolute top-2 right-2"
                        >tarifs</secondary-button-vue
                    >
                </div>
                <p class="mt-2 p-2 leading-7 text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus ali4uam, quod reiciendis facere perspiciatis
                    neque maxime, quo placeat quia autem eaque reprehenderit
                    nesciunt dicta adipisci error ipsum nobis sapiente aut.
                </p>
            </li>
        </ul>
        <button
            class="fixed bottom-3 right-3 rounded-md bg-white px-3 py-2 ring-2 ring-black"
        >
            contactez-moi
        </button>
    </section>
</template>

<script>
import SecondaryButtonVue from '../components/buttons/SecondaryButton.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
    components: {
        SecondaryButtonVue,
    },
    setup() {
        const store = useStore();

        const services = computed(() => store.state.services);

        return {
            services,
        };
    },
};
</script>
