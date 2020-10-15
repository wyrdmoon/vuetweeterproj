<template>
    <div id="get-comment">
         <button input id="get-comment" @click="getComment">Get Comments</button>

    </div>
</template>

<script>
import axios from 'axios';
// import UpdateComment from 'UpdateComment.vue';
// import DeleteComment from 'DeleteComment.vue';


export default {
name: "get-comment",
// components:
// UpdateComment,
// DeleteComment,

props: {
    tweetId: {
        type: Number,
      
    },
},
data() {
    return {
        commentId: "",
        userId: "",
        username: "",
        content: "",
        createdAt: "",
    }
},
methods: {
    getComment: function() {
        axios.request({
            method: "GET",
            url:"https://tweeterest.ml/api/comments",
            headers: {
                 "Content-Type": "application/json",
            "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
            },
            params: {
            
            tweetId: this.tweetId
           
            
            }
        }).then(response => {
            console.log(response);
            this.tweets = response.data;
        }).catch(error => {
            console.log(error);
        });
        
    }
},
}




    
</script>

<style lang="scss" scoped>

</style>