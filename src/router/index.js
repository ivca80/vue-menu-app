import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Novosti from '../views/Novosti.vue';
import Raspored from '../views/Raspored.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/novosti' , name: 'Novosti', component: Novosti },
  { path: '/raspored' , name: 'Raspored', component: Raspored }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;