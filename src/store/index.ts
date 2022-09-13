import { createStore } from 'vuex'
import TodoList from "../entities/TodoList";

export class VueState {
  todoList: TodoList[] = [];
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
  },
  getters: {

    todoList: (state) => state.todoList,
  },
  modules: {
  }
})
