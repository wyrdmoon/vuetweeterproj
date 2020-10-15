<template>
  <div class="home1">
    <h1 id="Home">Home Page</h1>
    <p v-for="tweet in tweet" :key="tweet.tweetId"></p>
    <p>{{ tweet.content }}</p>
    <router-link to="/Home">Home</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/EditUser">Edit Profile</router-link>|
    <router-link to="/LogOut">Log Out</router-link>
    <get-tweets></get-tweets>
    <view-users></view-users>
    <edit-tweet></edit-tweet>

    <log-out></log-out>

    <div id="big-tweet">
      <p>{{ tweet.content }}</p>
      <p>YOUR BIG TWEET</p>

      <textarea id="tweet-input" v-model="content"></textarea>
      <br/>
      <button input id="tweet-submit" type="submit" value="Tweet" @click="postTweet()"> POST A BIG TWEET HERE </button>
      
        
       
       
       
      
     
    </div>
  </div>
</template>


<script>
import EditTweet from "../components/EditTweet.vue";
import ViewUsers from "../components/ViewUsers.vue";
import GetTweets from "../components/GetTweets.vue";

import LogOut from "../components/LogOut.vue";

import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "tweet-input",
  components: {
    GetTweets,
    ViewUsers,
    EditTweet,

    LogOut
  },

  data() {
    return {
      tweet: [],
      content: ""
    };
  },
  methods: {
    postTweet: function() {
        this.tweet = "Tweeting",
      axios.request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.content
          }
        }).then(response => {
          console.log(response);
          this.loginStatus = "Tweet";
        }).catch((error) => {
            console.log(error)
            this.tweet = "Failed"
        })
    }
  }
};
</script>

<style lang="scss" scoped>
#home1 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  justify-items: center;
  align-items: center;
  background-color: burlywood;
  font-family: Roboto;
}
#Home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  align-items: center;
  background-color: burlywood;
  font-family: Roboto;
  color: black;
}

#big-tweet {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  align-items: center;
  background-color: burlywood;
  font-family: Roboto;
  color: black;
}
</style>