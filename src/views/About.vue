<template>
    <div class="mx-auto px-32">
        <div class="relative grid grid-cols-1 lg:grid-cols-2">
            <div class="p-24">
                <div class="group relative aspect-square">
                    <div
                        class="absolute inset-0 rotate-3 bg-red-400 shadow-md transition group-hover:rotate-0"
                    ></div>
                    <div
                        class="absolute inset-0 -rotate-2 bg-blue-200 shadow-md transition group-hover:rotate-1"
                    ></div>
                    <div
                        class="relative inset-0 bg-gray-200 p-4 shadow-md transition group-hover:rotate-2"
                    >
                        <img src="@/assets/audrey.jpg" alt="" />
                        <p
                            class="flex w-full justify-center py-12 text-3xl text-gray-600"
                        >
                            Audrey Mainguy
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative p-24">
                <div class="group relative">
                    <div
                        class="absolute inset-0 rotate-3 bg-yellow-400 shadow-md transition group-hover:rotate-0"
                    ></div>
                    <div
                        class="absolute inset-0 -rotate-2 bg-green-200 shadow-md transition group-hover:rotate-1"
                    ></div>
                    <div
                        class="relative inset-0 bg-cyan-200 p-4 shadow-md transition group-hover:rotate-2"
                    >
                        <div class="space-y-5 py-10 px-6">
                            <p
                                class="text-base font-semibold leading-7 text-cyan-800"
                            >
                                Le Kamouraska est ma région d’adoption depuis
                                plus de 15 ans! Je suis installée à
                                Saint-André-de-Kamouraska, j’offre mes services
                                comme photographe dans le Bas-Saint-Laurent et
                                j’ai un atelier-boutique dans lequel j’expose
                                mon travail photo au niveau des paysages.
                            </p>
                            <div class="">
                                <p class="text-xl font-medium text-cyan-900">
                                    Les 4 volets importants dans ma démarche
                                    artistique
                                </p>
                                <ul class="space-y-4 py-4 text-cyan-800">
                                    <li class="flex gap-1">
                                        <SpiraleIconVue
                                            class="h-5 w-5 basis-10 stroke-blue-logo"
                                        />
                                        <span>
                                            M’inspirer avec la lumière naturelle
                                            et créer avec simplicité
                                        </span>
                                    </li>
                                    <li class="flex gap-1">
                                        <SpiraleIconVue
                                            class="h-5 w-5 basis-10 stroke-blue-logo"
                                        />
                                        <span>
                                            Vous partager nos paysages, notre
                                            fleuve et les émotions qui en
                                            ressortent
                                        </span>
                                    </li>
                                    <li class="flex gap-1">
                                        <SpiraleIconVue
                                            class="h-5 w-5 basis-10 stroke-blue-logo"
                                        />
                                        <span>
                                            Vous mettre en valeur dans nos
                                            décors grandeur
                                            nature&nbsp;et&nbsp;vivre des
                                            moments uniques ensemble
                                        </span>
                                    </li>
                                    <li class="flex gap-1">
                                        <SpiraleIconVue
                                            class="h-5 w-5 basis-10 stroke-blue-logo"
                                        />
                                        <span>
                                            Faire partie des artistes qui
                                            valorisent à échelle humaine le
                                            Bas-Saint-Laurent, ses gens, ses
                                            entreprises et ses paysages!
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex items-end justify-end">
                                <p class="underline underline-offset-1">
                                    Au plaisir de travailler avec vous!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <partners-vue class="mt-24" />
        <media-vue class="mt-24" />
    </div>
</template>

<script>
import AboutCardVue from '../components/AboutCard.vue';
import SpiraleIconVue from '../components/icons/SpiraleIcon.vue';
import MediaVue from '../components/Media.vue';
import PartnersVue from '../components/Partners.vue';
import PolaroidVue from '../components/Polaroid.vue';

export default {
    components: {
        SpiraleIconVue,
        PartnersVue,
        PolaroidVue,
        AboutCardVue,
        MediaVue,
    },
    setup() {},
};
</script>
