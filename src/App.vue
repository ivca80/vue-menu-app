<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
       <router-link to="/novosti">Novosti</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
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
router-link {
  margin: 10 10px;
  text-decoration: none;
  color: yellow;
}
</style>