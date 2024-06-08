<template>
  <toolbar-component></toolbar-component>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <div class="bodyLogin">

    <div class="container" :class="{'active': isActive, 'forgot-password-active': isForgotPasswordActive}">

      <div class="form-container sign-up">
        <form>
          <img src="/farm-logitech-logo.png">
          <h1>Create Account</h1>
          <div class="wrapper">
            <div class="icon google">
              <a href="https://accounts.google.com/ServiceLogin"><i class="fa-brands fa-google-plus-g"></i></a>
            </div>
            <div class="icon facebook">
              <a href="https://www.facebook.com/login.php"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
            <div class="icon github">
              <a href="https://github.com/login"><i class="fa-brands fa-github"></i></a>
            </div>
          </div>
          <span>or use your email for registration</span>
          <input type="email" placeholder="Email" required v-model="register.email">
          <input type="password" placeholder="Password" required>

          <button class="button" type="button" @click="save">
            Sign Up
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      <div class="form-container sign-in">
        <form>
          <img src="/farm-logitech-logo.png">
          <h1>Sign In</h1>
          <div class="wrapper">
            <div class="icon google">
              <a href="https://accounts.google.com/ServiceLogin"><i class="fa-brands fa-google-plus-g"></i></a>
            </div>
            <div class="icon facebook">
              <a href="https://www.facebook.com/login.php"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
            <div class="icon github">
              <a href="https://github.com/login"><i class="fa-brands fa-github"></i></a>
            </div>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <a @click="toggleForgotPassword">Forgot Password?</a>
          <router-link class="button" to="/home">
            Sign In
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </form>
      </div>

      <div class="form-container forgot-password forgot-password-container">
        <form >
          <img src="/farm-logitech-logo.png">
          <h1>Forgot Password</h1>
          <input type="email" placeholder="Email" required>
          <router-link class="button" type="button" to="/home">
            Reset Password
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
              ></path>
            </svg>
          </router-link>
          <button class="button" type="button" @click="backToSignIn()">
            Back to Sign In
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      <!-- Toggle Container -->
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button class="button" type="button" @click="toggleActive()">
              <svg fill="currentColor" viewBox="0 0 24 24" class="icon" style="transform: rotate(180deg);">
                <path
                    clip-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fill-rule="evenodd"
                ></path>
              </svg>
              Sign In
            </button>
          </div>

          <div class="toggle-panel toggle-right">
            <h1>Hello, Farmer!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button class="button" type="button" @click="toggleActive()">
              Sign Up
              <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                <path
                    clip-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
import profileService from "../../services/profile/profile.js";
import {ref} from "vue";
import {useRouter} from "vue-router";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/footer-component/footer-component.vue";
export default {
  components: {ToolbarComponent, FooterComponent},
  setup() {
    const router = useRouter();
    const isActive = ref(false);
    const isForgotPasswordActive = ref(false);
    const register = ref({
      email: '',
      password: ''
    });

    const toggleActive = () => {
      isActive.value = !isActive.value;
    };

    const toggleForgotPassword = () => {
      isActive.value = false;
      isForgotPasswordActive.value = !isForgotPasswordActive.value;
    };

    const backToSignIn = () => {
      isForgotPasswordActive.value = false;
      isActive.value = false;
    };

    const save = async () => {
      await profileService.addRegister(register.value);
      await router.push('/create/profile');
      register.value = {
        email: '',
        password: ''
      };
    };

    return {
      isActive,
      isForgotPasswordActive,
      register,
      toggleActive,
      toggleForgotPassword,
      backToSignIn,
      save
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}


.bodyLogin {
  position:relative;
  left: 0;
  top:200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
@keyframes paintBlue {
  0% {
    border-color: transparent;
  }
  100% {
    border-color: blue;
  }
}

@keyframes paintRed {
  0% {
    border-color: transparent;
  }
  100% {
    border-color: red;
  }
}


input {
  border-color: transparent;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: black;
}

.container{
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.container p{
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span{
  font-size: 12px;
}
.error {
  color: red;
}

.container a{
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container .button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: rgb(70, 183, 85);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 8px;
  font-weight: bold;
  border: 4px solid rgba(12, 105, 41, 0.3);
  outline: none;
  overflow: hidden;
  font-size: 15px;
}

.sign-up .button {
  top: 23px;
}
.container .icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.container .button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.container .button:hover .icon {
  transform: translate(4px);
}

.container .button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.container .button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(21, 150, 65, 0.8),
      rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}


.container form{
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.container input{
  background-color: #eee;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.form-container{
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in{
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.active .sign-in{
  transform: translateX(100%);
}

.sign-up{
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up{
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move{
  0%, 49.99%{
    opacity: 0;
    z-index: 1;
  }
  50%, 100%{
    opacity: 1;
    z-index: 5;
  }
}

.toggle-container{
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.active .toggle-container{
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.toggle{
  background-color: #13d420;
  height: 100%;
  background: linear-gradient(to right, #aaf87d, #13d420);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle{
  transform: translateX(50%);
}

.toggle-panel{
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.container.active .toggle{
  transform: translateX(50%);
}
.toggle-left{
  transform: translateX(-200%);
}

.container.active .toggle-left{
  transform: translateX(0);
}

.toggle-right{
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right{
  transform: translateX(200%);
}

/* Social Icons */
.wrapper {
  display: inline-flex;
  list-style: none;
}

.wrapper .icon {
  position: relative;
  background: #ffffff;
  border-radius:20%;
  padding: 15px;
  margin: 10px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}


.wrapper .facebook:hover {
  background: #1877F2;
  color: #ffffff;
}

.wrapper .google:hover {
  background: #efe9bf;
  color: #ffffff;
}

.wrapper .github:hover{
  background: #8d31e0;
  color: #ffffff;
}

img {
  z-index: 1000;
  position: relative;
  width: 100px;
  height: 100px;
}

.forgot-password-container button {
  margin-top: 25px;
  margin-bottom: 10px;
}

.forgot-password-container{
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.forgot-password-active .forgot-password-container{
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}
.container:not(.forgot-password-active) .forgot-password-container {
  transform: translateX(100%);
  opacity: 0;
  border-radius: 0 150px 100px 0;

}
.container a:hover {
  cursor: pointer;
  text-decoration: underline;
}
.form-container h1{
  color: #003f17;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;

}
@media (min-width: 100px) and (max-width: 1000px) {
  .body{
    background-color: #c9d6ff;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 130vh;
  }
}

@media (min-width: 1001px) and (max-width: 1200px) {
  .body{
    background-color: #c9d6ff;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 130vh;
  }
}
</style>