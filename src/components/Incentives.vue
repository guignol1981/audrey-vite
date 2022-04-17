'
<template>
    <div class="bg-gray">
        <h2 class="sr-only">Faites affaire en confiance</h2>
        <div class="mx-auto max-w-7xl py-16 sm:px-2 lg:px-4">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-3 lg:gap-y-16"
            >
                <div
                    v-for="incentive in incentives"
                    :key="incentive.title"
                    class="flex-col items-center space-y-5 sm:flex"
                >
                    <div class="mx-auto">
                        <component
                            :is="incentive.icon"
                            class="h-12 w-12 stroke-black"
                        />
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                        <h3 class="text-sm font-medium text-gray-900">
                            {{ incentive.title }}
                        </h3>
                        <p class="mt-2 text-sm text-gray-500">
                            {{ incentive.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoinIconVue from './icons/CoinIcon.vue';
import QuebecIconVue from './icons/QuebecIcon.vue';
import WarrantyVue from './icons/Warranty.vue';
export default {
    components: {
        QuebecIconVue,
        CoinIconVue,
        WarrantyVue,
    },
    setup() {
        const incentives = [
            {
                title: 'Fait au Québec',
                description: `En plus d'encourager une artiste du Québec, mes impressions sont effectués localement par des gens d'ici.`,
                icon: QuebecIconVue,
            },
            {
                title: 'Épargnez sur la livraison',
                description: `Livraison gratuite pour toute commande de 200,00$+`,
                icon: CoinIconVue,
            },
            {
                title: 'Satisfaction garantie',
                description: `Si vous n'êtes pas entièrement satisait(e) de votre achat, vous aurez la possibilité d'échanger pour un autre produit de même valeur.`,
                icon: WarrantyVue,
            },
        ];

        return { incentives };
    },
};
</script>
