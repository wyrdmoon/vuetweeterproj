<template>
    <div id="comment">

        <h1>Comment</h1>
        
        <p v-for="tweet in tweet" :key="tweet.tweetId"></p>
        <textarea id="comment-input" v-model="content"></textarea>
        <button input id="comment-submit" type="submit" value="Comment" @click="createComment">Comment</button>
       
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'



    export default {
        name: "create-comment",
         props: {
         tweetId: {
          type: Number,
     
       },
       },
        data() {
            return {
                tweet: "",
                commentId: "",
               
                username: "",
                content: "",
                createdAt: "",
            }
        },
        methods: {
            createComment: function() {
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/comments",
                    headers: {
                         "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                    },
                    data:{
                        loginToken: cookies.get("session"),
                        tweetId: this.tweetId,
                        content: this.content,
                        
                    }
                }).then((response) => {
                    console.log(response);
                    this.loginStatus = "Comment";
                }).catch((error) => {
                console.log(error)
                this.content = "Failed"
                })
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>
#comment {
      display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          justify-items: center;
           align-items: center;
           background-color: burlywood;
        font-family: Roboto;
        color: black;
}

</style>