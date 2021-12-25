<template>
    <div class="admin-new-post-page">
        <div class="new-post-form">
            
                <Adminform/>

            
        </div>
    </div>
</template>

<script>
import Adminform from '@/components/Admin/Adminform'
    export default {
          components:{
              Adminform
          }
    }
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