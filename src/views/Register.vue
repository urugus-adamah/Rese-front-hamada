<template>
  <div>
    <Header></Header>
    <div class="main">
      <p class="main__title">会員登録</p>
      <form class="main__form">
        <input placeholder="氏名" type="text" />
        <input placeholder="メールアドレス" type="email" />
        <input placeholder="パスワード" type="password" />
        <input placeholder="パスワード(確認用)" type="password" />
        <!-- <button>登録</button> -->
        <MyButton :caption="caption"></MyButton>
        <!-- <a href="/login">ログイン</a> -->
        <router-link :to="{ path: '/login'}">ログイン</router-link>
      </form>
    </div>
  </div>
</template>
<script>
  import Header from '../components/Header';
  import MyButton from '../components/MyButton';
  export default {
    components:{
      Header,
      MyButton
    },
    data(){
      return{
        caption:"登録"
      };
    }
  };
</script>
<style scoped>
  .main {
    background-color: #FDFDFD;
    border-radius: 20px;
    margin: 180px auto;
    padding: 40px 30px;
    width: 350px;
  }

  .main__title {
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  .main__form {
    text-align: center;
  }

  /* input {
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #CCC;
    margin-bottom: 20px;
    padding: 10px;
  } */
</style>