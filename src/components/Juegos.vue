<!-- Script JS -->
<script>
import { mapActions, mapState } from 'vuex'; // Importa mapState y mapActions desde Vuex para mapear el estado y las acciones del store a las propiedades del componente

export default {
  name: 'Juegos', // Define el nombre del componente como 'Juegos'
  computed: {
    ...mapState(['juegos']) // Mapea el estado 'juegos' del store a una propiedad computada del componente
  },
  methods: {
    ...mapActions(["modificarStock"]) // Mapea la acción 'modificarStock' del store a un método del componente
  }
}
</script>

<!-- Template HTML -->
<template>
  <header class="text-center container">
    <h1 class="my-4">Tienda de juegos 32 Bits</h1> <!-- Título principal de la aplicación -->
    <h2 class="mt-3 mb-4">Lista de juegos</h2> <!-- Subtítulo de la lista de juegos -->
  </header>

  <main class="container text-center">
    <table class="table table-hover table-bordered ">
      <thead class="f-bold table-light">
        <tr>
          <th>Código</th> <!-- Encabezado para el código del juego -->
          <th>Nombre</th> <!-- Encabezado para el nombre del juego -->
          <th>Stock</th> <!-- Encabezado para la cantidad de stock del juego -->
          <th>Precio</th> <!-- Encabezado para el precio del juego -->
          <th>Acciones</th> <!-- Encabezado para las acciones que se pueden realizar con el juego -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos">
          <!-- Recorre cada juego en el estado 'juegos' y aplica el color de fondo especificado -->
          <td>{{ juego.codigo }}</td> <!-- Muestra el código del juego -->
          <td>{{ juego.nombre }}</td> <!-- Muestra el nombre del juego -->
          <td>{{ juego.stock }}</td> <!-- Muestra el stock del juego -->
          <td>{{ juego.precio }}</td> <!-- Muestra el precio del juego -->
          <td>
            <div class="btn-group" role="group">
              <button class="btn btn-light border"
                @click="modificarStock({ codigo: juego.codigo, operacion: 'suma' })">+</button> <!-- Botón para incrementar el stock -->
              <button class="btn btn-light border" @click="modificarStock({ codigo: juego.codigo, operacion: 'resta' })">-</button> <!-- Botón para disminuir el stock -->
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<!-- Style CSS -->
<style scoped>
</style>
