<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer
  }
  ,
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
  <div class="flex flex-col min-h-screen header-bg pt-5">
    <Header v-if="showHeader" />
    <Navbar v-if="showNavbar" />
    <main class="flex grow container mx-auto p-4 text-center justify-center">
      <RouterView />
    </main>
    <Footer v-if="showFooter" class="hidden min-[1061px]:flex justify-center items-center"></Footer>
  </div>
</template>
