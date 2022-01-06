<<template>
    <div class="admin-page">
        <div class="new-post">
          <!-- <nuxt-link to:"/admin/new-recepie"> -->
            <button class="btn-style" @click="$router.push('/admin/new-post/')">Create Post</button> 
            <button class ="btn-style" @click="onLogout">Logout</button>
            <!-- <nuxt-link to="/admin/new-post"><button>Create Post</button></nuxt-link> -->
          
        </div>
        <div class="last-post">
            <h1>Last Recepie</h1>
              <RecepieList  :posts="loadedPosts" isAdmin/>
        </div>
    </div>
</template>

<script>
    
     export default {
       layout:'admin',
    middleware:['check-auth','auth'],
    data(){
      return{
      isAdmin:{
      type: Boolean,
      required: true 

    }
      }
    },
    computed:{
      loadedPosts(){
        return this.$store.getters.loadedPosts
      }
    },
    methods:{
      onLogout(){
        this.$store.dispatch("logout");
        this.$router.push("/admin/auth");
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