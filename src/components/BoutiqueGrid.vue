<template>
    <div
        class="grid grid-cols-2 items-end space-y-16 md:grid-cols-4 lg:grid-cols-6"
    >
        <a
            v-for="(photo, i) in photos"
            :key="i"
            class="group relative px-4"
            href="#"
            @click.prevent="
                onPhotoClick(photo.id);
                quickViewOpen = true;
            "
        >
            <boutique-card-vue
                class="'transition group-hover:-translate-y-8 group-hover:scale-105 group-hover:shadow-md"
                :photo="photo"
            />
            <div
                class="absolute inset-x-0 -bottom-1 h-4 bg-[url('@/assets/wood.png')] bg-cover bg-center bg-no-repeat shadow-md"
            ></div>
        </a>
    </div>
    <modal-vue :propOpen="quickViewOpen" @close="quickViewOpen = false">
        <quickview-vue :v-if="quickViewOpen" />
    </modal-vue>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import ModalVue from './Modal.vue';
import QuickviewVue from './Quickview.vue';
import BoutiqueCardVue from './BoutiqueCard.vue';
import { computed } from '@vue/runtime-core';

export default {
    components: {
        ModalVue,
        QuickviewVue,
        BoutiqueCardVue,
    },
    setup() {
        const store = useStore();
        const quickViewOpen = ref(false);

        const photos = computed(() => store.getters.filteredBoutique);

        const onPhotoClick = (id) => {
            store.commit('quickviewId', id);
        };

        return {
            photos,
            quickViewOpen,
            onPhotoClick,
        };
    },
};
</script>
