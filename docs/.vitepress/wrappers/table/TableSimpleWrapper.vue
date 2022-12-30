<template>
    <y-table-simple :rows="rows" :headings="headings" :footers="headings"></y-table-simple>
</template>

<script setup lang="ts">
import YTableSimple from '../../../../src/components/Atoms/Tables/Simple/TableSimple.vue';

const headings = [
    {
        name:'home',
    },
    {
        name:'icon',
    },
    {
        name:'url',
    },
    {
        name:'description',
    },
];
const rows = [
    {
        label:'home',
        description: 'mouseover description',
        url:'https://xxxx',
        icon: 'y-icon icon icon-home'
    },
    {
        label:'test',
        description: 'mouseover test',
        url:'https://xxxx',
    },
    {
        label:'sdddfds',
        description: 'mouseover test',
        url:'https://xxxx',
        icon: 'y-icon icon icon-download'
    },
]
</script>
