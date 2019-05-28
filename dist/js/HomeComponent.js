"use strict";

var HomeComponent = Vue.component("home", {
	props: {
		projectData: Array,
		currentBubble: Object
	},
	template: "<div class=\"home-section\">\n\t\t\t<section class=\"button-container\">\n\t\t\t\t<button class=\"left-scroll\" v-if=\"!isMobile\" @click=\"scrollRibbon(-1)\" :class=\"{ hidden: endOfLeft }\"></button>\n\t\t\t\t<button class=\"right-scroll\" v-if=\"!isMobile\" @click=\"scrollRibbon(1)\" :class=\"{ hidden: endOfRight }\"></button>\n\t\t\t</section>\n\t\t\t<section class=\"ribbon-container\" v-touch:swipe.left=\"scrollRibbon\" v-touch:swipe.right=\"scrollRibbon\">\n\t\t\t\t<ul class=\"ribbon\" ref=\"ribbon\" :style=\"{ left: x + 'px' }\">\n\t\t\t\t\t<li v-for=\"(project, i) in projectData\" :style=\"{ 'background-image': 'url(' + project.image + ')' }\">\n\t\t\t\t\t\t\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</section>\n\t\t\t<blockquote>scroll from left to right</blockquote>\n\t\t</div>",
	data: function data() {
		return {
			isDragging: false,
			x: -23,
			endOfLeft: true,
			endOfRight: false
		};
	},
	mounted: function mounted() {},
	watch: {
		currentBubble: function currentBubble() {
			this.x = this.currentBubble.xPos;

			if (this.currentBubble.i === 0) {
				this.endOfLeft = true;
			} else if (this.currentBubble.i === 8) {
				this.endOfRight = true;
			} else {
				this.endOfLeft = false;
				this.endOfRight = false;
			}
		}
	},
	computed: {
		isMobile: function isMobile() {
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				return true;
			} else {
				return false;
			}
		}
	},
	methods: {
		scrollRibbon: function scrollRibbon(direction) {
			console.log(direction);
			if (!this.isMobile) {
				if (this.currentBubble.i === 0 && direction === -1 || this.currentBubble.i === 8 && direction === 1) {} else {
					this.$emit("nextbubble", direction);
				}
			} else {
				if (this.currentBubble.i === 0 && direction === "right" || this.currentBubble.i === 8 && direction === "left") {} else {
					var num = direction === "right" ? -1 : 1;

					this.$emit("nextbubble", num);
				}
			}
		}
	}
});

//<h3 v-html="project.title"></h3>

//<img v-bind:src="project.image" alt="project.title">
//# sourceMappingURL=HomeComponent.js.map
