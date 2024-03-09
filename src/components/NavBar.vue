<template>
  <nav>
    <img src="../assets/logo.png" alt="" />
    <div class="personal-data">
      <img v-if="googleImage" :src="googleImage" alt="" />
      <img v-else src="../assets/man.png" />
      <p v-if="googleName">{{ breakLines($data.googleName) }}</p>
      <p v-else>User</p>
      <div class="dropdown" @click="toggleDropdown">
        <img class="drop-abslute" src="../assets/drop-dark.svg" alt="" />
        <img class="drop-relative" src="../assets/drop-white.svg" alt="" />
        <div class="logout-text" v-show="isDropdownVisible" @click="logOut">
          <img src="../assets/Logout Icon.svg" alt="" /><span>Log Out</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      googleName: "",
      googleImage: "",
      isDropdownVisible: false,
    };
  },
  created() {
    this.googleName = this.$route.query.googleName;
    this.googleImage = this.$route.query.googleImage;
  },
  methods: {
    breakLines(str) {
      return str.split(" ").join("\n");
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    logOut() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  padding: 10px 0rem;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 72px;
  }
  .personal-data {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    img {
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }
    p {
      text-transform: capitalize;
      white-space: pre-line;
      font-size: 14px;
      line-height: 18px;
    }
    .dropdown {
      position: relative;

      .drop-abslute {
        transition: 0.2s;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
      }
      .drop-relative {
        transition: 0.2s;
        cursor: pointer;
      }
      .logout-text {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        padding: 0.5rem 0rem;
        top: 120%;
        left: 50%;
        width: 120px;
        background-color: #fff;
        border-radius: 0.5rem;
        text-align: center;
        transform: translateX(-50%);
        box-shadow: 0px 2px 8px 1px rgba(2, 13, 25, 0.06);
        color: #1b2530;
        cursor: pointer;
        // display: none;
        img {
          width: 24px;
        }
      }
      &:hover .drop-relative {
        opacity: 0;
      }
      &:hover .drop-abslute {
        opacity: 1;
      }
      @media (max-width: 768px) {
        right: 0;
        transform: none !important;
        left: unset !important ;
      }
    }
  }
  .logout-text {
    display: none;
    @media (max-width: 768px) {
      right: 0;
      transform: none !important;
      left: unset !important;
    }
  }
}
</style>
