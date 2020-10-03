<template>
    <div id="login">
<h1>Welcome to Twitter Clone</h1>
<p>EMAIL</p>
<input type="text" id="email-input" v-model="email">
<p>PASSWORD</p>
<input type="password" id="password-input" v-model="password">
<h2 @click="loginUser">Login</h2>
<h3>{{ loginStatus }}</h3>
<router-link to="/Home">Home</router-link> |
<router-link to="/signup">Sign Up</router-link>
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
            loginUser: function() {
                this.loginStatus = "Loading"
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/login",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                
                    },
                    data: {
                        email: this.email,
                        password: this.password,
                    }
                }).then((response) => {

                    //Check if login token was sent
                  
                    cookies.get('loginToken');
                    console.log(response)
                    this.loginStatus ="Success"
                    cookies.set('session', response.data.loginToken);
                    this.$router.push("/home")
                    //send user to "home page"
                }).catch((error) => {
                    //show user login failure
                    console.log(error),
                    this.loginStatus = "Error"
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

#login {
   
    display: grid;
    justify-items: center;
    align-items: center;
   grid-template-rows: repeat(4, 1fr);
   background-color: burlywood;
    
    }


</style>