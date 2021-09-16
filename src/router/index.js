import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateClient from "@/views/CreateClient";
import Balance from "@/views/Balance";
import Deposit from "@/views/Deposit";
import Transaction from "@/views/Transaction";
import CreateAccount from "@/views/CreateAccount";
import Withdraw from "@/views/Withdraw";
import Transfer from "@/views/Transfer";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/createclient',
    name: 'Create Client',
    component: CreateClient
  },
  {
    path: '/balance',
    name: 'Balance',
    component: Balance
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: Deposit
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: Transaction
  },
  {
    path: '/createaccount',
    name: 'Create Account',
    component: CreateAccount
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
]

const router = new VueRouter({
  routes
})

export default router
