<template>
    <Header/>
  <h1>Hello User, Welcome on Add restaurant Page</h1>
  <form class="form">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
    <button @click="submit" type="button">Add</button>
  </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'
export default {
    name: 'Add',
    data(){
        return{
            restaurant:{
                name:'',
                address:'',
                contact: ''
            }
        }
    },
    components:{
        Header
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
    },
    methods:{
        async submit(){
            const result = await axios.post("http://localhost:4200/restaurants",{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if(result.status == 201){
            this.$router.push({name:'Home'})
            }
        }
    }
}
</script>

<style>

</style>