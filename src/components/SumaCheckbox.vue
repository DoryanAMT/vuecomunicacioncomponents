<template>
  <div>
    <h1>Ejemplo Checkbox</h1>
    <h2>{{checkedNumeros}}</h2>
    <h2>{{suma}}</h2>
    <form v-on:submit.prevent="generarCheckBox()">
      <button>Generar Checkbox</button>
      <div id="divCheckbox" v-for="(ncb, index) in numeroCheckBox" :key="ncb" >
        <input type="checkbox" :value="index" v-model="checkedNumeros" @change="updateSum(ncb, $event)">
        <label>{{ncb}}</label>
      </div>
      
    </form>
    <div id="resultado"></div>
  </div>
</template>

<script>

export default {
  name: "SumaCheckbox",
  methods:{
    generarCheckBox(){
        let random = parseInt(Math.random() * 100)+1;
        this.numeroCheckBox.push(random);
    },
    updateSum(value, event) {
      // Si el checkbox está marcado, suma; si no, resta
      if (event.target.checked) {
        this.suma += value;
      } else {
        this.suma -= value;
      }
    }
  },
  data () {
    return{
        numeroCheckBox: [1,2,3,4,1],
        suma: 0,
        checkedNumeros: [],
    }
  }
  
};
</script>

<style >
.divCheckbox{
    display: inline-block;
}
</style>