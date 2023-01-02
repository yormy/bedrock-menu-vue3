<template>
    <div class="layout-topbar-actions-left">
        <MegaMenu :model="menuTopMegaData" class="layout-megamenu"></MegaMenu>
    </div>
</template>

<script>
import MegaMenu from "primevue/megamenu";

export default {
    components: {
        MegaMenu,
    },

    props: {
        menuTopMegaData: Object,
    },

    methods: {
        onTopbarItemClick(event, item) {
            this.$emit('topbaritem-click', { originalEvent: event, item });
        },
    }

}
</script>
