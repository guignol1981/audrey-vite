<template>
    <lazy-photo-vue
        :src="photo.photoUrl"
        :class="[
            photo.orientation === 'paysage' ? 'aspect-[3/2]' : 'aspect-[2/3]',
            ' bg-yellow-logo/40',
        ]"
    >
        <div ref="placeholder"></div>
    </lazy-photo-vue>
</template>

<script>
import { AppPhoto } from '../models/photo';
import LazyPhotoVue from './LazyPhoto.vue';
export default {
    components: {
        LazyPhotoVue,
    },
    props: {
        photo: AppPhoto,
    },
    setup() {},
};
</script>
