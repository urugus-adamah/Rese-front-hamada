<template>
  <div>
    <!-- <OnFavoriteButton class="button-favorite" v-if="is_favorite" @clicked="changeFavorite"/> -->
    <OnFavoriteButton class="button-favorite" v-if="is_favorite" @clicked="unfavorite"/>
    <!-- <OffFavoriteButton @clicked="changeFavorite"  class="button-favorite" v-else/> -->
    <OffFavoriteButton @clicked="favorite"  class="button-favorite" v-else/>
  </div>
</template>
<script>
import OnFavoriteButton from '../atoms/OnFavorite';
import OffFavoriteButton from '../atoms/OffFavorite';
import axios from 'axios';
export default {
  props:{
    isFavorite:Boolean,
    userId:Number,
    shopId:Number,
  },
  data(){
    return {
      url:`http://127.0.0.1:8000/api/v1/shops/${this.shopId}/favorites`,
    }
  },
  computed:{
    is_favorite(){
      return this.isFavorite;
    },
    user_id(){
      return this.userId;
    },
  },
  components:{
    OnFavoriteButton,
    OffFavoriteButton
  },
  methods:{
    changeFavorite(){
      this.$emit("changeFavorite");
    },
    favorite(){
      axios({
        method:"put",
        url:this.url,
        data:{
          user_id:this.user_id,
        }
      }).then((response)=>{
        console.log(response);
      });
        // .put(this.url, {user_id:this.user_id})
        // .then((response)=>{
        //   console.log(response);
        // });
      this.changeFavorite();
    },
    unfavorite(){
      axios({
        method:"delete",
        url:this.url,
        data:{
          user_id:this.user_id,
        }
      }).then((response)=>{
        console.log(response);
      });
      this.changeFavorite();
    }
  },
}
</script>
<style scoped>
  .button-favorite{
    position: absolute;
    right: 20px;
    top: 20px;
  }
</style>