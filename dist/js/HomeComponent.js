"use strict";

var HomeComponent = Vue.component("home", {
	props: {
		projectData: Array,
		currentBubble: Object
	},
	template: "<div class=\"home-section\">\n\t\t\t<section class=\"directory-container\" :class=\"{ active: openDirectory }\">\n\t\t\t\t<blockquote>jump to project</blockquote>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"(project, i) in projectData\" @click=\"directorySelect(i)\"> {{ project.shortTitle }} </li>\n\t\t\t\t</ul>\n\t\t\t\t<button role=\"button\" type=\"button\" class=\"directory\" @click=\"toggleDirectory\" :class=\"{ active: openDirectory }\">jump</button>\n\t\t\t</section>\n\t\t\t<section class=\"button-container\">\n\t\t\t\t<button role=\"button\" type=\"button\" class=\"left-scroll\" v-if=\"!isMobile\" @click=\"scrollRibbon(-1)\" :class=\"{ hidden: endOfLeft }\"></button>\n\t\t\t\t<button role=\"button\" type=\"button\" class=\"right-scroll\" v-if=\"!isMobile\" @click=\"scrollRibbon(1)\" :class=\"{ hidden: endOfRight }\"></button>\n\t\t\t</section>\n\t\t\t<section class=\"ribbon-container\" v-touch:swipe.left=\"scrollRibbon\" v-touch:swipe.right=\"scrollRibbon\">\n\t\t\t\t<nav class=\"ribbon\" ref=\"ribbon\" :style=\"{ left: x + 'px' }\">\n\t\t\t\t\t<a v-bind:href=\"project.link\" v-for=\"(project, i) in projectData\" target=\"_blank\">\n\t\t\t\t\t\t<li :style=\"{ 'background-image': 'url(' + project.image + ')' }\"></li>\n\t\t\t\t\t</a>\n\t\t\t\t</nav>\n\t\t\t</section>\n\t\t\t<blockquote v-html=\"scrollSwipeBlurb\" class=\"blurb\"></blockquote>\n\t\t</div>",
	data: function data() {
		return {
			x: -23,
			endOfLeft: true,
			endOfRight: false,
			scrollSwipeBlurb: String,
			openDirectory: false
		};
	},
	mounted: function mounted() {
		this.scrollSwipeBlurb = this.isMobile ? "swipe to view portfolio" : "navigate arrows to view portfolio";
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
		}
	}
});

//<img v-bind:src="project.image" alt="project.title">
//# sourceMappingURL=HomeComponent.js.map
