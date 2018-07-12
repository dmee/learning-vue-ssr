import Vue from 'vue'
import App from './App.vue'
import {
    createRouter
} from './router/index'

export function createApp() {
    let router = createRouter();
    let app = new Vue({
        router,
        render: h => h(App)
    });
    return {
        app,
        router
    };
};