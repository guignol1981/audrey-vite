<template>
    <div class="mx-auto lg:px-32">
        <div class="relative grid grid-cols-1 lg:grid-cols-2">
            <div class="p-6 lg:px-40 lg:py-20"><polaroid-vue /></div>

            <div class="p-6 lg:px-2 lg:py-12">
                <about-card-vue />
            </div>
        </div>
        <partners-vue class="mt-24" />
        <media-vue class="mt-24" />
    </div>
</template>

<script>
import AboutCardVue from '../components/AboutCard.vue';
import SpiraleIconVue from '../components/icons/SpiraleIcon.vue';
import MediaVue from '../components/Media.vue';
import PartnersVue from '../components/Partners.vue';
import PolaroidVue from '../components/Polaroid.vue';

export default {
    components: {
        SpiraleIconVue,
        PartnersVue,
        PolaroidVue,
        AboutCardVue,
        MediaVue,
    },
    setup() {},
};
</script>
