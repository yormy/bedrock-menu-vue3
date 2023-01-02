<template>
    <div class="layout-topbar-actions-left">
        <MegaMenu :model="menuTopMegaData" class="layout-megamenu"></MegaMenu>
    </div>
</template>

<script setup lang="ts">
import MegaMenu from "primevue/megamenu";

const props = defineProps({
    menuTopMegaData: {
        type: Object,
        default() {
            return {};
        }
    },
});

const emit = defineEmits<{
    (eventName: 'topbaritem-click', data:{originalEvent: Event, item:any}): void
}>();

const onTopbarItemClick = (event: Event, item: any) => {
    emit('topbaritem-click', {originalEvent: event, item});
}
</script>
