<template>
    <div class="relative rounded-md shadow-sm">
        <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
            <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
            type="text"
            name="search"
            id="search"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Rechercher..."
            @change="$emit('search', $event.target.value)"
        />
    </div>
</template>

<script>
import { SearchIcon } from '@heroicons/vue/solid';

export default {
    components: {
        SearchIcon,
    },
};
</script>
