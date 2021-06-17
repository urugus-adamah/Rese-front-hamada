<template>
  <div>
    <Header />
    <div class="main">
      <h2 class="main__title">会員登録</h2>
      <form class="main__form">
        <input placeholder="氏名" type="text" v-model="name" />
        <input placeholder="メールアドレス" type="email" v-model="email"/>
        <input placeholder="パスワード" type="password" v-model="password"/>
        <input placeholder="パスワード(確認用)" type="password" v-model="conf_password" />
        <MyButton @myButton-cliked ="auth" caption="登録" />
        <router-link :to="{ path: '/login'}">ログイン</router-link>
      </form>
    </div>
  </div>
</template>
<script>
  import Header from '../components/Header';
  import MyButton from '../components/atoms/MyButton';
  import axios from 'axios';
  export default {
    components:{
      Header,
      MyButton
    },
    data(){
      return{
        name:"",
        email:"",
        password:"",
        conf_password:"",
        errors:[],
      };
    },
    computed:{
      isValidForm(){
        return function(){
          this.errors=[];
          if(!this.name){
            this.errors.push("Name required");
          }
          if(!this.email){
            // アドレスの正規表現
            this.errors.push("Email required");
          }
          if(!this.password || !this.conf_password){
            this.errors.push("Password required");
          }
          if(this.password != this.conf_password){
            this.errors.push("Password mismatch");
          }
          return !this.errors.length;
        };
      }
    },
    methods:{
      auth(){
        if (this.isValidForm()) {
          const url = "http://localhost:3000/api/v1/register";
          axios
            .post(url,{
              name:this.name,
              email:this.email,
              password:this.password,
            })
            .then((response) => {
              console.log(response);
              this.$router.push({name:'Thanks'});
            })
            .catch((error) => {
              alert(error);
            });
        } else {
          alert(this.errors);
        }
      },
      
    },
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