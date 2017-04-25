<template>
  <article>
    <h1>Toast组件</h1>

    <h2>例子</h2>

    <div>
        <button class="btntest" id="btn1" type="button" @click="Click1">顶部弹出</button>
        <button class="btntest" id="btn2" type="button" @click="Click2">底部弹出</button>
        <button class="btntest" id="btn3" type="button" @click="Click3">左侧弹出</button>
        <button class="btntest" id="btn4" type="button" @click="Click4">右侧弹出</button>
    </div>

    <h2>API</h2>

    <Markup>

    </Markup>
    </pre>
  </article>
</template>

<script>
export default {
    name: 'toast1',
    data(){
        return {

        }
    },
    methods: {
        Click1: function() {
            this.$pallas.toast.show('this is top test', 'top', 2000, function(){});
        },
        Click2: function() {
            this.$pallas.toast.show('this is bottom test', 'bottom', 3000, function(){});
        },
        Click3: function() {
            this.$pallas.toast.show('this is left test', 'left', 4000, function(){});
        },
        Click4: function() {
            this.$pallas.toast.show('this is right test', 'right' ,50000, function(){alert(5000)});
        }
    }
}
</script>

<style scoped lang="css">
.btntest {
    background: #008ca0;
    width: 5rem;
    height: 2rem;
}
</style>
