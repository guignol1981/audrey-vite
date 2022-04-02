<template>
    <div class="columns-4 gap-2 space-y-2 px-2">
        <div
            v-for="(photo, i) in photos"
            :key="i"
            class="group relative overflow-hidden"
        >
            <img
                :class="[
                    'object-cover transition group-hover:scale-110',
                    photo.orientation === 'paysage'
                        ? 'aspect-[3/2]'
                        : 'aspect-[2/3]',
                ]"
                :src="photo.photoUrl"
                alt=""
            />
            <div
                class="absolute inset-x-0 bottom-0 flex h-1/2 items-end justify-between bg-gradient-to-b from-transparent to-green-logo p-3 text-white opacity-0 transition group-hover:opacity-100"
            >
                <span
                    class="translate-y-full text-xl tracking-wider transition group-hover:translate-y-0"
                    >Professionnel</span
                >
                <div
                    class="group translate-y-full space-y-1 transition group-hover:translate-y-0"
                >
                    <a href="#">détails</a>
                    <hr class="mx-auto w-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { collection, getDocs, getFirestore, query } from '@firebase/firestore';
import { AppPhotoDataConverter } from '@/models/photo';

export default {
    setup() {
        const photos = ref([]);
        const db = getFirestore();

        const loadPhotos = async () => {
            const q = query(
                collection(db, 'photos').withConverter(AppPhotoDataConverter)
            );

            const qSnap = await getDocs(q);

            qSnap.forEach((docSnap) => {
                photos.value.push(docSnap.data());
            });
        };

        loadPhotos();

        return {
            photos,
        };
    },
};
</script>
