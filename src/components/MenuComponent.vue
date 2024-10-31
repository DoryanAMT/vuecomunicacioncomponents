<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Home</router-link> |</li>
      <li><router-link to="/deportes"> deportes</router-link> |</li>
      <li><router-link to="/sumacheckbox"> sumacheckbox</router-link> |</li>
      <li><router-link to="/numerodoble"> numeroDoble</router-link> |</li>
      <li v-for="numero in numeros" :key="numero">
        <router-link :to="'/numerodoble/'+numero"> numeroDoble {{numero}}</router-link> |
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
    name: "MenuComponent",
    data(){
      return{
        numeros: [1 , 2 ,3 ,4 ,5]
      }
    }
    };
</script>

<style>
ul#menu li {
  display: inline;
}
</style>
