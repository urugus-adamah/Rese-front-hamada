<template>
 <div>
   <div class="header">
       <h1 class="logo">Rese</h1>
   </div>
   <div class="container">
    <div class="card">
      <p>登録完了</p>
      <div class="message">
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

<style scoped>
.header {
  height: 90px;
  width: 100%;
}
.logo {
  display: inline-block;
  cursor: pointer;
  font-size: 48px;
  color: #A69159;
  margin: 25px 0 0 100px;
}
.container{
  text-align: center;
}
.card {
  display: inline-block;
  margin: 180px auto;
  background-color: #FDFDFD;
  border-radius: 20px;
  padding: 60px;
  text-align: left;
}

.card > p {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #4D4D4D;
  font-family: 'Meiryo';
}

.message{
  line-height: 1.3em;
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
  color: hsl(200, 100%, 80%);
}

</style>