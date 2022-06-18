<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <TransitionRoot as="template" :show="open">
        <Dialog
            as="div"
            class="fixed inset-0 z-30 overflow-y-auto"
            @close="$emit('close')"
        >
            <div
                class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block lg:p-0"
            >
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay
                        class="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-[1px] transition-opacity"
                    />
                </TransitionChild>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span
                    class="hidden sm:inline-block sm:h-screen sm:align-middle"
                    aria-hidden="true"
                    >&#8203;</span
                >
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        class="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle md:max-w-5xl"
                    >
                        <div class="mt-3 text-center sm:mt-5">
                            <div class="mt-2">
                                <slot />
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6">
                            <button
                                type="button"
                                :class="`inline-flex w-full justify-center rounded-md border border-blue-logo bg-white px-4 py-2 text-base font-medium text-blue-logo shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-logo focus:ring-offset-2 sm:text-sm`"
                                @click="$emit('close')"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { computed } from 'vue';
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';
import { CheckIcon } from '@heroicons/vue/outline';

export default {
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        CheckIcon,
    },
    props: {
        propOpen: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'green-logo',
        },
    },
    setup(props) {
        const open = computed(() => props.propOpen);

        return {
            open,
        };
    },
};
</script>
