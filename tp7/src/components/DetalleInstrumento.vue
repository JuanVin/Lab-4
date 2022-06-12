<template lang="">
    
         <div style="width: 90%;">
            <div class="row mt-5 p-3 tarjeta">
                <div class="col-8">
                        <img class="mt-5 imagen" :src="'/img/'+data.imagen">
                        <hr style="margin-top:70px;">
                        <h3 class="mt-5">Características principales</h3>
                        <table class="table mt-3">
                            <tbody>
                                <tr>
                                    <td>Marca</td>
                                    <td>{{data.marca}}</td>
                                </tr>
                                <tr>
                                    <td>Modelo</td>
                                    <td>{{data.modelo}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr class="mt-5">
                        <h3 class="mt-5">Descripción</h3>
                        <p class="mt-3" style="color:grey;">{{data.descripcion}}</p>
                    </div>
                    <div class="col-4">
                        <div style="border:1px solid #e5e5e5; border-radius: 7px;" class="p-3">
                            <p class="mt-5" style="color:grey;">{{data.cantidadVendida}} vendidos</p>
                            <h3>{{data.instrumento}}</h3>
                            <h2 class="mt-3 mb-0">$ {{data.precio}}</h2>
                            <p class="mb-0" style="font-size: 17px;">en 12x ${{Math.round(data.precio / 12)}}</p>
                            <a href="#" style="font-size: 13px; text-decoration: none;">Ver los medios de pago</a>
                            <p class="mt-5 mb-0"> Costo de envio: </p>
                            <div v-if="data.costoEnvio === 'G'" style="color:green">
                                {{this.costoEnvio(data.costoEnvio)}}
                            </div>
                            <div style="color:yellow;" v-else>
                                {{this.costoEnvio(data.costoEnvio)}}
                            </div>
                            <button class="mt-5 d-block btn btn-primary btn-lg w-100" >Comprar ahora</button>
                            <button class="mt-3 d-block mb-5 btn btn-outline-primary btn-lg w-100">Agregar al carrito</button>
                            <a href="#" style="font-size: 13px; text-decoration: none;" class="d-inline" >Compra Protegida</a>
                            <p style="font-size: 13px;" class="d-inline"> , Se abrirá en una nueva ventana, recibí el producto que esperabas o te devolvemos tu dinero. </p>
                        </div>
                    </div>
                </div>
                <div class="mt-3 mb-3 text-right">
                    <p class="d-inline p-1" style="border-right: solid 1px grey;"> Publicación #<b>{{data.id}}</b> </p>
                    <a class="d-inline p-1" href="#" style="text-decoration: none">Denunciar</a>
                </div>
                <img class="mb-5 w-100" src="/img/propaganda.png">
            </div>

</template>
<script>
export default {
    name:"DetalleInstrumento",
    beforeMount() {
        this.url_id = this.$route.params.id;
        this.getInstrumento()
    },
    data(){
        return{
            url_id: null,
            data: null
        }
    },
    methods: {
        async getInstrumento(){
            let url = `http://localhost:3000/instruments/${this.url_id}`,
            options = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            },
            response
        try {
            response = await fetch(url, options)
            response = await response.json()
            this.data = response
            console.log(this.data)
        } catch (e) {
            console.log(e)
        }
        },
        costoEnvio(tipo){
        if (tipo === "G") {
            return `Envío gratis a todo el país`
        }
        return `Costo de envio interior de Argentina: ${tipo}`
      }
    },
    

}
</script>
<style scoped>
    .tarjeta{
        background-color: white; border-radius: 5px; border: "1px solid #e5e5e5";
    }
    .imagen{
        display: block; width: 400px; margin-left: auto; margin-right: auto
    }
</style>