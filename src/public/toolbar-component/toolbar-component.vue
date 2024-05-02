<script>
export default {
  name: "toolbar-component"
}
</script>

<template>
  <header id="header">
    <div class="logo">
      <img class="img" src="../../assets/img-logo.png" alt="">
      <p>FarmLogiTech</p>
    </div>
    <nav id="menu" style="margin-top: 10px;">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="#">Rates</a></li>
        <li class="button-container"><button class="ad-button">Publish your ad</button></li>
        <li><a href="#">Collaborator</a></li>
        <li><a href="/monitoring">Enter</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
#header {
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #276749;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
  gap: 8px;
  margin: 0;
  padding: 0;
}
.logo {
  display: flex;
  align-items: center;
  fontsize: bold;
}
.img {
  width: 90px;
  margin-left: 10px;
}

.logo p {
  font-size: 35px;
  font-weight: bold;
  padding: 10px 10px;
}

#menu {
  width: 40%;
  font-size: 15px;

}

#menu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
}



#menu ul li a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.ad-button {
  min-width: 150px;
  justify-content: center;
  background-color: #45BF6C;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  position: relative;
  padding: 5px;
  font-size: 18px;
  white-space: nowrap;

}

.ad-button:hover {
  transform: scale(1.05);
}
</style>
