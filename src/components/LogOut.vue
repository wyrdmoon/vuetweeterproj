<template>
    <div id="log-out">
        <h1 @click="logoutUser">Log Out</h1>

        <router-link to="/Login">Login</router-link>

    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'


    export default {
        data() {
            return {
                loginStatus: "",
            }
        },
        methods: {
            logoutUser: function() {
                this.loginStatus = "Logged Out",
                axios.request({
                    method: "DELETE",
                    url:"https://tweeterest.ml/api/login",
                    headers: {
                         "Content-Type": "application/json",
                          "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2",
                    },
                    data: {
                        
                       loginToken: cookies.get('session')
                       
                    }
                }).then((response) => {
                    cookies.get('loginToken');
                    console.log(response)
                    this.loginStatus ="LoggedOut"
                  
                     this.$router.push("/login")
                })
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>
#log-out {
    display: grid;
   justify-items: center;
   align-items: center;
   grid-template-rows: repeat(4, 1fr);
   background-color: burlywood;
    

}
#logged-out {
    font-family: Roboto;
    color: black;
}

</style>