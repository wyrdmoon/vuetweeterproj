<template>
    <div id="get-comment">
         <button input id="get-comment" @click="getComment">Get Comments</button>

    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
name: "get-comment",

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
                tweetId: cookies.get("")
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