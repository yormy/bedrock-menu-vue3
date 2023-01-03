<template>
    <div class="layout-main">
        <AppBreadcrumb v-if="contentSettings.breadcrumb"></AppBreadcrumb>

        <div class="layout-content">
            <router-view />
        </div>

        <AppFooter :content-settings="contentSettings" :dark-mode="darkMode" />
    </div>
</template>

<script setup lang="ts">
import AppBreadcrumb from './AppBreadcrumb.vue';
import AppFooter from './AppFooter.vue';

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
</script>
