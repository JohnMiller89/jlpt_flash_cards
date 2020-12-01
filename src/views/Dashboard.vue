<template class='main-container'>
<SideNav />
<div>
  <TopNav />
  <div>Display Content</div>

</div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'
import TopNav from '@/components/TopNav.vue'
export default {
  components:{
    SideNav,
    TopNav
  },
  name: 'Jlpt',
  props: {
    msg: String
  },
  data() {
    return {
      sidebarIsCollapsed: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarIsCollapsed = !this.sidebarIsCollapsed
    }
  },
  created() {
    if (window.innerWidth < 640) {
      this.sidebarIsCollapsed = !this.sidebarIsCollapsed
    }
  }
}
</script>
