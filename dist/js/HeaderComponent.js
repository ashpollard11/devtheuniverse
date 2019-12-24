"use strict";

var HeaderComponent = Vue.component("header-component", {
	props: {
		// currentBubble: Object
	},
	template: "<header>\n\t\t\t<router-link to=\"/home\">\n\t\t\t\t<div ref=\"logo\" class=\"logo\" :src=\"logoSrc\" @click=\"hideHome(isHidden)\" :style=\"{ 'background-image': 'url(' + logoSrc + ')' }\">\n\t\t\t\t</div>\n\t\t\t</router-link>\n\t\t</header>",
	data: function data() {
		return {
			isHidden: false,
			logoSrc: "../../dist/img/logo-mini-outline.svg",
			nextPath: "about develop the universe",
			aboutHeading: "I'm Ashley Pollard, an</br><span>Interactive Front-End Developer.</span>"
		};
	},
	mounted: function mounted() {},
	methods: {
		hideHome: function hideHome(isHiding) {
			// if (!isHiding) {
			// 	TweenMax.to(this.$refs.logo, 0.5, {rotationY:360, opacity: 0, transformOrigin:"center", onComplete: () => {
			// 		this.logoSrc = "../../dist/img/logo-mini.png";
			// 		this.nextPath = "portfolio";
			// 	}});
			// 	TweenMax.to(this.$refs.logo, 0.1, {opacity: 1, delay: 0.5});
			// 	//TweenMax.delayedCall(0.3, () => {})
			// 	this.isHidden = true;
			// 	this.$emit("exitportfolio");
			// } else {
			// 	TweenMax.to(this.$refs.logo, 0.5, {rotationY:0, opacity: 0, transformOrigin:"center", onComplete: () => {
			// 		this.logoSrc = "../../dist/img/logo-mini-outline.png";
			// 		this.nextPath = "about developing the universe";
			// 	}});
			// 	TweenMax.to(this.$refs.logo, 0.1, {opacity: 1, delay: 0.5});
			// 	//TweenMax.delayedCall(0.3, () => {})
			// 	this.isHidden = false;
			// 	TweenMax.delayedCall(0.1, () => {
			// 		router.push('/portfolio');
			// 	})
			// }
		}
	}
});

//<img ref="logo" alt="devtheuniverse logo" class="logo" :src="logoSrc" @click="hideHome">
//# sourceMappingURL=HeaderComponent.js.map
