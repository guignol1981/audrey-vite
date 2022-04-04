<template>
    <lazy-photo-vue
        v-if="photo"
        href="#"
        class="group relative block overflow-hidden bg-yellow-logo/40 transition hover:shadow-md"
        :src="photo.photoUrl"
        @click.prevent="onClick"
    >
        <a href="#" class="absolute inset-0 flex items-center justify-center">
            <h1
                class="bg-gradient-to-tr from-yellow-logo/60 to-yellow-logo p-12 text-3xl font-bold tracking-widest text-white shadow-md transition group-hover:scale-110"
            >
                {{ collection.name }}
            </h1>
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
        const db = getFirestore();
        const image = new Image();
        const photo = ref(null);
        const store = useStore();

        const loadPhoto = async () => {
            const q = query(
                collection(db, 'photos').withConverter(AppPhotoDataConverter),
                where('collection', '==', props.collection.id)
            );

            const docSpaps = await getDocs(q);

            docSpaps.forEach((docSnap) => {
                photo.value = docSnap.data();
                return false;
            });

            image.src = photo.value.photoUrl;
        };

        loadPhoto();

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
