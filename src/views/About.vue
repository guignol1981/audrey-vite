<template>
    <div class="mx-auto px-32 py-20">
        <div class="grid grid-cols-2 gap-9">
            <polaroid-vue />
            <about-card-vue />
        </div>
        <partners-vue class="mt-12" />
    </div>
</template>

<script>
import AboutCardVue from '../components/AboutCard.vue';
import SpiraleIconVue from '../components/icons/SpiraleIcon.vue';
import PartnersVue from '../components/Partners.vue';
import PolaroidVue from '../components/Polaroid.vue';

export default {
    components: {
        SpiraleIconVue,
        PartnersVue,
        PolaroidVue,
        AboutCardVue,
    },
    setup() {},
};
</script>
