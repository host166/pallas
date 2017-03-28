<template>
	<div id="eventRegion">
		<h1>事件处理器</h1>
		<h2>监听事件</h2>
		<div id="ex-1">
			<button v-on:click="counter += 1">增加1</button>
			<p>这个按钮点击了{{ counter }}次</p>
		</div>
		<div id="ex-2">
			<button v-on:click="say('tom');">说tom</button>
			<button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
		</div>
		<div id="ex-3">
			<!-- 阻止单击事件冒泡 -->
			<div v-on:click="say('hello')"><a v-on:click.stop="doThis">aaaa</a></div>
			<!-- 仅绑定事件一次 -->
			<div v-on:click="say('hello')"><a v-on:click.once="doThis">aaaa</a></div>
			<div><input v-on:keyup.enter="submit" name="tom"></div>
			<!-- Alt + C -->
			<input @keyup.alt.67="clear">
			<br/>
			<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
			<label for="jack">Jack</label>
			<input type="checkbox" id="john" value="John" v-model="checkedNames">
			<label for="john">John</label>
			<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
			<label for="mike">Mike</label>
			<br>
			<span>Checked names: {{ checkedNames }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'eventRegion',
	data() {
		return {
			counter: 0,
			checkedNames: []
		}
	},
	methods: {
		say: function (message) {
			alert(message);
		},
		warn: function (message, event) {
		    // 现在我们可以访问原生事件对象
		    if (event) {
		    	event.preventDefault() 
		    	alert(message);
		    }
		},
		doThis: function () {
			
			alert('dothis!');
		},
		submit: function (event){
			alert(event.target.name);
		},
		clear: function (){
			alert(0);	
		}
	}
}
</script>

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
</style>