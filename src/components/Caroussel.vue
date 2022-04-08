<template>
    <TabGroup as="div" class="flex flex-col-reverse">
        <TabPanels class="'w-full mt-6">
            <TabPanel>
                <img :src="photo.photoUrl" />
            </TabPanel>
            <TabPanel>
                <room-mockup-vue v-if="photo" :photo="photo" />
            </TabPanel>
        </TabPanels>
        <div class="mx-auto w-full max-w-2xl sm:block lg:max-w-none">
            <TabList class="grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Tab
                    class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    v-slot="{ selected }"
                >
                    <span class="absolute inset-0 overflow-hidden rounded-md">
                        <img
                            :src="photo.photoUrl"
                            alt=""
                            class="h-full w-full object-cover object-center"
                        />
                    </span>
                    <span
                        :class="[
                            selected ? 'ring-blue-logo' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                        ]"
                        aria-hidden="true"
                    />
                </Tab>
                <Tab
                    class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    v-slot="{ selected }"
                    v-if="product && product.metadata.afficherMockup === 'true'"
                >
                    <span class="absolute inset-0 overflow-hidden rounded-md">
                        <room-mockup-vue :photo="photo" :preview="true" />
                    </span>
                    <span
                        :class="[
                            selected ? 'ring-blue-logo' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                        ]"
                        aria-hidden="true"
                    />
                </Tab>
            </TabList>
        </div>
    </TabGroup>
</template>

<script>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';
import { AppPhoto } from '../models/photo';
import RoomMockupVue from './RoomMockup.vue';

export default {
    components: {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
        RoomMockupVue,
    },
    props: {
        photo: {
            type: AppPhoto,
            required: true,
        },
        product: {
            type: Object,
        },
    },
    setup() {},
};
</script>
