<template>
    <div>
         <section class="post-list">
            <Recipe 
                v-for ="post in posts"
                :key="post.id"
                :id="post.id"
                :thumbnail="post.thumbnail" 
                :title="post.title"
                :previewtext="post.previewtext"
                :is-admin="isAdmin" />
     
         </section>

    </div>
</template>

<script>
    import Recipe from '@/components/AllRecepies/Recipe'
export default{
    components:{
        Recipe
    },
    props:{
        isAdmin:{
            type:Boolean,
            default:false
        },
        posts:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
 .post-list{
          display: flex;
          flex:row;
          padding: 20px;
          box-sizing: border-box;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          
 }
</style>