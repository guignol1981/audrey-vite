<template>
    <div class="paper rotate-1 bg-gray-200 px-8 py-12 text-gray-800">
        <div class="mt-10 space-y-5">
            <p class="text-base leading-7 text-gray-900">
                Le Kamouraska est ma région d’adoption depuis plus de 15 ans! Je
                suis installée à Saint-André-de-Kamouraska, j’offre mes services
                comme photographe dans le Bas-Saint-Laurent et j’ai un
                atelier-boutique dans lequel j’expose mon travail photo au
                niveau des paysages.
            </p>
            <div class="">
                <p class="text-xl font-medium">
                    Les 4 volets importants dans ma démarche artistique
                </p>
                <ul class="space-y-4 px-2 py-4 text-left text-gray-700">
                    <li class="flex gap-1">
                        <SpiraleIconVue
                            class="h-5 w-5 basis-10 stroke-blue-logo"
                        />
                        <p>
                            M’inspirer avec la lumière naturelle et créer avec
                            simplicité
                        </p>
                    </li>
                    <li class="flex gap-1">
                        <SpiraleIconVue
                            class="h-5 w-5 basis-10 stroke-blue-logo"
                        />
                        <span>
                            Vous partager nos paysages, notre fleuve et les
                            émotions qui en ressortent
                        </span>
                    </li>
                    <li class="flex gap-1">
                        <SpiraleIconVue
                            class="h-5 w-5 basis-10 stroke-blue-logo"
                        />
                        <span>
                            Vous mettre en valeur dans nos décors grandeur
                            nature&nbsp;et&nbsp;vivre des moments uniques
                            ensemble
                        </span>
                    </li>
                    <li class="flex gap-1">
                        <SpiraleIconVue
                            class="h-5 w-5 basis-10 stroke-blue-logo"
                        />
                        <span>
                            Faire partie des artistes qui valorisent à échelle
                            humaine le Bas-Saint-Laurent, ses gens, ses
                            entreprises et ses paysages!
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
                class="mx-auto h-20 w-32 bg-yellow-300/10 backdrop-blur-sm"
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
