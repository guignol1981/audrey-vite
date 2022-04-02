<template>
    <div class="h-full w-full grid grid-cols-2 gap-2 divide-x-2 relative">
        <div class="p-12 overflow-y-scroll">
            <h2 class="text-2xl font-semibold text-gray-900">Liste</h2>
            <slot name="search-field" />
            <slot name="list" />
        </div>
        <div class="p-12 overflow-y-scroll">
            <h2 class="text-2xl font-semibold text-gray-900">Formulaire</h2>
            <div class="pt-8">
                <slot name="form" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {},
};
</script>
