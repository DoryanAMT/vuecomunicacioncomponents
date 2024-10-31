<template>
    <div>
        <h1 style="blue:red">Comic Component</h1>
        <h2>{{comic.titulo}}</h2>
        <button @click="seleccionarFavorito()">
            seleccionar favorito
        </button>
        <button @click="deleteComic()" style="background-color:red;color:white">
            eliminar comic
        </button>
        <p>{{comic.descripcion}}</p>
        <img :src="comic.imagen"/>
        <h4 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }">
        año: {{comic.year}}
        </h4>
    </div>
</template>

<script>

    export default{
        name: "ComicComponent",
        props: [ "comic", "index"],
        methods: {
            seleccionarFavorito(){
                this.$emit("seleccionarFavorito", this.comic)
            },
            deleteComic(){
                this.$emit("deleteComic", this.index)
            }
        }
    }

</script>
<style >
    @import './../assets/css/estiloscomic.css';
</style>