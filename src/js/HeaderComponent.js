let HeaderComponent = Vue.component("header-component", {
	props: {},
	template:
		`<header>
			<div ref="logo" class="logo" :src="logoSrc" :style="{ 'background-image': 'url(' + logoSrc + ')' }">
			</div>
		</header>`,
	data: function() {
		return {
			isHidden: false,
			logoSrc: "../../dist/img/logo-mini-outline.svg",
			nextPath: "about develop the universe",
			aboutHeading: "I'm Ashley Pollard, an</br><span>Interactive Front-End Developer.</span>"
		}
	},
	mounted: function() {
		
	},
	methods: {
	
	}
})

//<img ref="logo" alt="devtheuniverse logo" class="logo" :src="logoSrc" @click="hideHome">

//<router-link to="/home"></router-link>