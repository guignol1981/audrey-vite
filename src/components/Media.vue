<template>
    <div>
        <h1 class="text-2xl font-semibold">Projets & Média</h1>
        <ul role="list" class="mt-12 grid grid-cols-2 gap-8">
            <li v-for="media in medias" :key="media.id">
                <div class="h-full rounded-md border shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1650134637977-53f71ca92ee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        class="aspect-[3/2] w-full object-cover"
                    />
                    <div class="flex flex-col justify-between p-8">
                        <div>
                            <h1 class="text-gray-600">{{ media.title }}</h1>
                            <p class="mt-4 leading-7">
                                {{ media.description }}
                            </p>
                        </div>
                        <div class="mt-4 flex justify-between">
                            <span class="text-sm text-gray-500">{{
                                getDate(media.date)
                            }}</span>
                            <a
                                v-if="media.url"
                                :href="media.url"
                                target="_blank"
                                class="text-blue-logo underline underline-offset-1"
                                >article</a
                            >
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import LazyPhotoVue from './LazyPhoto.vue';

export default {
    components: {
        LazyPhotoVue,
    },
    setup() {
        const store = useStore();
        const medias = store.state.medias;
        const getDate = (date) => {
            return Intl.DateTimeFormat('fr', {
                year: 'numeric',
                month: 'long',
            }).format(new Date(date));
        };
        return { medias, getDate };
    },
};
</script>
