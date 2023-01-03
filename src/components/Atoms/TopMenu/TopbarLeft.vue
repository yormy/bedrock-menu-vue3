<template>
    <div class="layout-topbar-left">
        <a href="/" class="layout-topbar-logo">
            <img id="logo" :src="''" :alt="logo.title" :style="`height: ${logo.height}`" />
        </a>

        <a v-ripple class="layout-menu-button shadow-6 p-ripple" @click="onMenuButtonClick($event)" @keydown="onMenuButtonClick($event)">
            <i class="pi pi-chevron-right"></i>
        </a>
        <a
            v-ripple
            class="layout-topbar-mobile-button p-ripple"
            @click="onTopbarMobileButtonClick($event)"
            @keydown="onTopbarMobileButtonClick($event)"
        >
            <i class="pi pi-ellipsis-v fs-large"></i>
        </a>
    </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref, watch } from 'vue';

const props = defineProps({
    darkMode: {
        type: Boolean,
        default: false,
    },

    brandingData: {
        type: Object as PropType<{
            logo: {
                light: string;
                dark: string;
                title: string;
                height: string;
            };
        }>,
        default() {
            return {};
        },
    },
});

const emit = defineEmits<{
    (eventName: 'topbar-mobileactive', event: Event): void;
    (eventName: 'menubutton-click', event: Event): void;
}>();

const onTopbarMobileButtonClick = (event: Event) => {
    emit('topbar-mobileactive', event);
};

const onMenuButtonClick = (event: Event) => {
    emit('menubutton-click', event);
};

// {light : String, dark: String, title: String, height: String}
const logo = ref(props.brandingData.logo);

const applyDarkModeSetting = (darkMode: boolean) => {
    const html = document.querySelector('html');

    if (!html) {
        throw new Error('No HTML element');
    }

    if (darkMode) {
        html.classList.add('dark');
        html.classList.remove('light');
    } else {
        html.classList.add('light');
        html.classList.remove('dark');
    }

    const logoElement = document.getElementById('logo') as HTMLImageElement;

    if (!logoElement) {
        return;
    }

    if (darkMode) {
        logoElement.src = props.brandingData.logo.dark;
    } else {
        logoElement.src = props.brandingData.logo.light;
    }
};

onMounted(() => {
    applyDarkModeSetting(props.darkMode);
});

watch(
    () => props.darkMode,
    (newValue) => {
        applyDarkModeSetting(newValue);
    }
);
</script>
