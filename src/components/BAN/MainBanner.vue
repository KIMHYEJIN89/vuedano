<template>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, i) in sliders" :key="i">
        <img :src="'https://danoshop.net/mall/upload/' + item.picture" />
      </swiper-slide>
    </swiper>
  </template>
  
  <script>
  import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import axios from "axios";
  import { onMounted, ref } from "vue";
  export default {
    data() {
      return {
        aa: "",
      };
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      let sliders = ref([]);
      onMounted(() => {
        //컴포넌트 부착 하고 나서 실행 hook
        axios
          .get(
            "https://api.danoshop.net/mall/api/v1/pan?key=main&uid=a54dd3f002234be988dc50e12dc82aae"
          )
          .then((item) => {
            console.log("메인배너 성공!");
            sliders.value = item.data.sliders[0].slider_data;
            console.log(sliders.value);
          });
      });
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log("slide change");
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay, Pagination],
        sliders,
      };
    },
  };
  </script>
  
  <style>
  .swiper-slide {
    cursor: pointer;
  }
  .swiper-pagination {
    width: 20px;
    height: 20px;
    opacity: 1;
    left: 0;
    right: 0;
    bottom: 10px;
  }
  .swiper-pagination-bullet {
    margin: 0 5px !important;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: #000;
  }
  </style>
  