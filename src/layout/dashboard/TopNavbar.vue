<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{routeName}}</a>
      <button class="navbar-toggler navbar-burger"
              type="button"
              @click="toggleSidebar"
              :aria-expanded="$sidebar.showSidebar"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <drop-down class="nav-item"
                     title="5 Notifications"
                     title-classes="nav-link"
                     icon="ti-bell">
            <router-link :to="{path: '/payments'}">
              <a class="dropdown-item alert-danger">Settle payment</a>
            </router-link>
            <router-link :to="{path: '/course-modules'}">
              <a class="dropdown-item alert-info">CIS7008 - Lecture slides uploaded</a>
            </router-link>
            <router-link :to="{path: '/course-modules'}">
              <a class="dropdown-item alert-info">CIS7015 - Lecture slides uploaded</a>
            </router-link>
            <router-link :to="{path: '/assignments'}">
              <a class="dropdown-item alert-warning" >CIS7028 - Assignment due</a>
            </router-link>
            <router-link :to="{path: '/assignments'}">
              <a class="dropdown-item alert-warning">CIS7015 - Interim presentation</a>
            </router-link>
          </drop-down>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti-settings"></i>
              <p>
                Settings
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div></nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
<style>
</style>
