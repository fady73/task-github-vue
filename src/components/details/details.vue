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
</div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    Detial_user: String
  }

}
</script>

<style>

.img {
   width:300px;
}

</style>