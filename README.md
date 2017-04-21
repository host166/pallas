# 关于 Pallas UI
Pallas UI 是一个基于 Vue.js 2.0+ 的开源 UI 组件库，在交互和视觉设计上遵循前端规范，适用于 PC 端和 mobile 端。

##支持
Support Vue.js 2.0+
Not support Vue.js 1.x

##使用
###npm install
```
$ npm install pallas --save-dev
```
###Pallas init
```
import Vue from 'vue'
import Pallas from 'pallas'
Vue.use(Pallas)

export default {
  name: 'app',
  mounted(){
    this.$pallas.init()
  }
}
```
###import css
```
<link href="./node_modules/pallas/dist/pallas.min.css" rel="stylesheet" type="text/css">
```
##相关项目
