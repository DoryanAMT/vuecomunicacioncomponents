<template>
    <div>
        <h1>Padre Numeros</h1>
        <button @click="generarNumero()">Nuevo número</button>
        <h3 style="color:fuchsia"> la suma es {{suma}}</h3>
        <div v-for="num in numeros" :key=num>
            <HijoNumero :numero="num"
            v-on:sumarNumeros="sumarNumeros"/>

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
                numeros: [1 , 4 , 6],
                suma : 0,
            }
        },
        methods : {
            generarNumero(){
                let random = parseInt(Math.random() * 100)+1;
                this.numeros.push(random)
            },
            sumarNumeros(numero){
                this.suma += numero;
            }
        }

    }
</script>

<style>
</style>