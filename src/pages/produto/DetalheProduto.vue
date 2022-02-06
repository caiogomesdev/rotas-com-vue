<template>
  <div id="detalheproduto">
      <span>Esse é o produto <strong>{{id}}</strong></span>
      <br />
      <router-link to="/produto">Voltar</router-link>

  </div>
</template>

<script>
export default {
    name: 'detalheproduto',
    props: ['id']

}
</script>

<style>

</style>