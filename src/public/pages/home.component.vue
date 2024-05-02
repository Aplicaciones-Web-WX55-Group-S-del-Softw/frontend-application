<script>
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import FarmCard from "../../search/components/farm-cards/farm-card.vue";
import FooterComponent from "../components/footer-component.vue";

export default {
  name: "home",
  components: {FooterComponent, FarmCard, ToolbarComponent}
}
</script>

<template>
  <toolbar-component></toolbar-component>
  <farm-card></farm-card>
  <h1 style="margin-left:200px">VIDEO</h1>



  <footer-component></footer-component>
</template>

<style scoped>
h1{
  margin-bottom:400px;
}
</style>