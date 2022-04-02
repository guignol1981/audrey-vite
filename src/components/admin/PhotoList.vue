<template>
    <div class="bg-white">
        <div
            class="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h2 class="sr-only">Photos</h2>

            <div
                class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8"
            >
                <a
                    v-for="photo in paginatedPhotos"
                    :key="photo.id"
                    href="#"
                    class="group"
                    @click.prevent="$emit('edit', photo.id)"
                >
                    <div
                        class="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-gray-200"
                    >
                        <img
                            :src="photo.photoUrl"
                            alt="photo"
                            class="aspect-[3/2] w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">
                        {{ photo.title }}
                    </h3>
                </a>
            </div>
        </div>
    </div>
    <pagination-vue
        :low="cursor + 1"
        :top="top"
        :total="filteredPhotos.length"
        @previous="onPrevious"
        @next="onNext"
    />
</template>

<script>
import {
    collection,
    getFirestore,
    onSnapshot,
    query,
} from '@firebase/firestore';
import PaginationVue from './Pagination.vue';
import { AppPhotoDataConverter } from '@/models/photo';
import { ref, toRefs } from '@vue/reactivity';
import { computed, onBeforeUnmount, watch } from '@vue/runtime-core';

export default {
    components: {
        PaginationVue,
    },
    props: {
        search: {
            type: String,
        },
        visibilityFilter: {
            type: Object,
        },
    },
    setup(props) {
        const db = getFirestore();
        const photos = ref([]);
        const cursor = ref(0);
        const pageSize = ref(9);
        const { portfolio, boutique, service } = toRefs(props.visibilityFilter);

        const q = query(
            collection(db, 'photos').withConverter(AppPhotoDataConverter)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            photos.value = [];

            querySnapshot.forEach((doc) => {
                photos.value.push(doc.data());
            });
        });

        const filteredPhotos = computed(() => {
            cursor.value = 0;

            return photos.value.filter((p) => {
                let keep = true;

                if (props.search) {
                    keep = p.title
                        .toLowerCase()
                        .includes(props.search.toLowerCase());
                }

                const photoVisbilities = [p.portfolio, p.boutique, p.service];
                const checkboxVisibilities = [
                    portfolio.value,
                    boutique.value,
                    service.value,
                ];

                if (
                    photoVisbilities[0] !== checkboxVisibilities[0] ||
                    photoVisbilities[1] !== checkboxVisibilities[1] ||
                    photoVisbilities[2] !== checkboxVisibilities[2]
                )
                    keep = false;
                return keep;
            });
        });

        const paginatedPhotos = computed(() => {
            return filteredPhotos.value.slice(
                cursor.value,
                cursor.value + pageSize.value
            );
        });

        const onPrevious = () => {
            cursor.value = Math.max(0, cursor.value - pageSize.value);
        };
        const onNext = () => {
            cursor.value = cursor.value + pageSize.value;
        };

        const top = computed(() => {
            return Math.min(
                paginatedPhotos.value.length,
                cursor.value + pageSize.value
            );
        });

        onBeforeUnmount(() => {
            unsubscribe();
        });

        return {
            photos,
            cursor,
            pageSize,
            paginatedPhotos,
            filteredPhotos,
            onPrevious,
            onNext,
            top,
        };
    },
};
</script>
