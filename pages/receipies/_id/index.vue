<template>
  <div class="maincontainer">
    <div class="heading">
     <h2 >Title of the post {{loadedPost.title}}</h2>
      <p>{{loadedPost.author}}</p>
      <div>{{loadedPost.updatedDate | date}}</div>
      <div>
      </div>
  
      <p>
      <a href="#">madhurijagtap0123@gmail.com</a>
      </p>
      <p>{{loadedPost.content}}</p>
      <nuxt-link to="/">Return</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
  
     asyncData(context) {
    return axios.get('https://practicenuxt-ba183-default-rtdb.firebaseio.com/posts/'
     + context.params.id + 
     '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  }
};
</script>

<style scoped>
.maincontainer{
  text-align: center;
  justify-content: center;
  align-items: center;
  margin:0 auto;
}
.heading{
  border-bottom: 1px solid green;
  width: 100%;
}
@media (min-width: 768px) {
  .heading {
    width: 600px;
    margin: auto;
  }
}

</style>