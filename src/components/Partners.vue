<template>
    <div
        class="relative border-2 bg-blue-logo py-20 px-12 text-justify text-xl leading-8 text-[hsl(186deg_69%_70%)]"
    >
        <div class="overflow-x-hidden">
            <span class="scroll text-3xl">
                Tourisme Kamouraska ǀ Tourisme Bas-Saint-Laurent ǀ Le Québec
                Maritime ǀ Tourisme Rivière-du-Loup ǀ MRC de Rivière-du-Loup ǀ
                Municipalité de Saint-André-de-Kamouraska ǀ COSMOSS ǀ Musée du
                Bas-Saint-Laurent ǀ Auberge le 112 ǀ Camping de Rivière-Ouelle ǀ
                Camping de l’Île Verte ǀ Pourvoirie des Trois-Lacs ǀ Vignoble
                Amouraska ǀ Atelier VCuir inc ǀ Atelier Vitalis ǀ Le Tenon et la
                Mortaise ǀ ITAQ La Pocatière ǀ Municipalité de l’Île Verte ǀ
                Parc côtier Kiskotuk ǀ Maison culturelle Armand-Vaillancourt ǀ
                École Michaud ǀ Premier Tech ǀ Municipalité de
                Notre-Dame-du-Portage ǀ Première Nation Wolastoqiyik Wahsipekuk
                ǀ La Belle Antiquaire ǀ Le Dep du village ǀ Courtiers
                immobiliers ǀ Cotillon céramique ǀ Marie-Eve Blanchard autrice ǀ
                Marie-Pierre Bérubé autrice ǀ Sports Experts ǀ Magazine
                Continuité ǀ Berger
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
