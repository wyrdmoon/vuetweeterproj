<template>
  <div id="home2">
    <button @click="getTweets">Get Tweets</button>
    
    <div v-for="tweet in tweets" :key="tweet.tweetId">
      <p>{{ tweet.content }}</p>
      <h5>{{ tweet.username }}</h5>
      <h5>{{ tweet.createdAt }}</h5>
      <edit-tweet :tweetId="tweet.tweetId"></edit-tweet>
       <delete-tweet :tweetId="tweet.tweetId"></delete-tweet>
      <delete-comment :tweetId="tweet.tweetId"></delete-comment>
       <create-comment :tweetId="tweet.tweetId"></create-comment>

       <update-comment :tweetId="tweet.tweetId"></update-comment>
       
       <get-comment :tweetId ="tweet.tweetId"></get-comment>
       

      
      <!-- <div v-for="tweet in tweets" :key="tweet.userId"> -->
        <!-- <p>{{ tweet.content }}</p> -->
      </div>

     
    </div>
  
  
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import EditTweet from "../components/EditTweet.vue";
import DeleteTweet from "../components/DeleteTweet.vue";
import CreateComment from "../components/CreateComment";
 import UpdateComment from "../components/UpdateComment";
 import DeleteComment from "../components/DeleteComment";
import GetComment from "../components/GetComment";

export default {
  name: "get-tweets",
  components: {
    EditTweet,
    DeleteTweet,
    CreateComment,
    UpdateComment,
    DeleteComment,
    GetComment,
  },
   props: {
            commentId: Number,
            tweetId: Number,
   },
  data() {
    return {
      tweets: [],
      content: "",
    };
  },
  methods: {
    getTweets: function() {
    
      axios.request({
          method: "GET",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
          },
          params: {
            
            userId: cookies.get(""),
          },
        
        }).then(response => {
          console.log(response);
          this.tweets = response.data;
        }).catch(error => {
          console.log(error);
        });
    }
  }
 
}

</script>

<style lang="scss" scoped>
#home2 {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
  justify-items: center;
  align-items: center;
  background-color: burlywood;
  font-family: Roboto;
}
</style>