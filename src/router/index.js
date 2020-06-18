import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index'),
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: () => import('../views/about-me'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
