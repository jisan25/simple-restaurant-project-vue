<template>
    <img class="logo" src="../assets/logo.png" alt="Logo">
  <h1>Log in</h1>
  <div class="form">
    <input type="text" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button @click="logIn">Login</button>
    <p>
        <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    date()
    {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async logIn(){
            let result = await axios.get(
                `http://localhost:4200/users?email=${this.email}&password=${this.password}`
            )
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({name:'Home'})
            }
            console.log(result);
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style>

</style>