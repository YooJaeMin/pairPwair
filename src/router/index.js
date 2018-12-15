import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter);

var routes = [
    {
       path : '/',
       redirect : '/login',
    },
    {
        path : '/login',
        component : LoginPage,
    },
    {
        path : '/main',
        component : MainPage,
    },
]

export var router = new VueRouter({
    mode : 'history',
    routes,

})