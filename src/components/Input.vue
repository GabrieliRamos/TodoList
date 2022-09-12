<template>
  <input type="text" name="text" @input="$emit('update:modelValue', $event.target.value)"  :placeholder="text" >
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: "Input",
  props: {
    text: {
      type: String,
      default: "Digite",
      required: false,
    }
  }
})
</script>

<style scoped>

input {
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #b9b6b6;
  width: 65%;
}

input:focus {
  outline-color: #a9a9a9;
}
</style>