<template>
<div class="row">
<div class="col-12">
       <img :src="Detial_user.avatar_url" class="img-fluid img">
   </div>
  <div class="col-12">
    <hr>  
 </div>
<div class="col-12">
   <p >label:{{ Detial_user.login }}</p>
</div>

<div class="col-12">
    <hr>  
 </div>
<div class="col-12">
   <p> bio:{{ this.results.bio }}</p>
   </div>

</div>


</template>

<script>
import axios from 'axios'

export default {
  name: 'Details',
  props: {
    Detial_user: String
  },
  data(){
         return{ results: []}
        },
        mounted() {
          axios.get('https://api.github.com/users/'+this.Detial_user.login).then(response => {
            this.results = response.data
            if(this.results.bio==null){
            this.results.bio="No bio"
            }
          })
        }

}
</script>

<style>

.img {
   width:300px;
}

</style>