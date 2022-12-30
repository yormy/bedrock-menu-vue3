<template>
    <message-inline-base v-bind="$attrs">
        <slot></slot>
    </message-inline-base>
</template>

<script setup lang="ts">
import MessageInlineBase from '../Base/MessageInlineBase.vue';
</script>
