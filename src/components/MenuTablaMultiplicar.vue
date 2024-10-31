<template>
  <div>
    <button @click="generarNumeroAleatorio()">Generar número</button>
    <div v-for="numero in numeros" :key="numero" id="menu">
      <router-link :to="'/tablamultiplicar/' + numero" :numero="numero">
        tablamultiplicar {{ numero }}</router-link
      >
    </div>
  </div>
</template>

<script>
// import TablaMultiplicar from './TablaMultiplicar.vue'
export default {
  name: "MenuTablaMultiplicar",
  components: {},
  methods: {
    generarNumeroAleatorio() {
      this.numeros.push(parseInt(Math.random() * 100) + 1);
    },
  },
  data() {
    return {
      numeros: [1, 2],
    };
  },
  
};
</script>
<style>
div#menu {
  display: inline;
}
</style>