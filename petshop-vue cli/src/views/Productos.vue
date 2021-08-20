<template>
            <section class="d-flex justify-content-around flex-wrap">
                <!-- <div class="container flex-wrap"> -->
                <div id="efecto" v-for="producto in mostrarTipo" :key="producto._id" class="row">
                    <div class="card mb-5" style="width: 18rem;">
                        <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre">
                        <div class="card-body">
                            <h5 class="card-title">{{producto.nombre}}</h5>
                            <p class="card-title tw-bold">${{producto.precio}}</p>
                            <button type="button" class="btn btn-info">Comprar</button>
                            <div class="mt-2">
                                <button @click="showDescripcion(producto)" type="button"
                                    class="btn btn-warning">Descripcion</button>
                            </div>
                            <p class="card-title fw-bold" v-if="producto.stock >= 5">¡Stock disponible!</p>
                            <p class="card-title text-danger fw-bold" v-if="producto.stock < 5">¡Ultimas unidades!</p>
                            <p class="card-title text-danger fw-bold" v-if="producto.stock == 0">¡Sin stock!</p>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </section>         
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
export default {
    data(){
        return{
            productos: [],
        }
    },
    created(){
        axios.get("https://apipetshop.herokuapp.com/api/articulos")
        .then(res=> {
            this.productos = res.data.response
            console.log(this.productos)
        })
        .catch(err => alert(err.message))
    

    },
    methods:{
        showDescripcion(producto) {
            swal(producto.descripcion)
        }

    },
    computed:{
        mostrarTipo(){
            let tipoProducto= this.$route.params.tipo == "farmacia"? "Medicamento" : "Juguete"
            console.log(tipoProducto)
            return this.productos.filter(producto => producto.tipo == tipoProducto)

        }
    }
}
</script>
<style>

</style>