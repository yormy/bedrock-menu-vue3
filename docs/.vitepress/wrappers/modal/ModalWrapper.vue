<template>
    <div>
        <y-button-primary label="Show" @click="handleShow"></y-button-primary>
        <y-modal header="This is the header" v-model:visible="showHelpModal" v-bind="$attrs">
            HTML content of the <strong>modal</strong> <i>goes</i> here
        </y-modal>
    </div>
</template>

<script setup lang="ts">
import YButtonPrimary from '../../../../src/components/Atoms/Buttons/Primary/ButtonPrimary.vue';
import {ref} from "vue";

const showHelpModal = ref(false);

const handleShow = () => {
    showHelpModal.value = true;
};
</script>
