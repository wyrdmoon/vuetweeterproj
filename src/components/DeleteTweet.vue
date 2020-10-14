<template>
    <div id=delete1>
        <button input id="delete-tweet" @click="deleteTweet">Delete Tweet</button>


    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'


    export default {
        name: "delete-tweet",
       
        props: {
            tweetId: {
                type: Number,
                required: true,
               
                },
        }, methods: {
            deleteTweet: function() {
                axios.request ({
                    method: "DELETE",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                          "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                    },
                    data: {
                       loginToken: cookies.get("session"),
                       tweetId: this.tweetId
                    }
                    
                }).then((response) => {
                    console.log(response);
                  
                }).catch((error) =>{
                    console.log(error);
                })
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>
#delete1 {
     display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;
};

</style>