<template>
    <a
        ref="container"
        href="#"
        class="group relative block overflow-hidden transition hover:shadow-md"
        @click.prevent="onClick"
    >
        <div class="absolute inset-0 flex items-center justify-center">
            <h1
                class="bg-gradient-to-tr from-yellow-logo/60 to-yellow-logo p-12 text-3xl font-bold tracking-widest text-white shadow-md transition group-hover:scale-110"
            >
                {{ collection.name }}
            </h1>
        </div>
    </a>
    <div
        v-if="photo"
        ref="placeholder"
        :class="[
            photo.orientation === 'paysage' ? 'aspect-[3/2]' : 'aspect-[2/3]',
            'animate-pulse bg-gradient-to-tr from-sky-50 to-sky-600/30 blur-sm',
        ]"
    ></div>
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

export default {
    props: {
        collection: AppCollection,
    },
    setup(props) {
        const db = getFirestore();
        const container = ref(null);
        const placeholder = ref(null);
        const image = new Image();
        const photo = ref(null);
        const store = useStore();

        image.onload = () => {
            placeholder.value.style.display = 'none';
            container.value.append(image);
        };

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
            container,
            placeholder,
            photo,
            onClick,
        };
    },
};
</script>
