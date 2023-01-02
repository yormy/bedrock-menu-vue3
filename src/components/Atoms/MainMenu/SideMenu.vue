<template>
    <div class="menu-wrapper">
        <div class="layout-menu-container" @click="onMenuClick" @keydown="onMenuClick">
            <SideMenuInline
                v-if="inlineMenuPosition === 'top'"
                v-model:active="inlineMenuTopActive"
                inline-menu-key="top"
                :menu-mode="menuMode"
                @change-inlinemenu="onActivateInlineMenu"
                :menu-left-profile-data="menuLeftProfileData"
            ></SideMenuInline>

            <SideMenuRoot
                :model="menuLeftData"
                :menu-mode="menuMode"
                :active="menuActive"
                :mobile-menu-active="mobileMenuActive"
                :is-slim-or-hor-item-click="isSlimOrHorItemClick"
                @menuitem-click="onMenuItemClick"
                @root-menuitem-click="onRootMenuItemClick"
            ></SideMenuRoot>

            <SideMenuInline
                v-if="inlineMenuPosition === 'bottom'"
                v-model:active="inlineMenuBottomActive"
                inline-menu-key="bottom"
                :menu-mode="menuMode"
                @change-inlinemenu="onActivateInlineMenu"
                :menu-left-profile-data="menuLeftProfileData"
            ></SideMenuInline>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SideMenuInline from './SideMenuInline.vue';
import SideMenuRoot from './SideMenuRoot.vue';

const props = defineProps({
    inlineMenuPosition: {
        type: String,
        default: '',
    },

    menuMode: {
        type: String,
        default: '',
    },

    mobileMenuActive: {
        type: Boolean,
        default: false,
    },

    menuLeftProfileData: {
        type: Object,
        default() {
            return {};
        },
    },

    menuLeftData: {
        type: Object,
        default() {
            return {};
        },
    },
});

const inlineMenuTopActive = ref(false);
const inlineMenuBottomActive = ref(false);
const isSlimOrHorItemClick = ref(false);
const menuActive = ref(false);

const emit = defineEmits<{
    (eventName: 'menu-click'): void;
    (eventName: 'menuitem-click', event: Event): void;
    (eventName: 'root-menuitem-click', event: Event): void;
}>();

const onMenuClick = () => {
    emit('menu-click');
};

const onActivateInlineMenu = (e: Event, key: any) => {
    if (key === 'top') {
        if (inlineMenuBottomActive.value) {
            inlineMenuBottomActive.value = false;
        }

        inlineMenuTopActive.value = !inlineMenuTopActive.value;
    }

    if (key === 'bottom') {
        if (inlineMenuTopActive.value) {
            inlineMenuTopActive.value = false;
        }

        inlineMenuBottomActive.value = !inlineMenuBottomActive.value;
    }

    // inlineMenuClick.value = true;
};

const onMenuItemClick = (event: Event) => {
    emit('menuitem-click', event);
};

const onRootMenuItemClick = (event: any) => {
    if (event.isSameIndex) {
        isSlimOrHorItemClick.value = false;
    } else {
        isSlimOrHorItemClick.value = true;
    }

    emit('root-menuitem-click', event);

    // this.menuActive = !this.menuActive;
};
</script>
