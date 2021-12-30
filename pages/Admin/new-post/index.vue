<template>
    <div class="admin-new-post-page">
        <div class="new-post-form">
                <Adminform posts:loadedPosts @submit="onSubmited"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Adminform from '@/components/Admin/Adminform'
    export default {
          components:{
              Adminform
          },
          methods:{
            onSubmited(postData){
              // this.$store.dispatch('addPost',postData)
              // .then(()=>{
              //   this.$router.push("/admin")});
              
        axios
        .post("https://practicenuxt-ba183-default-rtdb.firebaseio.com/posts.json",

          {...postData,updatedDate:new Date()})
          .then(res => {
            this.$router.push
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