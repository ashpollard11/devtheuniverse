"use strict";

var HomeComponent = Vue.component("home", {
	props: {
		projectData: Array,
		currentBubble: Object
	},
	template: "<div class=\"home-section\">\n\t\t\t<section class=\"button-container\">\n\t\t\t\t<button role=\"button\" type=\"button\" class=\"left-scroll\" ref=\"left\" v-if=\"!isMobile\" @click=\"scrollRibbon(-1)\" :class=\"{ hidden: endOfLeft }\">\n\t\t\t\t\t<div class=\"small\"></div>\n\t\t\t\t\t<div class=\"large\"></div>\n\t\t\t\t</button>\n\t\t\t\t<button role=\"button\" type=\"button\" class=\"right-scroll\" ref=\"right\" v-if=\"!isMobile\" @click=\"scrollRibbon(1)\" :class=\"{ hidden: endOfRight }\">\n\t\t\t\t\t<div class=\"large\"></div>\n\t\t\t\t\t<div class=\"small\"></div>\n\t\t\t\t</button>\n\t\t\t</section>\n\t\t\t<section class=\"ribbon-container\" v-touch:swipe.left=\"scrollRibbon\" v-touch:swipe.right=\"scrollRibbon\">\n\t\t\t\t<nav class=\"ribbon\" ref=\"ribbon\" :style=\"{ left: x + 'px' }\">\n\t\t\t\t\t<a v-bind:href=\"project.link\" v-for=\"(project, i) in projectData\" target=\"_blank\">\n\t\t\t\t\t\t<li :style=\"{ 'background-image': 'url(' + project.image + ')' }\"></li>\n\t\t\t\t\t</a>\n\t\t\t\t</nav>\n\t\t\t</section>\n\t\t\t<blockquote v-html=\"scrollSwipeBlurb\" class=\"blurb\"></blockquote>\n\t\t</div>",
	data: function data() {
		return {
			x: -23,
			endOfLeft: true,
			endOfRight: false,
			scrollSwipeBlurb: String,
			hintBlurb: String,
			openDirectory: false,
			showHint: false,
			hintTl: new TimelineMax(),
			closeSymbol: "&times;"
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.scrollSwipeBlurb = this.isMobile ? "swipe to view portfolio" : "navigate bubbles to view portfolio";
		this.hintBlurb = this.isMobile ? "tap the tab to view all projects" : "click the tab to view all projects";

		//delay show hint
		TweenMax.delayedCall(1, function () {
			_this.showHint = true;
		});

		if (this.$refs.left) {

			var leftFirst = void 0,
			    leftLast = void 0,
			    rightFirst = void 0,
			    rightLast = void 0;

			leftFirst = TweenMax.to(this.$refs.left.firstChild, 0.5, { x: -20, scale: 0.8, yoyo: true, repeat: -1, repeatDelay: 1, ease: Bounce.easeIn });
			leftLast = TweenMax.to(this.$refs.left.lastChild, 0.5, { x: -20, scale: 0.8, yoyo: true, repeat: -1, repeatDelay: 1, ease: Bounce.easeIn });
			rightFirst = TweenMax.to(this.$refs.right.firstChild, 0.5, { x: 20, scale: 0.8, yoyo: true, repeat: -1, repeatDelay: 1, ease: Bounce.easeIn });
			rightLast = TweenMax.to(this.$refs.right.lastChild, 0.5, { x: 20, scale: 0.8, yoyo: true, repeat: -1, repeatDelay: 1, ease: Bounce.easeIn });

			this.$refs.left.addEventListener("mouseover", function (e) {
				leftFirst.kill();
				leftLast.kill();
			});
			this.$refs.left.addEventListener("mouseout", function (e) {
				leftFirst.play();
				leftLast.play();
			});

			this.$refs.right.addEventListener("mouseover", function (e) {
				rightFirst.kill();
				rightLast.kill();
			});
			this.$refs.right.addEventListener("mouseout", function (e) {
				rightFirst.play();
				rightLast.play();
			});
		}
	},
	watch: {
		currentBubble: function currentBubble() {
			this.x = this.currentBubble.xPos;

			if (this.currentBubble.i === 0) {
				this.endOfLeft = true;
			} else if (this.currentBubble.i === this.projectData.length - 1) {
				this.endOfRight = true;
			} else {
				this.endOfLeft = false;
				this.endOfRight = false;
			}
		},
		showHint: function showHint() {
			var _this2 = this;

			if (this.showHint) {
				Vue.nextTick(function () {
					_this2.hintTl.to(_this2.$refs.point3, 0.2, { opacity: 1, delay: 0.2 });
					_this2.hintTl.to(_this2.$refs.point2, 0.2, { opacity: 1 });
					_this2.hintTl.to(_this2.$refs.point1, 0.2, { opacity: 1 });
				});
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
				if (this.currentBubble.i === 0 && direction === -1 || this.currentBubble.i === this.projectData.length - 1 && direction === 1) {} else {
					this.$emit("nextbubble", direction);
				}
			} else {
				if (this.currentBubble.i === 0 && direction === "right" || this.currentBubble.i === this.projectData.length - 1 && direction === "left") {} else {
					var num = direction === "right" ? -1 : 1;

					this.$emit("nextbubble", num);
				}
			}
		},
		toggleDirectory: function toggleDirectory() {
			this.openDirectory = !this.openDirectory;
		},
		directorySelect: function directorySelect(selection) {
			this.toggleDirectory();

			this.$emit('directselectbubble', selection);
		},
		closeHint: function closeHint() {
			this.showHint = false;
		}
	}
});

//<img v-bind:src="project.image" alt="project.title">
//# sourceMappingURL=HomeComponent.js.map
