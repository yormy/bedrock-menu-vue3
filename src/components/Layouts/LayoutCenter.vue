<template>
    <div class="y-content">
        <div class="y-page--center">
            <div class="image" :style="backgroundStyle">
                <div class="middle--center">
                    <div class="header">{{ landingSettings.branding.main.title }}</div>

                    <div class="section--content">
                        <div class="content">
                            <slot />
                        </div>
                    </div>

                    <div class="footer">
                        {{ landingSettings.content.copyright.statement }} <br />
                        <a>{{ landingSettings.content.copyright.terms }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

const props = defineProps({
    landingSettings: {
        type: Object as PropType<LandingSettings>,
        default() {
            return {};
        },
        required: true,
    },
});

const backgroundStyle = computed(() => {
    const style = `
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url(${props.landingSettings.branding.background})
    no-repeat top fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    `;

    return style;
});
</script>
