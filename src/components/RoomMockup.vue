<template>
    <div class="relative">
        <img
            class="aspect-[2/3] w-full object-cover"
            src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80"
            alt=""
        />
        <div
            :class="[
                'absolute top-0 left-0 h-full',
                photo.orientation === 'paysage'
                    ? 'translate-x-[10%] translate-y-[10%]'
                    : 'translate-x-[30%] translate-y-[10%]',
            ]"
        >
            <img
                :src="photo.photoUrl"
                :class="[
                    'frame aspect-auto',
                    photo.orientation === 'paysage' ? 'w-1/2' : 'h-1/3',
                    preview ? 'object-bottom' : '',
                ]"
                alt=""
            />
        </div>
    </div>
</template>

<script>
import { AppPhoto } from '../models/photo';
export default {
    props: {
        photo: {
            type: AppPhoto,
            require: true,
        },
        preview: {
            type: Boolean,
            default: false,
        },
    },
    setup() {},
};
</script>

<style>
.frame {
    box-shadow: rgb(50 50 93 / 25%) -6px -1px 4px 0px,
        rgb(0 0 0 / 30%) 0px 8px 16px -8px;
}
</style>
