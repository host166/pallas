<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>基本链接</h2>
    <ul>
        <li><router-link to="/icon">Icon组件</router-link></li>
        <li><router-link to="/toast">Toast组件</router-link></li>
        <li><router-link to="/multi">多选组件</router-link></li>
        <li><router-link to="/tag">标签组件</router-link></li>
        <li><router-link to="/range">范围选择</router-link></li>
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
      msg: '关于Pallas UI的介绍'
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
