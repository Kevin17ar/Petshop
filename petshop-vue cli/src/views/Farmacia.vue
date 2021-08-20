<template>
            <section class="d-flex justify-content-around flex-wrap">
                <!-- <div class="container flex-wrap"> -->
                <div id="efecto" v-for="medicamento in medicamentos" :key="medicamento._id" class="row">
                    <div class="card mb-5" style="width: 18rem;">
                        <img :src="medicamento.imagen" class="card-img-top" :alt="medicamento.nombre">
                        <div class="card-body">
                            <h5 class="card-title">{{medicamento.nombre}}</h5>
                            <p class="card-title tw-bold">${{medicamento.precio}}</p>
                            <button type="button" class="btn btn-info">Comprar</button>
                            <div class="mt-2">
                                <button  type="button"
                                    class="btn btn-warning">Descripcion</button>
                            </div>
                            <p class="card-title fw-bold" v-if="medicamento.stock >= 5">¡Stock disponible!</p>
                            <p class="card-title text-danger fw-bold" v-if="medicamento.stock < 5">¡Ultimas unidades!</p>
                            <p class="card-title text-danger fw-bold" v-if="medicamento.stock == 0">¡Sin stock!</p>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </section>  
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            medicamentos: [],
        }
    },
    created(){
        axios.get("https://apipetshop.herokuapp.com/api/articulos")
        .then(res=> {
            this.medicamentos = res.data.response.filter(medicamento => medicamento.tipo == "Medicamento")
            console.log(this.medicamentos)
        })
        .catch(err => alert(err.message))
    

    },
    methods:{

    }
}
</script>
<style>

</style>