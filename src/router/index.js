import Vue from 'vue';
import VueRouter from 'vue-router';
import Views_Index from '../views/Index.vue'
Vue.use(VueRouter);


export function createRouter() {
    return new VueRouter({
        model: 'history',
        routes: [{
            path: '/',
            name: Views_Index.name,
            component: Views_Index
        }]
    });
}