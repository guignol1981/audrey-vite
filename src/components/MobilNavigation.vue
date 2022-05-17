<template>
    <TransitionRoot as="Template" :show="open">
        <Dialog
            as="div"
            class="fixed inset-0 z-30 overflow-hidden"
            @close="open = false"
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
                        @click.stop="open = false"
                    />
                </TransitionChild>
                <div class="fixed inset-y-0 right-0 flex max-w-full">
                    <TransitionChild
                        as="template"
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enter-from="translate-x-full"
                        enter-to="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leave-from="translate-x-0"
                        leave-to="translate-x-full"
                    >
                        <div class="w-screen max-w-md">
                            <div class="h-full bg-white px-4 py-10 shadow-xl">
                                <ul class="space-y-4">
                                    <li
                                        v-for="(link, i) in links"
                                        :key="i"
                                        :class="[
                                            'text-xl text-gray-800',
                                            $route.name === link.routeName
                                                ? 'font-semibold'
                                                : '',
                                        ]"
                                        @click.prevent="
                                            $router.push({
                                                name: link.routeName,
                                            });
                                            open = false;
                                        "
                                    >
                                        <a href="#">{{ link.name }}</a>
                                    </li>
                                </ul>
                                <hr class="my-4 divide-y-4" />
                                <div class="flex">
                                    <ShoppingBagIcon class="h-10 w-10" />
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
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
} from '@headlessui/vue';
import { ref } from '@vue/reactivity';
import { ShoppingBagIcon } from '@heroicons/vue/outline';

const open = ref(false);

export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        ShoppingBagIcon,
    },
    props: {
        links: {
            type: Array,
            default: new Array(0),
        },
    },
    setup() {
        return { open };
    },
    methods: {
        toggle() {
            open.value = !open.value;
        },
    },
};
</script>
