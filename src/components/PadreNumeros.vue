<template>
    <div>
        <h1>Padre Numeros</h1>

        <div v-for="num in numeros" :key=num>
            <HijoNumero :numero="num"/>

        </div>
        
    </div>
</template>



<script>
    import HijoNumero from './HijoNumero.vue'
    export default{
        name:"PadreNumeros",
        components: {
            HijoNumero
        },
        data(){
            return{
                numeros: [1 , 4 , 6]
            }
        }

    }
</script>

<style>
</style>