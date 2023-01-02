<template>
    <div class="menu-wrapper">
        <div class="layout-menu-container" @click="onMenuClick" @keydown="onMenuClick">
            <AppInlineMenu
                v-if="inlineMenuPosition === 'top'"
                v-model:active="inlineMenuTopActive"
                inline-menu-key="top"
                :menu-mode="menuMode"
                @change-inlinemenu="onActivateInlineMenu"
                :menu-left-profile-data="menuLeftProfileData"
            ></AppInlineMenu>

            <AppMenu
                :model="menuLeftData"
                :menu-mode="menuMode"
                :active="menuActive"
                :mobile-menu-active="mobileMenuActive"
                :is-slim-or-hor-item-click="isSlimOrHorItemClick"
                @menuitem-click="onMenuItemClick"
                @root-menuitem-click="onRootMenuItemClick"
            ></AppMenu>

            <AppInlineMenu
                v-if="inlineMenuPosition === 'bottom'"
                v-model:active="inlineMenuBottomActive"
                inline-menu-key="bottom"
                :menu-mode="menuMode"
                @change-inlinemenu="onActivateInlineMenu"
                :menu-left-profile-data="menuLeftProfileData"
            ></AppInlineMenu>
        </div>
    </div>
</template>

<script>
import EventBus from "../../../event-bus";
import AppInlineMenu from './AppInlineMenu.vue';
import AppMenu from './AppMenu.vue';

export default {
    components : {
        AppInlineMenu,
        AppMenu
    },

    props :{
        inlineMenuPosition: String,
        menuMode: String,
        mobileMenuActive: Boolean,

        menuLeftProfileData: Object,
        menuLeftData: Object,
    },

    data() {
        return {
            inlineMenuTopActive: false,
            inlineMenuBottomActive: false,
            isSlimOrHorItemClick: false,
            menuActive: false,
        }
    },

    methods: {
        onMenuClick() {
            this.$emit('menu-click');
        },

        onActivateInlineMenu(e, key) {
            if (key === 'top') {
                if (this.inlineMenuBottomActive) {
                    this.inlineMenuBottomActive = false;
                }

                this.inlineMenuTopActive = !this.inlineMenuTopActive;
            }

            if (key === 'bottom') {
                if (this.inlineMenuTopActive) {
                    this.inlineMenuTopActive = false;
                }

                this.inlineMenuBottomActive = !this.inlineMenuBottomActive;
            }

            this.inlineMenuClick = true;
        },

        onMenuItemClick(event) {
            this.$emit('menuitem-click', event);
        },

        onRootMenuItemClick(event) {
            if (event.isSameIndex) {
                this.isSlimOrHorItemClick = false;
            } else {
                this.isSlimOrHorItemClick = true;
            }

            this.$emit('root-menuitem-click',  event);

            // this.menuActive = !this.menuActive;
        },
    },



}
</script>

