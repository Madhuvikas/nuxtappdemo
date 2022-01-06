<template>





    <div class="form-details">
        <form @submit.prevent="submit" id="receipie">
            <div class="inputfield">
                <label for="name">Username</label>
                <input type="text" id="name" v-model="formvalues.name" />
            </div>
            <div class="inputfield">
                <label for="emailid">EmailId</label>
                <input type="text" id="emialid" v-model="formvalues.emailid"/>
            </div>
            <div class="inputfield">
                <label for="course"></label> 
                <select id="course" v-model="formvalues.course">
                    <option value="">select course</option>
                    <option value="Nuxtjs">Nuxtjs</option>
                    <option value="shopify">Shopify</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            <div class="">
                <button class="button" :class="btn" type="submit" >Save</button>
                <button class="cancel"  type="button" @click="onClick()">Cancel</button>
            </div>
            </form>

    </div>
</template>

<script>
    export default {
        name:'InputField',
        props:{
            btn:{
                type:String,
                default:''
            }
        },
            data(){
                return{
                    formvalues:{
                        name:'',
                        emailid:'',
                        course:''
                    },
                }
            },
            methods:{
                onSave(){
                    console.log(this.formvalues);
                },
                onClick(){
                    this.$router.push("/admin")
                }
            }
    }
    
</script>

<style scoped>
form{
    max-width:420px;
    margin:30px auto;
    text-align: center;
    border:2px solid black;
    box-shadow:lightblue;
 }
 .form-details{ 
     text-align:center;
 }
.inputfield{
    text-align: center;
   
}
.inverted{
    background-color: white;
    color: blue;
    border:1px solid green;
}

.inverted:hover,.inverted:active{
    color: #ccc;
    border: 1px solid transparent;
}
.cancel{
    background-color: grey;
    color: white;
}
.btn{
    cursor: pointer;
    padding:5px;
    border: 1px solid black;
    font: inherit;
}
</style>