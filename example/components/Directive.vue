<template>
  <div id="example">
    <h1>Vue指令集</h1>
    <h2>v-if和v-else应用</h2>
    <p v-if="greeting">Hello greeting</p>
    <p v-else="greeting">Hello Not greeting</p>

    <h2>v-model应用</h2>
    <input type="text" v-model="msg" placeholder="edit me">
    <form>
      姓名：
      <input type="text" v-model="data.name" placeholder="">
      <br/>
      性别：
      <input type="radio" id="man" value="One" v-model="data.sex">
      <label for="man">男</label>
      <input type="radio" id="male" value="One" v-model="data.sex">
      <label for="male">女</label>
      <br/>
      兴趣：
      <input type="checkbox" id="book" value="book" v-model="data.interest">
      <label for="book">阅读</label>
      <input type="checkbox" id="swim" value="swim" v-model="data.interest">
      <label for="swim">游泳</label>
      <input type="checkbox" id="game" value="game" v-model="data.interest">
      <label for="game">游戏</label>
      <input type="checkbox" id="song" value="song" v-model="isActive">
      <label for="song">唱歌</label>
      <br/>
      身份：
      <select>
        <option value="teacher" selected>教师</option>
        <option value="doctor">医生</option>
        <option value="lawyer">律师</option>
      </select>
    </form>

    <h2>使用修饰符</h2>
    Lazy：<input type="text" v-model.lazy="msg" placeholder="adams">
    <label>{{msg}}</label><br/>
    Number：<input type="number" v-model.number="num" >
    <label>{{typeof num}}</label><br/>
    Trim: <input type="text" v-model.trim="msg2" placeholder="adams">
    <label>{{msg2}}</label><br/>
    Computed: <label>{{msgs}}</label><br/>
    Watch: <label>{{fullName}}</label><br/>
    <h2>Class和Style绑定</h2>
    <div class="static" v-bind:class="{ active: isActive }">Class bind方式</div><br/>
    <div class="static" v-bind:class="classObject">Class bind Object方式</div><br/>
    <div v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}">Style bind方式</div><br/>
    <div v-bind:style="styleObject">Style Object bind 方式</div><br/>
    <h2>循环方法</h2>
    <ul>
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <ul>
      <template v-for="(item, index) in items">
      <li>
        {{ msg }} + {{ index }} + {{ item.message }}
      </li>
      <li class="divider"></li>
      </template>

    </ul>
    <ul>
      <li v-for="item in itemObject">
        {{ item }}
      </li>
    </ul>
    <div v-for="(value, key, index) in itemObject">
      {{ index }}. {{ key }} : {{ value }}
    </div>
    <div>
      <span v-for="n in 10">{{ n }}</span>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'eeeee',
  data () {
    return {
      msg: '欢迎来到Vue2的世界!',
      msg2: '',
      num: 0,
      greeting: true,
      data: {
        name: 'adam',
        sex: 'true',
        interest: [false, true, true, true],
        identity: '医生'
      },
      fullName: '',
      isActive: false,
      classObject: {
        active: true,
        'text-danger': true
      },
      activeColor: '#ccc',
      fontSize: 14,
      styleObject: {
        color: 'orange',
        'background-color': '#ccc',
        'font-weight': 'bold'
      },
       items: [
        {
          message: '123'
        },
        {
          message: '234'
        },
        {
          message: '345'
        }
      ],
      itemObject: {
        text: '文本',
        value: '内容',
        age: 20
      }
    }
  },
  computed: {
    msgs: function(){
      return this.msg + this.msg2;
    }
  },
  watch: {
    msg: function (val) {
      this.fullName = val + ' ' + this.msg2;
    },
    msg2: function (val) {
      this.fullName = this.msg + ' ' + val;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 18px;
}
h1:before {
  content: '🏈';
  padding-right: 5px;
}

h2 {
  font-size: 14px;
}
h2:before {
  content: '┣';
  margin-left: 15px;
  padding-right: 5px;

}
.static {
  background-color: #333;
}
.active {
  font-size: 20px;
  font-family: monospace; 
  color: #fff;
}
.text-danger {
  color: #ffe44e;
}
</style>
