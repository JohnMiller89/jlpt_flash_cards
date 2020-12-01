<template>
<div class="nav-div bg-color-teal text-white right-border">
  <div class="site-name-image"></div>
  <div class="menu-nav">
    <router-link
      v-for="route in listRoutes"
      :key="route.name"
      :to="{ name: route.name }"
    >
      <div class="style-padding-small">
        {{ route.name }}
      </div>
      <div></div>
    </router-link>
  </div>

</div>

</template>

<script>

export default {
  props: {
    isCollapsed: {
      type: Boolean
    }
  },
  data() {
    return {
      routes: this.$router.options.routes,
      iconColors: []
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar')
    },
    collapseSidebar() {
      if (!this.isCollapsed && window.innerWidth < 640) {
        this.toggleSidebar()
      }
    }
  },
  computed: {
    listRoutes() {
      return this.routes
    },
    currentRoute() {
      return this.$route
    },
    isLoading() {
      return this.$store.state.ui.globalLoader
    }
  }
}
</script>
