<template>
  <section>
    <h1>Lista de tarefas</h1>
    <ul >
      <li v-for="(todo, index) in todos" :key="index" :class="[ todo.done ? 'select' : 'deselect']">
        <div class="todo" @click="done(todo)">
          <input type="checkbox" :checked="todo.done"/>
          <div class="todo-information">
            <span>{{ todo.text }}</span>
            <p>{{ todo.description }}</p>
          </div>
        <div class="actions" @click.stop>
          <button class="edit" @click="edit(todo, index)" />
          <button class="delete" @click="clear(todo)" />
        </div>
        </div>
      </li>
    </ul>
    <form>
      <Input v-model:modelValue="newTodo.text" text="Digite uma nova tarefa.." label="Título:"/>
      <DescriptionTextArea v-model:modelValue="newTodo.description" label="Descrição:"/>
      <ButtonSubmit @click="submit" text="salvar"/>
    </form>
  </section>
</template>

<script lang="ts">
import {computed, ComputedRef, defineComponent, ref, Ref} from 'vue';
import TodoList from "@/entities/TodoList";
import {useStore} from "vuex";
import Input from "@/components/inputs/Input.vue";
import ButtonSubmit from "@/components/buttons/ButtonSubmit.vue";
import DescriptionTextArea from "@/components/inputs/DescriptionTextArea.vue";

export default defineComponent({
  name: 'Card',
  components: {ButtonSubmit, Input, DescriptionTextArea},
  setup() {
    const store = useStore();

    const newTodo: Ref<TodoList> = ref(new TodoList());

    const todos: ComputedRef<TodoList[]> = computed(() => store.getters.todoList);

    const isEdit: Ref<boolean> = ref(false);

    const loadedTodo: Ref<TodoList | null> = ref(null);

    const loadedIndex: Ref<number | null> = ref(null);

    const submit = () => {
      if (loadedTodo.value) {
        const todoToUpdate = new TodoList(
            newTodo.value.text,
            newTodo.value.done,
            newTodo.value.description,
        )
        store.dispatch("editTodoList", {todo: todoToUpdate, indexToUpdate: loadedIndex.value});
        isEdit.value = false;
        loadedTodo.value = null;
        newTodo.value = new TodoList();
        return;
      }

      if (newTodo.value.text.length) {
        store.dispatch("setTodoList", newTodo.value);
        newTodo.value = new TodoList();
      } else {
        alert("O texto da tarefa é obrigatório!")
      }
    }

    const done = (todo: TodoList) => {
      todo.done = !todo.done;
    }

    const clear = (todo: TodoList) => {
      newTodo.value = new TodoList();
      store.dispatch("clearTodoList",todo);
    }

    const edit = (todo: TodoList, index: number) => {
      newTodo.value.text = todo.text;
      newTodo.value.description = todo.description;
      isEdit.value = true;
      loadedTodo.value = todo;
      loadedIndex.value = index;
    }

    return {
      newTodo,
      todos,
      isEdit,
      submit,
      done,
      clear,
      edit,
    }
  }
});
</script>
<style scoped>
section {
  width: 45%;
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
  padding: 0;
}

li {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
}

.actions {
  display: flex;
}

.actions > button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions > button:hover {
  background-color: #efefef;
  border-radius: 10px;
}
.delete {
  display: flex;
}
.delete::after {
  content: "";
  background-image: url("../assets/ep_delete.svg");
  width: 24px;
  height: 24px;
}

.edit, .delete {
  display: flex;
  background-color: transparent;
  height: 35px;
  border: none;
}

.edit:hover, .delete:hover {
  cursor: pointer;
}

.edit::after {
  content: "";
  background-image: url("../assets/akar-icons_edit.svg");
  width: 24px;
  height: 24px;
}

.todo {
  display: flex;
  gap: 20px;
}

.todo > input:hover {
  cursor: pointer;
}

.todo-information {
  display: flex;
  flex-direction: column;
  min-width: 455px;
}

.todo-information  > p {
  margin: 0;
  padding: 0;
  text-align: left;
  color: gray;
}

.todo-information > span {
  text-align: left;
}

</style>
