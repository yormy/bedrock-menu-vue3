<template>
    <prime-message-base :severity="severity" v-bind="$attrs">
        <slot></slot>
    </prime-message-base>
</template>

<script setup lang="ts">
import PrimeMessageBase from 'primevue/inlinemessage';
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'info',
        validator(value: string) {
            return ['info', 'success', 'warning', 'danger'].includes(value);
        },
    },
});

const severity: any = computed(() => {
    if (props.type === 'danger') {
        return 'error';
    }

    if (props.type === 'warning') {
        return 'warn';
    }

    return props.type;
});
</script>
