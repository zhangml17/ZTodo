<template>
  <div class="todo-tabs">
    <span class="tabs-left" > {{ unFinishedTodoLength }} items left</span>
    <span class="tabs-main">
      <span
        v-for="(state, idx) in states"
        :key="idx"
        :class="[state, filter === state ? 'actived': '']"
        @click="toggleFilter(state)"
      >
      {{ state }}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted"> Clear Completed </span>
  </div>
</template>

<script>
export default {
  props: [ 'filter', 'todos'],
  data() {
    return {
      states:['all', 'active', 'completed']
    }
  },
  computed:{
    // 返回未完成的item条数
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods:{
    toggleFilter(state) {
      this.$emit('toggle', state)
    },
    clearAllCompleted() {
      this.$emit('clearAllCompleted')
    }
  }
}
</script>

<style scoped>
.todo-tabs{
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #fff;
  font-size: 14px;
}
.tabs-left, .clear, .tabs-main{
  padding: 0 10px;
  box-sizing: border-box;
}
.tabs-left, .clear{
  width: 150px;
}
.tabs-left {
  text-align: left;
}
.clear {
  text-align: right;
  cursor: pointer;
}
.tabs-main {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
.tabs-main * {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid rgba(175, 47, 47, 0)
}
.tabs-main,.actived {
  border-color: rgba(175, 47, 47, .4);
  border-radius: 5px;
}
</style>