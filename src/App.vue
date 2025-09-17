<script setup lang="ts">
import Header from './views/Header.vue';

</script>

<template>
  <div id="app">
    <Header customClass="red-text" />
    
       <ul class="navlink">
           <li> <router-link to="/" class="link" id="first">Home</router-link> </li>
           <li> <router-link to="/novosti" class="link">Novosti</router-link> </li>
           <li> <router-link to="/about" class="link">About</router-link> </li>
           <li> <router-link to="/contact" class="link">Contact</router-link> </li>
             <li class="dropdown">
               <router-link to="/raspored" class="link">Raspored</router-link>
                 <div class="dropdown-content">
                   <router-link to="/redovna" class="link5">Redovna</router-link>
                   <router-link to="/dodatna" class="link5">Dodatna</router-link> 
                   <router-link to="/dopunska" class="link5">Dopunska</router-link>
                </div>
             </li> 
        </ul>
    
    <hr />
    <router-view />
  </div>
</template>

 

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: rgba(31, 7, 7, 0.2);
}

li {
  float: left;
}

li .link {
  display: inline-block;
  color: rgb(51, 14, 14);
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
  min-width: 100px;
}

li .link:hover, .dropdown:hover  {
  background-color: orange;
}

li .dropdown {
  display: block;
}

.dropdown-content {
   display: none;
  position: absolute;
  background-color: #a9dd54;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content .link5 {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
}

.dropdown-content .link5:hover {background-color: #f74343;}

.dropdown:hover .dropdown-content {
  display: block;
}

/* .navlink {
  
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
} */
@media screen and (max-width: 767px) {

   
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
  .smalltext {
    font-size: 5px;
    color: aliceblue;
  }

  .dropdown-content {
    min-width: 70%;
  }

  .red-text {
  color: red;
  font-family: 'Times New Roman';
  font-size: 20px;
}

}
</style>