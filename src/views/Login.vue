<template>
  <div>
    <Header></Header>
    <div class="main">
      <p class="main__title">ログイン</p>
      <div class="main__form">
        <input placeholder="メールアドレス" type="email" />
        <input placeholder="パスワード" type="password" />
        <button>ログイン</button>
      </div>
      <a href="/register">会員登録</a>
    </div>
  </div>
</template>
<script>
  import Header from '../components/Header';
  export default {
    components:{
      Header
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
    border: 1px solid #CCC ;
    margin-bottom: 20px;
    padding: 10px;
  } */

  /* a{
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    text-align: center;
    color: hsl(200, 100%, 45%);
    text-decoration: none;
    font-size: 14px;
  } */
  /* a:hover{
    transition-duration: 0.4s;
    color: hsl(200, 100%, 80%);
  } */

  /* button {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: #FDFDFD;
    background-color:hsl(44, 30%, 50%);
    border:0;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }
  button:hover{
    background-color:hsl(44, 30%, 48%);
  } */
</style>