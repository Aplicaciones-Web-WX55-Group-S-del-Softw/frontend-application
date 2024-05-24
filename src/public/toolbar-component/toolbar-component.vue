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
};
</script>

<template>
  <header id="header">
    <div class="logo">
      <img class="img" src="../../assets/img-logo.png" alt="">
      <p>FarmLogiTech</p>
    </div>
    <button class="hamburger" @click="toggleMenu">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    <nav id="menu" :class="{ open: menuOpen }">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="#">Rates</a></li>
        <li class="button-container"><button class="ad-button">Publish your ad</button></li>
        <li><a href="/detail/monitoring">Collaborator</a></li>
        <li><a href="/monitoring">Enter</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

}

.hamburger-line {
  width: 1.5rem;
  height: 0.25rem;
  background: white;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

#header, #menu {
  width: 100%;
}

#menu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
#menu ul li {
  margin: 10px 0;
}
#menu ul li a {
  color: white;
  padding: 10px;
  text-decoration: none;
}

#menu {
  width: 40%;
  font-size: 15px;
  display: flex;
  flex-direction: row;
}

@media (min-width: 101px) and (max-width: 882px) {
  .hamburger {
    display: flex;
  }
  #menu ul {
    flex-direction: column;

  }
  #header {
    width: 120%;
  }
  #menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100px;
    width: 100%;
    background-color: #276749;
  }

  #menu.open {
    display: flex;
    width: 112.5%;
  }
}
@media (min-width: 853px) and (max-width: 900px)
{
  #menu {
    width: 50%;
  }
  #header {
    width: 100%;
  }
}
@media (min-width: 901px) and (max-width: 1000px)

{
  #menu {
    width: 40%;
  }
  #header {
    width: 120%;
  }
}
@media (min-width: 1001px)
{
  #menu {
    width: 50%;
  }
  #header {
    width: 100%;
  }
}
#header {

  top: 0;
  left: 0;

  height: 100px;
  background-color: #276749;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
  gap: 8px;
  padding: 0;
}

.logo {
  display: flex;
  align-items: center;

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
