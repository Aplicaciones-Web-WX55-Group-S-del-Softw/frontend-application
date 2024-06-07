<template>
  <div class="search-bar" :style="{ top: searchBarTop, right: searchBarRight }">
    <p class="small-text">{{ smallText }}</p>
    <input type="text" v-model="searchTerm">
  </div>
</template>

<script>
export default {
  props: {
    smallText: {
      type: String,
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
    };
  }
};
</script>

<style scoped>
.search-bar {
  position:absolute;
}
.small-text {
  font-size: 12px;
  margin-bottom: 5px;
}
</style>