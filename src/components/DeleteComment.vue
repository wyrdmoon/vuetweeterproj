<template>
    <div id="delete2">
    <button input id="delete-comment" type="submit" value="Comment" @click="deleteComment">Delete Comment</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    
    export default {
        name: "delete-comment",
        props: {
            commentId: {
                type: Number,
                required: true,
               
                },
        },
      
        
       methods:{
            deleteComment: function() {
                
                axios.request ({
                    method: "DELETE",
                    url: "https://tweeterest.ml/api/comments",
                    headers: {
                         "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                       commentId: this.commentId
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
#delete2 {
     display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;

};

</style>