<template>
    <div class="z-20 bg-white py-2 shadow-md md:sticky md:top-0">
        <div class="relative lg:hidden">
            <img
                v-if="$route.name === 'portfolio'"
                src="@/assets/stacked-logo-vert.png"
                alt=""
            />
            <img
                v-else-if="$route.name === 'boutique'"
                src="@/assets/stacked-logo-jaune.png"
                alt=""
            />
            <img v-else src="@/assets/stacked-logo-bleu.png" alt="" />
            <button
                class="fixed top-3 right-3 z-20 h-10 w-10 rounded-full bg-white p-2 text-gray-700 shadow-md hover:text-gray-800"
                @click="mobileRef.show()"
            >
                <MenuIcon />
            </button>
        </div>
        <div
            class="hidden items-center justify-between space-x-6 px-8 py-2 lg:flex"
        >
            <a
                href="#"
                @click.prevent="$router.push({ name: 'portfolio' })"
                class="flex shrink-0 scale-75 items-center space-x-6 xl:scale-100"
            >
                <img
                    v-if="$route.name === 'portfolio'"
                    class="w-[30rem]"
                    src="@/assets/stacked-logo-vert-crop.png"
                    alt=""
                />
                <img
                    v-else-if="$route.name === 'boutique'"
                    class="w-[30rem]"
                    src="@/assets/stacked-logo-jaune-crop.png"
                    alt=""
                />
                <img
                    v-else
                    class="w-[30rem]"
                    src="@/assets/stacked-logo-bleu-crop.png"
                    alt=""
                />
            </a>
            <div class="flex items-center space-x-8">
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
                            @click.prevent="
                                $router.push({ name: link.routeName })
                            "
                        >
                            <a href=""> {{ link.name }}</a>
                        </li>
                    </ul>
                </nav>
                <a href="#">
                    <ShoppingBagIcon
                        class="h-10 w-10 text-gray-700 hover:text-gray-900"
                    />
                </a>
            </div>
        </div>
    </div>
    <mobil-navigation-vue ref="mobileRef" :links="links" />
</template>

<script>
import { ShoppingBagIcon, MenuIcon } from '@heroicons/vue/outline';
import { ref } from '@vue/reactivity';
import MobilNavigationVue from './MobilNavigation.vue';
import { RoutesNames } from '../router';

export default {
    components: {
        ShoppingBagIcon,
        MenuIcon,
        MobilNavigationVue,
    },
    setup() {
        const links = [
            { name: 'Portfolio', routeName: RoutesNames.Portfolio },
            { name: 'Boutique', routeName: RoutesNames.Boutique },
            { name: 'Services & Tarifs', routeName: RoutesNames.Services },
            { name: 'Atelier', routeName: '' },
            { name: 'À propos', routeName: RoutesNames.About },
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
