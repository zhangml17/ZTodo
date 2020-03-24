<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <to-do></to-do>
    <Footer></Footer>
  </div>  
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.vue'
import ToDo from './todo/todo.vue'

export default {
  components:{
    Header,
    Footer,
    ToDo
  },
  data() {
    return {
     
    }
  }
}
</script>

<style scoped>

#app{
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
}
#cover {
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: .8;
  z-index: -1;
}
</style>