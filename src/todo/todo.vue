<template>
  <section class="todo-body">
    <input 
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么？"
      @keyup.enter="addTodo"
      v-model="inputValue"
    />
    <item 
    :todo="todo"
      v-for="todo in filteredTodos" 
      :key="todo.id"
      @del="deleteTodo" 
    >
    </item>
    <tabs 
      :filter="filter"
      :todos="todos"
      @clearAllCompleted="clearAllCompleted"
      @toggle="toggleFilter"
    ></tabs>
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0
export default {
  components: {
    Item,
    Tabs
  },
  data() {
    return {
      todos: [],
      filter:'all',
      inputValue:''
    }
  },
  computed: {
    filteredTodos() {
      if(this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content:this.inputValue,
        completed: false
      })
      this.inputValue = ''
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.find)
    },
    clearAllCompleted() {
      this.todos = this.todos.filter( todo => !todo.completed)
    },
    toggleFilter(state) {
      this.filter = state
    }
  }
}
</script>

<style scoped>
.todo-body {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
  max-height:500px;
  margin-top: 80px;
  overflow-y: auto;
  border-radius: 10px;
}
.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  /* border: 0; */
  outline: none;
  color: inherit;
  /* padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, .2); */
  box-sizing: border-box;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, .03);
}
</style>