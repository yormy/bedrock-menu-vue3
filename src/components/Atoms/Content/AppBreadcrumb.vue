<template>
    <div class="layout-breadcrumb-container flex justify-content-between align-items-center shadow-1">
        <Breadcrumb :home="home" :model="items" class="layout-breadcrumb pl-4 py-2"></Breadcrumb>

        <!--        <div class="layout-breadcrumb-buttons flex align-items-center pr-3">-->
        <!--            <Button icon="pi pi-bookmark" class="p-button-rounded p-button-text p-button-plain mr-1"></Button>-->
        <!--        </div>-->
    </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb';

export default {
    data() {
        return {
            home: { icon: 'pi pi-home', to: '/' },
            items: [],
        };
    },
    watch: {
        $route() {
            this.watchRouter();
        },
    },
    created() {
        this.watchRouter();
    },
    methods: {
        watchRouter() {
            if (this.$router.currentRoute.value.meta.breadcrumb) {
                this.items = [];
                const bc = this.$router.currentRoute.value.meta.breadcrumb[0];

                // eslint-disable-next-line
                for (const pro in bc) {
                    this.items.push({ label: bc[pro] });
                }
            }
        },
    },
    components: {
        Breadcrumb,
    },
};
</script>

<style scoped></style>
