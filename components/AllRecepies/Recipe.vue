<template>
  <nuxt-link :to=postlink class="post-preview">
        <div class="receipie-container">
           <div class="post-thumbnail"
           :style="{ backgroundImage: 'url(' + thumbnail + ')' }"> </div>
           <div class="post-content">
               <h1>{{title}}</h1>  
               <p>{{ content }}</p>
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
      content:{
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

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>