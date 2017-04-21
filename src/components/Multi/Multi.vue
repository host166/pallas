<template>
<div class="multi">
    <div v-if="myTitle != ''" class="multi-title">{{myTitle}}</div>
    <div class="multi-items">
        <ul>
            <li v-for="item in myCompItems" :data-all="item.all" :class="item.active" :value="item.value" @click="toggle(item.key)">
                <a class="">
                    <span class="">{{item.key}}</span>
                </a>
            </li>
         </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'icon',
    data(){
        return {
            myTitle: this.title || '',
            myItems: this.items || []
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array
        }
    },
    computed: {
        myCompItems() {
            if (this.myItems && this.myItems.length) {
                for (let item of this.myItems) {
                    item.all = item.all || 0;
                    item.selected = item.selected || false;
                    item.active = item.selected ? 'active' : '';
                    item.key = item.key || '';
                    item.value = item.value || '';
                }
            }
            return this.myItems;
        },
        clazz(){
            return {

            }
        }
    },
    watch: {
        items(val) {
            this.myItems = val;
        },
        myItems(val){
            this.$emit("toggle",val);
        }
    },
    methods: {
        toggle (key) {
            let allItem = this.myItems.find(x => x.key == key && x.all == 1);
            if (allItem) {
                allItem.selected = true;

                for (let item of this.myItems) {
                    if (item.key == allItem.key) {
                        continue;
                    }
                    item.selected = false;
                }
            } else {
                allItem = this.myItems.find(x => x.all == 1);
                allItem.selected = false;
                let hasSelected = false;
                for (let item of this.myItems) {
                    if (item.key == key) {
                        item.selected = !item.selected;
                    }
                    if (item.selected) {
                        hasSelected = true;
                    }
                }
                if (!hasSelected) {
                    allItem.selected = true;
                }
            }
        }
    }
}
</script>
