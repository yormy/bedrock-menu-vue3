<template>
    <SideMenuSub
        class="layout-menu"
        :items="items"
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

<script setup lang="ts">
import { PropType } from 'vue';
import SideMenuSub from './SideMenuSub.vue';

const props = defineProps({
    items: {
        type: Array as PropType<Array<LeftMenuItem>>,
        default() {
            return [];
        },
    },

    menuMode: {
        type: String,
        default: '',
    },

    active: {
        type: Boolean,
        default: false,
    },

    mobileMenuActive: {
        type: Boolean,
        default: false,
    },

    isSlimOrHorItemClick: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{
    (eventName: 'menu-click', event: Event): void;
    (eventName: 'menuitem-click', event: Event): void;
    (eventName: 'root-menuitem-click', event: Event): void;
}>();

const onMenuClick = (event: Event) => {
    emit('menu-click', event);
};

const onMenuItemClick = (data: { originalEvent: Event; item: any }) => {
    emit('menuitem-click', data.originalEvent);
};

const onRootMenuItemClick = (data: { originalEvent: Event; isSameIndex: boolean }) => {
    emit('root-menuitem-click', data.originalEvent);
};
</script>
