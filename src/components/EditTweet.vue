<template>
  <div id="Edit1">
     <textarea id="tweet-input" v-model="content"></textarea>
    <button input id="edit-tweet" type="submit" value="Tweet" @click="editTweets">Edit Tweets</button>
    
   
  </div>
</template>

<script>
import axios from "axios";
import cookies from 'vue-cookies';



export default {
  name: "edit-tweet",
  props: {
    tweetId: {
      type: Number,
     
    },
  },
  data() {
    return {
     
     
      content: "",
    };
  },
  methods: {
    editTweets: function() {
      axios.request({
          method: "PATCH",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
          },
          data: {
            loginToken: cookies.get("session"), 
            tweetId: this.tweetId,
            content:this.content,
          }
        }).then(response => {
          console.log(response);
          this.tweets = response.data
        }).catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#Edit1 {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
  justify-items: center;
  align-items: center;
  background-color: burlywood;
  font-family: Roboto;
}
</style>