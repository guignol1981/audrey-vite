<template>
    <two-columns-template-vue class="relative">
        <template #list><media-list-vue @edit="editId = $event" /> </template>
        <template #form
            ><media-form-vue
                :id="editId"
                @notif="alertMsg = $event"
                @reset="editId = ''"
        /></template>
    </two-columns-template-vue>
    <alert-vue :msg="alertMsg" @close="alertMsg = ''" />
</template>
<script>
import { ref } from '@vue/reactivity';
import TwoColumnsTemplateVue from '../components/admin/TwoColumnsTemplate.vue';
import AlertVue from '../components/admin/Alert.vue';
import MediaFormVue from '../components/admin/MediaForm.vue';
import MediaListVue from '../components/admin/MediaList.vue';

export default {
    components: {
        TwoColumnsTemplateVue,
        AlertVue,
        MediaFormVue,
        MediaListVue,
    },
    setup() {
        const editId = ref('');
        const alertMsg = ref('');

        return {
            editId,
            alertMsg,
        };
    },
};
</script>
