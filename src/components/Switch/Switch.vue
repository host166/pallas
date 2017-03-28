/**
 * @file Switch
 */

<template>
  <span role="switch" :class="[switchWrapper]" :style="actionStyle" @click="toggle">
    <span class="switch-on" v-show="checked">
      <i :class="onIconClass" v-if="hasIcon"></i>
      <span v-if="!hasIcon && hasText">{{onText}}</span>
    </span>
    <span class="switch-off" v-show="!checked">
      <i :class="offIconClass" v-if="hasIcon"></i>
      <span v-if="!hasIcon && hasText">{{offText}}</span>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'switch',
    data() {
      return {
        onText: 'on',
        offText: 'off',
        size: 'small',
        disabled: false,
        onColor: '#e266ab',
        offColor: '#efe565',
        hasText: true,
        checked: false,
        hasIcon: false,
        onIconClass: "",
        offIconClass: "",
        isDisabled: false
      }
    },
    computed: {
      switchWrapper() {
        return [
          'xg-switch',
          {
            ['switch-' + this.size]: !!this.size,
            'switch-disabled': !!this.isDisabled,
            'switchOn': this.checked,
          }
        ];
      },
      switchOn () {
        return {
          backgroundColor: this.onColor,
          borderColor: this.onColor
        };
      },
      switchOff () {
        return {
          backgroundColor: this.offColor,
          borderColor: this.offColor
        };
      },
      actionStyle () {
        if (this.isDisabled) {
          return this.switchDisabled;
        } else if (this.checked) {
          return this.switchOn;
        } else {
          return this.switchOff;
        }
      }
    },
    methods: {
      toggle () {
        if (!this.isDisabled) {
          this.checked = !this.checked;
          this.actionStyle = this.checked ? this.switchOn : this.switchOff;
        }
        this.$emit('change', this.checked);
      }
    }
  }
</script>

<style scoped>
  .xg-switch {
    display: inline-block;
    position: relative;
    width: 44px;
    height: 24px;
    border-width: 1px;
    border-style: solid;
    border-radius: 24px;
    line-height: 22px;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-color: #eee;
    background-color: #eee;
  }
  .xg-switch:after {
    content: '';
    width: 20px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 1px;
    bottom: 1px;
    top: 1px;
    cursor: pointer;
    transition: margin-left 0.2s ease-in-out;
  }
  .switch-large {
    width: 48px;
    height: 28px;
    line-height: 26px;
  }
  .switch-large:after {
    width: 24px;
  }
  .switch-small {
    width: 40px;
    height: 20px;
    line-height: 18px;
  }
  .switch-small:after {
    width: 16px;
  }
  .switch-disabled:after {
    background-color: #ccc;
    border-color: #aaa;
    cursor: not-allowed;
  }
  .switch-on {
    position: absolute;
    font-size: 12px;
    color: #fff;
    right: 6px;
  }
  .switch-on:after {
    margin-left: 20px;
  }
  .switch-off {
    position: absolute;
    font-size: 12px;
    color: #fff;
    right: 6px;
  }
</style>
