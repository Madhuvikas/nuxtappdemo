<template>
    <div class="">
        <form>
            <div class="form-field">
              <label for="emailid">Email-Id</label>
              <input type="text" name="emailid" id="emailid" />
            </div>
            <div class="form-field">
              <label for="emailid">Password</label>
              <input type="text" name="emailid" id="emailid" />
            </div>
            
            <div class="form-field">
              <label for="emailid">Email-Id</label>
              <button type="submit" name="emailid" id="login" @click="">{{isLogin} ? 'Login' : 'Sign Up'}</button>
            </div>

            
        
        </form>
    </div>
</template>
<script>
    import Adminform from '@/components/Admin/Adminform'
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
   Adminform
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped>
  
.admin-auth-page {
  padding: 20px;
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
</style>

       