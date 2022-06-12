<template lang="">
    <div class="centrar-formulario">
        <div class="mt-5 w-50">
        <div class="alert alert-secondary" v-if="respuesta" role="alert">
            {{respuesta.message}}
            </div>
       
            <div class="form-group">
                <label for="instrumento" class="p-1">Instrumento</label>
                <input type="text" v-model="instrumento" class="form-control" id="instrumento" placeholder="Nuevo nombre">
            </div>
            <div class="form-group">
                <label for="marca" class="p-1">Marca</label>
                <input type="text" v-model="marca" class="form-control" id="marca" placeholder="Marca">
            </div>
            <div class="form-group">
                <label for="modelo" class="p-1">Modelo</label>
                <input type="text" v-model="modelo" class="form-control" id="modelo" placeholder="Modelo">
            </div>
            <div class="form-group">
                <label for="precio" class="p-1">Precio</label>
                <input type="number" v-model="precio" class="form-control" id="precio" placeholder="Modelo">
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea class="form-control" v-model="descripcion" id="descripcion" rows="3"></textarea>
            </div>
            <div class="form-group mt-3">
                <button class="btn btn-success" @click="traerInformacion()">{{(url_id) ?
                    "Actualizar"
                    :
                    "Cargar"
                }}</button>
                <button class="btn btn-primary" @click="this.$router.go(-1)">Volver</button>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    name: "FormularioInstrumento",
    beforeMount() {
        this.url_id = this.$route.params.id;
    },
    data(){
        return{
            url_id: null,
            instrumento: null,
            marca: null,
            modelo: null,
            precio: null,
            descripcion: null,
            respuesta: null
        }
    },
    methods: {
        traerInformacion(){
            let body
            if(this.url_id){
                body = {
                    id: this.url_id,
                    instrumento: this.instrumento,
                    marca: this.marca,
                    modelo: this.modelo,
                    precio: this.precio,
                    descripcion: this.descripcion
                }
                this.actualizarInstrumento(body)
            }else{
                body = {
                    instrumento: this.instrumento,
                    marca: this.marca,
                    modelo: this.modelo,
                    precio: this.precio,
                    descripcion: this.descripcion,
                    activo: 1
                }
                this.nuevoInstrumento(body)
            }
        },
        async actualizarInstrumento(body){
            let url = `http://localhost:3000/updateInstrument`,
                options = {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify(body),
                    mode: 'cors'
                },
                response
            try {
                response = await fetch(url, options)
                response = await response.json()
                
            } catch (e) {
                console.log(e)
            }
            this.respuesta = response
        },
        async nuevoInstrumento(body){
        let url= `http://localhost:3000/createInstrument`,
            options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(body),
                mode: 'cors'
            },
            response

        try {
            response = await fetch(url, options)
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        this.respuesta = response
        }
    }
}
</script>
<style scoped>
    .centrar-formulario{
        display: flex;
        justify-content: center
    }
</style>