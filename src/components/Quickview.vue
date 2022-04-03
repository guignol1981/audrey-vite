<template>
    <div class="bg-white">
        <div
            v-if="photo"
            class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <!-- Image gallery -->
                <TabGroup as="div" class="flex flex-col-reverse">
                    <!-- Image selector -->
                    <div
                        class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
                    >
                        <TabList class="grid grid-cols-4 gap-6">
                            <Tab
                                v-for="i in 2"
                                :key="i + 'temp'"
                                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                v-slot="{ selected }"
                            >
                                <span class="sr-only"> #todo </span>
                                <span
                                    class="absolute inset-0 overflow-hidden rounded-md"
                                >
                                    <img
                                        :src="photo.photoUrl"
                                        alt=""
                                        class="h-full w-full object-cover object-center"
                                    />
                                </span>
                                <span
                                    :class="[
                                        selected
                                            ? 'ring-indigo-500'
                                            : 'ring-transparent',
                                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                                    ]"
                                    aria-hidden="true"
                                />
                            </Tab>
                        </TabList>
                    </div>

                    <TabPanels
                        :class="[
                            'w-full',
                            photo.orientation === 'paysage'
                                ? 'aspect-w-3 aspect-h-2'
                                : 'aspect-w-2 aspect-h-3',
                        ]"
                    >
                        <TabPanel v-for="i in 2" :key="i + 'images'">
                            <img
                                :src="photo.photoUrl"
                                alt="photo"
                                class="h-full w-full object-cover object-center sm:rounded-lg"
                            />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>

                <!-- Product info -->
                <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1
                        class="text-3xl font-extrabold tracking-tight text-gray-900"
                    >
                        {{ photo.title }}
                    </h1>

                    <div class="mt-6">
                        <h3 class="sr-only">Description</h3>

                        <div
                            class="space-y-6 text-base text-gray-700"
                            v-html="photo.description"
                        />
                    </div>

                    <div v-if="selectedPrice" class="mt-6">
                        <h2 class="sr-only">Product information</h2>
                        <p class="text-3xl text-gray-900">
                            {{
                                `$${
                                    products
                                        .find((p) => p.id === selectedProduct)
                                        .prices.find(
                                            (p) => p.id === selectedPrice
                                        ).unit_amount / 100
                                }`
                            }}
                        </p>
                    </div>

                    <!-- Reviews -->
                    <div v-if="selectedProduct" class="mt-3">
                        <h3 class="sr-only">Selected product</h3>
                        <div class="flex items-center font-semibold">
                            {{
                                products.find((p) => p.id === selectedProduct)
                                    .name
                            }}
                        </div>
                        <div
                            class="flex items-center"
                            v-html="
                                products.find((p) => p.id === selectedProduct)
                                    .description
                            "
                        ></div>
                    </div>

                    <form class="mt-6">
                        <div>
                            <h3 class="text-sm text-gray-600">
                                Choisissez le produit
                            </h3>

                            <RadioGroup v-model="selectedProduct" class="mt-2">
                                <RadioGroupLabel class="sr-only">
                                    Produits
                                </RadioGroupLabel>
                                <div class="flex items-center space-x-3">
                                    <RadioGroupOption
                                        as="template"
                                        v-for="product in products"
                                        :key="product.id"
                                        :value="product.id"
                                        v-slot="{ active, checked }"
                                    >
                                        <div
                                            :class="[
                                                active && checked
                                                    ? 'ring ring-offset-1'
                                                    : '',
                                                !active && checked
                                                    ? 'ring-2'
                                                    : '',
                                                'relative -m-0.5 flex cursor-pointer items-center justify-center p-0.5 focus:outline-none',
                                            ]"
                                        >
                                            <div class="h-24 w-24">
                                                <img
                                                    :src="product.images[0]"
                                                    alt=""
                                                    class="object-cover"
                                                />
                                            </div>
                                            <RadioGroupLabel
                                                as="p"
                                                class="sr-only"
                                            >
                                                {{ product.name }}
                                            </RadioGroupLabel>
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </div>
                        <div
                            v-if="
                                selectedProduct &&
                                products.find((p) => p.id === selectedProduct)
                                    .prices.length > 1
                            "
                            class="mt-4"
                        >
                            <h3 class="text-sm text-gray-600">Options</h3>

                            <RadioGroup v-model="selectedPrice" class="mt-2">
                                <RadioGroupLabel class="sr-only">
                                    Options
                                </RadioGroupLabel>
                                <div class="flex items-center space-x-3">
                                    <RadioGroupOption
                                        as="template"
                                        v-for="price in products.find(
                                            (p) => p.id === selectedProduct
                                        ).prices"
                                        :key="price.id"
                                        :value="price.id"
                                        v-slot="{ active, checked }"
                                    >
                                        <div
                                            :class="[
                                                active && checked
                                                    ? 'ring ring-offset-1'
                                                    : '',
                                                !active && checked
                                                    ? 'ring-2'
                                                    : '',
                                                'relative -m-0.5 flex cursor-pointer items-center justify-center p-0.5 focus:outline-none',
                                            ]"
                                        >
                                            <p>
                                                {{ price.description }}
                                            </p>
                                            <RadioGroupLabel
                                                as="p"
                                                class="sr-only"
                                            >
                                                {{ price.description }}
                                            </RadioGroupLabel>
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </div>
                        <div class="sm:flex-col1 mt-10 flex">
                            <button
                                type="button"
                                class="btn-primary max-w-xs flex-1 sm:w-full"
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
                    </form>

                    <section aria-labelledby="details-heading" class="mt-12">
                        <h2 id="details-heading" class="sr-only">
                            Additional details
                        </h2>

                        <div class="divide-y divide-gray-200 border-t">
                            <Disclosure
                                as="div"
                                v-for="i in 3"
                                :key="i"
                                v-slot="{ open }"
                            >
                                <h3>
                                    <DisclosureButton
                                        class="group relative flex w-full items-center justify-between py-6 text-left"
                                    >
                                        <span
                                            :class="[
                                                open
                                                    ? 'text-indigo-600'
                                                    : 'text-gray-900',
                                                'text-sm font-medium',
                                            ]"
                                        >
                                            #todo
                                        </span>
                                        <span class="ml-6 flex items-center">
                                            <PlusSmIcon
                                                v-if="!open"
                                                class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            <MinusSmIcon
                                                v-else
                                                class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel
                                    as="div"
                                    class="prose prose-sm pb-6"
                                >
                                    <ul role="list">
                                        <li v-for="i in 10" :key="i + 'item'">
                                            {{ i }}
                                        </li>
                                    </ul>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/vue';
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/vue/outline';
import { useStore } from 'vuex';

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
        HeartIcon,
        MinusSmIcon,
        PlusSmIcon,
    },
    setup() {
        const selectedPrice = ref('');
        const store = useStore();
        const photo = store.state.photos.find(
            (p) => p.id === store.state.quickviewId
        );
        const products = computed(() => store.state.products);
        const selectedProduct = ref(products.value[0].id);

        watch(
            () => selectedProduct.value,
            (value) => {
                selectedPrice.value = products.value.find(
                    (p) => p.id === value
                )?.prices[0].id;
            }
        );

        const toggleItemInCart = () => {};

        const isInCart = ref(false);

        return {
            isInCart,
            products,
            selectedPrice,
            selectedProduct,
            photo,
            toggleItemInCart,
        };
    },
};
</script>
