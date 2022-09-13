<template>
  <div class="input-textarea">
    <label for="input-textarea">{{ label }}</label>
    <textarea
        id="input-textarea"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        placeholder="Digite..."
    ></textarea>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: "DescriptionTextArea",

  props: {
    modelValue: {
    type: String,
  },
  label: {
    type: String,
  }
  }

});
</script>

<style scoped>
textarea {
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #b9b6b6;;
}

label {
  text-align: left;
  color: #3b536e;
}

.input-textarea {
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 10px;
}

textarea:focus {
  outline-color: #b9b6b6;;
}

</style>