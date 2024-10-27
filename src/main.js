import { createApp } from 'vue';
import appRoutes from './appRoutes';
import './style.css';
import App from './App.vue';

import { createPinia } from 'pinia';

const app = createApp(App)
app.use(createPinia());
app.use(appRoutes);


app.mount('#app');
