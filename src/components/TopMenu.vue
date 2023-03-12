<template>
    <div class="topmenu_wrap">
      <div class="bg"></div>
      <div class="topmenu_scroll">
        <div class="topmenu_list">
          <ul>
            <li v-for="(a, i) in list" :key="i">
              <router-link to="/" @click="$router.push(`${a.path}`)">{{
                a.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  export default {
    name: "TopMenu",
    props: {
      msg: String,
    },
    setup(props, context) {
      let list = ref([]);
      onMounted(() => {
        //컴포넌트 부착 하고 나서 실행 hook
        axios
          .get(
            "https://api.danoshop.net/mall/api/v1/shop/common/menu?uid=0a8ad5adfa704ff98607b0c275289654"
          )
          .then((item) => {
            list.value = item.data.data;
          });
      });
      return { list };
    },
  };
  </script>
  
  <style>
  .topmenu_wrap {
    position: sticky;
    top: 0px;
    z-index: 101;
  }
  .topmenu_wrap .bg:before,
  .topmenu_wrap .bg:after {
    position: absolute;
    display: block;
    content: "";
    top: 0px;
    bottom: 1px;
    width: 20px;
    z-index: 1;
  }
  .topmenu_wrap .bg:before {
    left: 0px;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 100%
    );
  }
  
  .topmenu_wrap .bg:after {
    right: 0px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 100%
    );
  }
  .topmenu_scroll {
    max-width: 640px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
  }
  .topmenu_scroll .topmenu_list {
    overflow-x: auto;
  
    box-shadow: inset 0 -1px 0 0 #f3f3f3;
  }
  .topmenu_scroll .topmenu_list::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  .topmenu_scroll .topmenu_list ul {
    display: inline-flex;
    margin: 0 20px;
    height: 46px;
  }
  .topmenu_scroll .topmenu_list ul li {
    display: inline-flex;
    margin-right: 20px;
    white-space: pre;
    align-items: center;
    justify-content: center;
    height: 46px;
  }
  .topmenu_scroll .topmenu_list ul li a {
    display: block;
    font-size: 15px;
  }
  </style>
  