<template>
    <div class="layout-footer flex align-items-center p-4 shadow-2">
        <img
            id="footer-logo"
            :src="'layout/images/footer-' + (layoutMode === 'light' ? 'ultima' : 'ultima-dark') + '.svg'"
            alt="ultima-footer-logo"
        />
        <Button
            icon="pi pi-github fs-large"
            class="p-button-rounded p-button-text p-button-plain ml-2 mr-auto"
        ></Button>
        <Button
            icon="pi pi-facebook fs-large"
            class="p-button-rounded p-button-text p-button-plain ml-2"
        ></Button>
        <Button
            icon="pi pi-twitter fs-large"
            class="p-button-rounded p-button-text p-button-plain ml-2"
        ></Button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    layoutMode: {
        type: String,
        default: 'light',
    },
});
</script>
