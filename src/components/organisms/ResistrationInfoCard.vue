<template>
  <div class="my-page__card">
    <h2 class="card__title">登録内容</h2>
    <form class="card__form">
      <ul>
        <li>
          <LabelAndP
            label="氏名"
            :p="user.name"
          />
        </li>
        <li>
          <LabelAndInput
            label="変更後" 
            :value="inputed_name" 
            @input="inputed_name = $event"
          />
        </li>
        <li>
          <LabelAndP
            label="メールアドレス"
            :p="user.email"
          />
        </li>
        <li>
          <LabelAndInput
            label="変更後" 
            :value="inputed_email" 
            @input="inputed_email = $event"
          />
        </li>
        <li>
          <LabelAndP
            label="パスワード"
            p="****"
          />
        </li>
        <li>
          <LabelAndInput
            label="新しいパスワード" 
            :value="inputed_password" 
            type="password"
            @input="inputed_password = $event"
          />
        </li>
        <li>
          <LabelAndInput
            label="再入力" 
            :value="confirm_password" 
            type="password"
            @input="confirm_password = $event"
          />
        </li>
        <li>
          <MyButton
            class="button--renew"
            caption="更新"
            @myButton-cliked="renreRegisteredContent"
            :disabled="is_disabled_button"
          />
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
import LabelAndP from '../molecules/LabelAndP';
import LabelAndInput from '../molecules/LabelAndInput';
import MyButton from '../atoms/MyButton';
import axios from 'axios';
export default {
  components:{
    LabelAndP,
    MyButton,
    LabelAndInput,
  },
  props:{
    userData:Object
  },
  data(){
    return{
      inputed_name:"",
      inputed_email:"",
      inputed_password:"",
      confirm_password:"",
      new_password:"",
      is_disabled_button:true,
    }
  },
  computed:{
    user(){
      return this.userData;
    },
    isBlankInput(){
      const is_blank = 
        !this.inputed_name &&
        !this.inputed_email &&
        !this.inputed_password &&
        !this.confirm_password
      return is_blank;
    },
    getNewPassword(){
      return function (){
        let new_password;
        if(this.inputed_password == this.confirm_password){
          new_password = this.inputed_password;
        }else{
          this.errors.push("入力されたパスワードが一致しません。");
          new_password = "";
        }
        return new_password;
      }
    },
    isMatchBeforeAfter(){
      return function(ref_value,edit_value){
        //edit_valueが空じゃない場合に、２つの値を評価する
        return (!!edit_value) && (ref_value == edit_value);
      }
    },
    isUpdatable(){
      return function () {
        this.errors=[];
        if(this.isMatchBeforeAfter(this.user.name,this.inputed_name)){
          this.errors.push("変更前の名前と一致しています。");
        }
        if(this.isMatchBeforeAfter(this.user.email,this.inputed_email)){
          this.errors.push("変更前のアドレスと一致しています。");
        }
        this.new_password = this.getNewPassword();
        if(this.isMatchBeforeAfter(this.user.password,this.new_password)){
          this.errors.push("変更前のパスワードと一致しています。");
        }
        return !this.errors.length;
      }
    },
    getNewRegisteredContent(){
      return function () {
        const registerd_content = {
          id:this.user.id,
          name:this.user.name,
          email:this.user.email,
          password:this.user.password,
        };
        if(this.inputed_name){
          registerd_content.name = this.inputed_name;  
        }
        if(this.inputed_email){
          registerd_content.email = this.inputed_email;  
        }
        if(this.new_password){
          registerd_content.password = this.new_password;  
        }

        return registerd_content;
      }
    }
  },
  methods:{
    async renreRegisteredContent(){
      if(confirm("登録内容を更新しますか?")){
        if(this.isUpdatable()){
          await axios
            .request({
              method:"put",
              url:`http://127.0.0.1:8000/api/v1/users/${this.user.id}`,
              data:this.getNewRegisteredContent(),
            })
            .then((response)=>{
              console.log(response); 
              alert("更新しました");
              this.reload();
            });
        }else{
          alert(this.errors);
        }
      }
    },
    changeButtonState(){
      this.is_disabled_button = this.isBlankInput;
    },
    reload(){
      this.$router.go({
        path:this.$router.currentRoute.path,
        force:true
      });
    }
  },
  watch:{
    "inputed_name":function(){
      this.changeButtonState();
    },
    "inputed_email":function () {
      this.changeButtonState();
    },
    "inputed_password":function () {
      this.changeButtonState();
    },
    "confirm_password":function () {
      this.changeButtonState();
    },
  },
}
</script>
<style scoped>
  .button--renew{
    padding: 2px;
    margin: 10px 0 0 auto;
    height: 100%;
    width: 65%;
  }
  .my-page__card{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 30px;
    width: 500px;
  }
  .card__title{
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .card__form{
    width: 100%;
  }
  .card__form li{
    display: flex;
    height: 30px;
    list-style: none;
    margin: 10px 0;
    width: 100%;
  }
</style>