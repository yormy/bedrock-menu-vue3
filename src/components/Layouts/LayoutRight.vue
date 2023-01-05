<template>
    <div class="y-page--right">
        <div class="sections">
            <div class="section--background">
                <div class="image" :style="backgroundStyle">
                    <div class="content">
                        <div class="middle--center">
                            <h2 class="header">{{ landingSettings.branding.main.title }}</h2>
                            <div class="description">{{ landingSettings.branding.main.subtitle }}</div>
                        </div>

                        <div class="middle--bottom">
                            <h2 class="header">{{ landingSettings.branding.footer.title }}</h2>
                            <div class="description">{{ landingSettings.branding.footer.subtitle }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section--content">
                <div class="content"><br /><br /><br />ssaddsadsadsa<br /><br /><br />ssaddsadsadsa<br /><br /><br />ssaddsadsadsa</div>

                <footer class="" style="margin-top: 100px">
                    <div class="page-right--footer flex flex-column">
                        <div>{{ landingSettings.content.copyright.statement }}</div>
                        <div>
                            <a>{{ landingSettings.content.copyright.terms }}</a>
                        </div>
                    </div>
                </footer>
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
