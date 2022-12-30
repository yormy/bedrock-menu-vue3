<template>
    <div>
        wrap={{defaultValue}}=endwrap
        <y-input-code
            :fields=6
            type="number"
            fieldId="9978"
            fieldName="code"
            v-model="defaultValue"
            v-bind="$attrs"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import YInputCode from '../../../../src/components/Atoms/Inputs/InputCode/InputCode.vue';

const defaultValue = ref('123456');

</script>
