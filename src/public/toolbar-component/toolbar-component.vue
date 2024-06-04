<script>
export default {
  name: "toolbar-component",
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<template>
  <header id="header">
    <div class="logo">
      <img class="img" src="../../assets/img-logo.png" alt="">
      <p>FarmLogiTech</p>
    </div>
    <nav id="menu">
      <div class="hamburger" @click="toggleMenu">
        <div :class="{ 'bar1': true, 'change': menuOpen }"></div>
        <div :class="{ 'bar2': true, 'change': menuOpen }"></div>
        <div :class="{ 'bar3': true, 'change': menuOpen }"></div>
      </div>
      <ul :class="{ open: menuOpen }">
        <li><a href="/home">Home</a></li>
        <li><a href="#">Rates</a></li>
        <li class="button-container"><button class="ad-button">Publish your ad</button></li>
        <li><a href="/detail/monitoring">Collaborator</a></li>
        <li><a href="/monitoring">Enter</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
#header {
  top: 0;
  left: 0;
  width: 100%;
  background-color: #276749;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 10px 20px;
  box-sizing: border-box;
}
.logo {
  display: flex;
  align-items: center;
}
.img {
  width: 60px;
  margin-right: 10px;
}
.logo p {
  font-size: 24px;
  font-weight: bold;
}
#menu {
  display: flex;
  align-items: center;
}
#menu ul {
  list-style: none;
  display: none;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
}
#menu ul.open {
  display: flex;
}
#menu ul li {
  margin: 5px 0;
}
#menu ul li a {
  color: white;
  text-decoration: none;
  padding: 10px;
}
.ad-button {
  min-width: 150px;
  background-color: #45BF6C;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  font-size: 16px;
}
.ad-button:hover {
  transform: scale(1.05);
}
.hamburger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.hamburger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: 0.4s;
}
.change.bar1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.change.bar2 {
  opacity: 0;
}
.change.bar3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
@media (min-width: 768px) {
  #header {
    flex-direction: row;
    justify-content: space-between;
  }
  .logo {
    margin-bottom: 0;
  }
  #menu {
    justify-content: flex-end;
  }
  #menu ul {
    flex-direction: row;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #menu ul li {
    margin: 0 10px;
  }
  .hamburger {
    display: none;
  }
}
</style>
