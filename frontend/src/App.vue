<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import Drawer from './components/Drawer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer,
    Drawer
  },
  computed: {
    showHeader() {
      return !this.$route?.meta?.hideHeader;
    },
    showNavbar() {
      return !this.$route?.meta?.hideNavbar;
    },
    showFooter() {
      return !this.$route?.meta?.hideFooter;
    }
  }
}
</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col min-h-screen header-bg pt-5 drawer-content">
      <Header v-if="showHeader" />
      <Navbar v-if="showNavbar" />
      <main class="flex grow container mx-auto text-center justify-center">
        <RouterView />
      </main>
      <Footer v-if="showFooter" class="hidden min-[1061px]:flex justify-center items-center"></Footer>
    </div>

    <Drawer />
  </div>
</template>
