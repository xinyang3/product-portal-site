<template>
  <div class="sidebar hide-sm col-md-3">
    <!-- <ul class="sidebar_main">
    <li class="sidebar_project child-inactive">
      <div>
        <a href="https://spring.io/projects/spring-boot">Spring Boot</a>
      </div>
    </li>
    <li class="sidebar_project child-inactive">
      <div>
        <a href="https://spring.io/projects/spring-framework">Spring Framework</a>
      </div>
    </li>
    <li class="sidebar_project active">
      <div>
        <a href="https://spring.io/projects/spring-data">Spring Data</a>
        <i aria-hidden="true" class="fas fa-chevron-down"></i>
      </div>
      <ul class="sidebar_children">
        <li class="sidebar_child">
          <a href="https://spring.io/projects/spring-data-jdbc">
            <span>Spring Data JDBC</span>
          </a>
        </li>
      </ul>
    </li>
    <li class="sidebar_project child-inactive">
      <div>
        <a href="https://spring.io/projects/spring-cloud">Spring Cloud</a>
        <i aria-hidden="true" class="fas fa-chevron-right"></i>
      </div>
    </li>
    <li class="sidebar_project child-inactive">
      <div>
        <a href="https://spring.io/projects/spring-cloud-dataflow">Spring Cloud Data Flow</a>
      </div>
    </li>
    </ul> -->

    <ul class="sidebar_main">
      <li class="sidebar_project child-inactive" v-for="menu in projects" :key="menu.name"
        :class="{active: menu.name === activeIndex}" @click.stop="itemClick($event, menu)">
        <div>
          <a href="#">{{menu.name}}</a>
          <i aria-hidden="true" class="fas fa-chevron-down" v-if="menu.children && menu.children.length > 0"></i>
        </div>
        <template v-if="menu.children && menu.children.length > 0">
          <ul class="sidebar_children">
            <li class="sidebar_child" v-for="item in menu.children" :key="item.name"
              :class="{active: item.name === activeIndex}" @click.stop="itemClick(null, item)">
              <a href="#">
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </template>
      </li>
    </ul>

  </div>
</template>
<script>
  import projects from 'root/projects.json'
  const setDomHeight = function (dom, height) {
    dom.style.height = height + 'px';
  }
  // const setAllDomHeightZero = function (dom) {
  //   var els = document.querySelectorAll('ul.sidebar_children')
  //   els.forEach(el => setDomHeight(el, 0));
  // }
  const setMenusCollapse = function (menus, cmenu) {
    var els = document.querySelectorAll('ul.sidebar_children')
    els.forEach(el => setDomHeight(el, 0));
    menus.forEach(menu => menu.key !== cmenu.key ? menu.collapse = false : '');
  }

  export default {
    name: 'menus',
    data() {
      return {
        projects: projects.projects,
        activeIndex: ''
      }
    },
    methods: {
      itemClick(event, menu) {
        this.activeIndex = menu.name;
        setMenusCollapse(this.projects, menu)
        if (menu.children && menu.children.length > 0) {
          menu.collapse = !menu.collapse;
          if (menu.collapse) {
            setDomHeight(event.target.parentNode.parentNode.lastChild, menu.children.length * 32)
          } else {
            setDomHeight(event.target.parentNode.parentNode.lastChild, 0)
          }
        }
      }
    }

  }
</script>
<style scoped>
  .sidebar_project.active .sidebar_children {
    /* height: auto; */
    opacity: 1;
  }

  .sidebar_project .sidebar_children {
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: all .3s .1s ease-in;
  }
</style>