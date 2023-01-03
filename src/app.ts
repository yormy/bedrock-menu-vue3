import { createApp, h } from 'vue';
import { reactive } from 'vue';
import AppWrapper from '../demo/AppWrapper.vue';
import PrimeVue from 'primevue/config';

import Ripple from 'primevue/ripple';
import router from '../demo/router';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
// import './assets/demo/flags/flags.css';

const app = createApp({
    render () { return h(AppWrapper); }
});

app.use(router);

app.use(PrimeVue, {
    ripple: true,
    inputStyle: 'filled' // filled | outlined
});

app.config.globalProperties.$appState = reactive({
    RTL: false,
    isNewThemeLoaded: false,
    layoutMode: 'light',
});

app.directive('ripple', Ripple);

app.mount('#app');
