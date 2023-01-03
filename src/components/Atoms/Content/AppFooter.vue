<template>
    <div class="flex justify-content-between layout-footer px-4 py-2 shadow-2">
        <div class="flex align-items-center">
            <div class="flex flex-row align-items-center">
                <img v-if="contentSettings.footer.logo.enabled" id="footer-logo" :src="logoSrc" alt="ultima-footer-logo" />
                <div v-if="contentSettings.footer.logo.text">{{ contentSettings.footer.logo.text }}</div>
            </div>
        </div>

        <div class="flex align-items-center">
            <div v-for="(item, index) in contentSettings.footer.right" :key="index" class="px-1">
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

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
