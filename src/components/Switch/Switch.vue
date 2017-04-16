/**
 * @file 开关切换 Switch
 */

<template>
    <div class="ui-switch">
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
            default: 'green'
        },
        size: {
            type: String,
            default: 'S'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            myChecked: this.checked && !this.disabled
        }
    },
    computed: {
        myStyle: function () {
            console.log(this.xstyle);
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
