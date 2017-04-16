<template>
  <article>
    <h1>标签组件 Tag</h1>

    <h2>例子</h2>

    <div>
        <p-tag id="tag1" rect :class="myClass" class="blue">土豪</p-tag>
        <p-tag id="tag2" outline>精品酒店</p-tag>
        <p-tag id="tag3" small outline>精品酒店</p-tag>
        <p-tag id="tag4" smallx rect>优惠券</p-tag>
    </div>

    <h2>API</h2>

    <Markup>

    </Markup>
    </pre>
  </article>
</template>

<script>
export default {
    name: 'tags',
    data(){
        return {
            myClass: 'tag-red'
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="css">
.tag-red {
    background: #ff2244;
}
</style>
