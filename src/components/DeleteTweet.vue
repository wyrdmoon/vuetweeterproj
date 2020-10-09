<template>
    <div id=delete1>
        <button @click="deleteTweet">Delete Tweet</button>


    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        name: "delete-tweet",
        data() {
            return {
                tweet: [],
                content: "",
            }
        }, methods: {
            deleteTweet: function() {
                axios.request ({
                    method: "DELETE",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                          "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                    },
                    params: {
                        userId: cookies.delete(''),
                    }
                }).then((response) => {
                    console.log(repsonse);
                    this.tweets=response.data
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