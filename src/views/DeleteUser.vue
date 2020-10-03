<template>
    <div id="home3">
        <h1>DELETE PROFILE</h1>
        <br><br>
<button @click="deleteUser">Delete Profile</button>
    </div>
</template>

<script>

    export default {
    }       
</script>

<style lang="scss" scoped>
#home3 {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 4fr));
    justify-items: center;
    align-items: center;
    background-color: burlywood;
    font-family: Roboto;
   
};

</style>