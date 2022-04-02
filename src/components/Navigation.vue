<template>
    <div class="relative shadow-md lg:hidden">
        <img src="@/assets/stacked-logo-yellow.png" alt="" />
        <button
            class="absolute top-3 right-3 h-10 w-10 text-gray-700 hover:text-gray-800"
            @click="mobileRef.show()"
        >
            <MenuIcon />
        </button>
    </div>
    <div
        class="hidden items-center justify-between space-x-6 px-8 py-2 lg:flex"
    >
        <div class="flex items-center justify-between space-x-6">
            <img class="h-32 w-32" src="@/assets/logo-bleu.png" alt="" />
            <div class="flex flex-col space-y-3">
                <span
                    class="font-serif text-4xl font-medium uppercase tracking-widest text-gray-700"
                    >Audrey Mainguy</span
                >
                <span
                    class="text-center font-sans text-xl uppercase tracking-widest text-gray-500"
                    >photographe</span
                >
            </div>
            <nav class="">
                <ul
                    class="ml-4 flex space-x-5 whitespace-nowrap text-xl text-gray-800"
                >
                    <li
                        v-for="(link, i) in links"
                        :key="i"
                        :class="[
                            $route.name === link.routeName
                                ? 'font-semibold'
                                : '',
                        ]"
                        @click.prevent="$router.push({ name: link.routeName })"
                    >
                        <a href=""> {{ link.name }}</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="">
            <a href="#">
                <ShoppingBagIcon
                    class="h-10 w-10 text-gray-700 hover:text-gray-900"
                />
            </a>
        </div>
    </div>
    <mobil-navigation-vue ref="mobileRef" :links="links" />
</template>

<script>
import { ShoppingBagIcon, MenuIcon } from '@heroicons/vue/outline';
import { ref } from '@vue/reactivity';
import MobilNavigationVue from './MobilNavigation.vue';

export default {
    components: {
        ShoppingBagIcon,
        MenuIcon,
        MobilNavigationVue,
    },
    setup() {
        const links = [
            { name: 'Portfolio', routeName: 'portfolio' },
            { name: 'Boutique', routeName: 'boutique' },
            { name: 'Services & Tarifs', routeName: '' },
            { name: 'Atelier', routeName: '' },
            { name: 'À propos', routeName: '' },
            { name: 'Contact', routeName: '' },
        ];
        const showNav = ref(false);
        const mobileRef = ref(null);

        return {
            links,
            showNav,
            mobileRef,
        };
    },
};
</script>
