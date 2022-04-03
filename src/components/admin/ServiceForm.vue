<template>
    <div
        v-show="loading"
        class="flex h-full w-full flex-col items-center justify-center space-y-10"
    >
        <h1 class="text-2xl font-bold text-gray-900">Chargement</h1>
        <img
            src="@/assets/logo-bleu.png"
            alt="logo"
            class="h-52 w-52 animate-spin"
        />
    </div>
    <div v-show="!loading">
        <div class="space-y-5">
            <div>
                <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Nom du service</label
                >
                <input
                    v-model="service.name"
                    type="text"
                    name="name"
                    id="name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Description du service</label
                >
                <div class="mt-1">
                    <textarea
                        v-model="service.description"
                        name="description"
                        id="description"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
        <div class="mt-8 flex space-x-3">
            <button
                type="button"
                :class="[
                    'bg-indigo-600',
                    'inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                ]"
                @click="submit"
            >
                Soumettre
            </button>
            <button
                type="button"
                class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click="reset"
            >
                Reinitialiser
            </button>
            <button
                type="button"
                class="bg-red inline-flex items-center rounded-md border border-red-300 px-3 py-2 text-sm font-medium leading-4 text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                @click="remove"
            >
                Supprimer
            </button>
        </div>
    </div>
</template>

<script>
import { AppTag, AppTagDataConverter } from '@/models/photo';
import { ref } from '@vue/reactivity';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    setDoc,
    updateDoc,
} from '@firebase/firestore';
import { MinusSmIcon, PencilIcon } from '@heroicons/vue/solid';
import { watch } from '@vue/runtime-core';
import AppService from '../../models/service';

export default {
    components: {
        MinusSmIcon,
        PencilIcon,
    },
    props: {
        id: {
            type: String,
            default: '',
        },
    },
    setup(props, { emit }) {
        const service = ref(new AppService());
        const db = getFirestore();
        const loading = ref(false);

        const submit = async () => {
            if (!service.value.name || !service.value.description) return;

            loading.value = true;

            if (service.id) {
                const docRef = doc(db, 'services', service.id).withConverter(
                    AppService
                );

                await updateDoc(docRef, { ...service.value }, { merge: true });
            } else {
                await addDoc(
                    collection(db, 'services').withConverter(AppService),
                    service.value
                );
            }

            emit('alert', 'Service sauvegardé!');

            reset();
        };

        const remove = async () => {
            if (!confirm('Voulez vous vraiment supprimer le service?')) return;

            loading.value = true;

            await deleteDoc(service.id);

            emit('alert', 'Service supprimé!');

            reset();
        };

        const reset = () => {
            service.value = new AppService();

            emit('reset');
        };

        return {
            service,
            submit,
            reset,
            loading,
            remove,
        };
    },
};
</script>
