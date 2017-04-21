<template>
  <article>
    <h1>多选组件 Multi</h1>

    <h2>例子</h2>

    <div>
        <p-multi id="multi1" title="酒店星级" :items="items" @ontoggle="toggle"></p-multi>
    </div>

    <h2>操作结果</h2>
    <div class="result">
        <ul>
            <li v-for="item in items">
                <span>key:{{item.key}}</span>
                <span>value:{{item.value}}</span>
                <span>selected:{{item.selected}}</span>
                <span>all:{{item.all}}</span>
            </li>
        </ul>
    </div>
    <Markup>

    </Markup>
    </pre>
  </article>
</template>

<script>
export default {
    name: 'multi',
    data(){
        return {
            items: [{all: 1, selected: true, key: '全部', value: 'key:"全部"'},{all: 0, selected: false, key: '经济型酒店', value: 'key:"经济型酒店"'},{all: 0, selected: false, key: '三星级', value: 'key:"三星级"'},{all: 0, selected: false, key: '四星级', value: 'key:"四星级"'},{all: 0, selected: false, key: '五星级', value: 'key:"五星级"'}]
        }
    },
    methods: {
        toggle: function(data) {
            this.items = data;
        }
    }
}
</script>

<style scoped lang="css">
    .result {
        width: 100%;
        display: inline-block;
    }
    .result ul {
        padding-left: .5rem;
    }
    .result ul li {
        line-height: 2rem;
        border-bottom-width: 2px;
        border-bottom-style: dotted;
    }
</style>
