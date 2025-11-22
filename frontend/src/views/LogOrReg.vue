<script>
import MainTitle from '../components/MainTitle.vue';
import BtnMain from '../components/BtnMain.vue';
import BtnSecondary from '../components/BtnSecondary.vue';

export default {
    name: 'LoginOrRegister',
    components: { MainTitle, BtnMain, BtnSecondary },
}
</script>

<template>
    <section class="w-2xl p-4 flex flex-col">
        <img src="../../src/assets/img/logo-kalm.svg" alt="logo Kälm" class="h-25 mx-auto mt-30 mb-35">
        <BtnMain class="mb-4 w-full"><RouterLink to="/login">Iniciar sesión</RouterLink></BtnMain>
        <BtnSecondary class="w-full border-(--kälm-light)"><RouterLink to="/register" class="text-(--kälm-light)">Crear cuenta</RouterLink></BtnSecondary>
    </section>
</template>