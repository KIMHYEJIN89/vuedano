<template>
    <div class="top_banner">
      <div
        class="img"
        :style="{
          backgroundImage: `url(https://danoshop.net/mall/upload/${data.banner})`,
        }"
      ></div>
    </div>
    <div class="prd_two_row">
      <div class="prd_two_row_item">
        <div class="item" v-for="(product, i) in list" :key="i">
          <div class="thumbnail_wrap">
            <p
              class="thumbnail"
              :style="{
                backgroundImage: `url(https://danoshop.net/mall/upload/${product.image_02})`,
              }"
            ></p>
          </div>
          <div class="prd_info">
            <p class="prd_name">{{ product.name }}</p>
            <p class="prd_price">
              <strong>{{ product.price }}</strong> 원
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  export default {
    name: "",
    props: {
      msg: String,
    },
    setup(props, context) {
      let list = ref([]);
      let data = ref([]);
      onMounted(() => {
        //컴포넌트 부착 하고 나서 실행 hook
        axios
          .get(
            "https://api.danoshop.net/mall/api/v2/shop/category/products/?category=147&uid=a54dd3f002234be988dc50e12dc82aae"
          )
          .then((item) => {
            console.log("성공!");
            list.value = item.data.data.products;
            console.log(list.value);
            data.value = item.data.data;
            console.log(data.value);
          });
      });
      return { list, data };
    },
  };
  </script>
  
  <style>
  .top_banner {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
    border: none;
  }
  .top_banner:before {
    width: 100%;
    display: block;
    content: "";
    padding-bottom: 31.7333%;
    border: none;
  }
  .top_banner .img {
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1;
    transition: opacity 300ms ease 0s;
  }
  .prd_two_row_text {
    padding: 30px 20px;
    text-align: left;
  }
  .prd_two_row_item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .prd_two_row_item .item {
    display: inline-flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 50%;
    position: relative;
    margin-bottom: 10px;
  }
  .prd_two_row_item .item:nth-of-type(2n) {
    border-left: 1px solid rgb(231, 231, 231);
  }
  
  .thumbnail_wrap {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .thumbnail_wrap::before {
    width: 100%;
    display: block;
    content: "";
    padding-top: 100%;
  }
  .thumbnail_wrap .thumbnail {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: opacity 300ms ease 0s;
    border-radius: 0;
  }
  
  .prd_info {
    padding: 12px 12px 20px;
    text-align: left;
    font-size: 14px;
  }
  
  .prd_info .prd_price strong {
    font-size: 16px;
  }
  </style>
  