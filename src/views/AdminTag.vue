<template>
    <two-columns-template-vue class="relative">
        <template #list><tag-list-vue @edit="editName = $event" /> </template>
        <template #form
            ><tag-form-vue
                :groupName="editName"
                @alert="alertMsg = $event"
                @reset="editName = ''"
            />
        </template>
    </two-columns-template-vue>
    <alert-vue :msg="alertMsg" @close="alertMsg = ''" />
</template>
<script>
import { ref } from '@vue/reactivity';
import TwoColumnsTemplateVue from '../components/admin/TwoColumnsTemplate.vue';
import AlertVue from '../components/admin/Alert.vue';
import TagFormVue from '../components/admin/TagForm.vue';
import TagListVue from '../components/admin/TagList.vue';

export default {
    components: {
        TwoColumnsTemplateVue,
        AlertVue,
        TagListVue,
        TagFormVue,
    },
    setup() {
        const editName = ref('');
        const alertMsg = ref('');

        return {
            editName,
            alertMsg,
        };
    },
};
</script>
