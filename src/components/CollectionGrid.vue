<template>
    <div class="columns-2 space-y-4">
        <a
            v-for="(photo, i) in photosForCollections"
            :key="i"
            href="#"
            class="group relative block overflow-hidden"
            @click.prevent="onClick(photo)"
        >
            <img
                :class="['aspect-[2/3] object-cover transition']"
                :src="photo.photoUrl"
                alt=""
            />

            <div class="absolute inset-0 flex items-center justify-center">
                <h1
                    class="bg-gradient-to-tr from-yellow-logo/60 to-yellow-logo p-12 text-3xl font-bold uppercase tracking-widest text-white shadow-md transition group-hover:scale-110"
                >
                    {{ tags.find((c) => photo.tags.includes(c.id)).group }}
                </h1>
            </div>
        </a>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { AppPhoto } from '../models/photo';

export default {
    setup() {
        const store = useStore();
        const tags = computed(() => store.state.tags);

        const photosForCollections = computed(() =>
            store.getters.photosForCollections()
        );

        const onClick = (photo) => {
            store.commit(
                'toggleFilter',
                photo.tags.find((t) => t.group === 'Collections').id
            );
        };
        return {
            photosForCollections,
            tags,
            onClick,
        };
    },
};
</script>
