<template>
    <AppSubmenu
        class="layout-menu"
        :items="model"
        :menu-mode="menuMode"
        :menu-active="active"
        :is-slim-or-hor-item-click="isSlimOrHorItemClick"
        :root="true"
        :parent-menu-item-active="true"
        :mobile-menu-active="mobileMenuActive"
        @menuitem-click="onMenuItemClick"
        @root-menuitem-click="onRootMenuItemClick"
    />
</template>

<script>
import AppSubmenu from './AppSubmenu.vue';

export default {
    name: 'AppMenu',
    emits: ['menu-click', 'menuitem-click', 'root-menuitem-click'],
    props: {
        model: Array,
        menuMode: String,
        active: Boolean,
        mobileMenuActive: Boolean,
        isSlimOrHorItemClick: Boolean,
    },
    methods: {
        onMenuClick(event) {
            this.$emit('menu-click', event);
        },
        onMenuItemClick(event) {
            this.$emit('menuitem-click', event);
        },
        onRootMenuItemClick(event) {
            this.$emit('root-menuitem-click', event);
        },
    },
    components: {
        AppSubmenu,
    },
};
</script>

<style scoped></style>
