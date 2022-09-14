<template>
  <div class="input-title">
    <label for="input-title">{{label}}</label>
    <input id="input-title" type="text" name="text" @input="$emit('modelValue', $event.target.value)"  :placeholder="text" :value="modelValue">
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: "Search",
  props: {
    text: {
      type: String,
      default: "Digite",
    },
    modelValue: {
      type: String,
    },
    label: {
      type: String,
    }
  }
})
</script>

<style scoped>

input {
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #b9b6b6;
  width: 100%;
  box-sizing: border-box;
}

input:focus {
  outline-color: #a9a9a9;
}

label {
  text-align: left;
  color: #3b536e;
}

.input-title {
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 10px;
}
</style>