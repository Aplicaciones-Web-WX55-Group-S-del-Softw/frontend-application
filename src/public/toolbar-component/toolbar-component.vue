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
    },
    closeMenu(event) {
      if (!this.$refs.menu.contains(event.target) && this.menuOpen) {
        this.menuOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenu);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  }
}
</script>

<template>
  <header id="header">
    <div class="logo">
      <img class="img" src="../../assets/img-logo.png" alt="FarmLogiTech Logo">
      <p>FarmLogiTech</p>
    </div>
    <nav id="menu" ref="menu">
      <div class="hamburger" @click="toggleMenu">
        <div :class="{ 'bar1': true, 'change': menuOpen }"></div>
        <div :class="{ 'bar2': true, 'change': menuOpen }"></div>
        <div :class="{ 'bar3': true, 'change': menuOpen }"></div>
      </div>
      <ul :class="{ open: menuOpen }">
        <li><a href="/home">Home</a></li>
        <li class="button-container"><button class="ad-button">Publish your add</button></li>
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
  position: absolute;
  z-index: 1000;
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
  position: relative;
}

#menu ul {
  list-style: none;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  background-color: #276749;
  position: fixed;
  top: 80px; /* Espacio debajo del header */
  left: 0;
  right: 0;
  width: 100%;
  height: auto; /* Altura automática para que ajuste según el contenido */
  max-height: 200px; /* Altura máxima para el menú */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  overflow-y: auto; /* Añadir desplazamiento si el contenido es muy grande */
}

#menu ul.open {
  display: flex;
}

#menu ul li {
  width: 100%;
  margin-left:10px;

}

#menu ul li a,
.ad-button {
  color: white;
  text-decoration: none;
  padding: 15px 20px;
  display: block;

}

.ad-button {
  background-color: #45BF6C;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center; /* Alinea el texto al centro */
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
    background-color: transparent;
    position: static;
    box-shadow: none;
    padding: 0;
    height: auto;
  }
  #menu ul li {
    margin: 0 10px;
    width: auto;
  }
  #menu ul li a,
  .ad-button {
    padding: 10px 20px;
  }
  .hamburger {
    display: none;
  }
}
</style>