<template>
  <div id="test">
    <switchs></switchs>
    </div>
  </div>

</template>

<script>
import switchs from './switch.vue';

export default {
  name: 'test',
  data() {
    return {
      items: [
                {
                  link: 'javascript:;',
                  text: '首页',
                  disable: false
                },{
                  link: 'javascript:;',
                  text: '导航',
                  disable: false
                },{
                  link: 'javascript:;',
                  text: '组件',
                  disable: true
                }
              ]
    }
  },
  components: {
    switchs: switchs
  }
}
</script>

<style>

</style>
