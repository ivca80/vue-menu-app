<script setup lang="ts">
import Header from './views/Header.vue';

</script>

<template>
  <div id="app">
    <Header/>
    <nav class="navlink">
      <router-link to="/" class="link" id="first">Home</router-link> 
       <router-link to="/novosti" class="link">Novosti</router-link> 
      <router-link to="/about" class="link">About</router-link> 
      <router-link to="/contact" class="link">Contact</router-link> 
      <router-link to="/raspored" class="link">Raspored</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style>

.navlink {
  
  background-color: red;
  
}
.link {
  
  display: inline-block;
  text-decoration: none;
  color: yellow;
  width: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}
.link:hover {
  background-color: gray;
}
@media screen and (max-width: 600px) {
  .navlink {
    display:flex;
    flex-direction: column;
    gap:0px;
    max-width:100%;
  }
  .link {
    border-bottom: 2px solid white;
    text-align: center;
    width: 100%;
  }
  #first {
    border-top: 2px solid white;
  }
}
</style>