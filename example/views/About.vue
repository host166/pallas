<template>
  <article>
    <h1>关于 Pallas</h1>
    <p>
      Pallas 是一个基于 Vue.js 2.0+ 的开源 UI 组件库，适用于 PC 端和 mobile 端。
    </p>

    <p>
      部分内部系统和一些小应用已经开始使用，开源版本还在开发完善中。
    </p>

    <h2>兼容</h2>
    <p>支持 Vue.js 2.0+，不支持 Vue.js 1.x</p>

    <h2>使用</h2>
    <p>
      npm 安装
    </p>
    <code>
      $ npm install pallas --save
    </code>
    <p>
      Pallas 初始化
    </p>
  </article>
</template>

<script>

export default {
  name: 'about'
}
</script>

<style scoped>
  .demo {
    font-size 1.2rem
  }
  .github {
    a {
      display inline-block
      height 25px
      line-height 25px
      vertical-align middle
      font-size 1.2rem
      &:hover {
        text-decoration underline
      }
    }
    img {
      width 60px
    }
  }
  a {
    font-size 1.15rem
  }
</style>
