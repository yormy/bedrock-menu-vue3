<template>
    <message-base v-bind="$attrs">
        <slot></slot>
    </message-base>
</template>

<script setup lang="ts">
import MessageBase from '../Base/MessageBase.vue';
</script>
