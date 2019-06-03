let HomeComponent = Vue.component("home", {
	props: {
		projectData: Array,
		currentBubble: Object
	},
	template:
		`<div class="home-section">
			<section class="button-container">
				<button role="button" class="left-scroll" v-if="!isMobile" @click="scrollRibbon(-1)" :class="{ hidden: endOfLeft }"></button>
				<button role="button" class="right-scroll" v-if="!isMobile" @click="scrollRibbon(1)" :class="{ hidden: endOfRight }"></button>
			</section>
			<section class="ribbon-container" v-touch:swipe.left="scrollRibbon" v-touch:swipe.right="scrollRibbon">
				<nav class="ribbon" ref="ribbon" :style="{ left: x + 'px' }">
					<a v-bind:href="project.link" v-for="(project, i) in projectData" target="_blank">
						<li :style="{ 'background-image': 'url(' + project.image + ')' }" @click="openProject"></li>
					</a>
				</nav>
			</section>
			<blockquote v-html="scrollSwipeBlurb"></blockquote>
		</div>`,
	data: function() {
		return {
			x: -23,
			endOfLeft: true,
			endOfRight: false,
			scrollSwipeBlurb: String
		}
	},
	mounted: function() {
		this.scrollSwipeBlurb = (this.isMobile) ? "swipe to view portfolio" : "navigate arrows to view portfolio";
	},
	watch: {
		currentBubble: function() {
			console.log(this.projectData.length)
			this.x = this.currentBubble.xPos;

			if (this.currentBubble.i === 0) {
				this.endOfLeft = true;
			} else if (this.currentBubble.i === (this.projectData.length - 1)) {
				this.endOfRight = true;
			} else {
				this.endOfLeft = false;
				this.endOfRight = false;
			}
		}
	},
	computed: {
		isMobile: function() {
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				return true;
			} else {
				return false;
			}
		}
	},
	methods: {
		scrollRibbon: function(direction) {
			console.log(direction)
			if (!this.isMobile) {
				if ( this.currentBubble.i === 0 && direction === -1 || this.currentBubble.i === (this.projectData.length - 1) && direction === 1) {
	
				} else {
					this.$emit("nextbubble", direction);
				}
			} else {
				if ( this.currentBubble.i === 0 && direction === "right" || this.currentBubble.i === (this.projectData.length - 1) && direction === "left") {
	
				} else {
					let num = (direction === "right") ? -1 : 1;
					
					this.$emit("nextbubble", num);
				}
			}
		},
		openProject: function() {
			this.$emit("openproject");
		}
	}
})

//<img v-bind:src="project.image" alt="project.title">