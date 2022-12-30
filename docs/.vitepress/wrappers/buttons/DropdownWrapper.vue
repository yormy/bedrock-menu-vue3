<template>
    <div>
        <y-button-primary :dropdown="true" icon="y-icon icon icon-users" label="Primary" :model="items"/>
    </div>
</template>

<script setup lang="ts">
import YButtonPrimary from '../../../../src/components/Atoms/Buttons/Primary/ButtonPrimary.vue';

const items = [
    {
        label: 'Download',
        icon: 'y-icon icon icon-file-download',
        // command: () => {
        //     this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
        // }
    },
    {
        label: 'Delete',
        icon: 'y-icon icon icon-delete',
        // command: () => {
        //     window.location.href = 'https://vuejs.org/'
        // }
    },
];

</script>
