<template>
    <li class="layout-topbar-item layout-search-item">
        <a
            v-ripple
            class="layout-topbar-action rounded-circle p-ripple"
            @click="onSearchItemClick($event)"
            @keydown="onSearchItemClick($event)"
        >
            <i class="pi pi-search fs-large"></i>
        </a>

        <transition name="layout-search-panel" @enter="onEnter">
            <div
                v-show="searchActive"
                class="layout-search-panel p-inputgroup"
                @click="onSearchContainerClick"
                @keydown="onSearchContainerClick"
            >
                <span class="p-inputgroup-addon"><i class="pi pi-search"></i></span>
                <InputText ref="searchInput" type="text" placeholder="Search" @keydown="onSearchKeydown($event)" />
                <span class="p-inputgroup-addon">
                    <Button
                        icon="pi pi-times"
                        class="p-button-rounded p-button-text p-button-plain"
                        @click="changeSearchActive"
                    ></Button>
                </span>
            </div>
        </transition>
    </li>
</template>

<script>
import InputText from 'primevue/inputtext';
export default {

    components: {
        InputText
    },

    props: {
        searchActive: {
            type : Boolean,
            default: false,
        },
    },

    methods: {
        onSearchItemClick(event, item) {
            this.$emit('search-toggle', event);
        },

        onSearchContainerClick(event) {
            this.$emit('search-click', event);
        },
        changeSearchActive(event) {
            this.$emit('search-toggle', event);
        },

        onSearchKeydown(event) {
            if (event.keyCode === 13) {
                this.$emit('search-toggle', event);
            }
        },
        onEnter() {
            if (this.$refs.searchInput) {
                this.$refs.searchInput.$el.focus();
            }
        },
    }

}
</script>
