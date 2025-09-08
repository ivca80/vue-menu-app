<template>
    <div class="container">
<div class="levi" >
<img class="slika" src="../assets/slike/math_logo.png">
</div>
<div class="centar">
 <p :class="customClass"> Математика за основце </p>
</div>
<div class="desni">

</div>
</div>

</template>

<script>
export default {
    name:'Header',
    props: {
      customClass: { type: String, default: '' }
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: row;
}
.slika {
    margin: 2px;
    padding: 0;
}
.paragraph {
    font-size:30px;
    color: blue;
}
.centar {
    display:flex;
    background-color: orange;
    align-items: center;
    justify-content: center;
    width: 60%;
}
.levi {
    width: 20%;
    display: inline;
    background-color: green;
}
.desni {
    width: 20%;
}
</style>