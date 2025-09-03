<template>
    <div class="container">
<div class="levi" >
<img class="slika" src="../assets/slike/math_logo.png">
</div>
<div class="centar">
 <p> Математика за основце </p>
</div>
<div class="desni">

</div>
</div>

</template>

<script>
export default {
    name:'Header'
}
</script>

<style>
.container {
    display: flex;
    flex-direction: row;
}
.slika {
    margin:5px;
}
p {
    font-size:30px;
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