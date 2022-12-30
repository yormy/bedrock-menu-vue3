<template>
    <div>
        <table class="y-table--table">
            <thead>
            <tr class="y-table--header">
                <th class="y-table--cell">Show</th>
                <th class="y-table--cell">Class</th>
                <th class="y-table--cell">Usage</th>
            </tr>
            </thead>
            <tbody class="y-table--body">
                <tr v-for="(icon, index) in items" :key="icon.label">
                    <td>
                        <span class="y-icon icon" :class="icon.class"/></td><td>{{ icon.class }}</td><td>
                        {{ icon.description }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
    items: {
        type: Array,
    },
});
</script>

