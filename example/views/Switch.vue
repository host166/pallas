<template>
  <article>
    <h1>切换开关 Switch</h1>

    <h2>例子</h2>

    <div>
        <p-switch id="switch1" size="XS" @toggle="onToggle" :checked=checked xclass="aaa"></p-switch>
        <p-switch id="switch2" size="XS" @toggle="onToggle2" :checked=checked2 xstyle="green"></p-switch>
        <div id="switchVal">{{switchVal}}</div>
        <div id="switchVal2">{{switchVal2}}</div>
        <input type="button" value="Open" @click="openClick" />
        <input type="button" value="Close" @click="closeClick" />
    </div>

    <h2>API</h2>

    <Markup :lang="'html'">

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
  .aaa {
      background-color: #545aaa;
      padding: 20px;
      margin: 10px;
      border: 1px solid #b45;
  }
  #switchVal {
      height: 20px;
      width: 100%;
      background-color: #54654f;
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
