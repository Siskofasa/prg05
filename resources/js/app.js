/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
global.$ = require('jquery');
global._ = require('underscore');

import VueAxios from 'vue-axios';
import axios from 'axios';

import LIS from "./lib/lis";
global.LIS = new LIS();

import "jquery-ui/ui/widgets/sortable"

global.hljs = require("highlight.js/lib/core");
hljs.registerLanguage("python", require("highlight.js/lib/languages/python"))

global.Sk = require("skulpt");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('parsons-problem', require('./components/ParsonsComponent.vue').default);

Vue.use(VueAxios, axios);

import ParsonsComponent from "./components/ParsonsComponent";
import ParsonsStatusScreen from "./components/ParsonsStatusScreen";

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: {
        //'parsons-problem': require('./components/ParsonsComponent.vue')
        ParsonsComponent,
        ParsonsStatusScreen
    }
});
