<template>
    <div v-if="message" :class="styleClass" role="alert">
        <YPurifiedHtml :value="message"></YPurifiedHtml>
    </div>
</template>

<script setup lang="ts">
/**
 * Show an alertbox
 *
 * Cases:
 *  - error messages, success messages
 */
import { computed } from 'vue';
import YPurifiedHtml from '../../Display/PurifiedHtml.vue';

const props = defineProps({
    /**
     * The message of the alert, displayed in the header
     */
    message: {
        type: String,
        default: '',
        required: false,
    },

    /**
     * The styling o the modal is-info , is-success, is-warning, is-danger
     */
    styling: {
        type: String,
        default: '',
    },

    /**
     * The styling ?
     */
    alertBorder: {
        type: String,
        default: '',
    },
});

const styleClass = computed<string>(() => {
    return `${props.alertBorder} ${props.styling}`;
});
</script>
