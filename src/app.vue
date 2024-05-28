<script setup >
import descriptionCard from "./shared/components/description-card/description-card.vue";
import farmCard from "./shared/components/farm-card/farm-card.vue";
import starRating from "./shared/components/star-rating/star-rating.vue";
import contactCard from "./shared/components/contact-card/contact-card.vue";
</script>

<template>
  <div class="page-container">
    <div class="main-container">
      <div class="farm-card-container">
        <div class="farm-title-container">
          <p class="farm-title">About the farm</p>
        </div>
        <farm-card/>
      </div>
      <div class="description-card-container">
        <div class="description-title-container">
          <p class="description-title">Description</p>
        </div>
        <description-card/>
      </div>
      <div class="star-card-container">
        <div class="star-title-container">
          <p class="star-title">Customer ratings</p>
        </div>
        <star-rating/>
      </div>
      <div class="contact-card-container">
        <contact-card/>
      </div>
    </div>
  </div>
</template>

<style>

div.page-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

div.main-container {
  margin-top: 3.7%;
  margin-left: 25%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

div.farm-title-container p.farm-title {
  font-size: 1.7em;
  top: 0;
  font-weight: bold;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  margin-top: -15.9em;
  margin-left: -13.5em;
}

div.description-title-container p.description-title {
  font-size: 1.7em;
  position: sticky;
  top: 0;
  font-weight: bold;
  color: #000000;
  font-family: 'Roboto', sans-serif;
}

div.star-title-container p.star-title {
  font-size: 1.7em;
  top: 0;
  font-weight: bold;
  color: #000000;
  font-family: 'Roboto', sans-serif;
}

div.farm-card-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 29em;
  margin-left: -22em;
  padding: 0.9em;
}

div.description-card-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -30.7em auto;
  padding: 0.9em;
}

div.star-card-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 33em;
  margin-left: -52.8em;
  padding: 0.9em;
}

div.contact-card-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  margin-left: -22em;
  padding: 0.9em;
}

@media (max-width: 1350px) {
  div.main-container {
    flex-direction: column;
    margin-left: 0;
  }

  div.farm-card-container {
    order: 1;
    margin-top: 25em;
    margin-left: 33em;
  }

  div.description-card-container {
    order: 2;
    margin-top: 0;
  }

  div.star-card-container {
    order: 3;
    margin-top: 35em;
  }

  div.contact-card-container{
    order:4;
    margin-top: 1em;
    margin-left: 4.3em;
  }

  div.star-title-container p.star-title {
    margin-top: -2em;
    margin-left: 32.8em;
  }
}

</style>
