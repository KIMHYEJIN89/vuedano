<template>
    <div class="main">
      <!-- <MainBanner /> -->
      <section v-for="(item, i) in section" :key="i">
        <header>
          <p class="title">{{ item.section.section_title }}</p>
          <p class="subtitle">{{ item.section.section_subtitle }}</p>
        </header>
        <!-- <p>{{ item.section.section_type_name }}</p> -->
        <div class="region">
          <div
            class="prd_list"
            v-for="(prd, j) in item.section_type_info[0].selected_product_list"
            :key="j"
            :data-type="`${item.section_type_info[0].selected_product_list.length}`"
          >
            <div class="item">
              <div
                class="prd_img"
                :style="{
                  backgroundImage: `url(https://danoshop.net/mall/upload/${prd.image_01})`,
                }"
              ></div>
            </div>
            <div class="info">
              <p>{{ prd.name }}</p>
              <p>
                <!-- <span>{{ prd.display_info[0].display_price }}</span> -->
                <span
                  ><strong>{{ prd.price }}</strong> 원</span
                >
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import MainBanner from "./BAN/MainBanner.vue";
  import axios from "axios";
  import { onMounted, ref } from "vue";
  export default {
    name: "Home",
    data() {
      return {
        section_type_name: "",
        data: 0,
      };
    },
  
    updated() {
      $("section").each(function (e) {
        var prd_list = $(this).find(".prd_list").attr("data-type");
        $(this).find(".region").attr("data-type", prd_list);
      });
    },
  
    props: {
      msg: String,
    },
  
    components: {},
    setup(props, context) {
      let section = ref([]);
  
      onMounted(() => {
        //컴포넌트 부착 하고 나서 실행 hook
        axios
          .get(
            "https://api.danoshop.net/mall/api/v1/pan?key=main&uid=a54dd3f002234be988dc50e12dc82aae"
          )
          .then((item) => {
            console.log("HOME 성공!");
            section.value = item.data.pan.selected_section_list;
            console.log("연결연결");
            console.log(section.value);
          });
      });
  
      return { section };
    },
  };
  </script>
  
  <style>
  .main {
    text-align: left;
  }
  .main .title {
    flex: 1 1 0px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-weight: bold;
    font-size: 22px;
    text-align: left;
  }
  .main .subtitle {
    text-align: left;
    color: #a1a1a1;
  }
  
  .main header {
    padding: 16px 0;
  }
  .main section {
    position: relative;
  }
  
  .main .prd_img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    inset: 0;
    border-radius: 12px;
  }
  
  .main .region .item:before {
    padding-top: 100%;
  }
  
  .main .region {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .main .region[data-type="1"] {
    gap: 12px;
    grid-template-columns: repeat(1, 1fr);
  }
  
  .main .region[data-type="1"] .item:before {
    padding-top: 66.6667%;
  }
  
  .main .region[data-type="3"],
  .main .region[data-type="6"] {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  
  .main .item {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .main .item:before {
    display: block;
    content: "";
    padding-top: 100%;
  }
  .main .info {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }
  </style>
  