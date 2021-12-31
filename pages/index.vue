<template>
  <div class="home-page">
    <div class="intro">
      <h1>Know Awsome Recepies</h1>
    </div>
      <RecepieList :posts="loadedPosts"/>
    </div>
</template>

<script>
 
     export default {
    
   
    computed:{
      loadedPosts(){
        return this.$store.getters.loadedPosts
      }
    }
    }
</script>

<style scoped>
  .intro {
  padding: 30px;
  box-sizing: border-box;
}

.intro h1 {
    margin-top: 50px; 
    width: 100%;
    font-size: 1.5rem;
    color: mediumvioletred;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>