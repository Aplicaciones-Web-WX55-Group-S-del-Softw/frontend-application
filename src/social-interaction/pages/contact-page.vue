<script>
import DescriptionCard from "../components/description-card/description-card.vue";
import FarmCard from "../../search/components/farm-cards/farm-card.vue";
import StarRating from "../components/star-rating/star-rating.vue";
import ContactCard from "../components/contact-card/contact-card.vue";
import FarmDescriptionCard from "../components/farm-description-card/farm-description-card.vue";
import ToolbarComponent from "../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../public/components/footer-component.vue";

export default {
  name: "contact-page",
  components: {
    FooterComponent,
    ToolbarComponent, FarmDescriptionCard, ContactCard, StarRating, FarmCard, DescriptionCard}
}
</script>

<template>
  <toolbar-component></toolbar-component>
  <router-link to="/home" class="back-button">BACK</router-link>

  <description-card/>
<farm-description-card></farm-description-card>
  <star-rating/>
  <contact-card/>
  <br>
  <footer-component></footer-component>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

</style>