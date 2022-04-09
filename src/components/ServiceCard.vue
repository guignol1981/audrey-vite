<template>
    <div>
        <lazy-photo-vue :src="photo.photoUrl" class="relative -z-10">
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
                        >{{ service.bottomPrice }}$</span
                    >
                    <span class="ml-[1px] text-sm text-gray-500">+txs</span>
                </div>
                <a
                    href="#"
                    class="text-blue-logo underline hover:underline-offset-1"
                    >contactez-moi</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import AppService from '../models/service';
import LazyPhotoVue from './LazyPhoto.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
    components: {
        LazyPhotoVue,
    },
    props: {
        serviceId: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();
        const service = store.state.services.find(
            (s) => s.id === props.serviceId
        );
        const photo = store.state.photos.find((p) => p.id === service.photoId);

        return { service, photo };
    },
};
</script>
