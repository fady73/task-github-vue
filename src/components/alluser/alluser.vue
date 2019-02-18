<template>
<div class="container">
<div class="row">
    <div class="col-4 col-md-4">
       <Users />     
    </div>

    <div class="col-8 col-md-8">
      <Details />  
    </div>
</div>
</div>

</template>

<script>
import Users from '../users/users.vue';
import Details from '../details/details.vue';

export default {

  name: 'Alluser',
  components: {
    Users,
    Details
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
