<template>
  <button
    :disabled="disabled || loading"
    class="px-5 py-3 rounded-xl text-white font-bold cursor-pointer transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
    style="font-family: 'Mulish';"
    >
    <span v-if="loading">Cargando...</span>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: "BtnDark",
  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
};
</script>
