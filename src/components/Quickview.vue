<template>
    <div class="bg-white">
        <div
            v-if="photo"
            class="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <caroussel-vue
                    v-if="selectedProductId"
                    :photo="photo"
                    :product="products.find((p) => p.id === selectedProductId)"
                />

                <div
                    class="mt-10 flex flex-col items-start px-4 sm:mt-16 sm:px-0 lg:mt-0"
                >
                    <h1
                        class="text-3xl font-light tracking-tight text-gray-900"
                    >
                        {{ photo.title }}
                    </h1>

                    <div class="mt-6 flex">
                        <h3 class="sr-only">Description</h3>

                        <div
                            class="space-y-6 text-base text-gray-700"
                            v-html="photo.description"
                        />
                    </div>
                    <product-grid-vue
                        class="mt-12"
                        :photoId="photo.id"
                        @selected="selectedProductId = $event"
                        @selected-price="selectedPriceId = $event"
                    />
                    <div class="sm:flex-col1 mt-10 flex">
                        <button
                            type="button"
                            class="max-w-xs flex-1 rounded-md bg-blue-logo py-3 px-4 text-xl text-white ring-blue-logo/25 hover:scale-105 focus:ring-2 active:scale-100 sm:w-full"
                            @click="toggleItemInCart"
                        >
                            {{
                                isInCart
                                    ? 'Retirer du panier'
                                    : 'Ajouter au panier'
                            }}
                        </button>

                        <button
                            type="button"
                            class="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                        >
                            <HeartIcon
                                class="h-6 w-6 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <span class="sr-only">Add to favorites</span>
                        </button>
                    </div>
                </div>
            </div>
            <incentives-vue class="mt-12" />
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue';
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/vue/outline';
import { useStore } from 'vuex';
import LazyPhotoVue from './LazyPhoto.vue';
import ProductGridVue from './ProductGrid.vue';
import IncentivesVue from './Incentives.vue';
import RoomMockupVue from './RoomMockup.vue';
import CarousselVue from './Caroussel.vue';
import { AppCartItem } from '../models/cart';

export default {
    components: {
        ProductGridVue,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
        HeartIcon,
        MinusSmIcon,
        PlusSmIcon,
        LazyPhotoVue,
        RoomMockupVue,
        IncentivesVue,
        ProductGridVue,
        CarousselVue,
    },
    props: {
        photoId: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();
        const photo = store.state.photos.find((p) => p.id === props.photoId);
        const products = computed(() => store.state.products);
        const selectedProductId = ref(products.value[0].id);
        const selectPriceId = ref(null);
        const cartItems = computed(() => store.state.cartItems);

        const toggleItemInCart = () => {
            const itemInList = cartItems.value.find(
                (ci) =>
                    ci.productId === selectedProductId &&
                    ci.photoId === photo.id &&
                    ci.priceId === selectPriceId
            );

            if (itemInList) {
                cartItems.value.splice(cartItems.value.indexOf(itemInList), 1);
            } else {
                cartItems.value.push({
                    productId: selectedProductId.value,
                    photoId: photo.id,
                    priceId: selectPriceId.value,
                });
            }
            store.commit('cartItems', cartItems.value);
        };

        const isInCart = computed(() => {
            return !!cartItems.value.find(
                (ci) =>
                    ci.productId === selectedProductId &&
                    ci.photoId === photo.id &&
                    ci.priceId === selectPriceId
            );
        });

        return {
            isInCart,
            products,
            selectedProductId,
            selectPriceId,
            photo,
            toggleItemInCart,
            cartItems,
        };
    },
};
</script>
