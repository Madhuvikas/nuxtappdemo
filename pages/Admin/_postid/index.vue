<template>
  <div class="admin-post-page">
    <section class="update-form">
      <Adminform :post="editedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import axios from "axios"
export default {
  layout: 'admin',
  // middleware:'auth',
  
  asyncData(context){
  return context.app.$axios
      .$get(process.env.baseUrl + "/posts/" + context.params.postid + ".json")
      .then((data) => {
        return { editedPost: { ...data, id: context.params.postid } };
      })
      .catch((e) => context.error(e));
  },
  created(){
    console.log(this.$store);
  },
  methods:{
    onSubmitted(editedPost){
        this.$store.dispatch('editPost',editedPost)
        .then(()=>{
          this.$router.push('/admin');
        });


    //  axios.put( process.env.baseUrl + "/posts/" +
    //  this.$route.params.postid + 
    //  ".json",editedPost)
    //  .then(res=>{
    //    this.$router.push('/admin')
    //  })
    //  .catch(e=> console.log(e))
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
