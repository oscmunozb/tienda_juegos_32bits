<!-- Script JS -->
<script>
import Juegos from './components/Juegos.vue'; // Importa el componente 'Juegos' desde el archivo correspondiente

export default {
  name: 'App', // Define el nombre del componente raíz como 'App'
  components: {
    Juegos, // Registra el componente 'Juegos' para que pueda ser utilizado dentro del componente 'App'
  }
}
</script>

<!-- Template HTML -->
<template>
  <Juegos/> <!-- Utiliza el componente 'Juegos' dentro del template del componente 'App' -->
</template>

<!-- Style CSS -->
<style scoped>
</style>
