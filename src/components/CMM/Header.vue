<template>
    <div class="header" id="header">
      <div class="header_top">
        <a href="#void" style="background-color: rgb(255, 137, 52); height: 60px">
          <div
            class="banner"
            style="
              background-image: url('https://danoshop.net/mall/upload//2022/01/06/0103-0110_MMB_chuseok_3.png');
            "
          ></div>
  
          <button class="btn_close">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.172 3.578l-.297-.297-.594.594.297.297L9.406 10l-5.828 5.828-.297.297.594.594.297-.297L10 10.594l5.828 5.828.297.297.594-.594-.297-.297L10.594 10l5.828-5.828.297-.297-.594-.594-.297.297L10 9.406 4.172 3.578z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </a>
      </div>
      <div class="header_content">
        <div class="header_left">
          <button style="min-width: 42px; font-size: 26px">
            <span class="blind">검색</span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3888 4.5C15.2068 4.5 18.2777 7.50731 18.2777 11.1891C18.2777 13.1815 17.3812 14.9727 15.9519 16.2007C15.7017 16.4157 15.4353 16.6132 15.1546 16.7915C14.909 16.9475 14.6525 17.0887 14.3865 17.2137C13.4812 17.6392 12.4646 17.8783 11.3888 17.8783C7.57088 17.8783 4.5 14.871 4.5 11.1891C4.5 7.50731 7.57088 4.5 11.3888 4.5Z"
                stroke="currentColor"
              ></path>
              <path
                d="M16.2778 16.4053L21 20.9999"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
        </div>
        <div class="header_center">
          <h1>
            <a href="#void">
              <svg
                width="106"
                height="26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  clip-path="url(#DanoshopLogo_svg__clip0_6951_109646)"
                  fill="#000"
                >
                  <path
                    d="M6.52 6.468H.674a.688.688 0 00-.674.7v11.434c0 .515.402.933.9.933h5.62c2.98 0 5.396-2.508 5.396-5.6v-1.867c0-3.093-2.416-5.6-5.396-5.6zm2.248 7c0 1.547-1.207 2.8-2.698 2.8H4.047c-.497 0-.9-.417-.9-.933V9.968c0-.129.101-.233.225-.233H6.07c1.49 0 2.698 1.253 2.698 2.8v.933zM35.521 6.7v7.13c0 .11-.135.16-.2.073l-5.443-7.17a.666.666 0 00-.53-.266h-2.595a.23.23 0 00-.225.233v12.717c0 .064.05.116.113.116h2.81a.23.23 0 00.225-.233v-7.13c0-.11.135-.16.2-.072l5.443 7.168a.666.666 0 00.53.268h2.595a.23.23 0 00.225-.234V6.933a.459.459 0 00-.45-.466h-2.473a.23.23 0 00-.225.233zM47.88 6h-2.248c-2.98 0-5.396 2.507-5.396 5.6v2.8c0 3.093 2.416 5.6 5.396 5.6h2.249c2.98 0 5.395-2.507 5.395-5.6v-2.8c0-3.093-2.415-5.6-5.395-5.6zm2.249 7.933c0 1.547-1.208 2.8-2.698 2.8h-1.35c-1.49 0-2.697-1.253-2.697-2.8v-1.866c0-1.547 1.208-2.8 2.698-2.8h1.349c1.49 0 2.698 1.253 2.698 2.8v1.866zM25.454 18.874l-5.215-11.9a.449.449 0 00-.41-.274h-2.705a.225.225 0 00-.205.137L11.5 19.204c-.068.154.041.33.205.33h2.949a.45.45 0 00.415-.286l.773-1.906a.225.225 0 01.207-.143l5.002.001c.09 0 .172.057.208.143l.715 1.762c.105.26.35.428.621.428h2.451c.327 0 .545-.35.41-.66zM19.8 14.166h-2.5c-.081 0-.136-.085-.104-.162l1.146-2.827a.222.222 0 01.415 0l1.147 2.827c.03.077-.024.162-.104.162zM101.447 6.47H96.22a.115.115 0 00-.112.116V19.42c0 .065.05.117.112.117h1.35a.115.115 0 00.112-.117v-3.5c0-.065.05-.117.112-.117h3.71c2.495 0 4.515-2.108 4.496-4.702-.018-2.573-2.073-4.631-4.553-4.631zm.012 7.7h-3.665a.115.115 0 01-.112-.117V8.22c0-.065.05-.117.112-.117h3.71c1.627 0 2.947 1.387 2.922 3.08-.025 1.665-1.363 2.987-2.967 2.987zM63.255 12.312l-1.91-.385c-1.63-.3-2.455-1-2.455-2.08 0-1.415 1.186-2.19 3.021-2.19 1.904 0 3.072.73 3.377 2.372l.005.028c.01.056.057.095.11.095h1.363c.068 0 .12-.061.112-.131l-.005-.04c-.155-1.264-.734-2.296-1.675-2.984-.873-.637-2.041-.834-3.38-.834-2.757 0-4.61 1.427-4.61 3.76 0 1.887 1.245 3.122 3.6 3.572l2.188.442c1.473.278 2.252.998 2.252 2.082 0 1.472-1.237 2.284-3.152 2.284-1.105 0-2-.135-2.66-.678-.642-.528-1.044-1.297-1.197-2.284l-.004-.03a.114.114 0 00-.111-.097H56.76c-.067 0-.12.06-.112.129l.004.039c.15 1.426.72 2.598 1.653 3.39.927.79 2.218 1.066 3.735 1.066 1.416 0 2.624-.248 3.492-.98.877-.742 1.34-1.776 1.34-2.993.002-1.883-1.216-3.079-3.618-3.553zM78.346 6.587v5.832c0 .065-.05.117-.113.117h-7.42a.115.115 0 01-.112-.117V6.587a.115.115 0 00-.112-.117h-1.35a.115.115 0 00-.112.117V19.42c0 .065.05.117.113.117h1.349a.115.115 0 00.112-.117v-5.134c0-.064.05-.117.113-.117h7.42c.061 0 .112.053.112.117v5.134c0 .065.05.117.112.117h1.349a.115.115 0 00.112-.117V6.587a.115.115 0 00-.112-.117h-1.35a.115.115 0 00-.111.117zM88.688 7.87c2.108 0 3.822 1.78 3.822 3.967v2.333c0 2.187-1.714 3.967-3.822 3.967H87.34c-2.107 0-3.822-1.78-3.822-3.967v-2.333c0-2.187 1.715-3.967 3.822-3.967h1.35zm0-1.633H87.34c-2.98 0-5.396 2.507-5.396 5.6v2.333c0 3.093 2.416 5.6 5.396 5.6h1.35c2.98 0 5.395-2.507 5.395-5.6v-2.333c0-3.093-2.416-5.6-5.396-5.6z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="DanoshopLogo_svg__clip0_6951_109646">
                    <path
                      fill="#fff"
                      transform="translate(0 6)"
                      d="M0 0h106v14H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </h1>
        </div>
        <div class="header_right">
          <button style="min-width: 42px; font-size: 26px">
            <span class="blind">마이페이지</span>
  
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="13"
                cy="8.99768"
                r="5.17593"
                stroke="currentColor"
                stroke-width="1.08333"
              ></circle>
              <path
                d="M22.75 22.7199C22.75 23.019 22.9925 23.2616 23.2917 23.2616C23.5908 23.2616 23.8333 23.019 23.8333 22.7199H22.75ZM2.16667 22.7199C2.16667 23.019 2.40918 23.2616 2.70833 23.2616C3.00749 23.2616 3.25 23.019 3.25 22.7199H2.16667ZM8.99769 16.9722H17.0023V15.8889H8.99769V16.9722ZM17.0023 16.9722C20.1767 16.9722 22.75 19.5455 22.75 22.7199H23.8333C23.8333 18.9472 20.775 15.8889 17.0023 15.8889V16.9722ZM3.25 22.7199C3.25 19.5455 5.82333 16.9722 8.99769 16.9722V15.8889C5.22502 15.8889 2.16667 18.9472 2.16667 22.7199H3.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button style="min-width: 42px; font-size: 26px">
            <span class="cart">
              <span class="blind">장바구니</span>
              <span class="count">0</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3.15385H1.84532C2.83184 3.15385 3.69833 3.80908 3.96706 4.75828L6.64833 14.2289C6.91706 15.1781 7.78355 15.8333 8.77006 15.8333H18.7188C19.7285 15.8333 20.6093 15.1475 20.8567 14.1686L22.306 8.43529C22.6581 7.04214 21.6051 5.68974 20.1681 5.68974H8.64103"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.7948 19.6923C10.7948 18.7789 10.0544 18.0385 9.14097 18.0385C8.22757 18.0385 7.48712 18.7789 7.48712 19.6923C7.48712 20.6057 8.22757 21.3462 9.14097 21.3462C10.0544 21.3462 10.7948 20.6057 10.7948 19.6923Z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M20.0257 19.6923C20.0257 18.7789 19.2852 18.0385 18.3718 18.0385C17.4584 18.0385 16.718 18.7789 16.718 19.6923C16.718 20.6057 17.4584 21.3462 18.3718 21.3462C19.2852 21.3462 20.0257 20.6057 20.0257 19.6923Z"
                  stroke="currentColor"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "header",
    props: {
      msg: String,
    },
  };
  </script>
  
  <style scoped>
  .header {
    max-width: 640px;
    margin: 0 auto;
  }
  .header .header_top a {
    position: relative;
    display: block;
  }
  .header .header_top .banner {
    margin: auto;
    height: 60px;
  
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .header .header_top .btn_close {
    appearance: none;
    outline: 0px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 8px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0px;
    overflow: hidden;
  }
  .header .header_top .btn_close > svg {
    font-size: 20px;
    color: rgb(255, 255, 255);
  }
  .header .header_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 12px;
  }
  
  .header .header_content {
    text-align: center;
  }
  
  .header .header_right .cart {
    position: relative;
  }
  .header .header_right .cart .count {
    position: absolute;
    right: 4px;
    top: 4px;
    transform: translate(50%, -50%);
    margin: 0px;
    height: 16px;
    min-width: 16px;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #FF6F61;
    font-size: 11px;
    border-radius: 100%;
    color: #fff;
  }
  </style>
  