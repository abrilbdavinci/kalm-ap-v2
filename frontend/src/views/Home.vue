<script>
import MainTitle from '../components/MainTitle.vue'
import SubTitle from '../components/SubTitle.vue'
import BtnSecondary from '../components/BtnSecondary.vue'
import BtnDark from '../components/BtnDark.vue'
import BtnMain from '../components/BtnMain.vue'



export default {
    name: 'Home',
    components: {
        MainTitle,
        SubTitle,
        BtnSecondary,
        BtnDark,
        BtnMain
    }
}
</script>

<template>
  <section class="w-full flex flex-col items-center">
    <div class="mt-15 rounded-t-4xl bg-white w-full p-4 ">
      <img src="./../assets/img/" alt="banner home kälm premium">
      <div class="text-start">
        <h2>Para vos</h2>
        <p>Probá productos que se adaptan a vos</p>
        <div class="overflow-x-scroll">
          /*tarjetas de productos verticales (hacer componente vertical y otro horizontal?)*/
        </div>
      </div>
    </div>
  </section>
</template>

