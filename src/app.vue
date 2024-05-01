<script>
import {defineComponent} from "vue";

import FooterComponent from "./public/footer-component/footer-component.vue";
import ToolbarComponent from "./public/toolbar-component/toolbar-component.vue";
import FarmCard from "./search/components/farm-cards/farm-card.vue";

export default defineComponent({
  components: {FarmCard, ToolbarComponent, FooterComponent}
})
</script>

<template>
<toolbar-component></toolbar-component>
  <farm-card></farm-card>
  <footer-component></footer-component>
</template>

<style scoped>

</style>
