<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <TransitionRoot as="template" :show="open">
        <Dialog
            as="div"
            class="fixed inset-0 z-50 overflow-hidden"
            @close="
                $emit('close');
                open = false;
            "
        >
            <div class="absolute inset-0 overflow-hidden">
                <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay
                        class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    />
                </TransitionChild>

                <div
                    class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
                >
                    <TransitionChild
                        as="template"
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enter-from="translate-x-full"
                        enter-to="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leave-from="translate-x-0"
                        leave-to="translate-x-full"
                    >
                        <div class="pointer-events-auto w-screen max-w-md">
                            <div
                                class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                            >
                                <div
                                    class="flex-1 overflow-y-auto py-6 px-4 sm:px-6"
                                >
                                    <div
                                        class="flex items-start justify-between"
                                    >
                                        <DialogTitle
                                            class="text-lg font-medium text-gray-900"
                                        >
                                            Votre panier
                                        </DialogTitle>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                @click="open = false"
                                            >
                                                <span class="sr-only"
                                                    >Close panel</span
                                                >
                                                <XIcon
                                                    class="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mt-8">
                                        <div class="flow-root">
                                            <ul
                                                role="list"
                                                class="-my-6 divide-y divide-gray-200"
                                            >
                                                <li
                                                    v-for="(
                                                        item, i
                                                    ) in cartItems"
                                                    :key="i"
                                                    class="flex py-6"
                                                >
                                                    <div
                                                        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                                                    >
                                                        <img
                                                            :src="
                                                                photos.find(
                                                                    (p) =>
                                                                        p.id ===
                                                                        item.photoId
                                                                ).photoUrl
                                                            "
                                                            class="h-full w-full object-cover object-center"
                                                        />
                                                    </div>

                                                    <div
                                                        class="ml-4 flex flex-1 flex-col"
                                                    >
                                                        <div>
                                                            <div
                                                                class="flex justify-between text-base font-medium text-gray-900"
                                                            >
                                                                <h3>
                                                                    <a href="#">
                                                                        {{
                                                                            products.find(
                                                                                (
                                                                                    p
                                                                                ) =>
                                                                                    p.id ===
                                                                                    item.productId
                                                                            )
                                                                                .name
                                                                        }}
                                                                    </a>
                                                                </h3>
                                                                <p class="ml-4">
                                                                    {{
                                                                        products
                                                                            .find(
                                                                                (
                                                                                    p
                                                                                ) =>
                                                                                    p.id ===
                                                                                    item.productId
                                                                            )
                                                                            .prices.find(
                                                                                (
                                                                                    p
                                                                                ) =>
                                                                                    p.id ===
                                                                                    item.priceId
                                                                            )
                                                                    }}
                                                                </p>
                                                            </div>
                                                            <!-- <p
                                                                class="mt-1 text-sm text-gray-500"
                                                            >
                                                                {{
                                                                    product.color
                                                                }}
                                                            </p> -->
                                                        </div>
                                                        <div
                                                            class="flex flex-1 items-end justify-between text-sm"
                                                        >
                                                            <p
                                                                class="text-gray-500"
                                                            >
                                                                Quantité: 1
                                                            </p>

                                                            <div class="flex">
                                                                <button
                                                                    type="button"
                                                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                                                    @click="
                                                                        removeItem(
                                                                            item
                                                                        )
                                                                    "
                                                                >
                                                                    retirer
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="border-t border-gray-200 py-6 px-4 sm:px-6"
                                >
                                    <div
                                        class="flex justify-between text-base font-medium text-gray-900"
                                    >
                                        <p>Subtotal</p>
                                        <p>$262.00</p>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">
                                        Shipping and taxes calculated at
                                        checkout.
                                    </p>
                                    <div class="mt-6">
                                        <a
                                            href="#"
                                            class="block flex w-full flex-1 justify-center rounded-md bg-blue-logo py-3 px-4 text-xl text-white ring-blue-logo/25 hover:scale-105 focus:ring-2 active:scale-100 sm:w-full"
                                            >Passer à la caisse</a
                                        >
                                    </div>
                                    <div
                                        class="mt-6 flex justify-center text-center text-sm text-gray-500"
                                    >
                                        <p>
                                            ou
                                            <button
                                                type="button"
                                                class="font-medium text-indigo-600 hover:text-indigo-500"
                                                @click="open = false"
                                            >
                                                Continuer à magasiner<span
                                                    aria-hidden="true"
                                                >
                                                    &rarr;</span
                                                >
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { computed, ref, watch } from 'vue';
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';
import { XIcon } from '@heroicons/vue/outline';
import { useStore } from 'vuex';

export default {
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        XIcon,
    },
    props: {
        propOpen: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const store = useStore();
        const open = ref(false);
        const cartItems = computed(() => store.state.cartItems);
        const photos = store.state.photos;
        const products = store.state.products;

        watch(
            () => props.propOpen,
            () => (open.value = props.propOpen),
            { immediate: true }
        );

        const removeItem = (item) => {
            const itemInList = cartItems.value.find(
                (ci) =>
                    ci.productId === item.productId &&
                    ci.photoId === item.photoId &&
                    ci.priceId === item.priceId
            );
            cartItems.value.splice(cartItems.value.indexOf(itemInList), 1);

            store.commit('cartItems', cartItems.value);
        };

        return {
            open,
            cartItems,
            photos,
            removeItem,
            products,
        };
    },
};
</script>
