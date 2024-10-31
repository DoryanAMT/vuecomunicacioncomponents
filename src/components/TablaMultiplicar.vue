<template>
  <div>
    <h1>Tabla Multiplicar {{ numero }}</h1>
    <table>
        <thead>
            <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody >
            
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar.vue",
  data(){
    return{
        numero : this.$route.params.numero
    }
  },
  mounted() {
    console.log("Param " + this.$route.params.numero);

  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (oldVal != nextVal) {
        // this.generarTabla();
      }
    },
  },
};
</script>
<style >
    table{
        margin: 0 auto;
    }
</style>