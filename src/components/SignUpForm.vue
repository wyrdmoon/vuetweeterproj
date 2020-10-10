<template>
    <div id=signUp>
     <p>Email</p>
     <input type="text" id="email-input" v-model="email">
     <p>Username</p>
     <input type="text" id="username-input" v-model="username">
     <p>Password</p>
     <input type="text" id="password-input" v-model="password">
     <p> Bio </p>
     <textarea id="bio-input" v-model="bio"></textarea>
     <p>Birthdate</p>
     <input type="text" id="birthdate-input" v-model="birthdate">
   
     <button @click="signupUser">Sign Up</button>
     <router-link @click="signupUser" to="/home">Home</router-link>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "signup-form",
        data() {
            return {
                email: "",
                username: "",
                password: "",
                bio: "",
                birthdate: "",
            }
        },
        methods: {
            signupUser: function() {
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/users",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                    },
                    data: {
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        bio: this.bio,
                        birthdate: this.birthdate,
                    }
                }).then((response) => {
                    //write logic to ensure that token was sent (if statement)
                    if (response.data.loginToken == undefined){
                        //error
                    } else {
                        console.log(response.data);
                    cookies.set('session', response.data.loginToken);
                    cookies.set('userId', response.data.userId)
                    }this.$router.push("/home")
                    
                    //send to home page
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>

#signUp {
    display: grid;
   grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
  justify-items: center;
 align-items: center;
   background-color: burlywood;
    font-family: Roboto;
    
    };


</style>