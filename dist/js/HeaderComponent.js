"use strict";

var HeaderComponent = Vue.component("header-component", {
	props: {},
	template: "<header>\n\t\t\t<div ref=\"logo\" class=\"logo\" :src=\"logoSrc\" :style=\"{ 'background-image': 'url(' + logoSrc + ')' }\">\n\t\t\t</div>\n\t\t</header>",
	data: function data() {
		return {
			isHidden: false,
			logoSrc: "../../dist/img/logo-mini-outline.svg",
			nextPath: "about develop the universe",
			aboutHeading: "I'm Ashley Pollard, an</br><span>Interactive Front-End Developer.</span>"
		};
	},
	mounted: function mounted() {},
	methods: {}
});

//<img ref="logo" alt="devtheuniverse logo" class="logo" :src="logoSrc" @click="hideHome">

//<router-link to="/home"></router-link>
//# sourceMappingURL=HeaderComponent.js.map
