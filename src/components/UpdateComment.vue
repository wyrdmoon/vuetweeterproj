<template>
    <div id="comment">
<button input id="update-comment" type="submit" value="Tweet" @click="updateComment">Update Comment</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        name: "update-comment",
        props:{
            commentId: {
                type: Number,
            },
        },
        data() {
            return {
              
                tweetId: "",
                userId: "",
                username: "",
                content: "",
                createdAt: "",

            };
        },
        methods: {
            updateComment: function() {
               axios.request ({
                   method: "PATCH",
                   url: "https://tweeterest.ml/api/comments",
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
#comment {
    display: grid;
  grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
  justify-items: center;
  align-items: center;
  background-color: burlywood;
  font-family: Roboto;
};

</style>