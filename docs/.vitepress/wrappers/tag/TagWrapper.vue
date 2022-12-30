<template>
    <div>
        <YTag label="watch out" icon="y-icon icon icon-file-download" :type="type" @click="handleChange" />
    </div>
</template>

<script setup lang="ts">
import YTag from '../../../../src/components/Atoms/Tags/Tag/Tag.vue';
import {computed, ref} from "vue";

const open = ref(true);

const type = computed(() => {
    if (open.value) {
        return 'is-danger-open';
    }
    return 'is-danger-solid';
})

const handleChange = () => {
    open.value = !open.value;
};
</script>
