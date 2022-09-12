<template>
  <section>
    <h1>Lista de tarefas</h1>
    <ul >
      <li v-for="(todo, index) in todos" :key="index" @click="done(todo)" :class="[ todo.done ? 'select' : 'deselect']">{{ todo.text }}</li>
    </ul>
    <form>
    <ButtonClear @click="clearTodos" v-if="todos.length"/>
      <Input v-model:modelValue="newTodo.text" text="Digite uma nova tarefa.."/>
      <ButtonSubmit @click="submit" text="salvar"/>
    </form>
  </section>
</template>

<script lang="ts">
import {computed, ComputedRef, defineComponent, ref, Ref} from 'vue';
import TodoList from "@/entities/TodoList";
import {useStore} from "vuex";
import Input from "@/components/Input.vue";
import ButtonSubmit from "@/components/buttons/ButtonSubmit.vue";
import ButtonClear from "@/components/buttons/ButtonClear.vue";

export default defineComponent({
  name: 'Card',
  components: {ButtonClear, ButtonSubmit, Input},
  setup() {
    const store = useStore();

    const newTodo: Ref<TodoList> = ref(new TodoList());

    const todos: ComputedRef<TodoList[]> = computed(() => store.getters.todoList);

    const submit = () => {
      if (newTodo.value.text.length) {
        store.dispatch("setTodoList", newTodo.value);
      } else {
        alert("O texto da tarefa é obrigatório!")
      }
        newTodo.value = new TodoList();
    }

    const done = (todo: TodoList) => {
      todo.done = !todo.done;
    }

    const clearTodos = () => {
      store.dispatch("clearTodoList");
    }
    return {
      newTodo,
      todos,
      submit,
      done,
      clearTodos,
    }
  }
});
</script>
<style scoped>
section {
  width: 35%;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
}

h1 {
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
}

.select {
  text-decoration: line-through
}

.deselect {
  text-decoration: initial;
}

.select:hover, .deselect:hover {
  cursor: pointer;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 90%;
}
</style>
