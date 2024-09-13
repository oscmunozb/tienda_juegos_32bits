import { createApp } from 'vue'; // Importa la función createApp desde Vue
import App from './App.vue'; // Importa el componente raíz de la aplicación
import store from './store'; // Importa el store de Vuex

const app = createApp(App); // Crea una instancia de la aplicación Vue con el componente raíz
app.use(store); // Registra el store en la instancia de la aplicación
app.mount('#app'); // Monta la aplicación en el elemento con id 'app'
