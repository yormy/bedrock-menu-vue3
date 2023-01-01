<template>
    <li class="layout-topbar-item app">
        <a
            v-ripple
            class="layout-topbar-action rounded-circle p-ripple"
            @click="onTopbarItemClick($event, 'apps')"
            @keydown="onTopbarItemClick($event, 'apps')"
        >
            <i :class="apps.button.icon"></i>
        </a>

        <transition name="layout-topbar-action-panel">
            <div v-show="activeTopbarItem === 'apps'" class="grid grid-nogutter layout-topbar-action-panel shadow-6">

                <div v-for="(item, index) in apps.items" class="layout-topbar-action-item col-4">
                    <a v-ripple class="flex align-items-center flex-column text-color p-ripple">
                        <i :class="item.icon"></i>
                        <span>{{ item.label }}</span>
                    </a>
                </div>
            </div>
        </transition>
    </li>
</template>

<script>
import AppsData from './Apps.json'
export default {

    props: {
        activeTopbarItem: String,

    },

    data() {
        return {
            apps : AppsData,
        }
    },

    methods: {
        onTopbarItemClick(event, item) {
            this.$emit('topbaritem-click', { originalEvent: event, item });
        },
    }

}
</script>
