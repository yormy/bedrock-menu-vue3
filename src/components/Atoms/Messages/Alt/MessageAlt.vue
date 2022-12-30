<template>
    <div>
        <div v-if="type === '' || type === 'default'" class="y-alert is-info" role="alert">
            <div class="header">{{ label }} : {{ type }}</div>
            <div class="description">
                <slot></slot>
            </div>
        </div>

        <div v-if="type === 'left'" class="y-alert left is-danger" role="alert">
            <div class="header">{{ label }}: {{ type }}</div>
            <div class="description">
                <slot></slot>
            </div>
        </div>

        <div v-if="type === 'left-with-header'" class="y-alert left with-header is-success" role="alert">
            <div class="header">{{ label }}: {{ type }}</div>
            <div class="description">
                <slot></slot>
            </div>
        </div>

        <div v-if="type === 'top'" class="y-alert top is-warning" role="alert">
            <div class="flex">
                <div class="icon">
                    <i class="y-icon icon icon-warning"></i>
                </div>
                <div>
                    <p class="header">{{ label }}: {{ type }}</p>
                    <div class="description">
                        Some additional <a href="#">text</a> to explain said message.
                        <ul class="">
                            <li>At least 10 characters (and up to 100 characters)</li>
                            <li>At least one lowercase character</li>
                            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'normal',
        validator(value: string) {
            return ['default', 'left', 'left-with-header', 'top'].includes(value);
        },
    },
});
</script>
