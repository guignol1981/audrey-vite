<template>
    <two-columns-template-vue class="relative">
        <template #list
            ><collection-list-vue @edit="editId = $event" />
        </template>
        <template #form
            ><collection-form-vue
                :id="editId"
                @alert="alertMsg = $event"
                @reset="editName = ''"
            />
        </template>
    </two-columns-template-vue>
    <alert-vue :msg="alertMsg" @close="alertMsg = ''" />
</template>

<script>
import { ref } from '@vue/reactivity';
import AlertVue from '../components/admin/Alert.vue';
import CollectionFormVue from '../components/admin/CollectionForm.vue';
import CollectionListVue from '../components/admin/CollectionList.vue';
import TwoColumnsTemplateVue from '../components/admin/TwoColumnsTemplate.vue';

export default {
    components: {
        TwoColumnsTemplateVue,
        AlertVue,
        CollectionListVue,
        CollectionFormVue,
    },
    setup() {
        const alertMsg = ref('');
        const editId = ref('');

        return { alertMsg, editId };
    },
};
</script>
