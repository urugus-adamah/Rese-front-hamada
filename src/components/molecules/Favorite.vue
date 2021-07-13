<template>
  <div>
    <OnFavoriteButton class="button-favorite" v-if="is_favorite" @clicked="changeFavorite"/>
    <OffFavoriteButton @clicked="changeFavorite"  class="button-favorite" v-else/>
  </div>
</template>
<script>
import OnFavoriteButton from '../atoms/OnFavorite';
import OffFavoriteButton from '../atoms/OffFavorite';
export default {
  props:{
    isFavorite:Boolean,
  },
  computed:{
    is_favorite(){
      return this.isFavorite;
    }
  },
  components:{
    OnFavoriteButton,
    OffFavoriteButton
  },
  methods:{
    changeFavorite(){
      this.$emit("changeFavorite");
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