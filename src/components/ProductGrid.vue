<template>
    <div>
        <div v-if="selectedPrice" class="flex justify-start">
            <h2 class="sr-only">Price</h2>
            <p class="text-3xl font-bold text-gray-900">
                {{
                    `${
                        products
                            .find((p) => p.id === selection)
                            .prices.find((p) => p.id === selectedPrice)
                            .unit_amount / 100
                    },00 CA$`
                }}
            </p>
        </div>
        <div class="mt-8 flex flex-wrap gap-2 accent-blue-logo">
            <a
                href="#"
                v-for="product in products.filter((p) => p.images[0])"
                :key="product.id"
                @click.prevent="
                    selection = product.id;
                    $emit('selected', product.id);
                "
                :class="[
                    selection === product.id
                        ? 'ring-2 ring-blue-logo ring-offset-2'
                        : '',
                ]"
            >
                <lazy-photo-vue
                    :src="product.images[0]"
                    class="aspect-square w-24"
                />
            </a>
        </div>
        <div v-if="selection" class="mt-6">
            <h3 class="sr-only">Selected product</h3>
            <div class="flex items-center font-semibold">
                {{ products.find((p) => p.id === selection).name }}
            </div>
            <div
                class="mt-2 text-left leading-7 text-gray-500"
                v-html="products.find((p) => p.id === selection).description"
            ></div>
        </div>
        <fieldset
            class="mt-5 accent-blue-logo"
            s
            v-if="products.find((p) => p.id === selection).prices.length > 1"
        >
            <legend class="sr-only">Options</legend>
            <div class="space-y-5">
                <div
                    v-for="price in products.find((p) => p.id === selection)
                        .prices"
                    :key="price.id"
                    class="relative flex items-start"
                >
                    <div class="flex h-5 items-center">
                        <input
                            :id="price.id"
                            :aria-describedby="`${price.id}-price`"
                            name="price"
                            type="radio"
                            :checked="price.id === selectedPrice"
                            @input="selectedPrice = price.id"
                            class="h-4 w-4 border-gray-300 text-blue-logo focus:ring-blue-logo"
                        />
                    </div>
                    <div class="ml-3 text-sm">
                        <label
                            :for="price.id"
                            class="font-medium text-gray-700"
                            >{{ price.description }}</label
                        >
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</template>

<script>
import LazyPhotoVue from './LazyPhoto.vue';
import { useStore } from 'vuex';
import { computed, ref, watch } from '@vue/runtime-core';

export default {
    components: {
        LazyPhotoVue,
    },
    setup() {
        const store = useStore();
        const products = computed(() => store.state.products);
        const selection = ref(products.value[0].id);

        const selectedPrice = ref(
            products.value.find((p) => p.id === selection.value).prices[0].id
        );

        watch(
            () => selection.value,
            () => {
                selectedPrice.value = products.value.find(
                    (p) => p.id === selection.value
                ).prices[0].id;
            }
        );

        return {
            products,
            selection,
            selectedPrice,
        };
    },
};
</script>
