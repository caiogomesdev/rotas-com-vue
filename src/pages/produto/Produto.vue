<template>
  <div id="produto">
<h1>Tela produto</h1>
<button @click="IrParaHome">Ir para home</button>

  </div>
</template>

<script>
export default {
  name: "produto",
  methods: {
      IrParaHome(){
          this.$router.push('/')
      }
  }
}
</script>

<style scoped>

</style>