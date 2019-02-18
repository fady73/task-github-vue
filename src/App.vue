<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <router-link to="/"> <a class="navbar-brand">
      <img src="./assets/logo.png" class="img-fluid rounded mx-auto d-block logo" alt="" > </a></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

        <div class="navbar-nav navbar-nav ml-auto">
          <router-link to="/"> <a class="nav-item nav-link active" >Home <span class="sr-only">(current)</span></a></router-link>

          <router-link to="/users"><a class="nav-item nav-link">Users</a></router-link>

          <router-link to="/about"><a class="nav-item nav-link">About</a></router-link>
        </div>
      </div>
    </nav>
  <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
   width:100px;
}

</style>
