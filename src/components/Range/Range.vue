<template>
	<div class="ui-range" style="width: 100%;">
	    <span class="ui-range-handle ui-range-left" :style="leftStyle" @touchstart="touchstartLeftHandle" @touchmove="touchmoveLeftHandle"></span>
	    <span class="ui-range-handle ui-range-right" :style="rightStyle" @touchstart="touchstartRightHandle" @touchmove="touchmoveRightHandle"></span>
	    <div class="ui-range-wrap">
	        <i class="ui-range-progress">
	            <i class="ui-range-progress-left ui-range-progress-item" :style="leftAxsi"></i>
	            <i class="ui-range-progress-right ui-range-progress-item" :style="rightAxsi"></i>
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

<style scoped lang="css">
.ui-range {
    position: relative;
    height: 1.34rem;
}

.ui-range-value span {
    display: inline-block;
}

.ui-range-wrap {
    position: absolute;
    right: .61rem;
    left: .61rem;
}

.ui-range-left,
.ui-range-right {
    position: absolute;
    width: 1.22rem;
    height: 1.34rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAABDCAMAAAA20dz4AAAAOVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD19fXb29szMzP9/f339/eEhIT+/v74+Pj4+Pj////q6upuLKHEAAAAEXRSTlMABQ0fFRMJGdCAH/bWNPrW1xwvsCsAAAC3SURBVEjH7dbRDsIgDIVht7UUxjbE939YayqbikBqYrIL/usvzbIbzkXfUChnxoxfMkbwAZkhInyEiIyF7hCBaMoiAhR6wNlZH7O8dfMLfcB1iYWWlWmSfJFhqcBXh3QSXKzkgI+KRLI1aQmfckTaanIjHJOcYrVpl9CS0GWXWnl767zf2f/S+WX/S13+JpWvYfuF9cRS8WprloCsi1CGV1kX7cUSZLEoVpBuWbXXmnIBtlflP7sDMfZ1OW1Hu3kAAAAASUVORK5CYII=);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 1;
}

.ui-range-left {
    left: 0;
}

.ui-range-right {
    right: 0;
}

.ui-range-progress {
    height: .08rem;
    width: 100%;
    display: block;
    background-color: #F24;
    position: absolute;
    top: .63rem;
}

.ui-range-progress-left,
.ui-range-progress-right {
    position: absolute;
    background-color: #E1E1E1;
    height: .08rem;
    display: block;
}

.ui-range-progress-left {
    left: 0;
}

.ui-range-progress-right {
    right: 0;
}

.ui-range-desc {
    display: -webkit-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: none;
}

.ui-range-desc li {
    -webkit-box-flex: 1;
    text-align: center;
    width: 1px;
}

.ui-range-desc li span {
    margin-left: -100%;
}
</style>
