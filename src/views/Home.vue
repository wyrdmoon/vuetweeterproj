<template>
<div id="home1">
    <br> 
    <router-link to="/Home">Home</router-link> 
    <br>
    <router-link to="/Login">Login</router-link> 
    <h1 id="Home">Home Page</h1>
    <get-tweets></get-tweets>
    <view-users></view-users>
    <edit-tweet></edit-tweet>
    <h1> {{ tweet }}  </h1>
    <p>YOUR BIG TWEET</p>
   
    <textarea id="tweet-input" v-model="content"></textarea>
    <br>
    <button input id="tweet-submit" type="submit" value="Tweet" @click="postTweet">POST A BIG TWEET HERE</button>
    <br><br>
   <router-link to="/EditUser">Edit Profile</router-link>
   
    <button>Log Out </button>
    </div>
</template>


<script>
import EditTweet from '../components/EditTweet.vue'
import ViewUsers from '../components/ViewUsers.vue'
import GetTweets from '../components/GetTweets.vue'
import axios from 'axios'
import cookies from 'vue-cookies'

export default {
        name: "home-page",
        components: {
            GetTweets,
            ViewUsers,
            EditTweet,
        },

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
                    this.$store.commit("Tweet", cookies.get("session")),
                    this.$router.push("/Home")
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
        color: black;
    };

</style>