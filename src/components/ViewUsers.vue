<template>
    <div id="view1">
<h1>View Other Users</h1>
<button @click="viewUsers">View Users</button>
<p v-for="users in users" :key="users.userId">{{users.userId}}</p>

    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    
    export default {
        name:"view-users",
        data() {
            return {
                userId: [],
                users: "",
                email: "",
                bio: "",
                birthdate: "",
            }
        },
        methods: {
            viewUsers: function() {
                axios.request({
                     method: "GET",
                     url: "https://tweeterest.ml/api/users",
                     headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                     },
                     params:{
                         userId: cookies.get(''),
                        
                     }
                }).then((response) => {
                    console.log(response);
                    this.userId=response.data
                }).catch((error) => {
                    console.log(error);
                })
                
                
        },
        
      }  
      
      }
</script>

<style lang="scss" scoped>
#view1 {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;
};

</style>