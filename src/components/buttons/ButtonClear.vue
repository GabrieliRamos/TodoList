<template>
  <button type="button">{{ text }}</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: "ButtonClear",
  props: {
    text: {
      type: String,
      default: "Excluir",
      required: false,
    }
  }
})
</script>

<style scoped>

button {
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  padding: 9px;
  width: 100px;
  display: flex;
  border-radius: 16px;
  border: none;
  background: #e9124e;
}

button:hover {
  cursor: pointer;
}

</style>