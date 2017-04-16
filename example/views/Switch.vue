<template>
  <article>
    <h1>切换开关 Switch</h1>

    <h2>例子</h2>

    <div>
        <p-switch id="switch1" size="XS" @toggle="onToggle" :checked=checked class="switchTest"></p-switch>
        <p-switch id="switch2" size="XS" @toggle="onToggle2" xstyle="red" :checked=checked2 ></p-switch>
        <div id="switchVal">Result: {{switchVal}}</div>
        <div id="switchVal2">Result2: {{switchVal2}}</div>
        <h3>外部控制状态变化</h3>
        <input type="button" value="Open" @click="openClick" />
        <input type="button" value="Close" @click="closeClick" />
    </div>

    <h2>API</h2>

    <Markup>

    </Markup>
    </pre>
  </article>
</template>

<script>
export default {
    name: 'switchs',
    data(){
        return {
            switchVal: "true",
            checked: true,
            switchVal2: "false",
            checked2: false
        }
    },
    methods: {
        onToggle: function(data) {
            this.switchVal = data;
        },
        onToggle2: function(data) {
            this.switchVal2 = data;
            this.checked2 = data;
        },
        openClick: function () {
            this.checked2 = true;
        },
        closeClick: function () {
            this.checked2 = false;
        }
    }
}
</script>

<style scoped lang="stylus">
  .switchTest {
      background-color: #545aaa;
      padding: 5px;
      margin: 5px;
      border: 1px solid #ef1;
  }
  #switchVal {
      height: 20px;
      width: 100%;
  }
  .alert-container {
    width 70%
    .alert {
      margin 10px 0
    }
  }
  @media (max-width: 600px) {
    .alert-container {
      width 100%
    }
  }
</style>
