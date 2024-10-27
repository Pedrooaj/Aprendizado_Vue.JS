import { createRouter, createWebHistory } from 'vue-router';
import Home from "./routes/Home.vue"
import Eventos from './routes/Eventos.vue';
import Pinia from './routes/Pinia.vue';
import NotFound from './routes/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: Eventos
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: Pinia,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound // definindo componente que ira ser renderizado na pagina 404
  }
];

// criando rota de apps com o array de rotas definido acima
const appRoutes = createRouter({
  history: createWebHistory(),
  routes
});

export default appRoutes;
