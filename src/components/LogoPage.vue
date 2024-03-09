<template>
  <div class="logoContainer">
    <img src="../assets/undraw_file_sync_ot38.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "LogoPage",
};
</script>

<style scoped lang="scss">
.logoContainer {
  width: 50%;
  @media (max-width: 1025px) {
    order: 0;
    width: 90%;
    padding: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
