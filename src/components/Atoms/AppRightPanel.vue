<template>
    <Sidebar
        v-model:visible="isExpanded"
        @hide="hideSidebar"
        @click="onSidebarClick"
        position="right"
        :show-close-icon="false"
        :base-z-index="1000"
        class="layout-rightmenu p-sidebar-sm fs-small py-3"
        :class="'pl-3 pr-0'"
    >
        <div class="online-members flex flex-column mt-3" :class="'ml-3'">
            <h6 class="header">ONLINE MEMBERS</h6>
            <div class="flex flex-row flex-wrap">
                <img class="m-1" src="" alt="avatar-1" />
            </div>
            <span class="mt-3"><b>+19</b> Costumers</span>
        </div>
        <div class="latest-activity flex flex-column mt-6" :class="'ml-3'">
            <h6 class="header">LATEST ACTIVITY</h6>
            <div class="flex flex-row pt-2">
                <i class="pi pi-images align-self-start p-2" :class="'mr-2'"></i>
                <div class="flex flex-column">
                    <span class="font-bold mb-1">New Sale</span>
                    <span class="mb-2">Richard Jones has purchased a blue t-shirt for $79.</span>
                    <span class="flex align-items-center">
                        <img :class="'mr-2'" src="" alt="" />
                        <small class="muted-text">Emmy Adams, 21.40</small>
                    </span>
                </div>
            </div>
            <div class="flex flex-row pt-3">
                <i class="pi pi-images align-self-start p-2" :class="'mr-2'"></i>
                <div class="flex flex-column">
                    <span class="font-bold mb-1">Withdrawal Initiated</span>
                    <span class="mb-2">Your request for withdrawal of $2500 has been initiated.</span>
                    <span class="flex align-items-center">
                        <img :class="'mr-2'" src="" alt="avatar-2" />
                        <small class="muted-text">Emily Walter, 21.40</small>
                    </span>
                </div>
            </div>
            <div class="flex flex-row pt-3">
                <i class="pi pi-images align-self-start p-2" :class="'mr-2'"></i>
                <div class="flex flex-column">
                    <span class="font-bold mb-1">Question Received</span>
                    <span class="mb-2">Jane Davis has posted a new question about your product.</span>
                    <span class="flex align-items-center">
                        <img :class="'mr-2'" src="" alt="avatar-3" />
                        <small class="muted-text">Jane Davis, 21.45</small>
                    </span>
                </div>
            </div>
        </div>
        <div class="next-events flex flex-column mt-6" :class="'ml-3'">
            <h6 class="header">NEXT EVENTS</h6>
            <ul>
                <li><i class="pi pi-eye" :class="'mr-3'"></i>A/B Test</li>
                <li><i class="pi pi-video" :class="'mr-3'"></i>Video Shoot</li>
                <li><i class="pi pi-sitemap" :class="'mr-3'"></i>Board Meeting</li>
                <li><i class="pi pi-compass" :class="'mr-3'"></i>Q4 Planning</li>
                <li><i class="pi pi-palette" :class="'mr-3'"></i>Design Training</li>
            </ul>
        </div>
    </Sidebar>
</template>

<script setup lang="ts">
import Sidebar from 'primevue/sidebar';
import { ref, watch } from 'vue';

const props = defineProps({
    expanded: {
        type: Boolean,
        default: false,
    },
});

const isExpanded = ref(false);

watch(
    () => props.expanded,
    (newValue) => {
        isExpanded.value = newValue;
    }
);

const emit = defineEmits<{
    (eventName: 'hide', value: boolean): void;
    (eventName: 'content-click', event: Event): void;
}>();

const hideSidebar = () => {
    emit('hide', isExpanded.value);
};

const onSidebarClick = (event: Event) => {
    emit('content-click', event);
};
</script>
