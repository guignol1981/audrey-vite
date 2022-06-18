<template>
    <div class="bg-white px-0 md:px-12">
        <div>
            <!-- Mobile filter dialog -->
            <TransitionRoot as="template" :show="mobileFiltersOpen">
                <Dialog
                    as="div"
                    class="fixed inset-0 z-40 flex lg:hidden"
                    @close="mobileFiltersOpen = false"
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
                            class="fixed inset-0 bg-black bg-opacity-25"
                        />
                    </TransitionChild>

                    <TransitionChild
                        as="template"
                        enter="transition ease-in-out duration-300 transform"
                        enter-from="translate-x-full"
                        enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leave-from="translate-x-0"
                        leave-to="translate-x-full"
                    >
                        <div
                            class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                        >
                            <div class="flex items-center justify-between px-4">
                                <h2
                                    class="flex w-full items-center text-lg font-medium text-gray-900"
                                >
                                    Filtres
                                    <button
                                        type="button"
                                        @click="clearFilters"
                                        class="flex space-x-2 px-2 py-3 text-gray-500 hover:text-gray-700 active:scale-95"
                                    >
                                        <RefreshIcon class="h-6 w-6" />
                                    </button>
                                </h2>

                                <button
                                    type="button"
                                    class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                    @click="mobileFiltersOpen = false"
                                >
                                    <span class="sr-only">Close menu</span>
                                    <XIcon class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <form
                                class="mt-4 border-t border-gray-200 accent-blue-logo"
                            >
                                <h3 class="sr-only">Categories</h3>
                                <ul
                                    role="list"
                                    class="px-2 py-3 font-medium text-gray-900"
                                >
                                    <li
                                        v-for="collection in collections"
                                        :key="collection.id"
                                    >
                                        <a
                                            href="#"
                                            :class="[
                                                'block px-2 py-3',
                                                selectedCollection &&
                                                selectedCollection.id ===
                                                    collection.id
                                                    ? 'font-bold'
                                                    : '',
                                            ]"
                                            @click.prevent="
                                                filters.collection =
                                                    collection.id;
                                                mobileFiltersOpen = false;
                                            "
                                        >
                                            {{ collection.name }}
                                        </a>
                                    </li>
                                </ul>

                                <Disclosure
                                    as="div"
                                    v-for="tagGroup in tagGroups"
                                    :key="tagGroup + 'group'"
                                    class="border-t border-gray-200 px-4 py-6"
                                    v-slot="{ open }"
                                >
                                    <h3 class="-mx-2 -my-3 flow-root">
                                        <DisclosureButton
                                            class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                        >
                                            <span
                                                class="font-medium text-gray-900"
                                            >
                                                {{ tagGroup }}
                                            </span>
                                            <span
                                                class="ml-6 flex items-center"
                                            >
                                                <PlusSmIcon
                                                    v-if="!open"
                                                    class="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                                <MinusSmIcon
                                                    v-else
                                                    class="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </DisclosureButton>
                                    </h3>
                                    <DisclosurePanel class="pt-6">
                                        <div class="space-y-6">
                                            <div
                                                v-for="tag in tagsForGroup(
                                                    tagGroup
                                                )"
                                                :key="tag.id"
                                                class="flex items-center"
                                            >
                                                <input
                                                    :id="`filter-mobile-${tag.id}`"
                                                    :name="`${tag.name}[]`"
                                                    :value="tag.id"
                                                    type="checkbox"
                                                    :checked="
                                                        filters.tags.includes(
                                                            tag.id
                                                        )
                                                    "
                                                    @input="onTagClick(tag)"
                                                    class="h-4 w-4 rounded border-gray-300 text-yellow-logo focus:ring-yellow-logo"
                                                />
                                                <label
                                                    :for="`filter-mobile-${tag.id}`"
                                                    class="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {{ tag.name }}
                                                </label>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            </form>
                        </div>
                    </TransitionChild>
                </Dialog>
            </TransitionRoot>

            <main class="mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="relative z-10 flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6"
                >
                    <h1
                        v-if="selectedCollection"
                        class="text-4xl font-light tracking-tight text-gray-900"
                    >
                        {{ selectedCollection.name }}
                    </h1>
                    <div v-else></div>

                    <button
                        type="button"
                        @click="clearFilters"
                        class="hidden space-x-2 text-gray-500 hover:text-gray-700 active:scale-95 lg:flex"
                    >
                        <span> Réinitisaliser les filtres </span>
                        <RefreshIcon class="h-6 w-6" />
                    </button>
                    <button
                        type="button"
                        @click="mobileFiltersOpen = true"
                        class="block text-gray-500 hover:text-gray-700 active:scale-95 lg:hidden"
                    >
                        <FilterIcon class="h-6 w-6" />
                    </button>
                </div>

                <section aria-labelledby="products-heading" class="pt-6 pb-24">
                    <h2 id="products-heading" class="sr-only">Tags</h2>
                    <div
                        class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"
                    >
                        <form class="hidden accent-blue-logo lg:block">
                            <h3 class="sr-only">Tags</h3>
                            <ul
                                role="list"
                                class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                            >
                                <li
                                    v-for="collection in collections"
                                    :key="collection.id"
                                >
                                    <a
                                        href="#"
                                        :class="[
                                            selectedCollection &&
                                            selectedCollection.id ===
                                                collection.id
                                                ? 'font-bold'
                                                : '',
                                        ]"
                                        @click.prevent="
                                            filters.collection = collection.id
                                        "
                                    >
                                        {{ collection.name }}
                                    </a>
                                </li>
                            </ul>

                            <Disclosure
                                as="div"
                                v-for="tagGroup in tagGroups"
                                :key="tagGroup + 'temp'"
                                class="border-b border-gray-200 py-6"
                                v-slot="{ open }"
                            >
                                <h3 class="-my-3 flow-root">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                    >
                                        <span class="font-medium text-gray-900">
                                            {{ tagGroup }}
                                        </span>
                                        <span class="ml-6 flex items-center">
                                            <PlusSmIcon
                                                v-if="!open"
                                                class="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                            <MinusSmIcon
                                                v-else
                                                class="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <div
                                            v-for="tag in tagsForGroup(
                                                tagGroup
                                            )"
                                            :key="tag.id"
                                            class="flex items-center"
                                        >
                                            <input
                                                :id="`filter-${tag.id}`"
                                                :name="`${tag.name}[]`"
                                                :value="tag.id"
                                                type="checkbox"
                                                :checked="
                                                    filters.tags.includes(
                                                        tag.id
                                                    )
                                                "
                                                @input="onTagClick(tag)"
                                                class="h-4 w-4 rounded border-gray-300 text-yellow-logo focus:ring-yellow-logo"
                                            />
                                            <label
                                                :for="`filter-${tag.id}`"
                                                class="ml-3 text-sm text-gray-600"
                                            >
                                                {{ tag.name }}
                                            </label>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        </form>

                        <div class="p-8 lg:col-span-3">
                            <slot />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';
import { XIcon } from '@heroicons/vue/outline';
import {
    ChevronDownIcon,
    FilterIcon,
    MinusSmIcon,
    PlusSmIcon,
    ViewGridIcon,
    RefreshIcon,
} from '@heroicons/vue/solid';
import { useStore } from 'vuex';
import AppFilters from '../models/filters';

export default {
    components: {
        Dialog,
        DialogOverlay,
        Disclosure,
        DisclosureButton,
        RefreshIcon,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        ChevronDownIcon,
        FilterIcon,
        MinusSmIcon,
        PlusSmIcon,
        ViewGridIcon,
        XIcon,
    },
    setup() {
        const store = useStore();
        const filters = ref(store.state.filters);
        const collections = computed(() => store.state.collections);
        const tagGroups = computed(() => store.getters.tagGroups);

        watch(
            () => store.state.filters,
            () => (filters.value = store.state.filters)
        );

        const tagsForGroup = (groupName) => {
            return store.state.tags.filter((t) => t.group === groupName);
        };

        const selectedCollection = computed(() => {
            return store.state.collections.find(
                (c) => c.id === store.state.filters.collection
            );
        });

        const onTagClick = (tag) => {
            const index = filters.value.tags.indexOf(tag.id);

            if (index !== -1) {
                filters.value.tags.splice(index, 1);
            } else {
                filters.value.tags.push(tag.id);
            }

            store.commit('filters', filters.value);

            this.mobileFiltersOpen = false;
        };

        const clearFilters = () => {
            filters.value = new AppFilters();

            filters.value.showAll = true;

            store.commit('filters', filters.value);
        };

        const mobileFiltersOpen = ref(false);

        return {
            clearFilters,
            onTagClick,
            filters,
            mobileFiltersOpen,
            selectedCollection,
            collections,
            tagGroups,
            tagsForGroup,
        };
    },
};
</script>
