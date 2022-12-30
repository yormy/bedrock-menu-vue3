<template>
    :Selected car = {{ selectedCar }}
    <br>
    <y-radio-block name="car" v-model='selectedCar' :options='options'></y-radio-block>

</template>

<script setup lang="ts">
import YBreadcrumb from '../../../../src/components/Atoms/Misc/Breadcrumb/Breadcrumb.vue';
import YBreadcrumbBoxed from '../../../../src/components/Atoms/Misc/Breadcrumb/BreadcrumbBoxed.vue';
import {ref} from "vue";

const selectedCar = ref('');

const options = [
    {
        label: 'Renault',
        value : "ren",
        mouseOver: 'mouseover description',
        moreHelpTitle: 'Title',
        moreHelpContent: 'more help here',
        labelOn: 'Ren <span class="y-icon icon icon-like solid"></span>',
        labelOff: 'Ren <span class="y-icon icon icon-dislike"></span>',
    },
    {
        label: 'Bmw',
        value : "bm",
        labelOn: 'BMW <span class="y-icon icon icon-like solid"></span>',
        labelOff: 'BMW <span class="y-icon icon icon-dislike"></span>',
    },
    {
        label: 'Tesla',
        value : "tl",
        labelOn: 'Tesla <span class="y-icon icon icon-like is-danger solid"></span>',
        labelOff: 'Tesla <span class="y-icon icon icon-dislike"></span>',
    },
]
</script>
