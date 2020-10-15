<template>
    <div id="comment1">
        
<textarea id="comment-input" v-model="content"></textarea>
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
                required: true,
            },
        },
        data() {
            return {
              
              username: "",
              userId: "",
              createdAt: "",
              tweetId: "",
              content: "",
                

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
                     commentId: this.commentId,
                    content:this.content,
               }
            }).then(response => {
          console.log(response);
          this.comment = response.data
        }).catch(error => {
          console.log(error);
        });

        }
        
    }
    };
</script>

<style lang="scss" scoped>


</style>