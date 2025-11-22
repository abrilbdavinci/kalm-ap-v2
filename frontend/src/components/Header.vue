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
  <header class="flex min-[1000px]:hidden xl:glass md:glass items-end justify-between
            w-[95%] max-w-[1500px] mx-auto px-4 py-3
            rounded-full 
            fixed top-3 left-1/2 -translate-x-1/2 z-50
            transition-all duration-500 ease-in-out"
  >
    <!-- LOGO IZQUIERDA -->
    <p class="text-4xl logo-text">Kälm</p>

    <!-- BOTONES DERECHA (solo iconos) -->
    <div class="flex gap-4 text-2xl">
      <RouterLink to="/"><img src="./../assets/img/notificaciones.svg" alt="notificaciones" class="h-10 w-auto"></RouterLink>
      <label for="my-drawer-1" class="cursor-pointer avatar" aria-label="open sidebar">
        <img src="./../assets/img/pfp.svg" alt="usuario" class="h-10 w-auto rounded-full object-cover" />
      </label>
    </div>
  </header>
</template>

