<template>
  <footer>
    <div id="top">
      <div class="container flex jc-between mx-auto">
        <div id="green-circle-sm"></div>

        <img alt="" id="circle-grid" src="/images/footer-circles-dc4b03d4edc1f3b7b42a45bdcce411c8.svg">
        <div class="third">
          <h2 class="bold h3 antialiased">快速入口</h2>
          <p></p>
          <p class="blue link-animate" href="/training">产品一</p>
          <p class="blue link-animate" href="/training">产品二</p>
          <p class="blue link-animate" href="/training">产品三</p>
        </div>
        <div class="third">
          <h2 class="bold h3 antialiased">支持与服务</h2>
          <p class="blue link-animate">联系我们</p>
          <!-- <a class="blue link-animate" href="/support">Learn more</a> -->
        </div>
        <div class="third">
          <h2 class="bold h3 antialiased">资源与社区</h2>
          <div class="footer-event">
            <a class="blue link-animate" href="https://springone.io">留言区</a>
            <!-- <p>All virtual. All free.</p> -->
          </div>
        </div>
      </div>
      <p class="right">
        <span>© 2009-2020 版权所有 国机工业互联网研究院有限公司</span>
      </p>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'footers'
  }
</script>
<style scoped>
  .right {
    text-align: center;
    margin: 0;
    background-color: #ebf2f2;
    margin-top: 15px;
  }
</style>