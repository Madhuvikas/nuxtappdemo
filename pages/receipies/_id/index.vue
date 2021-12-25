<template>
  <div class="maincontainer">
    <div class="heading">
     <h2 >Title of the post{{loadedPost.title}}</h2>
      <p>{{loadedPost.author}}</p>
      <div>{{loadedPost.updatedDate}}</div>
      </div>
    <div>
      <p>
      <a href="#">madhurijagtap0123@gmail.com</a>
      </p>
      <p>{{loadedPost.content}}</p>
      <nuxt-link to="/">Return</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
   asyncData(context,callback){
     setTimeout(()=>{
       callback(null,{
         loadedPost:{
           id:'1',
         title:"first postId(ID:" + context.route.params.id + ")",
          previewText:'Awsome Recepies',
          author:'madhuri',
          updatedDate:new Date(),
          content:"This is single post content",
          thumbnail:'http://i1.wp.com/creativekhadija.com/wp-content/uploads/2016/06/eid-recipe-rasmilai.jpeg'
         }
       });
     },1000);
   }
  }
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