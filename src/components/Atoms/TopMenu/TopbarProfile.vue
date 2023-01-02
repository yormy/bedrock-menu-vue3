<template>
    <li class="layout-topbar-item">
        <a
            v-ripple
            class="layout-topbar-action flex flex-row justify-content-center align-items-center px-2 rounded-circle p-ripple"
            @click="onTopbarItemClick($event, 'profile')"
            @keydown="onTopbarItemClick($event, 'profile')"
        >
            <img :src="menuTopProfileData.button.image" :alt="menuTopProfileData.button.title" :style="menuTopProfileData.button.style" />
        </a>

        <transition name="layout-topbar-action-panel">
            <ul v-show="activeTopbarItem === 'profile'" class="layout-topbar-action-panel shadow-6">
                <li v-for="(item, index) in menuTopProfileData.items" :key="index" class="layout-topbar-action-item">
                    <a v-ripple class="flex flex-row align-items-center p-ripple">
                        <i :class="item.icon" class="mr-2"></i>
                        <span>{{ item.label }}</span>
                    </a>
                </li>
            </ul>
        </transition>
    </li>
</template>

<script setup lang="ts">
const props = defineProps({
    activeTopbarItem: {
        type: String,
        default: '',
    },

    menuTopProfileData: {
        type: Object,
        default() {
            return {};
        },
    },
});

const emit = defineEmits<{
    (eventName: 'topbaritem-click', data: { originalEvent: Event; item: any }): void;
}>();

const onTopbarItemClick = (event: Event, item: any) => {
    emit('topbaritem-click', { originalEvent: event, item });
};
</script>
