<template>
    <li class="layout-topbar-item layout-search-item">
        <a v-ripple class="layout-topbar-action rounded-circle p-ripple" @click="onSearchItemClick" @keydown="onSearchItemKeydown">
            <i class="pi pi-search fs-large"></i>
        </a>

        <transition name="layout-search-panel" @enter="onEnter">
            <div v-show="searchActive" class="layout-search-panel p-inputgroup" @click="onSearchContainerClick" @keydown="onSearchContainerClick">
                <span class="p-inputgroup-addon"><i class="pi pi-search"></i></span>
                <InputText ref="searchInput" type="text" placeholder="Search" @keydown="onSearchKeydown($event)" />
                <span class="p-inputgroup-addon">
                    <Button icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" @click="changeSearchActive"></Button>
                </span>
            </div>
        </transition>
    </li>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';

const props = defineProps({
    searchActive: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{
    (eventName: 'search-toggle', event: Event): void;
    (eventName: 'search-click', event: Event): void;
}>();

const onSearchItemClick = (payload: MouseEvent) => {
    emit('search-toggle', payload);
};

const onSearchItemKeydown = (payload: KeyboardEvent) => {
    emit('search-toggle', payload);
};

const onSearchContainerClick = (event: Event) => {
    emit('search-click', event);
};

const changeSearchActive = (event: Event) => {
    emit('search-toggle', event);
};

const onSearchKeydown = (event: KeyboardEvent) => {
    // if (event.keyCode === 13) {
    //     emit('search-toggle', event);
    // }
};

const onEnter = () => {
    // if (this.$refs.searchInput) {
    //     this.$refs.searchInput.$el.focus();
    // }
};
</script>
