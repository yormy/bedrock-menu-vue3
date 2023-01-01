<template>
    <div class="layout-topbar-actions-left">
        <MegaMenu :model="items" class="layout-megamenu"></MegaMenu>
    </div>
</template>

<script>
import MegaMenu from "primevue/megamenu";
import MegaMenuData from "./MegaMenu.json"

export default {
    components: {
        MegaMenu,
    },

    data() {
        return {
            items: MegaMenuData
        };
    },

    methods: {
        onTopbarItemClick(event, item) {
            this.$emit('topbaritem-click', { originalEvent: event, item });
        },
    }

}
</script>
