<template>
  <div id="home3">
    <h1>DELETE PROFILE</h1>
    <p>Enter Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <br /><br />
    <button @click="deleteUser">Delete Profile</button>
  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
         data() {
            return {
               email: "",
               password: "",
               loginStatus: "",
            }
        },
        methods: {
            deleteUser: function() {
                this.loginStatus = "Logged In",
                axios.request({
                    method: "DELETE",
                    url: "https://tweeterest.ml/api/users",
                    headers: {
                          "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        password: this.password,
                    }
                }).then((response) =>{
                    cookies.remove('session');
                    console.log(response)
                    this.deleteUser = "Success"
                    cookies.remove('session', response.data.loginToken);
                    this.$router.push("/login")
                })
            
                
            }
        }
    }
    
                 
  
</script>

<style lang="scss" scoped>
#home3 {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
  justify-items: center;
  align-items: center;
  background-color: burlywood;
  font-family: Roboto;
}
</style>