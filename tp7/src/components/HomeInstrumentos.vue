<template>
  <div class="hello">
    <div v-if="instrumentos.length > 0">
      <ListaInstrumento :instrumentos="instrumentos"></ListaInstrumento>
    </div>
    <div v-else>Cargando tonto</div>
  </div>
</template>

<script>
import ListaInstrumento from "./ListaInstrumentos";
export default {
  name: "HomeInstrumentos",
  components: {
    ListaInstrumento: ListaInstrumento,
  },
  data() {
    return {
      instrumentos: [],
    };
  },
  methods: {
    async getInstrumentos() {
      let url = "http://localhost:3000/instruments",
        options = {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
        },
        response;

      try {
        response = await fetch(url, options);
        response = await response.json();
        this.instrumentos = response;
      } catch (e) {
        console.log(e);
      }
    },
  },
  beforeMount() {
    this.getInstrumentos();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
