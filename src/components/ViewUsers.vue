<template>
    <div>
<h1>View Other Users</h1>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        name:"view-users",
        data() {
            return {
                userId: "",
                email: "",
                bio: "",
                birthdate: "",
            }
        },
        methods: {
            viewUser: function() {
                axios.request({
                     method: "GET",
                     url: "",
                     headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                     },
                     params:{
                         userId: cookies.get('userId')
                     }
                }).then((response) => {
                    console.log(response);
                    this.tweets=response.data
                }).catch((error) => {
                    console.log(error);
                })
                
                
        }
        
    }
</script>

<style lang="scss" scoped>

</style>