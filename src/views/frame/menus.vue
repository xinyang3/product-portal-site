<template>
  <div class="sidebar hide-sm col-md-3">
    <ul class="sidebar_main">
      <li class="sidebar_project child-inactive" v-for="menu in projects" :key="menu.key"
        :class="{active: menu.key === activeIndex}" @click.stop="menuClick($event, menu)">
        <div>
          <a :href="'#/' + menu.urlName">{{menu.name}}</a>
          <i aria-hidden="true" class="fas fa-chevron-down" v-if="menu.children && menu.children.length > 0"></i>
        </div>
        <template v-if="menu.children && menu.children.length > 0">
          <ul class="sidebar_children" :class="baractive(menu)">
            <li class="sidebar_child" v-for="item in menu.children" :key="item.key"
              :class="{active: item.key === activeIndex}" @click.stop="subMenuClick(null, item)">
              <a :href="'#/' + item.urlName">
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

  const contain = function (menu, key) {
    if (menu.key === key) return true;
    let result = false;
    if (menu.children && menu.children.length > 0) {
      let i, item = null;
      for (i = 0; i < menu.children.length; i++) {
        let item = menu.children[i];
        result = contain(item, key)
        if (result) {
          return result;
        } else {
          continue
        }
      }
    }
    return result;
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
      menuClick(event, menu) {
        this.activeIndex = menu.key;
        setMenusCollapse(this.projects, menu)
        if (menu.children && menu.children.length > 0) {
          menu.collapse = !menu.collapse;
          if (menu.collapse) {
            setDomHeight(event.target.parentNode.parentNode.lastChild, menu.children.length * 32)
          } else {
            setDomHeight(event.target.parentNode.parentNode.lastChild, 0)
          }
        }
        this.$router.push({
          name: menu.urlName
        })
      },
      subMenuClick(event, menu) {
        this.activeIndex = menu.key;
        this.$router.push({
          name: menu.urlName
        })
      }
    },
    computed: {
      baractive() {
        return (menu) => {
          return {
            'baractive': contain(menu, this.activeIndex)
          }
        }
      }
    }

  }
</script>
<style scoped>
  .sidebar_project .sidebar_children.baractive {
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