"use strict";

var HeaderComponent = Vue.component("heading", {
	props: {
		currentBubble: Object
	},
	template: "<header>\n\t\t\t<h1 v-html=\"currentBubble.title\" v-if=\"!isHidden\" :class=\"{ hidden: isHidden }\"></h1>\n\t\t\t<h1 v-else class=\"about-heading\" :class=\"{ active: isHidden }\" v-html=\"aboutHeading\"></h1>\n\t\t\t<router-link to=\"/about\">\n\t\t\t\t<div ref=\"logo\" class=\"logo\" :src=\"logoSrc\" @click=\"hideHome(isHidden)\" :style=\"{ 'background-image': 'url(' + logoSrc + ')' }\">\n\t\t\t\t\t<p v-html=\"nextPath\" class=\"nextPath\" :class=\"{ about: isHidden, portfolio: !isHidden }\"></p>\n\t\t\t\t</div>\n\t\t\t</router-link>\n\t\t</header>",
	data: function data() {
		return {
			isHidden: false,
			logoSrc: "../../dist/img/logo-mini-outline.png",
			nextPath: "about develop the universe",
			aboutHeading: "I'm Ashley Pollard, an</br><span>Interactive Front-End Developer.</span>"
		};
	},
	mounted: function mounted() {},
	methods: {
		hideHome: function hideHome(isHiding) {
			var _this = this;

			if (!isHiding) {
				TweenMax.to(this.$refs.logo, 0.5, { rotationY: 360, opacity: 0, transformOrigin: "center", onComplete: function onComplete() {
						_this.logoSrc = "../../dist/img/logo-mini.png";
						_this.nextPath = "portfolio";
					} });
				TweenMax.to(this.$refs.logo, 0.1, { opacity: 1, delay: 0.5 });
				//TweenMax.delayedCall(0.3, () => {})
				this.isHidden = true;
				this.$emit("exitportfolio");
			} else {
				TweenMax.to(this.$refs.logo, 0.5, { rotationY: 0, opacity: 0, transformOrigin: "center", onComplete: function onComplete() {
						_this.logoSrc = "../../dist/img/logo-mini-outline.png";
						_this.nextPath = "about developing the universe";
					} });
				TweenMax.to(this.$refs.logo, 0.1, { opacity: 1, delay: 0.5 });
				//TweenMax.delayedCall(0.3, () => {})
				this.isHidden = false;
				TweenMax.delayedCall(0.1, function () {
					router.push('/portfolio');
				});
			}
		}
	}
});

//<img ref="logo" alt="devtheuniverse logo" class="logo" :src="logoSrc" @click="hideHome">
//# sourceMappingURL=HeaderComponent.js.map
