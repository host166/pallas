<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>基本链接</h2>
    <ul>
      <li><router-link to="/readme">自述文件</router-link></li>
    </ul>
    <h2>学习Vue2</h2>
    <ul>
      <li><router-link to="/directive">指令学习</router-link></li>
      <li><router-link to="/event">事件学习</router-link></li>
      <li><router-link to="/transition">过渡学习</router-link></li>
    </ul>
    <h2>测试</h2>
    <ul>
      <li><router-link to="/test">组件测试</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到Vue2的世界!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
