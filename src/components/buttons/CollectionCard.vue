<template>
    <lazy-photo-vue
        v-if="photo"
        href="#"
        class="group relative block overflow-hidden bg-yellow-logo/40 transition hover:shadow-md"
        :src="photo.photoUrl"
        @click.prevent="onClick"
    >
        <a href="#" class="absolute inset-0 flex items-center justify-center">
            <h2
                class="bg-gradient-to-tr from-yellow-logo/60 to-yellow-logo p-12 text-3xl font-bold uppercase tracking-widest text-white shadow-md backdrop-blur-sm backdrop-sepia"
            >
                {{ collection.name }}
            </h2>
        </a>
    </lazy-photo-vue>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from '@vue/reactivity';
import AppCollection from '../../models/collection';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from '@firebase/firestore';
import { AppPhotoDataConverter } from '../../models/photo';
import LazyPhotoVue from '../LazyPhoto.vue';

export default {
    components: {
        LazyPhotoVue,
    },
    props: {
        collection: AppCollection,
    },
    setup(props) {
        const store = useStore();
        const photo = store.state.photos.find(
            (p) => p.id === props.collection.photoId
        );
        const onClick = () => {
            const filters = store.state.filters;
            filters.collection = props.collection.id;
        };

        return {
            photo,
            onClick,
        };
    },
};
</script>
