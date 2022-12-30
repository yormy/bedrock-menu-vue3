<template>
    <y-appearing-bullets
        :messages="messages"
        :start-ms="500"
    >
    </y-appearing-bullets>
</template>

<script setup lang="ts">
import YAppearingBullets from '../../../../src/components/Atoms/Display/AppearingBullets/AppearingBullets.vue';

const messages = [
    {
        text: 'aaaaaa',
        loading: false,
        completed: false,
        processingMs: 1000,
    },
    {
        text: 'bbbb',
        loading: false,
        completed: false,
        processingMs: 1000,
    },
    {
        text: 'ccccc',
        loading: false,
        completed: false,
        processingMs: 1000,
    },
];

</script>
