<template>
<div class="home1">
   
    
    <h1 id="Home">Home Page</h1>
   
    <router-link to="/Home">Home</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/EditUser">Edit Profile</router-link>|
    <router-link to="/LogOut">Log Out</router-link>
    <get-tweets></get-tweets>
    <view-users></view-users>
    <edit-tweet></edit-tweet>
    <delete-tweet></delete-tweet>
    <create-comment></create-comment>
    <update-comment></update-comment>
    <log-out></log-out>

    <div id="big-tweet"> {{ tweet }}  
    <p>YOUR BIG TWEET</p>
   
    <textarea id="tweet-input" v-model="content"></textarea>
    <br>
    <button input id="tweet-submit" type="submit" value="Tweet" @click="postTweet">POST A BIG TWEET HERE</button>
    
    </div>
    <br><br>
   

   
    </div>
</template>


<script>
import EditTweet from '../components/EditTweet.vue'
import ViewUsers from '../components/ViewUsers.vue'
import GetTweets from '../components/GetTweets.vue'
import DeleteTweet from '../components/DeleteTweet.vue'
import CreateComment from '../components/CreateComment.vue'
import LogOut from '../components/LogOut.vue'
import UpdateComment from '../components/UpdateComment.vue'
import axios from 'axios'
import cookies from 'vue-cookies'

export default {
        name: "home-page",
        components: {
            GetTweets,
            ViewUsers,
            EditTweet,
            DeleteTweet,
            LogOut,
            CreateComment,
            UpdateComment,

        },

        data () {
            return {
                tweet: [],
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
                  
                    
                })
            }
           
        },
      
    }
    
</script>

<style lang="scss" scoped>
#home1 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;
    
    };
    #Home {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        justify-items: center;
        align-items: center;
        background-color: burlywood;
        font-family: Roboto;
        color: black;
    };
    
    
    #big-tweet {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        justify-items: center;
        align-items: center;
        background-color: burlywood;
        font-family: Roboto;
        color: black;
    };

</style>