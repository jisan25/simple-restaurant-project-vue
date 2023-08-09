<template>
    <Header/>
  <h1>Hello User, Welcome on Update Restaurant Page</h1>
  <form class="form">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
    <button @click="submit" type="button">Update</button>
  </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'
export default {
    name: 'Update',
    components:{
        Header
    },
    data(){
        return{
            restaurant:{
                name:'',
                address:'',
                contact: ''
            }
        }
    },
   async mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get(`http://localhost:4200/restaurants/${this.$route.params.id}`)
        this.restaurant = result.data;
    },
    methods:{
        async submit(){
            const result = await axios.put(`http://localhost:4200/restaurants/${this.$route.params.id}`,{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if(result.status == 200){
            this.$router.push({name:'Home'})
            }
        }
    }
}
</script>

<style>

</style>