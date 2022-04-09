<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Menu as="div" class="relative z-20 inline-block text-left">
        <div>
            <MenuButton
                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
                {{ selection }},00$ CA
                <ChevronDownIcon
                    class="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                />
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="absolute left-0 mt-2 origin-top-left rounded-md bg-white px-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
                <div class="py-1">
                    <form>
                        <MenuItem
                            v-slot="{ active }"
                            v-for="(price, i) in prices"
                            :key="i"
                        >
                            <a
                                href="#"
                                :class="[
                                    active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                ]"
                                @click.prevent="selection = price"
                                >{{ price }},00$ CA</a
                            >
                        </MenuItem>
                    </form>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import { ref } from '@vue/reactivity';

export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        ChevronDownIcon,
    },
    props: {
        prices: {
            type: Array,
            default: [],
        },
    },
    setup() {
        const prices = ref(['25', '40', '100']);
        const selection = '25';
        return {
            prices,
            selection,
        };
    },
};
</script>
