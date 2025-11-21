<template>
  <button
    :disabled="disabled || loading"
    class="border-2 border-(--kälm-dark) text-(--kälm-text) cursor-pointer bg-transparent px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
    :class="{
      'opacity-60 cursor-not-allowed': disabled || loading,
      'hover:brightness-95': !disabled && !loading
    }"
    style="font-family: 'Mulish';"
  >
    <span v-if="loading" class="animate-pulse">Cargando...</span>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: "BtnSecondary",
  props: {
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
};
</script>

