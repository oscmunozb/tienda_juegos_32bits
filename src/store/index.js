import { createStore } from 'vuex'; // Importa la función createStore de Vuex
import jsonData from '../db/juegos.json'; // Importa los datos de juegos desde un archivo JSON

export default createStore({
    state: {
        juegos: jsonData, // Estado inicial del store, contiene la lista de juegos
    },
    getters: {},
    mutations: {
        modificarStockJuego(state, { codigo, operacion }) {
            state.juegos = state.juegos.map(juego => {
                if (juego.codigo === codigo) { // Verifica si el juego actual tiene el código proporcionado
                    if (operacion === "suma") { // Verifica si la operación es suma
                        juego.stock++; // Aumenta el stock del juego
                    } else if (operacion === "resta" && juego.stock > 0) { // Verifica si la operación es resta y el stock es mayor a 0
                        juego.stock--; // Disminuye el stock del juego
                    } else if (operacion === "resta" && juego.stock === 0) { // Verifica si la operación es resta y el stock es 0
                        alert(`Ya no queda stock del juego: ${juego.nombre}`); // Muestra un mensaje de alerta si no hay stock disponible
                    }
                }
                return juego; // Devuelve el juego con el stock modificado
            });
        }
    },
    actions: {
        async modificarStock({ commit }, data) { // Acción para modificar el stock de un juego
            commit("modificarStockJuego", data); // Llama a la mutación para modificar el stock
        }
    },
    modules: {},
});
