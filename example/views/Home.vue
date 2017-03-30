<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>基本链接</h2>
    <ul>
        <li><router-link to="/switch">切换开关</router-link></li>
      <li><router-link to="/about">关于Pallas</router-link></li>
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
