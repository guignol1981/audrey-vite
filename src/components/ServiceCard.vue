<template>
    <lazy-photo-vue :src="photo.photoUrl" class="relative">
        <div class="absolute inset-0 grid place-content-center">
            <h2
                class="bg-gradient-to-tr from-sky-100/60 to-sky-300/60 p-12 text-3xl font-bold uppercase tracking-widest text-white shadow-md backdrop-blur-sm backdrop-sepia"
            >
                {{ service.name }}
            </h2>
        </div>
    </lazy-photo-vue>
    <div class="p-2">
        <p class="leading-7 text-gray-500">
            {{ service.description }}
        </p>

        <div class="mt-6 flex justify-between">
            <div>
                <span class="text-sm text-gray-600">À partir de </span>
                <span class="font-semibold text-gray-900"
                    >${{ service.bottomPrice }}</span
                >
            </div>
            <a
                href="#"
                class="text-blue-logo underline hover:underline-offset-1"
                >prendre rendez-vous</a
            >
        </div>
    </div>
</template>

<script>
import { AppPhoto } from '../models/photo';
import AppService from '../models/service';
import LazyPhotoVue from './LazyPhoto.vue';
export default {
    components: {
        LazyPhotoVue,
    },
    props: {
        service: {
            type: AppService,
            required: true,
        },
        photo: {
            type: AppPhoto,
            required: true,
        },
    },
    setup() {},
};
</script>
