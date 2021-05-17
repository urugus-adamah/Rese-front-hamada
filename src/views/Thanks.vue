<template>
 <div>
   <Header></Header>
   <div class="main">
    <div class="main__container">
      <p class="container__title">登録完了</p>
      <div class="container__content">
        <p>この度はご登録いただきありがとうございます。</p>
        <p>登録確認メールを送信しました。</p>
        <p>1時間以上経過しても受信されない場合は、</p>
        <p>メールアドレスに誤りがある可能性があります。</p>
        <p>お手数ですが、マイページにて</p>
        <p>ご登録メールアドレスが正しいかご確認ください。</p>
      </div>
        <a href="/login">ログイン</a>
    </div>
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

  .main{
    text-align: center;
  }
  .main__container {
    background-color: #FDFDFD;
    border-radius: 20px;
    display: inline-block;
    margin: 180px auto;
    padding: 60px;
    text-align: left;
  }

  .container__title {
    color: #333;
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .container__content{
    line-height: 1.3em;
  }

  /* a{
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
  } */

</style>