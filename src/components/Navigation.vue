<template>
    <div class="z-20 bg-white py-2 shadow-md transition md:sticky md:top-0">
        <a
            class="relative flex justify-center lg:hidden"
            href="#"
            @click.prevent="$router.push({ name: 'portfolio' })"
        >
            <img
                v-if="$route.name === 'portfolio'"
                src="@/assets/logo-2.svg"
                alt=""
                :class="[scrolled ? 'w-1/2' : '']"
            />
            <img
                v-else-if="$route.name === 'boutique'"
                src="@/assets/logo-1.svg"
                :class="[scrolled ? 'w-1/2' : '']"
                alt=""
            />
            <img
                v-else
                src="@/assets/logo-3.svg"
                alt=""
                :class="[scrolled ? 'w-1/2' : '']"
            />
            <button
                class="fixed top-3 right-3 z-50 h-10 w-10 rounded-full bg-white p-2 text-gray-700 shadow-md hover:text-gray-800"
                @click="mobileRef.toggle()"
            >
                <MenuIcon />
            </button>
        </a>
        <div class="hidden items-center justify-between space-x-6 px-8 lg:flex">
            <a
                href="#"
                @click.prevent="$router.push({ name: 'portfolio' })"
                class="flex shrink-0 scale-75 items-center space-x-6 xl:scale-100"
            >
                <img
                    v-if="$route.name === 'portfolio' && !scrolled"
                    class="w-[30rem]"
                    src="@/assets/logo-2.svg"
                    alt=""
                />
                <img
                    v-else-if="$route.name === 'portfolio' && scrolled"
                    class="w-24"
                    src="@/assets/logo-vert.png"
                    alt=""
                />
                <img
                    v-else-if="$route.name === 'boutique' && !scrolled"
                    class="w-[30rem]"
                    src="@/assets/logo-1.svg"
                    alt=""
                />
                <img
                    v-else-if="$route.name === 'boutique' && scrolled"
                    class="w-24"
                    src="@/assets/logo-jaune.png"
                    alt=""
                />
                <img
                    v-else-if="!scrolled"
                    class="w-[30rem]"
                    src="@/assets/logo-3.svg"
                    alt=""
                />
                <img v-else class="w-24" src="@/assets/logo-bleu.png" alt="" />
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
                                $router.push({ name: link.routeName });
                                open = false;
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

        window.onscroll = function () {
            scrollFunction();
        };

        const scrolled = ref(false);

        function scrollFunction() {
            if (scrolled.value) {
                if (document.documentElement.scrollTop === 0) {
                    scrolled.value = false;
                } else {
                    scrolled.value = true;
                }
            } else {
                if (document.documentElement.scrollTop > 150) {
                    scrolled.value = true;
                } else {
                    scrolled.value = false;
                }
            }
        }

        const showNav = ref(false);
        const mobileRef = ref(null);

        return {
            scrolled,
            links,
            showNav,
            mobileRef,
        };
    },
};
</script>
