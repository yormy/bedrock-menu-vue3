<template>
    <div class="layout-topbar shadow-4">
        <topbar-left
            :dark-mode="dark"
            v-bind="$attrs"
            @menubutton-click="$emit('menubutton-click')"
            @topbar-mobileactive="$emit('topbar-mobileactive')"
            :branding-data="brandingData"
        >
        </topbar-left>

        <div class="layout-topbar-right" :class="{ 'layout-topbar-mobile-active': mobileTopbarActive }">
            <topbar-mega
                :mega-menu-data="megaMenuData">
            </topbar-mega>

            <div class="layout-topbar-actions-right">
                <ul class="layout-topbar-items">

                    <topbar-search
                        :search-active="searchActive"
                        @search-toggle="$emit('search-toggle')"
                        @search-click="$emit('search-click')"
                        >
                    </topbar-search>

                    <topbar-notifications
                        :active-topbar-item="activeTopbarItem"
                        @topbaritem-click="(original, item) => $emit('topbaritem-click', original, 'notifications')"
                        :menu-top-notifications-data="menuTopNotificationsData"
                    ></topbar-notifications>

                    <topbar-apps
                        :active-topbar-item="activeTopbarItem"
                        @topbaritem-click="(original, item) => $emit('topbaritem-click', original, item)"
                        :menu-top-app-data="menuTopAppData"
                    ></topbar-apps>

                    <topbar-profile
                        :active-topbar-item="activeTopbarItem"
                        @topbaritem-click="(original, item) => $emit('topbaritem-click', original, item)"
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

                    <topbar-right-panel
                        @rightpanel-button-click="(event) => $emit('rightpanel-button-click', event)"
                        >
                    </topbar-right-panel>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import TopbarLeft from '../Atoms/TopMenu/TopbarLeft.vue';
import TopbarSearch from '../Atoms/TopMenu/TopbarSearch.vue';
import TopbarNotifications from '../Atoms/TopMenu/TopbarNotifications.vue';
import TopbarApps from '../Atoms/TopMenu/TopbarApps.vue';
import TopbarProfile from '../Atoms/TopMenu/TopbarProfile.vue';
import TopbarRightPanel from "../Atoms/TopMenu/TopbarRightPanel.vue";
import TopbarMega from "../Atoms/TopMenu/TopbarMega.vue";
import MenuTopProfileData from "@components/Layouts/MenuTopProfileData.json";


export default {
    inheritAttrs: false,

    components : {
        TopbarRightPanel,
        TopbarSearch,
        TopbarLeft,
        TopbarNotifications,
        TopbarApps,
        TopbarProfile,
        TopbarMega
    },

    emits: [
        'menubutton-click',
        'topbar-menubutton-click',
        'topbaritem-click',
        'rightpanel-button-click',
        'topbar-mobileactive',
        'search-click',
        'search-toggle',
    ],
    props: {
        horizontal: {
            type: Boolean,
            default: false,
        },
        topbarMenuActive: {
            type: Boolean,
            default: false,
        },
        activeTopbarItem: String,
        mobileTopbarActive: Boolean,

        searchActive: {
            type : Boolean,
            default: false,
        },

        menuTopAppData: Object,
        brandingData: Object,
        megaMenuData: Object,
        menuTopNotificationsData: Object,
        menuTopProfileData: Object,
    },
    data() {
        return {
            dark: false,
            searchText: '',
        };
    },

    methods: {
        onDarkSwitchClickHandler() {
            this.dark = !this.dark;
        },




        onMenuButtonClick(event) {
            this.$emit('menubutton-click', event);
        },
        onTopbarMenuButtonClick(event) {
            this.$emit('topbar-menubutton-click', event);
        },
        onTopbarItemClick(event, item) {
            if (item === 'search') {
                this.$emit('search-toggle', event);
            }

            this.$emit('topbaritem-click', { originalEvent: event, item });
        },
    },
};
</script>
