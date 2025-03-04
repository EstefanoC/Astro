<script setup>
import { ref } from 'vue'

// state
const count = ref(0)

// actions
function increment() {
  count.value++
}

// actions
function decrement() {
  count.value--
}
</script>

<!-- view -->
<template>
  <div class="flex flex-col items-center justify-center gap-2 w-full">
    <p class="prose !text-amber-50">Ahora hay {{ count }} cuentas</p>

    <button
      class="border w-fit border-amber-400 cursor-pointer bg-amber-50 px-4 py-2 hover:scale-105 transition-all"
      @click="increment"
    >
      Sumar
    </button>

    <button
      class="border w-fit border-amber-400 cursor-pointer bg-amber-50 px-4 py-2 hover:scale-105 transition-all"
      @click="decrement"
    >
      Restar
    </button>
  </div>
</template>
