<template>
    <div id="home1">
    <h1 id="Home">Home Page</h1>
    <p>YOUR BIG TWEET</p>
    <textarea id="tweet-input" v-model="content"></textarea>
    <br>
    <button input id="tweet-submit" type="submit" value="Tweet" @click="postTweet">POST A BIG TWEET HERE</button>
    <br><br>
    <router-link to="/EditUser">Edit Profile</router-link>
    <br> 
    <router-link to="/Home">Home</router-link> 
    <br>
    <router-link to="/Login">Login</router-link> 
    </div>
</template>


<script>
import axios from 'axios'
import cookies from 'vue-cookies'

export default {
        name: "home-page",
        data () {
            return {
                tweets: [],
                content:"",
                
            }
        },
        methods: {
            postTweet: function() {
                axios.request({
                    method: "POST",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        content: this.content,
                    }
                }).then((response) => {
                    console.log(response);
                    this.loginStatus = "Tweet";
                    this.$store.commit("pTweet", cookies.get("UserTweet")),
                    this.$router.push("Home")
                })
            }
           
        },
      
    }
    
</script>

<style lang="scss" scoped>
#home1 {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;
    
    };
    #Home {
        font-family: Roboto;
        color:royalblue
    };

</style>