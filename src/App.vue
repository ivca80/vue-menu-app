<template>
  <div id="app">
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
.sp {
  display:inline;
  width:5px;
  background-color:white;
  z-index: 100;
}
nav {
  padding: 10px;
  background-color: red;
}
.link {
  padding: 10px 20px;
  text-decoration: none;
  color: yellow;
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
  }
  #first {
    border-top: 2px solid white;
  }
}
</style>