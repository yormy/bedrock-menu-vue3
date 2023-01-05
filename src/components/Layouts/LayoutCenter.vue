<template>
    <div class="y-content">
        <div class="y-page--center">
            <div class="image" :style="backgroundStyle">
                <div class="middle--center">
                    <div class="header">{{ landingSettings.branding.main.title }}</div>
                    <div class="section--content">
                        <div class="content">
                            <br /><br /><br /><br /><br /><br />

                            <!--                        <div class="y-content">-->
                            <!--                            <div class="flex justify-between">-->
                            <!--                                <div class="text-muted text-small">-->
                            <!--                                    Not a member ?-->
                            <!--                                    <a>Signup now</a>-->
                            <!--                                </div>-->

                            <!--                                &lt;!&ndash; Language dropdown&ndash;&gt;-->
                            <!--                                <div class="y-dropdown&#45;&#45;container">-->
                            <!--                                    &lt;!&ndash; Dropdown toggle &ndash;&gt;-->
                            <!--                                    <input id="checkbox-125" type="checkbox" class="hidden y-dropdown&#45;&#45;checkbox&#45;&#45;input" >-->
                            <!--                                    <label for="checkbox-125" class="flex justify-end" >-->
                            <!--                                        <div  class="y-dropdown&#45;&#45;label">-->
                            <!--                                            <span class="flag-icon flag-icon-de"></span>-->
                            <!--                                        </div>-->
                            <!--                                        <div class="icon icon-dropdown"></div>-->
                            <!--                                    </label>-->

                            <!--                                    &lt;!&ndash; Dropdown card &ndash;&gt;-->
                            <!--                                    <div class="y-dropdown&#45;&#45;card right-aligned">-->
                            <!--                                        <a href="#" class="y-dropdown&#45;&#45;item"> <span class="flag-icon flag-icon-nl"></span> Dutch  </a>-->
                            <!--                                        <a href="#" class="y-dropdown&#45;&#45;item"> <span class="flag-icon flag-icon-us"></span> English </a>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->

                            <!--                            <div class="header flex-row ">-->
                            <!--                                &lt;!&ndash;                <div class="brand&#45;&#45;name">Bedrock</div>&ndash;&gt;-->
                            <!--                                <img class="brand&#45;&#45;logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png">-->
                            <!--                                <div class="section&#45;&#45;title">Login</div>-->
                            <!--                                <div class="section&#45;&#45;subtitle">login to get access</div>-->
                            <!--                            </div>-->

                            <!--                            <div class="y-content">-->
                            <!--                                <div class="flex justify-between">-->
                            <!--                                    <button class="y-btn y-btn-primary"> login</button>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                            <!--                        </div>-->
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
