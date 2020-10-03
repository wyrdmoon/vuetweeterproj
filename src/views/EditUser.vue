<template>
    <div id=Edit1>
<h1> EDIT PROFILE </h1>
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
     <br>
     <h3>{{ EditUser }}</h3>
      <button @click="editUser">Edit Profile</button>
     <router-link @click="EditUser" to="/Home">Home</router-link>
     <br>
     <router-link @click="EditUser" to="/DeleteUser">Delete Profile</router-link>
  
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    
    export default {
        name: "edit-user",
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
            editUser: function() {
                axios.request({
                method: "PATCH",
                url: "https://tweeterest.ml/api/users",
                headers:{
                      "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                },
                data: {
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        bio: this.bio,
                        birthdate: this.birthdate,
                        loginToken: cookies.get("session")

                }

                }).then((response) => {
                    //
                   
                    console.log(response.data);
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
#Edit1 {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;
    
    };
    
    
     
</style>