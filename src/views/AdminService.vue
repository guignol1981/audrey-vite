<template>
    <two-columns-template-vue class="relative">
        <template #list><service-list-vue @edit="editId = $event" /> </template>
        <template #form
            ><service-form-vue
                :id="editId"
                @alert="alertMsg = $event"
                @reset="editId = ''"
            />
        </template>
    </two-columns-template-vue>
    <alert-vue :msg="alertMsg" @close="alertMsg = ''" />
</template>

<script>
import { ref } from '@vue/reactivity';
import AlertVue from '../components/admin/Alert.vue';
import ServiceFormVue from '../components/admin/ServiceForm.vue';
import ServiceListVue from '../components/admin/ServiceList.vue';
import TwoColumnsTemplateVue from '../components/admin/TwoColumnsTemplate.vue';
export default {
    components: {
        TwoColumnsTemplateVue,
        AlertVue,
        ServiceListVue,
        ServiceFormVue,
    },
    setup() {
        const editId = ref('');

        return {
            editId,
        };
    },
};
</script>
