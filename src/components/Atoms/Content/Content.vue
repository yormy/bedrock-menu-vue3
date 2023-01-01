<template>
    <div class="layout-main">
<!--        <AppBreadcrumb></AppBreadcrumb>-->

        <div class="layout-content">
<!--            <router-view />-->
        </div>

        <AppFooter />
    </div>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb.vue';
import AppFooter from './AppFooter.vue';

export default {
    components: {
        AppBreadcrumb,
        AppFooter
    }
}

</script>
