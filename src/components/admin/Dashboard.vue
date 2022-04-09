<template>
    <div class="flex h-screen">
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog
                as="div"
                class="fixed inset-0 z-40 flex lg:hidden"
                @close="sidebarOpen = false"
            >
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay
                        class="fixed inset-0 bg-gray-600 bg-opacity-75"
                    />
                </TransitionChild>
                <TransitionChild
                    as="template"
                    enter="transition ease-in-out duration-300 transform"
                    enter-from="-translate-x-full"
                    enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leave-from="translate-x-0"
                    leave-to="-translate-x-full"
                >
                    <div
                        class="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none"
                    >
                        <TransitionChild
                            as="template"
                            enter="ease-in-out duration-300"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="ease-in-out duration-300"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div class="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    type="button"
                                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    @click="sidebarOpen = false"
                                >
                                    <span class="sr-only">Close sidebar</span>
                                    <XIcon
                                        class="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                            <nav aria-label="Sidebar" class="mt-5">
                                <div class="space-y-1 px-2">
                                    <a
                                        v-for="item in navigation"
                                        :key="item.name"
                                        href="#"
                                        :class="[
                                            $route.name === item.routeName
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center rounded-md px-2 py-2 text-base font-medium',
                                        ]"
                                        @click.prevent="
                                            $router.push({
                                                name: item.routeName,
                                            })
                                        "
                                    >
                                        <component
                                            :is="item.icon"
                                            :class="[
                                                $route.name === item.routeName
                                                    ? 'text-gray-500'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-4 h-6 w-6',
                                            ]"
                                            aria-hidden="true"
                                        />
                                        {{ item.name }}
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </TransitionChild>
                <div class="w-14 flex-shrink-0" aria-hidden="true">
                    <!-- Force sidebar to shrink to fit close icon -->
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:flex lg:flex-shrink-0">
            <div class="flex w-64 flex-col">
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div
                    class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100"
                >
                    <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                        <nav class="mt-5 flex-1" aria-label="Sidebar">
                            <div class="space-y-1 px-2">
                                <a
                                    v-for="item in navigation"
                                    :key="item.name"
                                    href="#"
                                    :class="[
                                        $route.name === item.routeName
                                            ? 'bg-gray-200 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
                                    ]"
                                    @click.prevent="
                                        $router.push({ name: item.routeName })
                                    "
                                >
                                    <component
                                        :is="item.icon"
                                        :class="[
                                            $route.name === item.routeName
                                                ? 'text-gray-500'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-3 h-6 w-6',
                                        ]"
                                        aria-hidden="true"
                                    />
                                    {{ item.name }}
                                </a>
                            </div>
                        </nav>
                    </div>
                    <!-- <div
                        class="flex-shrink-0 flex border-t border-gray-200 p-4"
                    >
                        <a href="#" class="flex-shrink-0 w-full group block">
                            <div class="flex items-center">
                                <div>
                                    <img
                                        class="inline-block h-9 w-9 rounded-full"
                                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <div class="ml-3">
                                    <p
                                        class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                                    >
                                        Whitney Francis
                                    </p>
                                    <p
                                        class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                                    >
                                        View profile
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
            <div class="lg:hidden">
                <div
                    class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5"
                >
                    <div>
                        <button
                            type="button"
                            class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                            @click="sidebarOpen = true"
                        >
                            <span class="sr-only">Open sidebar</span>
                            <MenuIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="relative z-0 flex flex-1 overflow-hidden">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';
import {
    MenuIcon,
    XIcon,
    PhotographIcon,
    TagIcon,
    NewspaperIcon,
    BellIcon,
    ViewGridIcon,
} from '@heroicons/vue/outline';
import { RoutesNames } from '../../router';

export default {
    components: {
        Dialog,
        DialogOverlay,
        TransitionChild,
        TransitionRoot,
        MenuIcon,
        XIcon,
    },
    setup() {
        const sidebarOpen = ref(false);
        const navigation = [
            {
                name: 'Photo',
                routeName: RoutesNames.AdminPhotos,
                icon: PhotographIcon,
            },
            {
                name: 'Collection',
                routeName: RoutesNames.AdminCollections,
                icon: ViewGridIcon,
            },
            {
                name: 'Tag',
                routeName: RoutesNames.AdminTags,
                icon: TagIcon,
            },
            {
                name: 'Media',
                routeName: RoutesNames.AdminMedias,
                icon: NewspaperIcon,
            },
            {
                name: 'Service',
                routeName: RoutesNames.AdminServices,
                icon: BellIcon,
            },
        ];
        return {
            navigation,
            sidebarOpen,
        };
    },
};
</script>
