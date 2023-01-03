<template>
    <div class="layout-footer flex align-items-center p-4 shadow-2">
        <img
            v-if="contentSettings.footer.logo.enabled"
            id="footer-logo"
            :src="logoSrc"
            alt="ultima-footer-logo"
        />
        <Button icon="pi pi-github fs-large" class="p-button-rounded p-button-text p-button-plain ml-2 mr-auto"></Button>
        <Button icon="pi pi-facebook fs-large" class="p-button-rounded p-button-text p-button-plain ml-2"></Button>
        <Button icon="pi pi-twitter fs-large" class="p-button-rounded p-button-text p-button-plain ml-2"></Button>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    contentSettings: {
        type: Object,
        default() {
            return {};
        },
        required: true,
    },

    darkMode: {
        type: Boolean,
        default: false,
    },
});


const logoSrc = computed(() => {
    if (props.darkMode) {
        return props.contentSettings.footer.logo.dark;
    }
    return props.contentSettings.footer.logo.light;
});

</script>
