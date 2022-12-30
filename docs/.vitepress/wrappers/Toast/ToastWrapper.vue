<template>
    <div>
        <y-button-primary label="Show" @click.stop="handleShow" ></y-button-primary>
        <y-toast v-bind="$attrs" :trigger="trigger"></y-toast>
    </div>
</template>

<script setup lang="ts">
import YToast from '../../../../src/components/Atoms/Toasts/Toast/Toast.vue';
import YButtonPrimary from '../../../../src/components/Atoms/Buttons/Primary/ButtonPrimary.vue';
import {ref} from "vue";

const trigger = ref(true);

const handleShow = () => {
    trigger.value = !trigger.value;
};
</script>
