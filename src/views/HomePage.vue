<template>
  <div class="Home">
    <NavBar />
    <div class="home-main">
      <h1>Recommended Cateogries</h1>
      <div class="categories-container">
        <div
          v-for="item in apiData"
          :key="item.id"
          class="category-item"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div class="category-overlay">
            <p class="salary">${{ item.price }}</p>
            <p class="product-name">{{ item.title }}</p>
            <p class="product-info">
              {{ item.description }}
            </p>
            <div class="category-brand">
              <p class="product-type">{{ item.category }}</p>
              <p class="product-brand">{{ item.brand }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <p v-for="item in apiData" :key="item.id">{{ item.title }}</p> -->
    </div>
    <div class="up-arrow" :class="{ active: showUpArrow }" @click="scrollToTop">
      <img src="../assets/up-arrow (1).png" alt="" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomePage",
  components: { NavBar },
  data() {
    return {
      apiData: [],
      showUpArrow: false, // Add a variable to control arrow visibility
    };
  },
  beforeDestroy() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.fetchData();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.apiData = response.data.products;
      } catch (error) {
        // Axios interceptor will handle the error globally
      }
    },
    handleScroll() {
      // Update showUpArrow based on the scroll position
      this.showUpArrow = window.scrollY > 150;
    },
    scrollToTop() {
      // Smooth scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped lang="scss">
.Home {
  width: 100%;
  height: 100%;
  .home-main {
    width: 90%;
    margin: 3rem auto;
    h1 {
      color: #080713;
      @media(max-width:600px){
        font-size: 25px;
      }
      @media(max-width:400px){
        font-size: 20px;
      }
    }
    .categories-container {
      padding: 3rem 0rem;
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      gap: 1.5rem;
      .category-item {
        width: calc((100% - 3rem) / 3);
        box-shadow: 0 30px 30px -25px rgba(#4133b7, 0.25);
        background-color: white;
        border-radius: 25px;
        padding: 0.5rem;
        margin-bottom: 1rem;
        cursor: pointer;
        .category-overlay {
          border-radius: 20px;
          padding: 1rem;
          padding-top: 4rem;
          position: relative;
          overflow: hidden;
          height: 100%;
          .salary {
            position: absolute;
            background-color: #fbc8be;
            top: 0;
            right: 0;
            border-radius: 99em 0 0 99em;
            padding: 1rem 2rem;
            font-weight: 700;
            color: #754d42;
            font-size: 1.25rem;
          }
          .product-name {
            color: #754d42;
            margin-bottom: 1rem;
            font-size: 1.3rem;
            font-weight: 600;
          }
          .category-brand {
            display: flex;
            padding: 2rem 0rem;
            .product-type {
              margin-right: 1rem;
              padding-right: 1rem;
            }
          }
          @media (max-width: 1025px) {
            min-height: 380px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
        }
        @media (max-width: 1025px) {
          width: calc((100% - 3rem) / 2);
          min-height: 380px;
        }
        @media (max-width: 768px) {
          width: 100%;
        }
      }

      .category-item:nth-child(even) .category-overlay {
        background-color: #ffedec;
      }
      .category-item:nth-child(odd) .product-name {
        color: #020d19;
      }
      .category-item:nth-child(odd) .salary {
        color: #6558d3;
        background-color: #f1eeff;
      }
      .category-item:nth-child(even) .product-type {
        border-right: 2px solid #9d4635;
        color: #9d4635;
        font-weight: 700;
      }
      .category-item:nth-child(even) .product-brand {
        color: #9d4635;
        font-weight: 700;
      }
      .category-item:nth-child(odd) .product-type {
        border-right: 2px solid #9d4635;
        color: #020d19;
        font-weight: 700;
      }
      .category-item:nth-child(odd) .product-brand {
        color: #020d19;
        font-weight: 700;
      }
      .category-item:nth-child(even) .product-name {
        color: #9d4635;
      }
      .category-item:nth-child(even) .product-info {
        color: #b57063;
      }
      .category-item:nth-child(odd) .product-type {
        border-right: 2px solid #020d19;
      }
      .category-item:nth-child(odd) .category-overlay {
        background-color: white;
      }
      @media (max-width: 1025px) {
        align-items: center;
        justify-content: center;
      }
    }
  }
  .up-arrow {
    position: fixed;
    border-radius: 50%;
    padding: 0.7rem;
    right: 20px;
    bottom: 0px;
    transform: translateY(50px);
    background-color: #29bb8a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    transition: transform 0.4s ease; /* Add a transition for smooth animation */
    cursor: pointer;
    img {
      height: 20px;
    }
  }
  .up-arrow.active {
    transform: translateY(-50px);
  }
}
</style>
