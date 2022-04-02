<template>
    <two-columns-template-vue class="relative">
        <template #search-field
            ><search-field-vue @search="onSearch" />
            <div class="mt-4 divide-y divide-gray-200">
                <div
                    v-for="(visibility, i) in visibilities"
                    :key="i"
                    class="relative flex items-start py-4"
                >
                    <div class="min-w-0 flex-1 text-sm">
                        <label
                            :for="visibility"
                            class="select-none font-medium text-gray-700"
                            >{{ visibility }}</label
                        >
                    </div>
                    <div class="ml-3 flex h-5 items-center">
                        <input
                            :id="visibility"
                            :name="visibility"
                            v-model="visibilityFilter[visibility]"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div>
        </template>
        <template #list
            ><photo-list-vue
                :search="search"
                :visibilityFilter="visibilityFilter"
                @edit="editId = $event"
            />
        </template>
        <template #form>
            <photo-form-vue
                :id="editId"
                @reset="editId = ''"
                @alert="alertMsg = $event"
        /></template>
    </two-columns-template-vue>
    <alert-vue :msg="alertMsg" @close="alertMsg = ''" />
</template>

<script>
import { PhotoVisibilities as visibilities } from '@/models/photo';
import { ref } from '@vue/reactivity';
import AlertVue from '../components/admin/Alert.vue';
import TwoColumnsTemplateVue from '../components/admin/TwoColumnsTemplate.vue';
import PhotoListVue from '../components/admin/PhotoList.vue';
import SearchFieldVue from '../components/admin/SearchField.vue';
import PhotoFormVue from '../components/admin/PhotoForm.vue';

export default {
    components: {
        TwoColumnsTemplateVue,
        PhotoListVue,
        SearchFieldVue,
        PhotoFormVue,
        AlertVue,
    },
    setup() {
        const editId = ref('');
        const alertMsg = ref('');
        const visibilityFilter = ref({
            portfolio: true,
            boutique: true,
            service: false,
        });
        const search = ref('');

        const onSearch = (value) => {
            search.value = value;
        };

        return {
            visibilities,
            editId,
            alertMsg,
            onSearch,
            search,
            visibilityFilter,
        };
    },
};
</script>
