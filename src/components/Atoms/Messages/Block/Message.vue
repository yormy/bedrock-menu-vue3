<template>
    <message v-bind="$attrs">
        <slot></slot>
    </message>
</template>

<script setup lang="ts">
import Message from './MessageBlock.vue';
</script>
