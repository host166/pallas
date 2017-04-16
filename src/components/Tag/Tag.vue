<template>
  <span class="tag" :class="clazz" v-show="show">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'tag',
    data(){
      return {
        show: {
          type: Boolean,
          default: true
        }
      }
    },
    props: {
      close: Boolean,
      rect: Boolean,
      outline: Boolean,
      small: Boolean,
      smallx: Boolean
    },
    computed: {
      clazz () {
        return {
          'tag-rect': this.rect,
          'tag-outline': this.outline,
          'tag-small': this.small,
          'tag-small-x': this.smallx
        }
      }
    }
  }
</script>
