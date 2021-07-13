<template>
  <FavoriteButton :image-url="image_url" @switchImages="clicked"/>
</template>
<script>
import FavoriteButton from  './FavoriteButton'
export default {
  components:{
    FavoriteButton,
  },
  data(){
    return {
      image_url:"favorite_off.png"
    }
  },
  methods:{
    clicked(){
      this.$emit("clicked");
    }
  }
}
</script>