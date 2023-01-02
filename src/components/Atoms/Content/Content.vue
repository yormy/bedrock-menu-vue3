<template>
    <div class="layout-main">
        <AppBreadcrumb></AppBreadcrumb>

        <div class="layout-content">
<!--            <router-view />-->
        </div>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppBreadcrumb from './AppBreadcrumb.vue';
import AppFooter from './AppFooter.vue';

</script>
