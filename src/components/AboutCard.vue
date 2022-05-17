<template>
    <div class="py-10 px-6 tracking-wide">
        <h3 class="text-2xl font-extralight">Le Kamouraska...</h3>
        <p class="mt-5 leading-10">
            Le Kamouraska est ma région d’adoption depuis plus de 15 ans! Je
            suis installée à Saint-André-de-Kamouraska, j’offre mes services
            comme photographe dans le Bas-Saint-Laurent et j’ai un
            atelier-boutique dans lequel j’expose mon travail photo au niveau
            des paysages.
        </p>
        <h4 class="mt-8 font-semibold text-gray-800">
            Les <span class="font-semibold text-gray-900">4</span> volets
            importants dans ma démarche artistique :
        </h4>
        <ul class="text-ju ml-4 mt-5 space-y-5 leading-7 text-gray-700">
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
                    nature&nbsp;et&nbsp;vivre des moments uniques ensemble.
                </span>
            </li>
            <li class="flex items-center space-x-4">
                <SpiraleIconVue class="h-5 w-5 shrink-0 stroke-black" />

                <span>
                    Vous partager nos paysages, notre fleuve et les émotions qui
                    en ressortent.
                </span>
            </li>
            <li class="flex items-center space-x-4">
                <SpiraleIconVue class="h-5 w-5 shrink-0 stroke-black" />

                <span>
                    Faire partie des artistes qui valorisent à échelle humaine
                    le Bas-Saint-Laurent, ses gens, ses entreprises et ses
                    paysages!
                </span>
            </li>
        </ul>
        <div class="mt-12">
            <p class="inline-flex text-xl font-light">
                Au plaisir de travailler avec vous!
            </p>
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
