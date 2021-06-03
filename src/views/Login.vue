<template>
  <div>
    <Header />
    <div class="main">
      <p class="main__title">ログイン</p>
      <form class="main__form">
        <input placeholder="メールアドレス" type="email" v-model="email"/>
        <input placeholder="パスワード" type="password" v-model="password" />
        <MyButton @myButton-cliked="auth" caption="ログイン" />
        <router-link :to="{ path: '/register'}">会員登録</router-link>
      </form>
    </div>
  </div>
</template>
<script>
  import Header from '../components/Header';
  import MyButton from '../components/MyButton';
  export default {
    data(){
      return{
        email:"",
        password:""
      };
    },
    components:{
      Header,
      MyButton,
    },
    methods:{
      auth(){
        if(this.isValidForm()){
          this.$store.dispatch("login",{
            email:this.email,
            password:this.password,
          });
        } else {
          alert(this.errors);
        }
      },
      isValidForm(){
        this.errors=[];
        if(!this.email){
          this.errors.push("Email required")
        }
        if(!this.password){
          this.errors.push("Password required");
        }
        return !this.errors.length;
      },
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
</style>