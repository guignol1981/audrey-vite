<template>
    <div
        class="grid grid-cols-1 gap-5 rounded-lg py-12 px-6 md:px-0 lg:grid-cols-2"
    >
        <div class="w-full border">
            <div
                class="flex flex-col items-center justify-center space-y-5 py-14"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 stroke-blue-logo"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                </svg>
                <h1 class="text-3xl font-bold uppercase text-blue-logo">
                    Carte-cadeau
                </h1>
                <h2 class="text-xl font-semibold text-blue-logo/90">
                    Séance photo
                </h2>
            </div>
            <div
                class="flex items-center justify-between bg-blue-logo py-5 px-8"
            >
                <pricedrop-down-vue class="z-10" />
                <a
                    href="#"
                    class="group flex items-center space-x-4 text-white transition"
                >
                    <span
                        class="underline underline-offset-1 transition group-hover:underline-offset-2"
                        >ajouter au panier</span
                    >
                </a>
            </div>
        </div>
        <article>
            <h3 class="text-xl font-semibold text-gray-800">Carte Cadeau</h3>
            <p class="mt-2 leading-9">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur rerum voluptas illum expedita in, ipsa distinctio
                voluptate, autem perferendis vero unde nesciunt laboriosam
                dolorem! In veniam expedita iste maxime repellat!
            </p>
        </article>
    </div>
</template>

<script>
import PricedropDownVue from './PricedropDown.vue';
import { ShoppingBagIcon } from '@heroicons/vue/solid';
export default {
    components: {
        PricedropDownVue,
        ShoppingBagIcon,
    },
    setup() {},
};
</script>
