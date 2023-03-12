<template>
    <div class="footer" id="footer">
      <div class="footer_inner">
        <div class="footer_top">
          <ul>
            <li><a href="#void">통합약관</a></li>
            <li><a href="#void">이용약관</a></li>
            <li><a href="#void">개인정보처리방침</a></li>
          </ul>
        </div>
        <div class="footer_content">
          <p class="addrs">
            대표:정범윤 | 주소:서울시 마포구 마포대로 144 (주)다노<br />사업자등록번호:106-87-00202
            <a
              href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1068700202"
              target="_blank"
              rel="noreferrer"
              >사업자 정보 확인</a
            ><br />개인정보보호책임자:이지수<br />통신판매업
            신고번호:제2017-마포-0722<br />건강기능식품판매업 신고번호:제
            2018-0069040호<br />Copyright © DANO, Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "footer",
    props: {
      msg: String,
    },
  };
  </script>
  
  <style>
  .footer {
    max-width: 640px;
    margin: 0 auto;
  }
  
  .footer .footer_inner {
    margin: 0 20px;
    padding: 20px;
    background-color: rgba(236, 236, 236);
  }
  
  .footer_top ul {
    display: flex;
    justify-content: flex-start;
  }
  .footer_top ul li {
    margin-right: 20px;
    padding: 10px 0;
    font-size: 15px;
  }
  
  .footer_content {
    text-align: left;
    font-size: 14px;
  }
  </style>
  