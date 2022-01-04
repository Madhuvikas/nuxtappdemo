<template>
    <div class="admin-new-post-page">
        <div class="new-post-form">
                <Adminform posts:loadedPosts @submit="onSubmited"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
         layout:'admin',
         middleware:'auth',
          methods:{
            onSubmited(postData){
              // this.$store.dispatch('addPost',postData)
              // .then(()=>{
              //   this.$router.push("/admin")});
              
       return axios
        .post(process.env.baseUrl + "/posts.json",

          {...postData,updatedDate:new Date()})
          .then(res => {
            this.$router.push("/admin")
          })
          .catch(e => console.log(e));
      }
          }
        };
    
</script>

<style  scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
  text-align:center;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}

</style>