<template>
    :Selected car = {{ selectedCar }}
    <br>
    <y-radio name="car" v-model='selectedCar' :options='options'></y-radio>

</template>

<script setup lang="ts">
import {ref} from "vue";

const selectedCar = ref('');

const options = [
    {
        value : "ren",
        mouseOver: 'mouseover description',
        moreHelpTitle: 'Title',
        moreHelpContent: 'more help here',
        labelOn: 'Ren <span class="y-icon icon icon-like solid"></span>',
        labelOff: 'Ren <span class="y-icon icon icon-dislike"></span>',
    },
    {
        value : "bm",
        labelOn: 'BMW <span class="y-icon icon icon-like solid"></span>',
        labelOff: 'BMW <span class="y-icon icon icon-dislike"></span>',
    },
    {
        value : "tl",
        labelOn: 'Tesla <span class="y-icon icon icon-like is-danger solid"></span>',
        labelOff: 'Tesla <span class="y-icon icon icon-dislike"></span>',
    },
]
</script>
