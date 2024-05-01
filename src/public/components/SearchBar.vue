<template>
  <div class="search-bar" :style="{ top: searchBarTop, right: searchBarRight }">
    <p class="small-text">{{ smallText }}</p>
    <input type="text" v-model="searchTerm" @input="filterOptions" @blur="closeOptions">
    <ul v-show="showOptions">
      <li v-for="option in filteredOptions" :key="option" @click="selectOption(option)">{{ option }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    smallText: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    searchBarTop: {
      type: String,
      required: true
    },
    searchBarRight: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      searchTerm: '',
      showOptions: false,
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option => option.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  },
  methods: {
    filterOptions() {
      this.showOptions = true;
    },
    closeOptions() {
      // Retrasar el cierre de opciones para permitir hacer clic en las opciones
      setTimeout(() => {
        this.showOptions = false;
      }, 200);
    },
    selectOption(option) {
      this.searchTerm = option;
      this.showOptions = false;
      // Aquí puedes emitir un evento o realizar cualquier acción con la opción seleccionada
      console.log('Opción seleccionada:', option);
    }
  }
};
</script>

<style scoped>

.search-bar {
  position:absolute;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  z-index: 1;
}
li {
  padding: 5px;
  cursor: pointer;
}
li:hover {
  background-color: #f0f0f0;
}
.small-text {
  font-size: 12px;
  margin-bottom: 5px;
}
</style>
