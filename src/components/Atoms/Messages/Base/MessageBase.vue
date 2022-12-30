<template>
    <prime-message-base :severity="severity" :close-icon="closeIcon" :icon="mainIcon" v-bind="$attrs">
        <slot></slot>
    </prime-message-base>
</template>

<script setup lang="ts">
import PrimeMessageBase from 'primevue/message';
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

const mainIcon = computed(() => {
    const iconize = 'y-icon icon ';

    if (props.type === 'info') {
        return `${iconize}icon-info`;
    }

    if (props.type === 'success') {
        return `${iconize}icon-success`;
    }

    if (props.type === 'warning') {
        return `${iconize}icon-warning`;
    }

    if (props.type === 'danger') {
        return `${iconize}icon-danger`;
    }

    return `${iconize}icon-info`;
});

const closeIcon = 'y-icon icon icon-close';
</script>
