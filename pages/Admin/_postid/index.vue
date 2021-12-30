<template>
  <div class="admin-post-page">
    <section class="update-form">
      <Adminform :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import axios from "axios"
import Adminform from '@/components/Admin/Adminform'

export default {
  layout: 'admin',
  components: {
    Adminform
  },
  asyncData(context){
    return axios.get("https://practicenuxt-ba183-default-rtdb.firebaseio.com/posts/" +
     context.params.postId + 
     ".json")
    .then((res)=>{
      return{
        loadedPost:{...res.data,id:context.params.postId}
    }
    })
    .catch(e=> context.error(e));
  },
  methods:{
    onSubmitted(editedPost){
        // this.$store.dispatch('editpost',editedPost)
        // .then(()=>{
        //   this.$router.push('/admin');
        // });


     axios.put("https://practicenuxt-ba183-default-rtdb.firebaseio.com/posts/" +
     this.$route.params.postId + 
     ".json",editedPost)
     .then(res=>{
       this.$router.push('/admin')
     })
     .catch(e=> console.log(e))
    }
  
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
