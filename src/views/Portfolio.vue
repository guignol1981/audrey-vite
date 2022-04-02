<template>
    <div class="columns-2 gap-2 space-y-2 px-2 md:columns-3 lg:columns-4">
        <div
            v-for="(photo, i) in portfolio"
            :key="i"
            class="group relative overflow-hidden"
        >
            <portfolio-card-vue
                class="transition group-hover:scale-110"
                :photo="photo"
            />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
import PortfolioCardVue from '../components/PortfolioCard.vue';

export default {
    components: {
        PortfolioCardVue,
    },
    setup() {
        const store = useStore();

        const portfolio = computed(() => store.getters.portfolio);

        return {
            portfolio,
        };
    },
};
</script>
