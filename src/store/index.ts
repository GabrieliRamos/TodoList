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
    CLEAR_TODO_LIST(state: VueState, todoList: TodoList[]) {
      state.todoList = todoList;
    },
  },
  actions: {
    setTodoList({ commit }, todoList: TodoList) {
      commit("SET_TODO_LIST", todoList);
    },
    clearTodoList({ commit }) {
      commit("CLEAR_TODO_LIST", []);
    },
  },
  getters: {

    todoList: (state) => state.todoList,
  },
  modules: {
  }
})
