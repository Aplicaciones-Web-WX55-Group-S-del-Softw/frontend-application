<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import profileService from '../../../register/services/profile/profile.js';

const router = useRouter();

const profile = ref({
  firstName: 'Mathias',
  lastName: 'Aguilar',
  direction: 'Los Olivos, Villa sol',
  phone: '98758748',
  gender: '',
  dobDay: '16',
  dobMonth: '1',
  dobYear: '2005',
  documentNumber: '78985898',
  documentType: 'DNI',
  role: '',
});


const save = () => {
    profileService.addProfile(profile.value);


      if (profile.value.role === 'Farmer') {
        router.push('/subscriptions');
      } else {
        router.push('/role/profile');
      }

      profile.value = {
        firstName: '',
        lastName: '',
        direction: '',
        phone: '',
        gender: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        documentNumber: '',
        documentType: '',
        role: '',
      };
};
</script>

<template>


  <div class="login-box">
    <div class="title-button">
      <button class="back-button-arrow" @click="$router.push('/home')">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h2 class="register">REGISTRATION FORM</h2>
    </div>

    <form @submit.prevent="save">
      <div class="user-box">
        <input type="text" name="firstName" required v-model="profile.firstName">
        <label>First Name</label>
      </div>
      <div class="user-box">
        <input type="text" name="lastName" required pattern="[a-zA-Z\s]*" v-model="profile.lastName">
        <label>Last Name</label>
      </div>
      <div class="user-box">
        <input type="text" name="direction" required v-model="profile.direction">
        <label>Direction</label>
      </div>
      <div class="user-box">
        <input type="tel" name="phone" required pattern="\d*" v-model="profile.phone">
        <label>Phone</label>
      </div>
      <div class="user-box">
        <select name="gender" required v-model="profile.gender">
          <option value="" selected></option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <label>Gender</label>
      </div>
      <label>Birthday</label>
      <div class="user-box dob">
        <div class="dob-field">
          <div class="user-box">
            <div class="dob-container">
              <div class="dob-field">
                <select name="dobDay" required v-model="profile.dobDay">
                  <option value="" selected></option>
                  <option v-for="day in 31" :key="day" :value="day">{{day}}</option>
                </select>
              </div>
              <div class="dob-field">
                <select name="dobMonth" required v-model="profile.dobMonth">
                  <option value="" selected></option>
                  <option v-for="(month, i) in ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']" :key="i" :value="i+1">{{month}}</option>
                </select>
              </div>
              <div class="dob-field">
                <select name="dobYear" required v-model="profile.dobYear">
                  <option value="" selected></option>
                  <option v-for="year in (2023 - 1900)" :key="year" :value="2022-year">{{2022-year}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="user-box">
        <input type="text" name="documentNumber" required pattern="\d*" v-model="profile.documentNumber">
        <label>Document Number</label>
      </div>

      <div class="user-box">
        <input type="text" name="documentType" required v-model="profile.documentType">
        <label>Document Type</label>
      </div>
      <div class="user-box">
        <select name="role" required v-model="profile.role">
          <option value="" selected></option>
          <option value="Farmer">Farmer</option>
          <option value="Business Owner">Business Owner</option>
          <option value="Farm Worker">Farm Worker</option>
        </select>
        <label>Role</label>
      </div>

      <button type="submit" class="button-create">
        CREATE ACCOUNT
        <span></span>
      </button>
    </form>
  </div>
</template>

<style scoped>



.login-box {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 5px 15px 25px rgba(0, 0, 0, 0.5);
  width: 450px;
  max-width: 100%;
  margin: 5% auto;
}

.title-button{
  display: flex;
  align-items: center;
  margin: 0 0 30px;
}

.back-button-arrow {
  background: none;
  border: none;
  cursor: pointer;
  color: green;
  font-size: 24px;
  margin-right: 10px;
  height: 25px;

}

.back-button-arrow i:hover {
  transform: scale(1.1) ;
  transition: transform .5s ease-in-out;
}

.register {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: bold;
}

.user-box {
  position: relative;
  margin-bottom: 30px;
  width: 100%;
}

.user-box input,
.user-box select {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #333;
  border: none;
  border-bottom: 1px solid #53a190;
  outline: none;
  background: transparent;
}

.user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #333;
  pointer-events: none;
  transition: 0.5s;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label,
.user-box select:focus ~ label,
.user-box select:valid ~ label {
  top: -20px;
  left: 0;
  color: #37d05b;
  font-weight:bold;
  font-size: 12px;
}

.dob-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.dob-field {
  flex: 1;
  margin-right: 10px;
}

.dob-field:last-child {
  margin-right: 0;
}


.button-create {
  background: linear-gradient(90deg, #278f4a, #278f4a);
  border: none;
  padding: 10px 20px;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.5s;
  width: 100%;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

</style>