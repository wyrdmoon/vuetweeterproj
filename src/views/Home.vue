<template>
    <div id="home1">
    <h1>Home Page</h1>
   

    <p>BIG TWEET</p>
     <textarea id="tweet-input" v-model="tweet"></textarea>
     <br><br>
     <button @click="Post">POST A BIG TWEET HERE</button>
    <br><br>
    <router-link  @click="EditUser" to="/EditUser">Edit Profile</router-link>
    <br> 
    <router-link @click="EditUser" to="/Home">Home</router-link> 
    <br>
    <router-link to="/Login">Login</router-link> 
    </div>
</template>

<script>



export default {
        name: "home-page",
        data() {
            return {
                tweets: [],
                
            }
        },
        methods: {
           
        }
      
    }
    
</script>

<style lang="scss" scoped>
#home1 {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;
    
    };

</style>