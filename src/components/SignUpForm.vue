<template>
    <div>
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
     <h2 @click="signupUser">Sign Up</h2>
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
                    //write logic to ensure that token was sent
                    console.log(response)
                    cookies.set('session', response.data[0].loginToken);
                    //send to home page
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>