<template>
    <div class="mx-auto max-w-7xl px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2">
            <div class="p-12">
                <div class="relative -rotate-3 bg-gray-200 p-4 pb-24 shadow-md">
                    <img src="@/assets/audrey.jpg" alt="" />
                    <div class="absolute inset-x-0 top-0 -translate-y-1/2">
                        <div
                            class="mx-auto h-20 w-32 bg-red-300/30 backdrop-blur-sm"
                        ></div>
                    </div>
                </div>
            </div>
            <div class="p-12">
                <div class="relative rotate-1 bg-white p-4 pb-24 shadow-md">
                    <div class="mt-10 space-y-5">
                        <p class="text-base leading-7 text-gray-600">
                            Le Kamouraska est ma région d’adoption depuis plus
                            de 15 ans! Je suis installée à
                            Saint-André-de-Kamouraska, j’offre mes services
                            comme photographe dans le Bas-Saint-Laurent et j’ai
                            un atelier-boutique dans lequel j’expose mon travail
                            photo au niveau des paysages.
                        </p>
                        <div class="">
                            <p class="font-medium">
                                Les 4 volets importants dans ma démarche
                                artistique :
                            </p>
                            <ul
                                class="space-y-4 px-2 py-4 text-left text-gray-700"
                            >
                                <li class="flex gap-1">
                                    <SpiraleIconVue
                                        class="h-5 w-5 basis-10 stroke-blue-logo"
                                    />
                                    <p>
                                        M’inspirer avec la lumière naturelle et
                                        créer avec simplicité
                                    </p>
                                </li>
                                <li class="flex gap-1">
                                    <SpiraleIconVue
                                        class="h-5 w-5 basis-10 stroke-blue-logo"
                                    />
                                    <span>
                                        Vous partager nos paysages, notre fleuve
                                        et les émotions qui en ressortent
                                    </span>
                                </li>
                                <li class="flex gap-1">
                                    <SpiraleIconVue
                                        class="h-5 w-5 basis-10 stroke-blue-logo"
                                    />
                                    <span>
                                        Vous mettre en valeur dans nos décors
                                        grandeur nature&nbsp;et&nbsp;vivre des
                                        moments uniques ensemble
                                    </span>
                                </li>
                                <li class="flex gap-1">
                                    <SpiraleIconVue
                                        class="h-5 w-5 basis-10 stroke-blue-logo"
                                    />
                                    <span>
                                        Faire partie des artistes qui valorisent
                                        à échelle humaine le Bas-Saint-Laurent,
                                        ses gens, ses entreprises et ses
                                        paysages!
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="flex items-end justify-end">
                            <p>Au plaisir de travailler avec vous!</p>
                        </div>
                    </div>

                    <div class="absolute inset-x-0 top-0 -translate-y-1/2">
                        <div
                            class="mx-auto h-20 w-32 bg-yellow-300/20 backdrop-blur-sm"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <partners-vue />
    </div>
</template>

<script>
import SpiraleIconVue from '../components/icons/SpiraleIcon.vue';
import PartnersVue from '../components/Partners.vue';

export default {
    components: {
        SpiraleIconVue,
        PartnersVue,
    },
    setup() {},
};
</script>
