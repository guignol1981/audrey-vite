<template>
    <div
        class="relative border-2 bg-blue-logo py-20 px-2 text-justify text-xl leading-8 text-[hsl(186deg_69%_70%)]"
    >
        <div class="overflow-x-hidden">
            <span class="scroll text-3xl">
                Tourisme Kamouraska
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Tourisme Bas-Saint-Laurent
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Le Québec Maritime
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Tourisme Rivière-du-Loup
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                MRC de Rivière-du-Loup
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Municipalité de Saint-André-de-Kamouraska
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                COSMOSS
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Musée du Bas-Saint-Laurent
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Auberge le 112
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Camping de Rivière-Ouelle
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Camping de l’Île Verte
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Pourvoirie des Trois-Lacs
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Vignoble Amouraska
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Atelier VCuir inc
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Atelier Vitalis
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Le Tenon et la Mortaise
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                ITAQ La Pocatière
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Municipalité de l’Île Verte
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Parc côtier Kiskotuk
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Maison culturelle Armand-Vaillancourt
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                École Michaud
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Premier Tech
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Municipalité de Notre-Dame-du-Portage
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Première Nation Wolastoqiyik Wahsipekuk
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                La Belle Antiquaire
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Le Dep du village
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Courtiers immobiliers
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Cotillon céramique
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Marie-Eve Blanchard autrice
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Marie-Pierre Bérubé autrice
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Sports Experts
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Magazine Continuité
                <span
                    class="inline-block h-5 w-5 rounded-full bg-[hsl(186deg_69%_90%)]"
                ></span>
                Berger
            </span>
        </div>
        <div
            class="absolute -top-8 -rotate-1 border bg-white px-4 py-2 text-2xl font-semibold text-gray-800 shadow-md lg:-left-8"
        >
            <p class="mt-4">Partenariats et clients au fil des années</p>
        </div>
    </div>
</template>

<script>
export default {
    setup() {},
};
</script>

<style scoped>
.scroll {
    white-space: nowrap;
    display: block;
    transform: translateX(100%);
    animation: move 30s linear infinite;
}
@keyframes move {
    to {
        transform: translateX(-100%);
    }
}
</style>
