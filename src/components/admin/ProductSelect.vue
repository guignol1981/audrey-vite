<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Popover class="relative" v-slot="{ open }">
        <PopoverButton
            :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group inline-flex items-center rounded-md p-1 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
            ]"
        >
            <span class="font-semibold hover:text-gray-900">Produits </span>
            <ChevronDownIcon
                v-if="!open"
                :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
            />
            <ChevronUpIcon
                v-else
                :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
            />
        </PopoverButton>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
        >
            <PopoverPanel
                cl0="bg-white absolute z-10 left-0 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
            >
                <div
                    class="overflow-hidden rounded-lg p-2 shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <ul role="list" class="space-y-2">
                        <li
                            v-for="product in products"
                            :class="[
                                inSelection(product)
                                    ? 'bg-black text-green-200'
                                    : 'bg-white text-gray-700',
                                'cursor-pointer rounded-md px-2 py-1',
                            ]"
                            :key="product.id"
                            @click="toggleProduct(product)"
                        >
                            {{ product.name }}
                        </li>
                    </ul>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
    <div class="mt-4">
        <ul
            role="list"
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
            <li
                v-for="productId in selection.filter((s) =>
                    products.find((p) => p.id === s)
                )"
                :key="productId"
                class="relative flex justify-center divide-x-2 divide-gray-200 rounded-md border-2 border-gray-200 p-2"
            >
                <div>
                    {{ productFromId(productId).name }}
                </div>
                <button
                    type="button"
                    class="absolute -bottom-2 -right-2 inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    @click="toggleProduct(productFromId(productId))"
                >
                    <MinusSmIcon class="h-5 w-5" aria-hidden="true" />
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import {
    ChevronDownIcon,
    ChevronUpIcon,
    MinusSmIcon,
} from '@heroicons/vue/solid';
import { collection, getDocs, getFirestore, query } from '@firebase/firestore';
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        ChevronDownIcon,
        ChevronUpIcon,
        MinusSmIcon,
    },
    props: {
        productSelection: {
            type: Array,
        },
    },
    setup(props, { emit }) {
        const db = getFirestore();
        const selection = ref([]);
        const products = ref([]);

        watch(
            () => props.productSelection,
            (value) => {
                selection.value = value;
            }
        );

        const loadProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'));

            querySnapshot.forEach((doc) => {
                const product = doc.data();
                product.id = doc.id;
                products.value.push(product);
            });
        };

        loadProducts();

        const toggleProduct = (product) => {
            const index = selection.value.indexOf(product.id);

            if (index !== -1) {
                selection.value.splice(index, 1);
            } else {
                selection.value.push(product.id);
            }

            emit('selection-updated', selection.value);
        };

        const inSelection = (product) => {
            return selection.value.indexOf(product.id) !== -1;
        };

        const productFromId = (id) => {
            return products.value.find((t) => t.id === id);
        };

        return {
            toggleProduct,
            inSelection,
            productFromId,
            selection,
            products,
        };
    },
};
</script>
