<template>
    <div :class="layoutContainerClass" @click="onDocumentClick" @keydown="onDocumentClick">
        <AppTopBar
            :search-active="searchActive"
            :active-topbar-item="activeTopbarItem"
            :horizontal="menuMode === 'horizontal'"
            :mobile-topbar-active="mobileTopbarActive"
            :topbar-menu-active="topbarMenuActive"
            @menubutton-click="onMenuButtonClick"
            @rightpanel-button-click="onRightPanelButtonClick"
            @search-click="onSearchClick"
            @search-hide="onSearchHide"
            @search-toggle="onSearchToggle"
            @topbar-menubutton-click="onTopbarMenuButtonClick"
            @topbar-mobileactive="onTopbarMobileButtonClick"
            @topbaritem-click="onTopbarItemClick"
            :menu-top-app-data="menuTopAppData"
            :branding-data="brandingData"
            :menu-top-mega-data="menuTopMegaData"
            :menu-top-notifications-data="menuTopNotificationsData"
            :menu-top-profile-data="menuTopProfileData"
        ></AppTopBar>

        <app-main-menu
            :inline-menu-position="inlineMenuPosition"
            :inline-menu-bottom-active="inlineMenuBottomActive"
            :menu-mode="menuMode"
            :inline-menu-top-active="inlineMenuTopActive"
            :menu-active="menuActive"
            :mobile-menu-active="mobileMenuActive"
            :is-slim-or-hor-item-click="isSlimOrHorItemClick"
            @menuitem-click="onMenuItemClick"
            @root-menuitem-click="onRootMenuItemClick"
            @menu-click="onMenuClick"
            :menu-left-profile-data="menuLeftProfileData"
            :menu-left-data="menuLeftData"
        >
        </app-main-menu>

        <content> </content>

        <AppRightPanel :expanded="rightPanelActive" @content-click="onRightPanelClick" @hide="onHideClick"></AppRightPanel>

        <div v-if="mobileMenuActive" class="layout-mask modal-in"></div>
    </div>
</template>

<script>
import AppTopBar from '../Blocks/AppTopbar.vue';
import AppRightPanel from '../Atoms/AppRightPanel.vue';
import Content from '../Atoms/Content/Content.vue'
import EventBus from '../../event-bus.js';
import AppMainMenu from "../Atoms/MainMenu/AppMainMenu.vue";
import MenuTopAppData from './Data/MenuTopAppData.json'
import BrandingData from './Data/BrandingData.json'
import MenuTopMegaData from './Data/MenuTopMegaData.json'
import MenuTopNotificationsData from './Data/MenuTopNotificationsData.json'
import MenuTopProfileData from './Data/MenuTopProfileData.json'
import MenuLeftProfileData from './Data/MenuLeftProfileData.json'
import MenuLeftData from './Data/MenuLeftData.json'

export default {
    data() {
        return {
            mobileTopbarActive: false,
            mobileMenuActive: false,
            search: false,
            searchClick: false,
            searchActive: false,
            menuMode: 'static', // static | horizontal | overlay | slim
            inlineMenuClick: false,
            inlineMenuPosition: 'bottom', // top || bottom
            inlineMenuTopActive: false,
            inlineMenuBottomActive: false,
            overlayMenuActive: false,
            rotateMenuButton: false,
            topbarMenuActive: false,
            activeTopbarItem: null,
            isSlimOrHorItemClick: false,

            rightPanelActive: false,
            menuActive: true,
            menuTopAppData: MenuTopAppData,
            brandingData: BrandingData,
            menuTopMegaData: MenuTopMegaData,
            menuTopNotificationsData: MenuTopNotificationsData,
            menuTopProfileData: MenuTopProfileData,
            menuLeftProfileData: MenuLeftProfileData,
            menuLeftData: MenuLeftData,
        };
    },
    watch: {
        $route() {
            this.menuActive = this.isStatic() && !this.isMobile();
            // this.$toast.removeAllGroups();
        },
    },
    methods: {
        onDocumentClick() {
            if (!this.searchClick && this.searchActive) {
                this.onSearchHide();
            }

            if (!this.topbarItemClick) {
                this.activeTopbarItem = null;
                this.topbarMenuActive = false;
            }

            if (!this.menuClick) {
                if (this.isHorizontal() || this.isSlim()) {
                    this.menuActive = false;
                    this.isSlimOrHorItemClick = false;
                    EventBus.emit('reset-active-index');
                }

                if (this.isOverlay()) {
                    this.menuActive = false;
                }

                this.hideOverlayMenu();
                this.unblockBodyScroll();
            }

            if (!this.rightPanelClick) {
                this.rightPanelActive = false;
            }

            if (!this.inlineMenuClick) {
                this.inlineMenuTopActive = false;
                this.inlineMenuBottomActive = false;
            }

            this.topbarItemClick = false;
            this.menuClick = false;
            this.rightPanelClick = false;
            this.searchClick = false;
            this.inlineMenuClick = false;
        },
        onSearchToggle() {
            this.searchActive = !this.searchActive;
            this.searchClick = true;
        },
        onSearchClick() {
            this.searchClick = true;
        },
        onSearchHide() {
            this.searchActive = false;
            this.searchClick = false;
        },
        isHorizontal() {
            return this.menuMode === 'horizontal';
        },
        isSlim() {
            return this.menuMode === 'slim';
        },
        isOverlay() {
            return this.menuMode === 'overlay';
        },
        isStatic() {
            return this.menuMode === 'static';
        },
        isDesktop() {
            return window.innerWidth > 991;
        },
        isMobile() {
            return window.innerWidth <= 991;
        },
        hideOverlayMenu() {
            this.rotateMenuButton = false;
            this.overlayMenuActive = false;
            this.mobileMenuActive = false;
        },
        onMenuButtonClick(event) {
            this.menuClick = true;
            this.menuActive = !this.menuActive;
            this.topbarMenuActive = false;
            this.topbarRightClick = true;
            this.rotateMenuButton = !this.rotateMenuButton;
            this.topbarMenuActive = false;

            if (!this.isDesktop()) {
                this.mobileMenuActive = !this.mobileMenuActive;

                if (this.mobileMenuActive) {
                    this.blockBodyScroll();
                } else {
                    this.unblockBodyScroll();
                }
            }

            event.preventDefault();
        },
        onTopbarMenuButtonClick(event) {
            this.topbarItemClick = true;
            this.topbarMenuActive = !this.topbarMenuActive;
            this.hideOverlayMenu();
            event.preventDefault();
        },
        onTopbarItemClick(event) {
            this.topbarItemClick = true;

            if (this.activeTopbarItem === event.item) this.activeTopbarItem = null;
            else this.activeTopbarItem = event.item;

            event.originalEvent.preventDefault();
        },
        onTopbarMobileButtonClick(event) {
            this.mobileTopbarActive = !this.mobileTopbarActive;
            event.preventDefault();
        },
        onRightPanelButtonClick(event) {
            this.rightPanelClick = true;
            this.rightPanelActive = !this.rightPanelActive;

            event.preventDefault();
        },
        onRightPanelClick() {
            this.rightPanelClick = true;
        },
        onHideClick(expanded) {
            this.rightPanelActive = expanded;
        },
        onMenuClick() {
            this.menuClick = true;
        },
        onRootMenuItemClick(event) {
            if (event.isSameIndex) {
                this.isSlimOrHorItemClick = false;
            } else {
                this.isSlimOrHorItemClick = true;
            }

            this.menuActive = !this.menuActive;
        },
        onMenuItemClick(event) {
            if (!event.item.items) {
                this.isSlimOrHorItemClick = false;
                this.hideOverlayMenu();
                EventBus.emit('reset-active-index');
            }

            if (!event.item.items && (this.isHorizontal() || this.isSlim())) {
                this.menuActive = false;
            }
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

        blockBodyScroll() {
            if (document.body.classList) {
                document.body.classList.add('blocked-scroll');
            } else {
                document.body.className += ' blocked-scroll';
            }
        },
        unblockBodyScroll() {
            if (document.body.classList) {
                document.body.classList.remove('blocked-scroll');
            } else {
                document.body.className = document.body.className.replace(
                    new RegExp(`(^|\\b)${'blocked-scroll'.split(' ').join('|')}(\\b|$)`, 'gi'),
                    ' '
                );
            }
        },
    },
    computed: {
        layoutContainerClass() {
            return [
                'layout-wrapper',
                'layout-menu',
                'layout-topbar-theme',
                {
                    'layout-menu-static': this.menuMode === 'static',
                    'layout-menu-overlay': this.menuMode === 'overlay',
                    'layout-menu-overlay-active': this.overlayMenuActive,
                    'layout-menu-slim': this.menuMode === 'slim',
                    'layout-menu-horizontal': this.menuMode === 'horizontal',
                    'layout-menu-active': this.menuActive,
                    'layout-menu-mobile-active': this.mobileMenuActive,
                    'layout-topbar-mobile-active': this.mobileTopbarActive,
                    'layout-rightmenu-active': this.rightPanelActive,
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    // 'p-ripple-disabled': true
                },
            ];
        },
    },
    components: {
        AppTopBar,
        AppRightPanel,
        Content,
        AppMainMenu
    },
};
</script>
