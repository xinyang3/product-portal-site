<template>
  <header>
    <nav id="nav">
      <div class="container flex jc-between ai-center" id="nav-inner">
        <a href="/" id="logo-focus" tabindex="1">
          <img alt="logo" class="block" id="springlogo" src="/images/logo.png">
        </a>
        <ul class="flex jc-between" id="nav-items">
          <li>
            <a class="has-menu" id="community-hov"><span tabindex="30">所有产品</span>
              <div class="nav-arrow"></div>
            </a>
          <li>
            <a class="has-menu" id="community-hov"><span tabindex="32">关于我们</span>
              <div class="nav-arrow"></div>
            </a>
          </li>
          <li><a class="z-5 rel" href="/support" tabindex="31">获取支持</a></li>
          <!-- <li>
            <a class="theme-switch" id="switch-theme">
              <span>
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
              </span>
            </a>
          </li> -->
        </ul>
      </div>
      <div class="container rel" id="dropdown-menus">
        <div class="abs rad-5" id="scope" :class="activeScope"></div>
        <div class="drop-menu" :class="{active: activetab === 'projects'}" id="project-items"
          @mouseover.stop="mouseover('projects')" @mouseout.stop="mouseout">
          <div class="drop-target" id="project-target"></div>
          <ul>
            <li><a href="/projects" tabindex="18">产品一</a></li>
            <li><a href="/projects/spring-boot" tabindex="19">产品二</a></li>
            <li><a href="/projects/spring-framework" tabindex="20">产品三</a></li>
            <li><a href="/projects/spring-cloud" tabindex="21">产品四</a></li>
            <li><a href="/projects/spring-cloud-dataflow" tabindex="22">产品五</a></li>
            <li><a href="/projects/spring-data" tabindex="23">产品六</a></li>
            <li><a href="/projects" tabindex="18">产品一</a></li>
            <li><a href="/projects/spring-boot" tabindex="19">产品二</a></li>
            <li><a href="/projects/spring-framework" tabindex="20">产品三</a></li>
            <li><a href="/projects/spring-cloud" tabindex="21">产品四</a></li>
            <li><a href="/projects/spring-cloud-dataflow" tabindex="22">产品五</a></li>
            <li><a href="/projects/spring-data" tabindex="23">产品六</a></li>
          </ul>
        </div>
        <div class="drop-menu" :class="{active: activetab === 'community'}" id="community-items"
          @mouseover.stop="mouseover('community')" @mouseout.stop="mouseout">
          <div class="drop-target" id="community-target"></div>
          <ul>
            <li><a href="/community" tabindex="33">加入我们</a></li>
            <li><a href="/events" tabindex="34">联系方式</a></li>
            <li><a href="/team" tabindex="35">企业介绍</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
  export default {
    name: 'headers',
    data() {
      return {
        activetab: ''
      }
    },
    computed: {
      activeScope() {
        return {
          'projects-scope': this.activetab === 'projects',
          'community-scope': this.activetab === 'community'
        }
      }
    },
    methods: {
      mouseover(key = '') {
        this.activetab = key;
      },
      mouseout() {
        this.activetab = ''
      }
    }
  }
</script>