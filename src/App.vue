<template>
  <div id="app">
    <nav>
      <router-link to="/" class="link">Home</router-link> |
       <router-link to="/novosti" class="link">Novosti</router-link> |
      <router-link to="/about" class="link">About</router-link> |
      <router-link to="/contact" class="link">Contact</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style>
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
</style>