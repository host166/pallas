<template>
  <article>
    <h1>范围组件 Range</h1>

    <h2>例子</h2>

    <div>
        <p-range id="switch1" :division=division1 :indexs=indexs1 :single=single1></p-range>
        <div id="switchVal">Result: </div>

        <h3>外部控制状态变化</h3>
        <input type="button" value="Open"  />
        <input type="button" value="Close" />
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
            division1: ['0', '150', '300', '450', '550', '850', '不限'],
            indexs1: ['1', '5'],
            single1: false
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="stylus">
  .switchTest {
      background-color: #545aaa;
      padding: 20px;
      margin: 10px;
      border: 1px solid #b45;
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
