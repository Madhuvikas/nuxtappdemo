<template>
<section class="receipies">
    <Recipe thumbnail="https://keeprecipes.com/sites/keeprecipes/files/cauliflower-tots-2.jpg" 
    title="Amazing Donuts"
    previewText="Some Delicious food"
     id="1" />
       <Recipe thumbnail="https://keeprecipes.com/sites/keeprecipes/files/cauliflower-tots-2.jpg" 
    title="Amazing Donuts"
    previewText="Some tasty Delicious food"
     id="2" />
       <Recipe thumbnail="https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2018/04/19/mrtrending0475-2000.jpg" 
    title="sweet dish"
    previewText="junk food"
     id="3" />
     
    </section>
</template>

<script>
// import Recipe from '@components/Recipe'
import Recipe from '../../components/Recipe.vue'
    export default {
        components:{
            Recipe
        }
        
    }
</script>

<style scoped>
.receipies{

display:flex;
flex-flow: row wrap;
margin:10px;
text-align: center;
justify-content: center;
align-items: center;
}

</style>