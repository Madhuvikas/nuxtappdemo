<template>
  <nuxt-link :to=postlink class="receipie-preview">
        <div class="receipie-container">
           <div class="receipie-thumbnail"
           :style="{ backgroundImage: 'url(' + thumbnail + ')' }"> </div>
           <div class="receipie-content">
               <h1>{{title}}</h1>  
               <p>{{ previewText }}</p>
            </div>   
          </div>
        </nuxt-link>


</template>
<script>
export default {
  name:'Recepie',
  props:{
    id:{
      type:String,
      required:true
    },
      title:{
      type:String,
      required:true
    },
    isAdmin:{
      type:Boolean,
       required:true 

    },
      previewText:{
      type:String,
      required:true
    },
      thumbnail:{
      type:String,
      required:true
    }
  },
  computed:{
    postlink(){
      return this.isAdmin ? '/admin/'+this.id :'/receipies/' +this.id
    }
  }
};
</script>
<style scoped>

.receipe {
  box-sizing: border-box;
  width: 200px;
  padding: 9px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #aaa;
  margin: 10px;
}
.receipie-container{
  margin:auto;
  text-align:center;
}
 .receipie-thumbnail {
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
} 
 .receipie-preview{
   /* border:1px solid red; */
   /* box-shadow:0 2px 2px green; */
   width:100%;
   display: flex;
   flex-direction: row;
 }
 @media (min-width:850px){
   .receipie-preview{
     width:400px;
     margin: 10px;
   }
 }
.receipie-thumbnail{
  width:100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}
.receipie-content{
  padding: 10px;
  text-align: center;
}
</style>