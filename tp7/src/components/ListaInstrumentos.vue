<template lang="">
    <div v-for="(instrumento, index) in this.data" :key="instrumento.id" class="mt-5">
        <div class="row">
            <div class="col centrarImagen">
                <a :href="'/detalle/'+instrumento.id"><img :src="'/img/'+instrumento.imagen" alt=""></a>
            </div>
            <div class="col p-3">
                <h4>{{instrumento.instrumento}}</h4>
                <h3>{{instrumento.precio}}</h3>
                <div v-if="instrumento.costoEnvio === 'G'" class="colorCostoEnvio">
                    {{this.costoEnvio(instrumento.costoEnvio)}}
                </div>
                <div style="color:yellow;" v-else>
                    {{this.costoEnvio(instrumento.costoEnvio)}}
                </div>
                <p>
                    {{instrumento.cantidadVendida}} Vendidos
                </p>
                <a :href="'/modificar/'+instrumento.id" class="btn btn-success">Modificar</a>
                <button class="btn btn-warning" @click="borrarInstrumento(instrumento.id, index)">Borrar</button>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
export default {
  name: "ListaInstrumento",
  props: ["instrumentos"],
  data(){
      return {
          data: this.instrumentos
      }
  },
  methods: {
      costoEnvio(tipo){
        if (tipo === "G") {
            return `Envío gratis a todo el país`
        }
        return `Costo de envio interior de Argentina: ${tipo}`
      },
      async borrarInstrumento(id, index){
        let url=`http://localhost:3000/deleteInstrument/${id}`,
            options= {
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
        } catch (e) {
            console.log(e)
        }
        if(response.status === 200){
            this.data.splice(index,1)
            console.log(this.data)
        }
      }
  }
};
</script>
<style scoped>
.colorCostoEnvio {
    color: green;
}
.centrarImagen {
    display: flex;
    justify-content: center;
}
</style>
