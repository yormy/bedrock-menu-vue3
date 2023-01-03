<template>
    <!--    <LoginUser v-if="$route.path === '/login-user'" />-->
    <!--    <LoginAdmin v-else-if="$route.path === '/login-admin'" />-->
    <!--    <Error v-else-if="$route.path === '/error'" />-->
    <!--    <Access v-else-if="$route.path === '/access'" />-->
    <!--    <NotFound v-else-if="$route.path === '/notfound'" />-->
    <!--    <Landing v-else-if="$route.path === '/landing'" />-->
    <!--    <ContactUs v-else-if="$route.path === '/contactus'" />-->
    <AppMenu
        :menu-top-app-data="menuTopAppData"
        :branding-data="BrandingData"
        :menu-top-mega-data="MenuTopMegaData"
        :menu-top-notifications-data="MenuTopNotificationsData"
        :menu-top-profile-data="MenuTopProfileData"
        :menu-left-profile-data="MenuLeftProfileData"
        :menu-left-data="MenuLeftData"
        :menu-settings="menuSettings"
    />
</template>

<script setup lang="ts">
import AppMenu from '../src/components/Layouts/AppMenu.vue';
import MenuTopAppData from './data/menu/MenuTopAppData.json';
import BrandingData from './data/menu/BrandingData.json';
import MenuTopMegaData from './data/menu/MenuTopMegaData.json';
import MenuTopNotificationsData from './data/menu/MenuTopNotificationsData.json';
import MenuTopProfileData from './data/menu/MenuTopProfileData.json';
import MenuLeftProfileData from './data/menu/MenuLeftProfileData.json';
import MenuLeftData from './data/menu/MenuLeftData.json';
import MenuSettings from './data/menu/Settings.json';

const menuTopAppData = MenuTopAppData;
const brandingData = BrandingData;
const menuTopMegaData = MenuTopMegaData;
const menuTopNotificationsData = MenuTopNotificationsData;
const menuTopProfileData = MenuTopProfileData;
const menuLeftProfileData = MenuLeftProfileData;
const menuLeftData = MenuLeftData;
const menuSettings = MenuSettings;

// import Error from './pages/Error.vue';
// import Access from './pages/Access.vue';
// import LoginUser from './pages/LoginUser.vue';
// import LoginAdmin from './pages/LoginAdmin.vue';
// import NotFound from './pages/NotFound.vue';
// import Landing from './pages/Landing.vue';
// import ContactUs from './pages/ContactUs.vue';
</script>
