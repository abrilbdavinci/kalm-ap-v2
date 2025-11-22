import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tests from "../views/Tests.vue";
import TestsInicio from "../views/TestsInicio.vue";
import TestDetail from "../views/TestDetail.vue"; 
import Login from "../views/Login.vue";
import LogOrReg from "../views/LogOrReg.vue";
import Register from "../views/Register.vue";
import Resultado from '../views/Resultado.vue';
import { currentUser } from '../main.js';
import Perfil from '../views/Perfil.vue';

const authGuard = (to, from, next) => {
  if (!currentUser.value) {
    next('/login'); // redirige si no hay usuario
  } else {
    next();
  }
};

const routes = [
  { path: "/", component: Home },
  { path: "/LoginOrRegister", component: LogOrReg, meta: { hideHeader: true, hideNavbar: true, hideFooter: true } },
  { path: "/tests", component: Tests, beforeEnter: authGuard, meta: { hideHeader: true, hideNavbar: true, hideFooter: true } },
  { path: "/testsInicio", component: TestsInicio, beforeEnter: authGuard, meta: { hideHeader: true, hideNavbar: true, hideFooter: true } },
  { path: "/tests/:id", component: TestDetail, props: true, beforeEnter: authGuard, meta: { hideHeader: true, hideNavbar: true, hideFooter: true } },
  { path: "/login", component: Login, meta: { hideHeader: true, hideNavbar: true, hideFooter: true } },
  { path: "/register", component: Register, meta: { hideHeader: true, hideNavbar: true, hideFooter: true } },
  { path: '/resultado', component: Resultado, props: true, beforeEnter: authGuard },
  { path: '/perfil', name: 'Perfil', component: Perfil, props: true, beforeEnter: authGuard }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
