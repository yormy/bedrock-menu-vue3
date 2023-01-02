<template>
    <ul v-if="items" role="menu">
        <template v-for="(item, i) of items">
            <li
                v-if="visible(item) && !item.separator"
                :key="item.label || i"
                :class="[{ 'layout-root-menuitem': root, 'active-menuitem': activeIndex === i && !item.disabled }]"
                role="menuitem"
            >
                <div v-if="root">
                    <span class="layout-menuitem-text">{{ item.label }}</span>
                </div>
                <router-link
                    v-if="item.to"
                    v-ripple
                    :to="item.to"
                    :style="item.style"
                    :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
                    :target="item.target"
                    active-class="active-route"
                    exact
                    @mouseenter="onMenuItemMouseEnter(i)"
                    @focus="onMenuItemMouseEnter(i)"
                    @mouseleave="onMenuItemMouseLeave"
                    @blur="onMenuItemMouseLeave"
                    @click="onMenuItemClick($event, item, i)"
                    @keydown="onMenuItemClick($event, item, i)"
                >
                    <i :class="['layout-menuitem-icon', item.icon]"></i>
                    <span class="layout-menuitem-text">{{ item.label }}</span>
                    <span
                        v-if="item.badge && !root"
                        class="p-badge p-component p-badge-no-gutter"
                        :class="item.badgeStyleClass"
                        :style="item.badgeStyle"
                        >{{ item.badge }}</span
                    >
                    <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                </router-link>
                <a
                    v-if="!item.to"
                    v-ripple
                    :href="item.url || '#'"
                    :style="item.style"
                    :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
                    :target="item.target"
                    @click="onMenuItemClick($event, item, i)"
                    @keydown="onMenuItemClick($event, item, i)"
                    @mouseenter="onMenuItemMouseEnter(i)"
                    @focus="onMenuItemMouseEnter(i)"
                    @mouseleave="onMenuItemMouseLeave"
                    @blur="onMenuItemMouseLeave"
                >
                    <i :class="['layout-menuitem-icon', item.icon]"></i>
                    <span class="layout-menuitem-text">{{ item.label }}</span>
                    <span v-if="item.badge && !root" class="p-badge p-component p-badge-no-gutter" :class="item.badgeStyleClass">{{
                        item.badge
                    }}</span>
                    <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                </a>
                <span class="layout-menuitem-tooltip p-tooltip">
                    <span class="layout-menuitem-tooltip-arrow p-tooltip-arrow"></span>
                    <span class="layout-menuitem-tooltip-text p-tooltip-text">{{ item.label }}</span>
                </span>
                <transition name="layout-menu">
                    <SideMenuSub
                        v-show="
                            item.items && (root && (!isSlim() || (isSlim() && (mobileMenuActive || activeIndex !== null))) ? true : activeIndex === i)
                        "
                        :items="visible(item) && item.items"
                        @menuitem-click="$emit('menuitem-click', $event)"
                        :menu-mode="menuMode"
                        :menu-active="menuActive"
                        :parent-menu-item-active="activeIndex === i"
                    ></SideMenuSub>
                </transition>
            </li>
            <li v-if="visible(item) && item.separator" :key="'separator' + i" class="p-menu-separator" :style="item.style" role="separator"></li>
        </template>
    </ul>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue';
import EventBus from '../../../event-bus';

const props = defineProps({
    items: {
        type: Array as PropType<Array<LeftMenuItem>>,
        default() {
            return [];
        },
    },

    menuMode: {
        type: String,
        default: '',
    },

    root: {
        type: Boolean,
        default: false,
    },

    menuActive: {
        type: Boolean,
        default: false,
    },

    parentMenuItemActive: {
        type: Boolean,
        default: false,
    },

    mobileMenuActive: {
        type: Boolean,
        default: false,
    },

    isSlimOrHorItemClick: {
        type: Boolean,
        default: false,
    },
});

const activeIndex = ref(null);
const hoverMenuActive = ref(false);

const emit = defineEmits<{
    (eventName: 'root-menuitem-click', data: { originalEvent: Event; isSameIndex: boolean }): void;
    (eventName: 'menuitem-click', data: { originalEvent: Event; item: any }): void;
}>();

const isMobile = () => {
    return window.innerWidth <= 640;
};

const isHorizontalOrSlim = () => {
    return props.menuMode === 'horizontal' || props.menuMode === 'slim';
};

onMounted(() => {
    EventBus.on('reset-active-index', () => {
        if (isHorizontalOrSlim() && !isMobile()) {
            activeIndex.value = null;
        }
    });
});

const getInk = (el: Element) => {
    for (let i = 0; i < el.children.length; i += 1) {
        if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
            return el.children[i];
        }
    }

    return null;
};

const removeClass = (element: Element, className: string) => {
    if (element.classList) element.classList.remove(className);
    else element.className = element.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' '); // eslint-disable-line
};

const onMenuItemClick = (event: Event, item: any, index: any) => {
    if (item.disabled) {
        event.preventDefault();

        return;
    }

    // execute command
    if (item.command) {
        item.command({ originalEvent: event, item });
        event.preventDefault();
    }

    if (item.items) {
        event.preventDefault();
    } else {
        if (isHorizontalOrSlim()) {
            hoverMenuActive.value = false;
        }

        if (props.menuMode !== 'static') {
            const ink = getInk(event.currentTarget as Element);

            if (ink) {
                removeClass(ink, 'p-ink-active');
            }
        }
    }

    if (props.root) {
        hoverMenuActive.value = !hoverMenuActive.value;

        emit('root-menuitem-click', {
            originalEvent: event,
            isSameIndex: index === activeIndex.value,
        });
    }

    if (item.items) {
        activeIndex.value = index === activeIndex.value ? null : index;
    }

    emit('menuitem-click', {
        originalEvent: event,
        item,
    });
};

const onMenuItemMouseEnter = (index: any) => {
    if (props.isSlimOrHorItemClick) {
        hoverMenuActive.value = true;
    }

    if (props.root && hoverMenuActive.value && isHorizontalOrSlim() && !isMobile()) {
        activeIndex.value = index;
    }
};

const onMenuItemMouseLeave = () => {
    hoverMenuActive.value = false;
};

const visible = (item: any) => {
    return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
};

const isSlim = () => {
    return props.menuMode === 'slim';
};
</script>
