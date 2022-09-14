import { createStore } from 'vuex'
import TodoList from "../entities/TodoList";

export class VueState {
  todoList: TodoList[] = [];
  filteredTodos: TodoList[] = [];
}
export default createStore({
  state: new VueState(),

  mutations: {
    SET_TODO_LIST(state: VueState, todoList: TodoList) {
      state.todoList.push(todoList);
    },
    SET_TODOS_LIST(state: VueState, todos: TodoList[]) {
      state.todoList = todos;
    },
    CLEAR_TODO_LIST(state: VueState, todoList: TodoList[]) {
      state.todoList = todoList;
    },
    SET_FILTERED_TODO(state: VueState, filteredTodos: TodoList[]) {
      state.filteredTodos = filteredTodos;
    },
  },
  actions: {
    setTodoList({ commit }, todoList: TodoList) {
      commit("SET_TODO_LIST", todoList);
    },
    clearTodoList({ commit }, todoList: TodoList) {
      const index = this.state.todoList.indexOf(todoList);
      this.state.todoList.splice(index, 1)
      commit("CLEAR_TODO_LIST", this.state.todoList);
    },
    editTodoList({ commit }, { todo, indexToUpdate }) {
      this.state.todoList[indexToUpdate] = todo;

      commit("CLEAR_TODO_LIST", this.state.todoList);
    },
    search({ commit }, value: string) {
      const todos = this.state.todoList;

      const foundTodos = todos.filter((todo: TodoList) => {
        const todoText = todo.text.toLowerCase();
        const searchingName = value.toLowerCase();
        return todoText.includes(searchingName);
      })
      commit("SET_FILTERED_TODO", foundTodos);
    },
  },
  getters: {

    todoList: (state) => state.todoList,
    filteredTodos: (state) => state.filteredTodos,

  },
  modules: {
  }
})
