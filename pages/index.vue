<<template>
  <div class="home-page">
    <div class="intro">
      <h1>Know Awsome Dishes</h1>
    </div>
      <RecepieList :posts="loadedPosts"/>
    </div>
  </div>
</template>

<script>
 
    import RecepieList from '@/components/AllRecepies/RecepieList'
     export default {
    
    components:{
      RecepieList
    },
    asyncData(context,callback){
      setTimeout(()=>{
        callback(null,{
          loadedPosts:[
        {
          id:'1',
         title:'first recepie',
          previewText:'Awsome Recepies',
          thumbnail:'http://i1.wp.com/creativekhadija.com/wp-content/uploads/2016/06/eid-recipe-rasmilai.jpeg'
          },
          {
            id:'2',
         title:'second recepie',
          previewText:'Delious Recepies',
          thumbnail:'http://i1.wp.com/creativekhadija.com/wp-content/uploads/2016/06/eid-recipe-rasmilai.jpeg'
          }
      ]

        });
      
      },1500);
    },
    
    created(){
      
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

/* .featured-recepies { */
   /* display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
 a{
   text-decoration: none;
   color: blue;
 } */

</style>