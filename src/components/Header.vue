<template>
  <nav id="Header">
      <h1>Caio Gomes Dev</h1>
      <ul>
          <li><router-link to="/" active-class="ativo" exact>Home</router-link></li>
          <li><router-link to="/produto/2" active-class="ativo">Produto</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: "Header",

}
</script>

<style scoped>
#Header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
}
h1{
    font-weight: 200;
}
ul{
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
ul li:not(:first-child){
    margin-left: 5px;
}
a{
    text-decoration: none;
    color: #000;

    padding: 5px 10px;
    border-radius: 4px;
    background-color: brown;
    color: #fff;
}
.ativo{
    background-color: #000;
}
</style>