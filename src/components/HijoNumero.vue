<template>
    <div>
        <h1 style="colo:red">Hijo Numero {{numero}} </h1>
        <button @click="callSumarNumerosParent">
            sumar {{numero}}
        </button>
        </div>
</template>

<script>

    export default{
        name: "HijoNumero",
        props: [ "numero" ],
        methods : {
            callSumarNumerosParent(){
                this.$emit("sumarNumeros",this.numero)
            }
        }

    }
</script>
