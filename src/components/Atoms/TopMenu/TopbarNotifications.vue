<template>
    <li class="layout-topbar-item notifications">
        <a
            v-ripple
            class="layout-topbar-action rounded-circle p-ripple"
            @click="onTopbarItemClick($event, 'notifications')"
            @keydown="onTopbarItemClick($event, 'notifications')"
        >
<!--            <span v-badge.warning class="p-overlay-badge">-->
                <i :class="menuTopNotificationsData.button.icon"></i>
<!--            </span>-->

            <span
                class="p-badge p-component p-badge-no-gutter p-badge-tiny-topright"
                :class="menuTopNotificationsData.button.type"
            ><span class="badge-value">{{menuTopNotificationsData.button.content}}</span></span>

        </a>

        <transition name="layout-topbar-action-panel">
            <ul v-show="activeTopbarItem === 'notifications'" class="layout-topbar-action-panel shadow-6">


                <li class="mb-3">
                    <span class="px-3 fs-small">{{menuTopNotificationsData.header.title}}</span>
                </li>


                <li v-for="(item, index) in menuTopNotificationsData.items" class="layout-topbar-action-item">
                    <div class="flex flex-row align-items-center">
                        <img :src="item.avatar.image" :alt="item.avatar.title" />
                        <div class="flex flex-column" :class="'ml-3'" style="flex-grow: 1">
                            <div class="flex align-items-center justify-content-between mb-1">
                                <span class="fs-small font-bold">{{ item.title }}</span>
                                <small>{{item.date}}</small>
                            </div>
                            <span class="fs-small">{{ item.subtitle }}</span>
                        </div>
                    </div>
                </li>

            </ul>
        </transition>
    </li>
</template>

<script>
export default {

    props: {
        activeTopbarItem: String,
        menuTopNotificationsData: Object,
    },

    methods: {
        onTopbarItemClick(event, item) {
            this.$emit('topbaritem-click', { originalEvent: event, item });
        },
    }

}
</script>
