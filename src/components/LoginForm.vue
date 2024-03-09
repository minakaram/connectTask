<template>
  <div class="hello">
    <h1>Sign In</h1>
    <form @submit="login">
      <input type="email" v-model="email" placeholder="Email" />
      <div class="error-message" v-if="emailError">
        Please enter a valid email address
      </div>
      <input type="password" v-model="password" placeholder="Password" />
      <div class="error-message" v-if="passwordError">
        {{ passwordMessage }}
      </div>
      <div class="checkbox-container">
        <div class="checkbox-leftside">
          <label class="custom-checkbox">
            <input
              type="checkbox"
              v-model="rememberMe"
              id="remember-checkbox"
            />
            <span class="checkmark"></span>
          </label>
          <label for="remember-checkbox">Remember me</label>
        </div>
      </div>
      <div class="error-message" v-if="rememberError">
        Remember me not checked.
      </div>
      <button type="submit">Log In</button>
    </form>
    <button class="google-login">
      <img src="../assets/google.png" alt="" /> <span>Sign in with Google</span>
      <GoogleLogin class="googlebtn" :callback="callback" />
    </button>
  </div>
</template>

<script>
import { decodeCredential } from "vue3-google-login";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      emailError: false,
      passwordError: false,
      rememberError: false,
      passwordMessage: "",
      loginData: false,
      googleName: "",
      googleImage: "",

      callback: (response) => {
        this.loginData = true;
        let user = decodeCredential(response.credential);
        this.googleName = user.name;
        this.googleImage = user.picture;
        setTimeout(() => {
          this.$router.replace({
            path: "/Home",
            query: {
              googleName: this.googleName,
              googleImage: this.googleImage,
            },
          });
        }, 1000);
      },
    };
  },
  methods: {
    login(event) {
      event.preventDefault();

      this.emailError = false;
      this.passwordError = false;
      this.rememberError = false;
      this.passwordMessage = "";

      // Email validation
      if (!this.email) {
        this.emailError = true;
      } else if (!emailRegex.test(this.email)) {
        this.emailError = true;
      }
      if (!this.rememberMe) {
        this.rememberError = true;
      }
      if (!this.password) {
        // Password validation
        this.passwordError = true;
        this.passwordMessage = "Please enter a password";
      } else if (this.password.length < 8) {
        this.passwordError = true;
        this.passwordMessage = "Password should be at least 8 characters long";
      }

      if (
        this.email &&
        this.password &&
        this.rememberMe &&
        !this.rememberError &&
        !this.emailError &&
        !this.passwordError
      ) {
        this.$router.replace("/Home");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.hello {
  width: 40%;
  font-family: "Poppins", sans-serif;
  background-color: #f8fafb;
  @media (max-width: 1025px) {
    order: 1;
    width: 100%;
    padding-bottom: 3rem;
  }
  h1 {
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 3rem;
    @media (max-width: 1025px) {
      text-align: center;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    @media (max-width: 1025px) {
      justify-content: center;
      align-items: center;
    }
    > input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid gray;
      outline: none;
      height: 40px;
      margin-bottom: 1rem;
      width: 80%;
    }
    button {
      width: 80%;
      height: 50px;
      border: none;
      background-color: #38d39f;
      border-color: #38d39f;
      outline: none;
      color: white;
      font-weight: 600;
      margin-top: 3rem;
      cursor: pointer;
      transition: 0.3s;
      font-size: 18px;
      &:hover {
        background-color: #29bb8a;
      }
      &:active {
        background-color: #38d39f;
      }
    }
    .checkbox-container {
      display: flex;
      width: 80%;
      gap: 0.5rem;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0rem 0.5rem;
      .checkbox-leftside {
        position: relative;
        display: flex;
        gap: 0.5rem;
        .custom-checkbox {
          position: relative;
          width: 19px;
          height: 19px;
          cursor: pointer;
          border-radius: 5px;
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            border-radius: 5px;
          }
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 20px;
          background-color: #cccccc;
          border-radius: 5px; /* Set default background color */
        }

        .custom-checkbox input:checked + .checkmark {
          background-color: #29bb8a;
        }
        .custom-checkbox input:checked + .checkmark:after {
          content: "";
          position: absolute;
          display: block;
          left: 7px;
          top: 2px;
          width: 4px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          // background-color: white;
        }
        label {
          font-size: 14px;
          color: gray;
          cursor: pointer;
        }
      }
      .checkbox-rightside {
        a {
          color: gray;
          font-size: 14px;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
    .error-message {
      color: red;
      font-size: 12px;
    }
  }
  .google-login {
    position: relative;
    width: 80%;
    margin: 1rem 0rem;
    border: none;
    padding: 0.5rem;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    img {
      height: 20px;
      width: 20px;
    }
    .googlebtn {
      width: 100%;
      position: absolute;
      left: 75%;
      transform: translateX(-50%);
      top: 5px;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1025px) {
        left: 50%;
      }
      @media (max-width: 768px) {
        left: 60%;
      }
      .S9gUrf-YoZ4jf {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &:hover {
      background-color: rgb(228, 226, 226);
    }
    @media (max-width: 1025px) {
      margin: 1rem auto;
    }
  }
}
.S9gUrf-YoZ4jf,
.S9gUrf-YoZ4jf * {
  width: 100% !important;
}
iframe#gsi_406529_80224 {
  width: 100% !important;
}
</style>
