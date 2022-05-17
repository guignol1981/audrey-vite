<template>
    <div class="relative">
        <div class="py-10 tracking-wide">
            <div class="px-6 pb-6">
                <h3 class="text-2xl font-extralight text-gray-600">
                    Le Kamouraska...
                </h3>
                <p class="mt-5 text-lg leading-10 text-gray-700">
                    Le Kamouraska est ma région d’adoption depuis plus de 15
                    ans! Je suis installée à Saint-André-de-Kamouraska, j’offre
                    mes services comme photographe dans le Bas-Saint-Laurent et
                    j’ai un atelier-boutique dans lequel j’expose mon travail
                    photo au niveau des paysages.
                </p>
            </div>
            <div class="bg-white p-6">
                <h4 class="font-semibold text-gray-800">
                    Les
                    <span class="font-bold text-gray-900">4</span>
                    volets importants dans ma démarche artistique :
                </h4>
                <ul class="text-ju ml-4 mt-5 space-y-4 leading-8 text-gray-800">
                    <li class="flex items-center space-x-4">
                        <SpiraleIconVue class="h-5 w-5 shrink-0 stroke-black" />
                        <span>
                            M’inspirer avec la lumière naturelle et créer avec
                            simplicité.
                        </span>
                    </li>
                    <li class="flex items-center space-x-4">
                        <SpiraleIconVue class="h-5 w-5 shrink-0 stroke-black" />

                        <span>
                            Vous mettre en valeur dans nos décors grandeur
                            nature&nbsp;et&nbsp;vivre des moments uniques
                            ensemble.
                        </span>
                    </li>
                    <li class="flex items-center space-x-4">
                        <SpiraleIconVue class="h-5 w-5 shrink-0 stroke-black" />

                        <span>
                            Vous partager nos paysages, notre fleuve et les
                            émotions qui en ressortent.
                        </span>
                    </li>
                    <li class="flex items-center space-x-4">
                        <SpiraleIconVue class="h-5 w-5 shrink-0 stroke-black" />

                        <span>
                            Faire partie des artistes qui valorisent à échelle
                            humaine le Bas-Saint-Laurent, ses gens, ses
                            entreprises et ses paysages!
                        </span>
                    </li>
                </ul>
            </div>
            <div class="mt-6 px-6">
                <p class="inline-flex text-xl font-light italic text-gray-500">
                    Au plaisir de travailler avec vous!
                </p>
            </div>
        </div>
        <div class="absolute inset-0">
            <div
                class="top-12 left-12 h-full rounded-full bg-blue-logo/10 blur-3xl"
            ></div>
        </div>
    </div>
</template>

<script>
import SpiraleIconVue from './icons/SpiraleIcon.vue';
export default {
    components: {
        SpiraleIconVue,
    },
    setup() {},
};
</script>

<style scoped>
.paper {
    box-shadow: 4px 4px 4px 0px #80808082;
}
</style>
