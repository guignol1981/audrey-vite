<template>
    <div v-if="!photos.length" class="grid place-content-center py-12">
        <empty-list-vue />
    </div>
    <div
        v-else
        class="grid grid-cols-1 items-end md:grid-cols-2 lg:grid-cols-4"
    >
        <a
            v-for="(photo, i) in photos"
            :key="i"
            href="#"
            :class="['group relative mt-12 first:mt-0 md:mt-6 md:first:mt-0']"
            @click.prevent="photoQuickviewId = photo.id"
        >
            <boutique-card-vue
                :class="[
                    'px-8 transition duration-700 group-hover:-translate-y-6 group-hover:scale-105',
                ]"
                :photo="photo"
            />
            <div
                class="absolute inset-x-0 -bottom-1 h-4 w-full bg-[url('@/assets/wood.png')] bg-cover bg-center bg-no-repeat shadow-md"
            ></div>
        </a>
    </div>
    <modal-vue :propOpen="!!photoQuickviewId" @close="photoQuickviewId = ''">
        <quickview-vue :v-if="photoQuickviewId" :photo-id="photoQuickviewId" />
    </modal-vue>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import ModalVue from './Modal.vue';
import QuickviewVue from './Quickview.vue';
import BoutiqueCardVue from './BoutiqueCard.vue';
import { computed } from '@vue/runtime-core';
import EmptyListVue from './EmptyList.vue';

export default {
    components: {
        ModalVue,
        QuickviewVue,
        BoutiqueCardVue,
        EmptyListVue,
    },
    setup() {
        const store = useStore();
        const photoQuickviewId = ref('');

        const photos = computed(() => store.getters.filteredBoutique);

        return {
            photos,
            photoQuickviewId,
        };
    },
};
</script>
