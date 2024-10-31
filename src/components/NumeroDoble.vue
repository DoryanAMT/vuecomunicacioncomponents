<template>
  <div>
    <button @click="redirectToHome()">Home</button>
    <h1>Numero Doble Component</h1>
    <h3 style="color:red">Doble: {{doble}} </h3>
    <h2 style="color: blue">{{ mensaje }}</h2>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      //  SOLAMENTE DEBEMOS REALIZAR LAS ACCIONES
      //  CUANDO NUESTRO PARAMETRO CAMBIE
      if (nextVal != oldVal) {
        this.mensaje = "Esto ha cambiado!!! " + this.$route.params.numero;
        let valor = parseInt(this.$route.params.numero);

        this.doble = valor * 2;
      }
    },
  },
  data() {
    return {
      mensaje: "",
      doble: 0,
    };
  },
  methods:{
    redirectToHome(){
        this.$router.push("/")
    }
  },
  mounted() {
    console.log("Param " + this.$route.params.numero);
    //LOS PARAMETROS SON STRING, NO IMPORT SI SON NUMERICOS
    let paraNumero = this.$route.params.numero;
    if (paraNumero == "") {
      console.log("Sin parametros");
      this.mensaje = "Sin parámetros en Routing";
    } else {
      this.mensaje = "Parametro recibido: " + paraNumero;
      let valor = parseInt(this.$route.params.numero);
      this.doble = valor * 2;
    }
  },
};
</script>