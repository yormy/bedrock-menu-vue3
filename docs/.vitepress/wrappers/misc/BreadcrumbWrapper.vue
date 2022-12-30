<template>
    <h1> Normal </h1>
    <y-breadcrumb :items='items'></y-breadcrumb>
    <h1> Boxed </h1>
    <y-breadcrumb-boxed :items='items'></y-breadcrumb-boxed>
</template>

<script setup lang="ts">
import YBreadcrumb from '../../../../src/components/Atoms/Misc/Breadcrumb/Breadcrumb.vue';
import YBreadcrumbBoxed from '../../../../src/components/Atoms/Misc/Breadcrumb/BreadcrumbBoxed.vue';

const items = [
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
