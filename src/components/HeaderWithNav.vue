<template>
  <header class="header">
    <!-- コンポーネント化 -->
      <h1 class="header__logo">
        <router-link :to="{path:'/'}">Rese</router-link>
      </h1>
      <nav class="header__nav">
        <ul class="nav__list">
          <li>
            <router-link :to="{path:'/mypage'}">マイページ</router-link>
          </li>
          <li>
            <router-link @click.native="logout" to="/">ログアウト</router-link>
          </li>
        </ul>
      </nav>
  </header>  
</template>
<script>
  export default {

    methods:{
      logout(){
        this.$store.dispatch("logout");
      },
    }
  };

</script>
<style scoped>
  .header {
    align-items: flex-end;
    background-color: #FDFDFD;
    border-bottom: 2px solid #A69159;
    display: flex;
    height: 90px;
    justify-content: space-between;
    width: 100%;
  }
  .header a{
    color: hsl(44, 30%, 50%);
    cursor: pointer;
    display: inline;
  }
  .header a:hover{
    color: hsl(44, 30%, 65%);
    transition-duration: 0.4s;
  }
  .header__logo {
    color: #A69159;
    cursor: pointer;
    display: inline-block;
    font-size: 48px;
    margin: 25px 0 25px 100px;
  }
  .header__nav{
    margin: 25px 100px 25px 0;
    text-align: center;
    width: 250px;   
  }
  .nav__list{
    display: flex;
    font-size: 16px;
  }
  .nav__list > li{
    width: 100%;
  }
  .nav__list li:first-child{
    border-right: 1px solid #A69159;
  }
</style>