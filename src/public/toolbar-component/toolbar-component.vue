<script>
export default {
  name: 'toolbar'
}
</script>

<template>
  <header id="header">
    <div class="logo">
      <a><img class="img" src="assets/img-logo.png" alt="logo"></a>
      <p>FarmLogiTech</p>
    </div>
    <nav id="menu">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Tarifas</a></li>
        <li><button class="btn-menu"><a href="#">Publica tu anuncio</a></button></li>
        <li><a href="#">Colaborador</a></li>
        <li><a href="#">Ingresar</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
#header {
  width: 100%;
  height: 100px;
  background-color: #276749;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}
.btn-menu a {
  color: black !important;
}

li .btn-menu {
  margin-top: -10px;
  background-color: #E9F3AE;

}

.logo {
  display: flex;
  align-items: center;
}

.img {
  width: 90px;
  margin-right: 10px;
}

#menu {
  width: 30%;
  margin-right: 70px;

}

#menu ul {
  margin-top: 30px;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}


#menu ul li a {
  display: block;
  color: white;
  text-decoration: none;
}

.logo p {
  font-size: 40px;
  font-weight: bold;
}

button{
  background-color: #E9F3AE;
  color: black;
  font-weight: bold;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;

}

</style>