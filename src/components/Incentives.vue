'
<template>
    <div class="bg-gray-50">
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
                        <img
                            class="mx-auto h-24 w-28"
                            :src="incentive.image"
                            alt=""
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
export default {
    setup() {
        const incentives = [
            {
                title: 'Fait au Québec',
                description: `En plus d'encourager une artiste du Québec, mes impressions sont effectués localement par des gens d'ici.`,
                image: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
            },
            {
                title: 'Épargnez sur la livraison',
                description: `Livraison gratuite pour toute commande de 200,00$+`,
                image: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
            },
            {
                title: 'Satisfaction garantie',
                description: `Si vous n'êtes pas entièrement satisait(e) de votre achat, vous aurez la possibilité d'échanger pour un autre produit de même valeur.`,
                image: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
            },
        ];

        return { incentives };
    },
};
</script>
