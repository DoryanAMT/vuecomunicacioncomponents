<template>
  <div>
    <h1>Seleccion múltiple component</h1>

    <label class="typo__label">Simple select / dropdown</label>
    <multiselect
      v-model="value"
      :options="options"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
      :preselect-first="true"
    >
      <template #selection="{ values, isOpen }">
        <span class="multiselect__single" v-if="values.length" v-show="!isOpen"
          >{{ values.length }} options selected</span
        >
      </template>
    </multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
    <div>
      <h1>Selección múltiple</h1>
      <form v-on:submit.prevent="mostrarSeleccionados()">
        <select size="8" multiple v-model="opcionesSeleccionadas">
          <option v-for="opt in opciones" :key="opt">
            {{ opt }}
          </option></select
        ><br />
        <button>Mostrar seleccionados</button>
        <h6 style="color: blue">{{ seleccionados }}</h6>
      </form>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  name: "SeleccionMultiple",
  methods: {
    mostrarSeleccionados() {
      let aux = "";
      for (let option of this.opcionesSeleccionadas) {
        aux += option + ", ";
      }
      this.seleccionados = aux;
    },
  },
  data() {
    return {
      value: [],
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],

      opcionesSeleccionadas: [],
      opciones: [],
      seleccionados: "",
    };
  },
  created() {
    for (var i = 1; i <= 10; i++) {
      this.opciones.push("Elemento " + i);
    }
  },
};
</script>

<!-- Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>