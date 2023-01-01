<template>
    <li class="layout-topbar-item">
        <a
            v-ripple
            class="layout-topbar-action rounded-circle p-ripple"
            @click="onRightPanelButtonClick($event)"
            @keydown="onRightPanelButtonClick($event)"
        >
            <i class="pi fs-large" :class="'pi-arrow-left'"></i>
        </a>
    </li>
</template>

<script>
export default {
    methods: {
        onRightPanelButtonClick(event) {
            this.$emit('rightpanel-button-click', event);
        },
    }

}
</script>
