<template>
    <div class="admin-post-page">
        <div class="update-form">
            <Adminform :post="loadedPost"/>
         </div>   


    </div>
</template>

<script>
import Adminform from '@/components/Admin/Adminform'
    export default {
        layout:'admin',
        components:{
            Adminform
        },
        data(){
            return{
                loadedPost:{
                    name:'madhuri',
                    emailid:'madhurijagtap0123@gmail.com',
                    course:[]
                }
            }
        }
    }
</script>

<style  scoped>

</style>