<<template>
    <div class="admin-page">
        <div class="new-post">
          <!-- <nuxt-link to:"/admin/new-recepie"> -->
            <button @click="$router.push('/admin/new-post/')">Create Post</button> 

            <!-- <nuxt-link to="/admin/new-post"><button>Create Post</button></nuxt-link> -->
          
        </div>
        <div class="last-post">
            <h1>Last Recepie</h1>
              <RecepieList  isAdmin/>
        </div>
    </div>
</template>

<script>
    import RecepieList from '@/components/AllRecepies/RecepieList'
     export default {
    
    components:{
      RecepieList
    },
    data(){
      return{
           isAdmin:{
      type:Boolean,
       required:true 

    }
      }
    }
    
        
    }
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.last-post { 
  text-align: center;
}

</style>