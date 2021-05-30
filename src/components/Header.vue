<template>
  <header class="header">
      <h1 class="header__logo">
        <router-link :to="{path:'/login'}" class="link--header">Rese</router-link>
      </h1>
  </header>  
</template>
<style scoped>
  .header {
    height: 90px;
    width: 100%;
  }
  .link--header {
    color: hsl(44, 30%, 50%);
    cursor: pointer;
    display: inline;
  }
  .header__logo {
    color: #A69159;
    cursor: pointer;
    display: inline-block;
    font-size: 48px;
    margin: 25px 0 0 100px;
  }
</style>