<template>
    <div id=Edit1>
<button @click="editTweet">Edit Tweets</button>
 <p v-for="tweet in tweets" :key="tweet.userId">{{tweet.content}}</p>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        name: "edit-tweet",
        data() {
            return {
                tweets: "",
                content: "",
            }
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
                    params: {
                        userId: cookies.patch(''),
                    }
                }).then((response) => {
                    console.log(response);
                    this.tweets=response.data
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
    }
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