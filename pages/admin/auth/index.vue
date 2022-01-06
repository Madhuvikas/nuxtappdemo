<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <div class="fields">
            <label for="email">Email-Id</label>
            <input 
            type="email" 
            id="email" 
            v-model="email"
             placeholder="Your email.."/>
        </div>
        <div class="fields">
            <label for="Password">Password</label>
            <input type="password" 
            id="Password" 
            v-model="password" 
            placeholder="minimum 6 character.."/>
        </div>
         <div class="fields"> 
        <button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
        <button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>


export default {
 
  layout: 'admin',

  data() {
    return {
  isLogin: true,
  email:'',
  password:''
    }
},
methods:{
        onSubmit(){
          // let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
          //  + process.env.fbAPIKey;
          // if(!this.isLogin){
          //   authUrl ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" 
          // + process.env.fbAPIKey
          // }
          // this.$axios.$post(authUrl,{
          //   email:this.email,
          //   password:this.password,
          //   returnSecureToken:true
          // })
          // .then(result=>{
          //   console.log(result)
          //   })
          // .catch(e=> console.log(e));
          this.$store.dispatch("authenticateUser",{
            isLogin: this.isLogin,
            email: this.email,
            password: this.password
            
          })
          .then(()=>{
            this.$router.push('/admin');
            console.log("authenticate")
          });
          
        },
      },
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}
.fields{
  margin-bottom: 10px;
  padding: 10px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
@media screen and (max-width: 425px){
  .auth-containe{
    width: 60%;
  }
}
</style>

