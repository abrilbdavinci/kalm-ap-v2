<script>
import { currentUser } from '../main.js'
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup() {
    const router = useRouter()

    const logout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      currentUser.value = null
      router.push('/login')
    }

    return { currentUser, logout }
  },
}
</script>

<template>
  <!-- HEADER: Visible solo hasta 1000px -->
  <header
    class="flex min-[1000px]:hidden xl:glass md:glass items-center justify-between
            w-[95%] max-w-[1500px] mx-auto px-5 py-3
            rounded-full 
            fixed top-3 left-1/2 -translate-x-1/2 z-50
            transition-all duration-500 ease-in-out"
  >
    <!-- LOGO IZQUIERDA -->
    <div class="flex items-center">
      <img
        src="./../assets/img/logo-kalm.svg"
        alt="Logo Kälm"
        class="h-8 w-auto object-contain"
      />
    </div>

    <!-- BOTONES DERECHA (solo iconos) -->
    <div class="flex items-center gap-6 text-teal-600 text-2xl">
      
    </div>
  </header>
</template>

