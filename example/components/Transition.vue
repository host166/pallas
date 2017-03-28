
<template>

<div id="transitionStudy">
<div id="example-1">
  <button v-on:click="show = !show">
    Toggle render
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>
</div>
<div id="example-2">
  <button @click="show1 = !show1">Toggle show</button>
  <transition name="bounce">
    <p v-if="show1">Look at me!</p>
  </transition>
</div>
<link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
<div id="example-3">
  <button @click="show2 = !show2">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show2">hello</p>
  </transition>
</div>
<div id="example-3-1">
	<button @click="show3 = !show3">Toggle 钩子</button>
	<transition
	  v-on:before-enter="beforeEnter"
	  v-on:enter="enter"
	  v-on:after-enter="afterEnter"
	  v-on:enter-cancelled="enterCancelled"
	  v-on:before-leave="beforeLeave"
	  v-on:leave="leave"
	  v-on:after-leave="afterLeave"
	  v-on:leave-cancelled="leaveCancelled"
	>
	   <p v-if="show3">hello</p>
	</transition>
</div>

<div id="example-4">
  <button @click="show4 = !show4">
    Toggle
  </button>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <p v-if="show4">
      Demo
    </p>
  </transition>
</div>

<div id="example-5">
  <switchs></switchs>
</div>
</div>
</template>

<script>
import switchs from './switch.vue';

export default {
	name: 'tttt',
	data () {
		return {
			show: true,
			show1: true,
			show2: true,
			show3: true,
			show4: true,
			show5: true
		}
	},
	methods: {
	  // --------
	  // 进入中
	  // --------
	  beforeEnter: function (el) {
 		el.style.opacity = 0;
      	el.style.transformOrigin = 'left';
	  },
	  // 此回调函数是可选项的设置
	  // 与 CSS 结合时使用
	  enter: function (el, done) {
      	Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      	Velocity(el, { fontSize: '1em' }, { complete: done })
	  },
	  afterEnter: function (el) {
	    // ...
	  },
	  enterCancelled: function (el) {
	    // ...
	  },
	  // --------
	  // 离开时
	  // --------
	  beforeLeave: function (el) {
	    // ...
	  },
	  // 此回调函数是可选项的设置
	  // 与 CSS 结合时使用
	  leave: function (el, done) {
	    Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
      	Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
      	Velocity(el, { rotateZ: '45deg', translateY: '30px', translateX: '30px', opacity: 0}, { complete: done });
	  },
	  afterLeave: function (el) {
	    // ...
	  },
	  // leaveCancelled 只用于 v-show 中
	  leaveCancelled: function (el) {
	    // ...
	  }
	},
  components: {
    switchs: switchs
  }
}
</script>

<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
