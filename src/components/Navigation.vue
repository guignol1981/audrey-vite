<template>
    <div
        class="sticky z-20 bg-white py-2 shadow-md transition md:top-0"
        ref="el"
    >
        <a class="relative flex justify-center lg:hidden" href="#">
            <img
                v-if="$route.name === 'portfolio'"
                src="@/assets/logo-2.svg"
                alt=""
            />
            <img
                v-else-if="$route.name === 'boutique'"
                src="@/assets/logo-1.svg"
                alt=""
            />
            <img v-else src="@/assets/logo-3.svg" alt="" />
            <button
                class="fixed top-3 right-3 z-50 h-10 w-10 rounded-full bg-white p-2 text-gray-700 shadow-md hover:text-gray-800"
                @click="mobileRef.toggle()"
            >
                <MenuIcon />
            </button>
            <button
                class="fixed top-3 left-3 z-50 h-10 w-10 rounded-full bg-white p-2 text-gray-700 shadow-md hover:text-gray-800"
                @click="cartOpen = !cartOpen"
            >
                {{ cartItems.length }}
                <ShoppingBagIcon />
            </button>
        </a>
        <div class="hidden items-center justify-between space-x-6 px-8 lg:flex">
            <a
                href="#"
                @click.prevent="$router.push({ name: 'portfolio' })"
                class="flex shrink-0 scale-75 items-center space-x-6 xl:scale-100"
            >
                <img
                    v-if="$route.name === 'portfolio'"
                    class="w-[30rem]"
                    src="@/assets/logo-2.svg"
                    alt=""
                />
                <img
                    v-else-if="$route.name === 'boutique'"
                    class="w-[30rem]"
                    src="@/assets/logo-1.svg"
                    alt=""
                />
                <img
                    v-else
                    class="w-[30rem]"
                    src="@/assets/logo-3.svg"
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
                                $router.push({ name: link.routeName });
                                open = false;
                            "
                        >
                            <a href=""> {{ link.name }}</a>
                        </li>
                    </ul>
                </nav>
                <a
                    href="#"
                    @click.prevent="cartOpen = !cartOpen"
                    class="relative"
                >
                    <ShoppingBagIcon
                        class="h-10 w-10 text-gray-700 hover:text-gray-900"
                    />
                    <div
                        class="absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-blue-logo py-1 px-2 text-sm text-white"
                    >
                        {{ cartItems.length }}
                    </div>
                </a>
            </div>
        </div>
    </div>
    <mobil-navigation-vue
        ref="mobileRef"
        :links="links"
        @cartClick="cartOpen = true"
    />
    <shopping-cart-vue :propOpen="cartOpen" @close="cartOpen = false" />
</template>

<script>
import { ShoppingBagIcon, MenuIcon } from '@heroicons/vue/outline';
import { ref } from '@vue/reactivity';
import MobilNavigationVue from './MobilNavigation.vue';
import { RoutesNames } from '../router';
import ShoppingCartVue from './ShoppingCart.vue';
import { useStore } from 'vuex';
import { computed, onMounted, watch } from '@vue/runtime-core';

export default {
    components: {
        ShoppingBagIcon,
        MenuIcon,
        MobilNavigationVue,
        ShoppingCartVue,
    },
    setup(props) {
        const store = useStore();
        const cartItems = computed(() => store.state.cartItems);
        const cartOpen = ref(false);

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
            cartOpen,
            cartItems,
        };
    },
};
</script>
