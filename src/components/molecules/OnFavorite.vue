<template>
  <FavoriteButton :image-url="image_url"/>
</template>
<script>
import FavoriteButton from  '../atoms/FavoriteButton'
export default {
  components:{
    FavoriteButton,
  },
  data(){
    return {
      image_url:"favorite_on.png"
    }
  }
}
</script>