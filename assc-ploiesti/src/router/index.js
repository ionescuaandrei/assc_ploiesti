import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home/Home.vue';
import Beneficiar from '../components/Beneficiar/Beneficiar.vue';
import Despre from '../components/Despre/Despre.vue';
import Obiective from '../components/Obiective/Obiective.vue';
import Valori from '../components/Valori/Valori.vue';
import Perioada from '../components/Perioada/Perioada.vue';
import Stadiu from '../components/Stadiu/Stadiu.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/beneficiar', name: 'Beneficiar', component: Beneficiar },
  { path: '/despre', name: 'Despre', component: Despre },
  { path : '/obiective', name: 'Obiective', component: Obiective },
  { path : '/valori', name: 'Valori', component: Valori },
  { path : '/perioada', name: 'Perioada', component: Perioada },
  { path: '/stadiu', name: 'Stadiu', component: Stadiu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
