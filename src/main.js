import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";
import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios request error:", error);
    return Promise.reject(error);
  }
);

const CLIENT_ID =
  "1014867514899-c36uq2vglahj63pe74c5jnvnl7lpltl8.apps.googleusercontent.com";
createApp(App)
  .use(router)
  .use(vue3GoogleLogin, { clientId: CLIENT_ID })
  .mount("#app");
