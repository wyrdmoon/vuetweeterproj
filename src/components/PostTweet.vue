<template>
    <div id="home2">

    </div>
</template>

<script>

    export default {
        name: "post-tweet",
        data() {
            return {
                tweets: [],
                content: "",

            }
        },
        methods: {
            postTweet: function() {
                 axios.request({
                    method: "POST",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "wH6jPB8AleilzE7sjqFeARAAfXLKeEpoQKSZgPCpUW9s2"
                
                    },
                    data: {
                        loginToken: cookies.post("session"),
                        content: this.content,
                    }
                }).then((response) => {
                    console.log(response);
                    this.loginStatus = "Tweet";
                    this.$store.commit("postTweet", cookies.get("UserTweet")),
                    this.$router.push("Home")
                })
            }
        }
            
    }
</script>

<style lang="scss" scoped>
#home2 {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;
};

</style>