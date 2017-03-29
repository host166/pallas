<template>
  <article>
    <h1>切换开关 Switch</h1>
    <h2>例子</h2>
    <p-switch>

    </p-switch>
    <h2>API</h2>

    <h3>props</h3>

    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>arrow</td>
          <td>是否显示箭头</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>auto</td>
          <td>是否自动播放</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>interval</td>
          <td>自动播放间隔时间 单位: 毫秒 ms</td>
          <td>Number</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>底部导航</td>
          <td>String</td>
          <td>fiber_manual_record</td>
        </tr>

      </tbody>
    </table>

    <Markup :lang="'html'">

    </Markup>
  </article>
</template>

<script>
export default {
  name: 'switch',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.switch {
  width 500px
  margin-left 30px
}
</style>
