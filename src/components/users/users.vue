<template>
  <table class=" table">
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td @click="updateSelected(user )" style="cursor: pointer;">{{ user.login }}</td>
        </tr>
      </tbody>
    </table> 
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Users',
  mounted () {

    this.$store.dispatch('loadUsers')

  },
  computed: mapState([
    'users',
  ]),
  methods: {

    updateSelected (selectedItem) {
        console.log(selectedItem.avatar_url);
     }
   
   }
}

</script>


