<template>
 <div>
   <Header></Header>
   <div class="card">
     <p>会員登録</p>
     <div class="form">
       <input placeholder="氏名" type="text" />
       <input placeholder="メールアドレス" type="email" />
       <input placeholder="パスワード" type="password" />
       <input placeholder="パスワード(確認用)" type="password" />
       <button>登録</button>
     </div>
      <a href="/login">ログイン</a>
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
  .card {
    margin: 180px auto;
    width: 350px;
    background-color: #FDFDFD;
    border-radius: 20px;
    padding: 40px 30px;
  }

  .card p {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #4D4D4D;
    font-family: 'Meiryo';
  }

  .form {
    text-align: center;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    margin-bottom: 20px;
    padding: 10px;
    color: #4D4D4D;
    font-size: 14px;
  }

  a{
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    text-align: center;
    color: hsl(200, 100%, 45%);
    text-decoration: none;
    font-size: 14px;
  }
  a:hover{
    transition-duration: 0.4s;
    color: hsl(200, 100%, 80%);
  }

  button {
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
  }
</style>