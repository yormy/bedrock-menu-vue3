/* eslint-disable @typescript-eslint/ban-ts-comment */
import { App } from 'vue';

// @ts-ignore
import * as components from './components/index.ts';

function install(app: App) {
    Object.keys(components).forEach(function fn(key) {
        app.component(key, components[key]);
    });
}

export default { install };

// @ts-ignore
export * from './components/index.ts';
// @ts-ignore
export * from './constants/index.ts';
// @ts-ignore
export * from './utils/index.ts';
