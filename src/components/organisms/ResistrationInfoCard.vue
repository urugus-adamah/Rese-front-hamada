<template>
  <div class="my-page__card">
    <h2 class="card__title">登録内容</h2>
    <form class="card__form">
      <ul>
        <li>
          <LabelAndP :label="name.label" :p="name.value" />
        </li>
        <li>
          <LabelAndInput
            :label="inputed_name.label" 
            :value="inputed_name.value" 
            @input="inputed_name.value = $event"
          />
        </li>
        <li>
          <LabelAndP :label="email.label" :p="email.value"/>
        </li>
        <li>
          <LabelAndInput
            :label="inputed_email.label" 
            :value="inputed_email.value" 
            @input="inputed_email.value = $event"
          />
        </li>
        <li>
          <LabelAndP :label="password.label" p="****"/>
        </li>
        <li>
          <LabelAndInput
            :label="inputed_password.label" 
            :value="inputed_password.value" 
            type="password"
            @input="inputed_password.value = $event"
          />
        </li>
        <li>
          <LabelAndInput
            :label="confirm_password.label" 
            :value="confirm_password.value" 
            type="password"
            @input="confirm_password.value = $event"
          />
        </li>
        <li>
          <MyButton class="button--renew" caption="更新" @myButton-cliked="renew"  :disabled="is_disabled_button" />
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
    user:{
      type:Object,
    },
  },
  data(){
    // 親から渡されるはずのデータ
    return{
      user_data: this.user,
      name:{
        label:"氏名",
        value:this.user.name,
      },
      inputed_name:{
        label:"変更後",
        value:"",
      },
      email:{
        label:"メールアドレス",
        value:this.user.email,
      },
      inputed_email:{
        label:"変更後",
        value:"",
      },
      password:{
        label:"パスワード",
        value:this.user.password,
      },
      inputed_password:{
        label:"新しいパスワード",
        value:"",
      },
      confirm_password:{
        label:"再入力",
        value:"",
      },
      new_password:'',
      test_data:'',
      is_disabled_button:true,
    }
  },
  computed:{
    isBlankInput(){
      const is_blank = 
        !this.inputed_name.value &&
        !this.inputed_email.value &&
        !this.inputed_password.value &&
        !this.confirm_password.value
      return is_blank;
    },
    newPassword(){
      return function (){
        let new_password;
        if(this.inputed_password.value == this.confirm_password.value){
          new_password = this.inputed_password.value;
        }else{
          this.errors.push("入力されたパスワードが一致しません。");
          new_password = "";
        }
        return new_password;
      }
    },
    isMatchEditValue(){
      return function(ref_value,edit_value){
        //edit_valueが空の場合は評価しない
        return (!!edit_value) && (ref_value == edit_value);
      }
    },
    isUpdatable(){
      return function () {
        this.errors=[];
        if(this.isMatchEditValue(this.name.value,this.inputed_name.value)){
          this.errors.push("変更前の名前と一致しています。");
        }
        if(this.isMatchEditValue(this.email.value,this.inputed_email.value)){
          this.errors.push("変更前のアドレスと一致しています。");
        }
        if(this.isMatchEditValue(this.password.value,this.newPassword())){
          this.errors.push("変更前のパスワードと一致しています。");
        }
        return !this.errors.length;
      }
    },
    getRegisteredContent(){
      return function (id) {
        const new_user = {
          id:id,
          name:'',
          email:'',
          password:'',
        };
        if(this.inputed_name.value){
          new_user.name = this.inputed_name.value;  
        }else{
          new_user.name = this.name.value;
        }
        if(this.inputed_email.value){
          new_user.email = this.inputed_email.value;  
        }else{
          new_user.email = this.email.value;
        }
        const password = this.newPassword();
        if(password){
          new_user.password = password;  
        }else{
          new_user.password = this.password.value;
        }
        return new_user;
      }
    }
  },
  methods:{
    async renew(){
      if(confirm("登録内容を更新しますか?")){
        if(this.isUpdatable()){
          const url = "http://localhost:3000/api/v1/users/1";
          const user_items = axios.put(url,this.getRegisteredContent(1));
          const user = await user_items;
          console.log(user.data);
          alert("更新しました ");
          this.reload();
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
    "inputed_name.value":function(){
      this.changeButtonState();
    },
    "inputed_email.value":function () {
      this.changeButtonState();
    },
    "inputed_password.value":function () {
      this.changeButtonState();
    },
    "confirm_password.value":function () {
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