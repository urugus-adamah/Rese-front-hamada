<template>
  <select v-model="selected"  name="value" class="card__select" @change="changedSelect">
    <option value=""></option>
    <option v-for="(value,id) in optionValues" :key=id :value="value.id" >{{value.name}}</option>
  </select>
</template>
<script>
export default {
  props:{
    values:Array,
  },
  computed:{
    optionValues(){
      return this.values;
    }
  },
  data(){
    return {
      selected:"",
    }
  },
  methods:{
    changedSelect(){
      this.$emit("selectedValue", this.selected);
    }
  }

}
</script>
<style scoped>
  .card__select {
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #CCC ;
    margin-bottom: 15px;
    padding: 10px;
  }
</style>