<template>
    <div class="main-container">
        <div class="container">
            <form @submit.prevent="submit" id="receipie">
              <div class="row">
                <div class="col-25">
                    <label for="name">User Name</label>
                </div>
                <div class="col-75">
                    <input type="text" id="name" v-model="formvalues.name" placeholder="Your name.."/>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="emailid">EmailId</label>
                </div>
                <div class="col-75">
                  <input type="text" 
                  id="emailid"  
                  placeholder="Your EmailId.." 
                  v-model="formvalues.emailid"
                  @input="$emit('input', $event.target.value)"/>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                <label for="course">Course</label>
              </div>
                <div class="col-75">
                    <select id="course" v-model="formvalues.course">
                        <option value="vue">Vue</option>
                        <option value="nuxt">Nuxt</option>
                        <option value="shopify">Shopify</option>
                    </select>
                </div>
            </div>
               
            <br>
                <div class="row">
                   <button class="button"  type="submit" @click="onSave()">Save</button>
                   <button class="cancel"  type="button" @click="onClick()">Cancel</button>
                </div>
 </form>
         

    </div>
    </div>
</template>

<script>
    export default {
         name:'InputField',
        props:{
            btn:{
                type:String,
                default:''
            },
            post:{
                type:Object,
                required:false

            }
        },
            data(){
                return{
                    formvalues:this.post 
                    ?{...this.post}
                    :{
                        name:'',
                        emailid:'',
                        course:''
                    }
                };
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
* {
  box-sizing: border-box;
}

input[type=text], select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
.button, .cancel{
    font:inherit;
    color: white;
    padding:5px;
    cursor:pointer;
    border:1px solid transparent;
     background-color:lightseagreen;
    }

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.cancel{
    background-color:lightseagreen;
    color:white;
    border:1px solid transparent;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}

</style>