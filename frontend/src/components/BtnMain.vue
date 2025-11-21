<template>
  <button
    type="button"
    :disabled="disabled || loading"
    class="px-5 py-3 rounded-xl text-white font-bold transition cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed bg-(--kälm-dark)"
    style="font-family: 'Mulish';"
  >
    <span v-if="loading">Guardando...</span>
    <span v-else><slot /></span>
  </button>
</template>

<script>
export default {
  name: "BtnSecondary",
  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
};
</script>
