<template>
  <div class="todo-footer">
    <span> {{ words }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: '成功，就是以自己喜欢的方式过一生！'
    }
  }
}
</script>

<style scoped>
.todo-footer {
  margin-top: 40px;
  text-align: center;
  color: #e2dede;
  font-size: 16px;
  font-weight: 100;
  font-family: 'Times New Roman', Times, serif;
  text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
}
</style>