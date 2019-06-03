let HeaderComponent = Vue.component("heading", {
	props: {
		currentBubble: Object
	},
	template:
		`<header>
			<h2 v-html="currentBubble.title" v-if="!isHidden" :class="{ hidden: isHidden }"></h2>
			<h2 v-else class="about-heading" :class="{ active: isHidden }" v-html="aboutHeading"></h2>
			<router-link to="/about">
				<div ref="logo" class="logo" :src="logoSrc" @click="hideHome(isHidden)" :style="{ 'background-image': 'url(' + logoSrc + ')' }">
					<p v-html="nextPath" class="nextPath" :class="{ about: isHidden, portfolio: !isHidden }"></p>
				</div>
			</router-link>
		</header>`,
	data: function() {
		return {
			isHidden: false,
			logoSrc: "../../dist/img/logo-mini-outline.png",
			nextPath: "about develop the universe",
			aboutHeading: "I'm Ashley, and I'm an</br><span>Interactive Front-End Developer.</span>"
		}
	},
	mounted: function() {
		
	},
	methods: {
		hideHome: function(isHiding) {
			if (!isHiding) {
				TweenMax.to(this.$refs.logo, 0.5, {rotationY:360, opacity: 0, transformOrigin:"center", onComplete: () => {
					this.logoSrc = "../../dist/img/logo-mini.png";
					this.nextPath = "portfolio";
				}});
				TweenMax.to(this.$refs.logo, 0.1, {opacity: 1, delay: 0.5});
				//TweenMax.delayedCall(0.3, () => {})
				this.isHidden = true;
				this.$emit("exitportfolio");
			} else {
				TweenMax.to(this.$refs.logo, 0.5, {rotationY:0, opacity: 0, transformOrigin:"center", onComplete: () => {
					this.logoSrc = "../../dist/img/logo-mini-outline.png";
					this.nextPath = "about developing the universe";
				}});
				TweenMax.to(this.$refs.logo, 0.1, {opacity: 1, delay: 0.5});
				//TweenMax.delayedCall(0.3, () => {})
				this.isHidden = false;
				TweenMax.delayedCall(0.1, () => {
					router.push('/portfolio');
				})
			}
		},
	}
})

//<img ref="logo" alt="devtheuniverse logo" class="logo" :src="logoSrc" @click="hideHome">