<template>
    <div class="layout-topbar shadow-4">
        <topbar-left
            :dark-mode="dark"
            v-bind="$attrs"
            @menubutton-click="onMenubuttonClick"
            @topbar-mobileactive="onTopbarMobileActive"
            :branding-data="brandingData"
        >
        </topbar-left>

        <div class="layout-topbar-right" :class="{ 'layout-topbar-mobile-active': mobileTopbarActive }">
            <topbar-mega :menu-top-mega-data="menuTopMegaData"> </topbar-mega>

            <div class="layout-topbar-actions-right">
                <ul class="layout-topbar-items">
                    <topbar-search :search-active="searchActive" @search-toggle="onSearchToggle" @search-click="onSearchClick"> </topbar-search>

                    <topbar-notifications
                        :active-topbar-item="activeTopbarItem"
                        @topbaritem-click="onTopbarNotificationsClick"
                        :menu-top-notifications-data="menuTopNotificationsData"
                    ></topbar-notifications>

                    <topbar-apps
                        :active-topbar-item="activeTopbarItem"
                        @topbaritem-click="onTopbarItemClick"
                        :menu-top-app-data="menuTopAppData"
                    ></topbar-apps>

                    <topbar-profile
                        :active-topbar-item="activeTopbarItem"
                        @topbaritem-click="onTopbarItemClick"
                        :menu-top-profile-data="menuTopProfileData"
                    ></topbar-profile>

                    <li class="layout-topbar-item">
                        <a
                            v-ripple
                            class="layout-topbar-action rounded-circle p-ripple"
                            @click="onDarkSwitchClickHandler"
                            @keydown="onDarkSwitchClickHandler"
                        >
                            <i>XX</i>
                        </a>
                    </li>

                    <topbar-right-panel @rightpanel-button-click="(event) => $emit('rightpanel-button-click', event)"> </topbar-right-panel>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TopbarLeft from '../Atoms/TopMenu/TopbarLeft.vue';
import TopbarSearch from '../Atoms/TopMenu/TopbarSearch.vue';
import TopbarNotifications from '../Atoms/TopMenu/TopbarNotifications.vue';
import TopbarApps from '../Atoms/TopMenu/TopbarApps.vue';
import TopbarProfile from '../Atoms/TopMenu/TopbarProfile.vue';
import TopbarRightPanel from '../Atoms/TopMenu/TopbarRightPanel.vue';
import TopbarMega from '../Atoms/TopMenu/TopbarMega.vue';

const props = defineProps({
    horizontal: {
        type: Boolean,
        default: false,
    },

    topbarMenuActive: {
        type: Boolean,
        default: false,
    },

    mobileTopbarActive: {
        type: Boolean,
        default: false,
    },

    searchActive: {
        type: Boolean,
        default: false,
    },

    activeTopbarItem: {
        type: String,
        default: null,
    },

    menuTopAppData: {
        type: Object,
        default() {
            return {};
        },
    },

    brandingData: {
        type: Object,
        default() {
            return {};
        },
    },

    menuTopMegaData: {
        type: Array as any,
        default() {
            return [];
        },
    },

    menuTopNotificationsData: {
        type: Object,
        default() {
            return {};
        },
    },

    menuTopProfileData: {
        type: Object,
        default() {
            return {};
        },
    },
});

const dark = ref(false);
const searchText = ref('');

const onDarkSwitchClickHandler = () => {
    dark.value = !dark.value;
};

const emit = defineEmits<{
    (eventName: 'menubutton-click', event: Event): void;
    (eventName: 'topbar-menubutton-click', event: Event): void;
    (eventName: 'search-toggle', event: Event): void;
    (eventName: 'topbaritem-click', data: { originalEvent: Event; item: any }): void;
    (eventName: 'menubutton-click', event: Event): void;
    (eventName: 'topbar-mobileactive', event: Event): void;
    (eventName: 'search-toggle', event: Event): void;
    (eventName: 'search-click', event: Event): void;
    (eventName: 'rightpanel-button-click', event: Event): void;
}>();

const onSearchToggle = (event: Event) => {
    emit('search-toggle', event);
};

const onSearchClick = (event: Event) => {
    emit('search-click', event);
};

const onMenubuttonClick = (event: Event) => {
    emit('menubutton-click', event);
};

const onTopbarMobileActive = (event: Event) => {
    emit('topbar-mobileactive', event);
};

const onMenuButtonClick = (event: Event) => {
    emit('menubutton-click', event);
};

const onTopbarMenuButtonClick = (event: Event) => {
    emit('topbar-menubutton-click', event);
};

const onTopbarNotificationsClick = (data: { originalEvent: Event; item: any }) => {
    // emit('topbaritem-click', original, 'notifications')"
    console.log('dddd');
};

const onTopbarItemClick = (data: { originalEvent: Event; item: any }) => {
    // if (type === 'search') {
    //     emit('search-toggle', originalEvent);
    // }
    emit('topbaritem-click', data);
};
</script>
