<template>
  <section class="w-2xl">
    <img src="../../src/assets/img/logo-kalm.svg" alt="logo Kälm" class="h-25 mx-auto mt-20 mb-5">
    <div class="w-full h-120 mx-auto mt-5">
      <form @submit.prevent="login" class="flex flex-col gap-3 my-10">
        <label class="text-start text-(--kälm-dark) hidden">Email</label>
        <input v-model="email" type="email" placeholder="Email" class="text-(--kälm-text) p-3 rounded-xl border-(--kälm-light) border-2 placeholder-(--kälm-lighter) focus:outline-(--kälm-light) focus:background-transparent text-md" required />

        <label class="text-start text-(--kälm-dark) hidden">Contraseña</label>
        <input v-model="password" type="password" placeholder="Contraseña" class="text-(--kälm-text) p-3 bg-transparent rounded-xl border-(--kälm-light) border-2 placeholder-(--kälm-lighter) focus:outline-(--kälm-light) text-md" required />

        <BtnMain type="submit" class="mt-1 mx-auto w-full">Iniciar sesión</BtnMain>
        <RouterLink to="/pswrd-restore" class="text-(--kälm-text) text-center font-bold text-sm">Olvidé la contraseña</RouterLink>

        <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
      </form>
    </div>

    <div class="w-full mx-auto">
        <p class="decorated text-(--kälm-text) text-sm mb-3">No tengo cuenta</p>
        <BtnSecondary class="w-full"><RouterLink to="/register">Crear cuenta</RouterLink></BtnSecondary>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { currentUser } from '../main';
import { useRouter } from 'vue-router';
import MainTitle from '../components/MainTitle.vue';
import BtnMain from '../components/BtnMain.vue';
import BtnSecondary from '../components/BtnSecondary.vue';

export default {
  name: 'Login',
  components: { MainTitle, BtnMain, BtnSecondary },
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();

    const login = async () => {
      error.value = '';
      try {
        const res = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.value, password: password.value })
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Error al iniciar sesión');

        // Guardar token y usuario en localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Actualizar ref reactivo global
        currentUser.value = data.user;

        router.push('/tests'); // Redirigir a tests
      } catch (err) {
        error.value = err.message;
      }
    };

    return { email, password, error, login };
  }
};
</script>

<style scoped>
.decorated {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.decorated::before,
.decorated::after {
  content: "";
  color: var(--kälm-dark);
  flex: 1 1 0;
  height: 1px;
  background: currentColor;
}
</style>
