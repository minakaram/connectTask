<template>
  <div class="home">
    <LoginForm />
    <LogoPage />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import LogoPage from "@/components/LogoPage.vue";
export default {
  name: "LoginPage",
  components: {
    LoginForm,
    LogoPage,
  },
};
</script>
<style scoped lang="scss">
.home {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  width: 85%;
  margin: auto;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 1025px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
}
</style>
