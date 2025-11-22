<template>
  <section class="p-5 flex flex-col">
    <div class="text-start mt-20 mb-30">
      <span class="text-start text-sm text-(--kälm-light)">Pregunta 1</span>
      <MainTitle class="text-start">¿Qué estás interesado en mejorar?</MainTitle>
    </div>

    <div v-if="!token" class="text-red-600 text-lg">
      Debes iniciar sesión para ver los tests.
    </div>

    <div v-else class="flex flex-col gap-6 w-full justify-items-center">
      <div class="flex flex-col items-center text-center gap-4 wrap justify-center">
        <RouterLink :to="/tests/" class="bg-white/20 w-full p-6 py-10 items-center shadow-lg rounded-xl mb-4 flex justify-center">
          <BtnSecondary class="py-2 flex font-bold border-none">Cuidado de la piel</BtnSecondary>
        </RouterLink>
        <RouterLink :to="/tests/" class="bg-white/20 w-full p-6 py-10 items-center shadow-lg rounded-xl mb-4 flex justify-center">
          <BtnSecondary class="py-2 font-bold border-none">Cuidado del cabello</BtnSecondary>
        </RouterLink>
      </div>
    </div>
  </section>
</template>


<script>
import TestCard from '../components/TestCard.vue';
import BtnSecondary from '../components/BtnSecondary.vue';
import BtnMain from '../components/BtnMain.vue';
import MainTitle from '../components/MainTitle.vue';

export default {
  name: 'TestsInicio',
  components: { TestCard, BtnSecondary, MainTitle, BtnMain },
  data() {
    return {
      tests: [],
      resultados: [],
      token: localStorage.getItem('token') || null
    };
  },
  methods: {
    isTestDone(testKey) {
      return this.resultados.some(r => r.testKey === testKey);
    }
  },
  async mounted() {
    if (!this.token) return;

    try {
      // Obtener tests
      const resTests = await fetch('http://localhost:3000/tests', {
        headers: { 'Authorization': `Bearer ${this.token}` }
      });

      if (!resTests.ok) throw new Error('No se pudieron obtener los tests');
      this.tests = await resTests.json();

      // Obtener resultados del usuario
      const userId = JSON.parse(atob(this.token.split('.')[1])).id;
      const resResultados = await fetch(`http://localhost:3000/resultadosUsuarios/${userId}`, {
        headers: { 'Authorization': `Bearer ${this.token}` }
      });

      if (!resResultados.ok) throw new Error('No se pudieron obtener tus resultados');
      this.resultados = await resResultados.json();

    } catch (err) {
      console.error(err);
    }
  }
};
</script>


