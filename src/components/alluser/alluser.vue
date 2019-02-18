<template>
<div class="container">
<div class="row">
    <div class="col-4 col-md-4">
       <table class=" table">
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td @click="updateSelected(user )" style="cursor: pointer;">{{ user.login }}</td>
        </tr>
      </tbody>
    </table>  
    </div>

    <div class="col-8 col-md-8">
      <Details v-bind:Detial_user="info"/>  
    </div>
</div>
</div>

</template>

<script>
import Details from '../details/details.vue';
import { mapState } from 'vuex'

export default {

  name: 'Alluser',
  components: {
    Details
  },
  data(){
        return{
            info:{
            type: Object
        }
  
        }
    },
  mounted () {

    this.$store.dispatch('loadUsers')

  },
  computed: mapState([
    'users',
  ]),
  methods: {

    updateSelected (selectedItem) {
         this.info=selectedItem;
     }
   
   }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
