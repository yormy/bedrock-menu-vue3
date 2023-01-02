<template>
    <li class="layout-topbar-item app">
        <a
            v-ripple
            class="layout-topbar-action rounded-circle p-ripple"
            @click="onTopbarItemClick($event, 'apps')"
            @keydown="onTopbarItemClick($event, 'apps')"
        >
            <i :class="menuTopAppData.button.icon"></i>
        </a>

        <transition name="layout-topbar-action-panel">
            <div v-show="activeTopbarItem === 'apps'" class="grid grid-nogutter layout-topbar-action-panel shadow-6">
                <div v-for="(item, index) in menuTopAppData.items" :key="index" class="layout-topbar-action-item col-4">
                    <a v-ripple class="flex align-items-center flex-column text-color p-ripple">
                        <i :class="item.icon"></i>
                        <span>{{ item.label }}</span>
                    </a>
                </div>
            </div>
        </transition>
    </li>
</template>

<script setup lang="ts">
const props = defineProps({
    menuTopAppData: {
        type: Object,
        default() {
            return {};
        },
    },

    activeTopbarItem: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['topbaritem-click']);

const onTopbarItemClick = (event: Event, item: Element) => {
    emit('topbaritem-click', { originalEvent: event, item });
};
</script>
