<template>
	<div class="range" style="width: 100%;">
	    <span class="range-handle range-left" :style="leftStyle" @touchstart="touchstartLeftHandle" @touchmove="touchmoveLeftHandle"></span>
	    <span class="range-handle range-right" :style="rightStyle" @touchstart="touchstartRightHandle" @touchmove="touchmoveRightHandle"></span>
	    <div class="range-wrap">
	        <i class="range-progress">
	            <i class="range-progress-left range-progress-item" :style="leftAxsi"></i>
	            <i class="range-progress-right range-progress-item" :style="rightAxsi"></i>
	        </i>
	    </div>
	</div>
</template>

<script>
export default {
    props: {
        indexs: {
            type: Array,
            default: [0, 6]
        },
        division: {
            type: Array,
            default: [0, 100, 200, 300, 400, 500, '不限'],
            required: true
        },
        single: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            left: (this.indexs.length > 0 && !this.single) ? this.indexs[0] : 0,
            right: this.indexs.length > 1 ? this.indexs[1] : 0,
        }
    },
    computed: {
        targetWidth() {
            return 320;
        },
        divWidth() {
            return this.targetWidth / (this.division.length - 2);
        },
        leftPos() {
            return this.left * this.divWidth;
        },
        rightPos() {
            console.log((this.division.length - this.right - 1) * this.divWidth);
            return (this.division.length - this.right - 1) * this.divWidth;
        },
        leftStyle() {
            return {
                "left": this.leftPos + 'px',
                "display": (this.single ? 'none' : '')
            }
        },
        rightStyle() {
            return {
                "right": this.rightPos + 'px'
            }
        },
		leftAxsi() {
			return {
                "width": this.leftPos + 'px'
            }
		},
		rightAxsi() {
			return {
                "width": this.rightPos + 'px'
            }
		},
        diviLen() {
            return this.division.length;
        }
    },
    watch: {
        indexs(val) {
            this.left = val.length > 1 ? val[0] : 0;
            this.right = val.length > 2 ? val[1] : (val.length - 1)
        },
        division(val) {
            this.left = 0;
            this.right = this.division.length - 1;
        },
        left(val){
            this.change();
        },
        right(val){
            this.change();
        }
    },
    methods: {
        touchstartLeftHandle (e) {
            this.x0 = e.touches[0].pageX;
            this.pos = e.target.offsetLeft;
        },
        touchmoveLeftHandle(e) {
            var self = this;
            self.x1 = e.touches[0].pageX;
            self.deltaX = self.x1 - self.x0;
            var distance = self.pos + self.deltaX;
            //console.log(distance);
            var curPos = self.leftPos;
            curPos = distance;
            self._moveTo('left', curPos);
        },
        touchstartRightHandle(e) {
            this.x0 = e.touches[0].pageX;
            this.pos = e.target.offsetLeft;
        },
        touchmoveRightHandle(e) {
            var self = this;
            self.x1 = e.touches[0].pageX;
            self.deltaX = self.x1 - self.x0;
            var distance = self.pos + self.deltaX;
            var curPos = self.rightPos;
            curPos = distance;
            self._moveTo('right', curPos);
        },
        _moveTo(side, pos) {
            var self = this;
            var offset = pos % self.divWidth;
            var newPos = pos - offset;
            if (2 * offset > self.divWidth) {
                newPos += self.divWidth;
            }
            let ln = parseInt(newPos / self.divWidth, 10);
            ln = ln < 0 ? 0 : ln;
            if (side === 'left') {
                ln = ln >= this.diviLen - 1 ? this.diviLen - 2 : ln;
                if (!this.single) {
                    ln = ln >= self.right ? ln - 1 : ln;
                }
                self.left = ln;
            } else {
                ln = ln >= this.diviLen - 1 ? this.diviLen - 1 : ln;
                if (!this.single) {
                    ln = ln <= self.left ? ln + 1 : ln;
                }
                self.right = ln;
            }
        },
        change() {
            this.$emit("change",{
                min: this.left,
                max: this.right,
                minVal: this.division[this.left],
                maxVal: this.division[this.right]
            });
            console.log({
                min: this.left,
                max: this.right,
                minVal: this.division[this.left],
                maxVal: this.division[this.right]
            });
        }
    },
}
</script>
