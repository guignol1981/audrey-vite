<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <nav
        class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
    >
        <div class="hidden sm:block">
            <p class="text-sm text-gray-700">
                Affichage de
                {{ ' ' }}
                <span class="font-medium">{{ low }}</span>
                {{ ' ' }}
                à
                {{ ' ' }}
                <span class="font-medium">{{ top }}</span>
                {{ ' ' }}
                sur
                {{ ' ' }}
                <span class="font-medium">{{ total }}</span>
                {{ ' ' }}
                résultats
            </p>
        </div>
        <div class="flex-1 flex justify-between sm:justify-end">
            <a
                v-if="low > 1"
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                @click.prevent="$emit('previous')"
            >
                Previous
            </a>
            <a
                v-if="top < total"
                href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                @click.prevent="$emit('next')"
            >
                Next
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        low: { type: Number },
        top: { type: Number },
        total: { type: Number },
    },
    setup() {},
};
</script>
