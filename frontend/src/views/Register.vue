<template>
  <section class="w-2xl p-4 flex flex-col justify-around">
    <img src="../../src/assets/img/logo-kalm.svg" alt="logo Kälm" class="h-25 mx-auto mt-20 mb-5">
    <div class="w-full h-120 mx-auto mt-5">
      <form @submit.prevent="register" class="flex flex-col gap-3 my-10">
        <label class="text-start text-(--kälm-dark) hidden">Nombre</label>
        <input v-model="name" type="text" placeholder="Nombre" class="text-(--kälm-text) p-3 bg-transparent rounded-xl border-(--kälm-light) border-2 placeholder-(--kälm-lighter) focus:outline-(--kälm-light) text-md" required />

        <label class="text-start text-(--kälm-dark) hidden">Email</label>
        <input v-model="email" type="email" placeholder="Email"  class="text-(--kälm-text) p-3 bg-transparent rounded-xl border-(--kälm-light) border-2 placeholder-(--kälm-lighter) focus:outline-(--kälm-light) text-md" required />

        <label class="text-start text-(--kälm-dark) hidden">Contraseña</label>
        <input v-model="password" type="password" placeholder="Contraseña"  class="text-(--kälm-text) p-3 bg-transparent rounded-xl border-(--kälm-light) border-2 placeholder-(--kälm-lighter) focus:outline-(--kälm-light) text-md" required />

        <BtnMain type="submit" class="mt-1 mx-auto w-full">Crear cuenta</BtnMain>

        <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
        <p v-if="success" class="text-green-600 mt-2">{{ success }}</p>
      </form>
    </div>

    <div class="w-full mx-auto">
        <p class="decorated text-(--kälm-text) text-sm mb-3">Ya tengo cuenta</p>
        <BtnSecondary class="w-full"><RouterLink to="/login">Iniciar sesión</RouterLink></BtnSecondary>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BtnMain from '../components/BtnMain.vue';
import BtnSecondary from '../components/BtnSecondary.vue';

export default {
  name: 'Register',
  components: {BtnMain, BtnSecondary},
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const success = ref('');
    const router = useRouter();

    const register = async () => {
      error.value = '';
      success.value = '';

      try {
        const res = await fetch('http://localhost:3000/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.value, email: email.value, password: password.value })
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Error al registrarse');

        success.value = 'Usuario creado correctamente. Puedes iniciar sesión.';
        name.value = '';
        email.value = '';
        password.value = '';
      } catch (err) {
        error.value = err.message;
      }
    };

    return { name, email, password, error, success, register };
  }
};
</script>
