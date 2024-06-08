<script>
import { ref, onMounted } from 'vue';
import profileService from "../../services/profile/profile.js";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/footer-component/footer-component.vue";
export default {
  name: "role-profile",
  components: {ToolbarComponent, FooterComponent},

  setup() {
    const currentProfile = ref({});
    const register = ref({});


    onMounted(async () => {
      const registers =  profileService.getRegisters();
      register.value = registers[registers.length - 1];

      const profiles =  profileService.getProfiles();
      currentProfile.value = profiles[profiles.length - 1];
    });

    return { currentProfile, register};
  },
};
</script>

<template>
  <toolbar-component></toolbar-component>
  <div class="profile-card">
    <div class="profile-info-card">
      <div class="profile-image-container">
        <img v-if="currentProfile.role === 'farmer'" src="../../../assets/farmer-profile.png" alt="Profile Image">
        <img v-else src="../../../assets/bussiness-owner.png" alt="Profile Image">
      </div>
      <div class="profile-name">
        <h1>{{ currentProfile.firstName }} {{ currentProfile.lastName }}</h1>
      </div>
      <h2>{{currentProfile.role}}</h2>
      <div class="profile-info">
        <p><i class="fas fa-map-marker-alt"></i> {{ currentProfile.direction }}</p>
        <p><i class="fas fa-phone"></i> {{ currentProfile.phone }}</p>
        <p><i class="fas fa-venus-mars"></i> {{ currentProfile.gender }}</p>
        <p><i class="fas fa-birthday-cake"></i> {{ currentProfile.dobDay }}/{{ currentProfile.dobMonth }}/{{ currentProfile.dobYear }}</p>
        <p><i class="fas fa-id-card"></i> {{ currentProfile.documentNumber }}</p>
        <p><i class="fas fa-id-badge"></i> {{ currentProfile.documentType }}</p>
        <p><i class="fas fa-envelope"></i> {{ register.email }}</p>
      </div>
    </div>
  </div>
  <footer-component/>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
body{
  min-height: 40vh;
}
.profile-card {
  position: relative;
  margin: auto;
  margin-top: 50px;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../../../assets/role-profile-background.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.55);
}

.profile-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.profile-info-card {
  margin-top: 50px;
  position: relative;
  width: 75%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 1.2em;
  z-index: 1;
}

.profile-image-container {
  width: 150px;
  height: 150px;
  margin-top: -80px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid black;
  background-color: white;
}

.profile-image-container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.profile-info {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 15px;
  text-align: left;
  width: 60%;
  line-height:30px;
  display: flex;
  flex-direction:  column;
  justify-content: flex-start;
}

.profile-info i.fas {
  width: 30px;
  text-align: center;
  font-size: 1.2em;
  margin-right: 10px;
}
.profile-name h1{
  font-weight:bold;
}

@media (max-width: 600px) {
  body{
    min-height: 51vh;
  }
  .profile-card{
    top:60px;
    right: 5px;
    width:90%;
  }
  .profile-info-card {
    width: 90%;
    padding: 20px;
    line-height: 10px;
  }

  .profile-image-container {
    width: 120px;
    height: 120px;
    margin-top: -60px;
  }


}


</style>