/**
 * @file 开关切换 Switch
 */

<template>
    <div class="ui-switch" v-bind:class="xclass">
        <input type="checkbox" :id="id" :checked="myChecked" @change="toggle" :disabled="disabled">
        <label :for="id" :class="myStyle"></label>
    </div>
</template>

<script>
/**
Property : size : XS|S|M|L|XL
*/
export default {
    name: 'switch',
    props: {
        id: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        xstyle: {
            type: String,
            default: 'red'
        },
        size: {
            type: String,
            default: 'S'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        xclass: {
            type: String
        }
    },
    data() {
        return {
            myChecked: this.checked && !this.disabled
        }
    },
    computed: {
        myStyle: function () {
            return "switch-" + this.xstyle;
        }
    },
    watch: {
        checked(val) {
            this.myChecked = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myChecked中
        },
        myChecked(val){
            this.$emit("toggle",val);//③组件内对myResult变更后向外部发送事件通知
        }
    },
    methods: {
        toggle () {
            if (!this.disabled) {
                this.myChecked = !this.myChecked;
            }
        }
    }
}
</script>

<style scoped>
    .ui-switch {
        display: inline-block;
        /*line-height: 60px;*/
        text-align: center;
        position: relative;
    }

    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"]+label {
        display: inline-block;
        width: 40px;
        height: 20px;
        position: relative;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        margin: 0px 20px;
        box-sizing: border-box;
    }

    input[type="checkbox"]+label:after {
        content: '';
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        cursor: pointer;
    }

    input[type="checkbox"]:checked+label.switch-red {
        background: #ECA9A7;
    }

    input[type="checkbox"]:checked+label.switch-red:after {
        background: #D9534F;
    }

    input[type="checkbox"]:checked+label.switch-green {
        background: #AEDCAE;
    }

    input[type="checkbox"]:checked+label.switch-green:after {
        background: #5CB85C;
    }

    input[type="checkbox"]:checked+label:after {
        left: calc(100% - 18px);
    }

    input[type="checkbox"]+label {
        background: #ddd;
        border-radius: 20px;
    }

    input[type="checkbox"]+label:after {
        background: #fff;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        top: 2px;
        left: 2px;
    }
</style>
