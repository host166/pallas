<template>
  <article>
    <h1>关于 pallas UI</h1>
    <p>
      pallas UI 是一个基于 Vue.js 2.0+ 的开源 UI 组件库，在交互和视觉设计上遵循 Material Design 规范，适用于 PC 端和 mobile 端。
    </p>

    <p>
      部分内部系统和一些小应用已经开始使用，开源版本还在开发完善中。
    </p>

    <h2>GitHub</h2>
    <div class="github">
      <a href="https://github.com/ccforward/pallas" target="_blank"><img src="../assets/github.png" alt=""></a>
      <a class="demo-link" href="https://github.com/ccforward/pallas" target="_blank">https://github.com/ccforward/pallas</a>
    </div>

    <h2>NPM</h2>
    <a href="https://www.npmjs.com/package/i-pallas" target="_blank">
      <img src="https://img.shields.io/npm/v/i-pallas.svg" alt="npm">
    </a>


    <h2>兼容</h2>
    <p>支持 Vue.js 2.0+，不支持 Vue.js 1.x</p>

    <h2>Demo</h2>
    <a class="demo demo-link" href="https://ccforward.github.io/pallas/" target="_blank">https://ccforward.github.io/pallas/</a>
    <a class="demo demo-link" href="http://pallas.ccforward.net/" target="_blank">http://pallas.ccforward.net/</a>
    
    <h2>使用</h2>
    <p>
      npm 安装
    </p>
    <code>
      $ npm install i-pallas --save
    </code>
    <p>
      pallas 初始化
    </p>
    <Markup :lang="'js'">
      import Vue from 'vue'
      import pallas from 'i-pallas'
      Vue.use(pallas)
      
      export default {
        name: 'app',
        mounted(){
          this.$pallas.init()
        }
      }
    </Markup>

    <p>引入css</p>

    <Markup :lang="'html'">
      &lt;link rel="stylesheet" href="//unpkg.com/i-pallas/dist/pallas.min.css"&gt;
      或者
      &lt;link href="./node_modules/i-pallas/dist/pallas.min.css" rel="stylesheet" type="text/css"&gt;
    </Markup>
    

    <h2>相关开源项目</h2>
    <p>
      pallas UI 的部分组件和样式代码参考了以下项目 <br>
      在此表示感谢
    </p>
    <ul>
      <li><a class="demo-link" href="http://materializecss.com/" target="_blank">materializecss</a></li>
      <li><a class="demo-link" href="http://www.material-ui.com/" target="_blank">material-ui</a></li>
      <li><a class="demo-link" href="https://www.iviewui.com/" target="_blank">iview</a></li>
      <li><a class="demo-link" href="https://vuetifyjs.com/" target="_blank">vuetify</a></li>
    </ul>
  </article>
</template>

<script>

export default {
  name: 'about'
}
</script>

<style scoped lang="stylus">
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
