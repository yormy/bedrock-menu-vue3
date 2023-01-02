<template>
    <div class="layout-topbar-left">
        <a href="/" class="layout-topbar-logo">
            <img id="logo" :src="logo.light" :alt="logo.title" :style="`height: ${logo.height}`" />
        </a>

        <a v-ripple class="layout-menu-button shadow-6 p-ripple"
           @click="onMenuButtonClick($event)"
           @keydown="onMenuButtonClick($event)"
        >
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

<script>

export default {

    props: {
        darkMode: {
            type: Boolean,
            default: false,
        },

        brandingData: Object,
    },

    data() {
        return {
            //{light : String, dark: String, title: String, height: String}
            logo: this.brandingData.logo,
        }
    },

    mounted() {
        this.applyDarkModeSetting(this.dark);
    },

    watch: {
        darkMode(value) {
            console.log('switch', value)
            this.applyDarkModeSetting(this.darkMode);
        },
    },

    methods: {
        onTopbarMobileButtonClick(event) {
            console.log('event', "topbar-mobileactive");
            this.$emit('topbar-mobileactive', event);
        },

        onMenuButtonClick(event) {
            console.log('event', "menubutton");
            this.$emit('menubutton-click', event);
        },

        applyDarkModeSetting(darkMode) {
            const html = document.querySelector('html');

            if (darkMode) {
                html.classList.add('dark');
                html.classList.remove('light');
            } else {
                html.classList.add('light');
                html.classList.remove('dark');
            }

            const logoElement = document.getElementById('logo');

            if (darkMode) {
                logoElement.src = this.logo.dark;
            } else {
                logoElement.src = this.logo.light;
            }
        },
    }

}
</script>
