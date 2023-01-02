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

        <side-menu
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
        </side-menu>

        <content> </content>

        <AppRightPanel :expanded="rightPanelActive" @content-click="onRightPanelClick" @hide="onHideClick"></AppRightPanel>

        <div v-if="mobileMenuActive" class="layout-mask modal-in"></div>
    </div>
</template>

<script setup lang="ts">
import AppTopBar from '../Blocks/AppTopbar.vue';
import AppRightPanel from '../Atoms/AppRightPanel.vue';
import Content from '../Atoms/Content/Content.vue';
import EventBus from '../../event-bus.js';
import MenuTopAppData from './Data/MenuTopAppData.json';
import BrandingData from './Data/BrandingData.json';
import MenuTopMegaData from './Data/MenuTopMegaData.json';
import MenuTopNotificationsData from './Data/MenuTopNotificationsData.json';
import MenuTopProfileData from './Data/MenuTopProfileData.json';
import MenuLeftProfileData from './Data/MenuLeftProfileData.json';
import MenuLeftData from './Data/MenuLeftData.json';
import SideMenu from '@components/Atoms/MainMenu/SideMenu.vue';
import { computed, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const mobileTopbarActive = ref(false);
const mobileMenuActive = ref(false);
const search = ref(false);
const searchClick = ref(false);
const searchActive = ref(false);
const menuMode = ref('static'); // static | horizontal | overlay | slim
const inlineMenuClick = ref(false);
const inlineMenuPosition = ref('bottom'); // top || bottom
const inlineMenuTopActive = ref(false);
const inlineMenuBottomActive = ref(false);
const overlayMenuActive = ref(false);
const rotateMenuButton = ref(false);
const topbarMenuActive = ref(false);
const activeTopbarItem = ref(null);
const isSlimOrHorItemClick = ref(false);

const rightPanelActive = ref(false);
const menuActive = ref(true);

const menuTopAppData = MenuTopAppData;
const brandingData = BrandingData;
const menuTopMegaData = MenuTopMegaData;
const menuTopNotificationsData = MenuTopNotificationsData;
const menuTopProfileData = MenuTopProfileData;
const menuLeftProfileData = MenuLeftProfileData;
const menuLeftData = MenuLeftData;

//TODO : these were undefined ???
const topbarItemClick = ref(false);
const rightPanelClick = ref(false);
const menuClick = ref(false);
const topbarRightClick = ref(false);

const router = useRouter();
const route = useRoute();

const isMobile = () => {
    return window.innerWidth <= 991;
};

const isStatic = () => {
    return menuMode.value === 'static';
};

watch(
    () => route,
    (newValue) => {
        menuActive.value = isStatic() && !isMobile();
    }
);

const onSearchToggle = () => {
    searchActive.value = !searchActive.value;
    searchClick.value = true;
};

const onSearchClick = () => {
    searchClick.value = true;
};

const onSearchHide = () => {
    searchActive.value = false;
    searchClick.value = false;
};

const isHorizontal = () => {
    return menuMode.value === 'horizontal';
};

const isSlim = () => {
    return menuMode.value === 'slim';
};

const isOverlay = () => {
    return menuMode.value === 'overlay';
};

const isDesktop = () => {
    return window.innerWidth > 991;
};

const hideOverlayMenu = () => {
    rotateMenuButton.value = false;
    overlayMenuActive.value = false;
    mobileMenuActive.value = false;
};

const onTopbarMenuButtonClick = (event: Event) => {
    topbarItemClick.value = true;
    topbarMenuActive.value = !topbarMenuActive.value;
    hideOverlayMenu();
    event.preventDefault();
};

const onTopbarItemClick = (event: { originalEvent: Event; item: any }) => {
    topbarItemClick.value = true;

    if (activeTopbarItem.value === event.item) activeTopbarItem.value = null;
    else activeTopbarItem.value = event.item;

    event.originalEvent.preventDefault();
};

const onTopbarMobileButtonClick = (event: Event) => {
    mobileTopbarActive.value = !mobileTopbarActive.value;
    event.preventDefault();
};

const onRightPanelButtonClick = (event: Event) => {
    rightPanelClick.value = true;
    rightPanelActive.value = !rightPanelActive.value;

    event.preventDefault();
};

const onRightPanelClick = () => {
    rightPanelClick.value = true;
};

const onHideClick = (expanded: any) => {
    rightPanelActive.value = expanded;
};

const onMenuClick = () => {
    menuClick.value = true;
};

const onRootMenuItemClick = (event: { originalEvent: Event; isSameIndex: boolean }) => {
    if (event.isSameIndex) {
        isSlimOrHorItemClick.value = false;
    } else {
        isSlimOrHorItemClick.value = true;
    }

    menuActive.value = !menuActive.value;
};

const onMenuItemClick = (event: any) => {
    if (!event.item.items) {
        isSlimOrHorItemClick.value = false;
        hideOverlayMenu();
        EventBus.emit('reset-active-index');
    }

    if (!event.item.items && (isHorizontal() || isSlim())) {
        menuActive.value = false;
    }
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

    inlineMenuClick.value = true;
};

const blockBodyScroll = () => {
    if (document.body.classList) {
        document.body.classList.add('blocked-scroll');
    } else {
        document.body.className += ' blocked-scroll';
    }
};

const unblockBodyScroll = () => {
    if (document.body.classList) {
        document.body.classList.remove('blocked-scroll');
    } else {
        document.body.className = document.body.className.replace(new RegExp(`(^|\\b)${'blocked-scroll'.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
    }
};

const layoutContainerClass = computed(() => {
    return [
        'layout-wrapper',
        'layout-menu',
        'layout-topbar-theme',
        {
            'layout-menu-static': menuMode.value === 'static',
            'layout-menu-overlay': menuMode.value === 'overlay',
            'layout-menu-overlay-active': overlayMenuActive.value,
            'layout-menu-slim': menuMode.value === 'slim',
            'layout-menu-horizontal': menuMode.value === 'horizontal',
            'layout-menu-active': menuActive.value,
            'layout-menu-mobile-active': mobileMenuActive.value,
            'layout-topbar-mobile-active': mobileTopbarActive.value,
            'layout-rightmenu-active': rightPanelActive.value,
            'p-input-filled': true, //this.$primevue.config.inputStyle === 'filled', // todo
            // 'p-ripple-disabled': true
        },
    ];
});

const onDocumentClick = () => {
    if (!searchClick.value && searchActive.value) {
        onSearchHide();
    }

    if (!topbarItemClick.value) {
        activeTopbarItem.value = null;
        topbarMenuActive.value = false;
    }

    if (!menuClick.value) {
        if (isHorizontal() || isSlim()) {
            menuActive.value = false;
            isSlimOrHorItemClick.value = false;
            EventBus.emit('reset-active-index');
        }

        if (isOverlay()) {
            menuActive.value = false;
        }

        hideOverlayMenu();
        unblockBodyScroll();
    }

    if (!rightPanelClick.value) {
        rightPanelActive.value = false;
    }

    if (!inlineMenuClick.value) {
        inlineMenuTopActive.value = false;
        inlineMenuBottomActive.value = false;
    }

    topbarItemClick.value = false;
    menuClick.value = false;
    rightPanelClick.value = false;
    searchClick.value = false;
    inlineMenuClick.value = false;
};

const onMenuButtonClick = (event: Event) => {
    menuClick.value = true;
    menuActive.value = !menuActive.value;
    topbarMenuActive.value = false;
    topbarRightClick.value = true;
    rotateMenuButton.value = !rotateMenuButton.value;
    topbarMenuActive.value = false;

    if (!isDesktop()) {
        mobileMenuActive.value = !mobileMenuActive.value;

        if (mobileMenuActive.value) {
            blockBodyScroll();
        } else {
            unblockBodyScroll();
        }
    }

    event.preventDefault();
};
</script>
