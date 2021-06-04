const app = Vue.createApp({
    data() {
        return {
            articulos: [],
            artJuguetes: [],
            selectOrder: [],
            cart: [],
            search: [],
        }
    },
    created() {

        fetch("https://apipetshop.herokuapp.com/api/articulos")
            .then(res => res.json())
            .then(data => {
                this.articulos = data.response;
                console.log(this.articulos)
            })
            .catch(err => alert(err.message))

    },
    methods: {
        addtoCart(articulo) {
            if (articulo.stock > 0) {
                this.cart.push(articulo)
                localStorage.setItem("cart", JSON.stringify(this.cart))
                console.log(this.cart)
                swal("Agregado al carrito");
            }
        },
        showDescripcion(articulo) {
            swal(articulo.descripcion)
        }
    },
    computed: {
        artMedicamentos() {
            let arts = this.articulos
            if (this.selectOrder.length == 0) {
                return arts.filter(articulo => articulo.tipo == "Medicamento")
            }
            if (this.selectOrder.includes("mayor")) {
                return arts.filter(articulo => articulo.tipo == "Medicamento").sort((a, b) => b.precio - a.precio)
            } else if (this.selectOrder.includes("menor")) {
                return arts.filter(articulo => articulo.tipo == "Medicamento").sort((a, b) => a.precio - b.precio)
            }
        },
        // cartBuys() {
        //     let art= this.cart
        //     console.log(art)
        //     return art
        //     // array.forEach(articulo => {
        //     //     if (!array.includes(articulo.nombre)) {
        //     //         array.push(articulo.nombre)
        //     //     }
        //     // })
        //     // console.log(array)
        //     // return array
        // },
        artJuego() {
            let arts = this.articulos
            if (this.selectOrder.length == 0) {
                return arts.filter(articulo => articulo.tipo == "Juguete")
            }
            if (this.selectOrder.includes("mayor")) {
                return arts.filter(articulo => articulo.tipo == "Juguete").sort((a, b) => b.precio - a.precio)
            } else if (this.selectOrder.includes("menor")) {
                return arts.filter(articulo => articulo.tipo == "Juguete").sort((a, b) => a.precio - b.precio)
            }
        },
        amountCart() {
            return this.cart.length
        },
    }
})
app.mount("#app")
