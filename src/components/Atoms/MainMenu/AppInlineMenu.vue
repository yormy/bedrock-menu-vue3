<template>
    <div class="layout-inline-menu" :class="{ 'layout-inline-menu-active': active }">
        <a
            class="layout-inline-menu-action flex flex-row align-items-center"
            :class="menuMode === 'horizontal' ? 'p-3 lg:p-1 py-3' : 'p-3'"
            :style="{ 'min-width': menuMode === 'horizontal' ? '165px' : 0 }"
            @click="onClick($event)"
            @keydown="onClick($event)"
        >
            <img :src="inlineProfile.button.image.image" :alt="inlineProfile.button.image.title" :style="inlineProfile.button.image.style" />
            <span class="flex flex-column" :class="'ml-2'">
                <span class="font-bold">{{ inlineProfile.button.title }}</span>
                <small>{{ inlineProfile.button.subtitle }}</small>
            </span>
            <i class="layout-inline-menu-icon pi pi-angle-down" :class="'ml-auto'"></i>
        </a>
        <span class="layout-inline-menu-tooltip p-tooltip">
            <span class="layout-inline-menu-tooltip-arrow p-tooltip-arrow"></span>
            <span class="layout-inline-menu-tooltip-text p-tooltip-text">{{ inlineProfile.button.title }}</span>
        </span>

        <transition
            :name="menuMode === 'horizontal' && !isMobile() ? 'layout-inline-menu-action-panel-horizontal' : 'layout-inline-menu-action-panel'"
        >
            <ul
                v-show="active"
                :class="[
                    'layout-inline-menu-action-panel',
                    { 'layout-inline-menu-action-panel-horizontal': menuMode === 'horizontal' && !isMobile() },
                ]"
            >
                <li v-for="(item, index) in inlineProfile.items" class="layout-inline-menu-action-item">
                    <a class="flex flex-row align-items-center">
                        <i :class="item.icon"></i>
                        <span>{{ item.label }}</span>
                    </a>
                    <span class="layout-inline-menu-tooltip p-tooltip">
                        <span class="layout-inline-menu-tooltip-arrow p-tooltip-arrow"></span>
                        <span class="layout-inline-menu-tooltip-text p-tooltip-text">{{ item.label }}</span>
                    </span>
                </li>

            </ul>
        </transition>
    </div>
</template>

<script>
import InlineProfile from './InlineProfile.json';

export default {
    name: 'AppInlineMenu',
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        menuMode: String,
        inlineMenuKey: String,
    },
    data() {
        return {
            inlineProfile: InlineProfile
        }
    },

    methods: {
        onClick(event) {
            this.$emit('change-inlinemenu', !this.active, this.inlineMenuKey); // eslint-disable-line
            event.preventDefault();
        },
        isMobile() {
            return window.innerWidth <= 991;
        },
    },
};
</script>

<style scoped></style>
