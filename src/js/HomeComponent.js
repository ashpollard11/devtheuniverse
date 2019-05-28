let HomeComponent = Vue.component("home", {
	props: {
		projectData: Array,
		currentBubble: Object
	},
	template:
		`<div class="home-section">
			<section class="button-container">
				<button class="left-scroll" v-if="!isMobile" @click="scrollRibbon(-1)" :class="{ hidden: endOfLeft }"></button>
				<button class="right-scroll" v-if="!isMobile" @click="scrollRibbon(1)" :class="{ hidden: endOfRight }"></button>
			</section>
			<section class="ribbon-container" v-touch:swipe.left="scrollRibbon" v-touch:swipe.right="scrollRibbon">
				<ul class="ribbon" ref="ribbon" :style="{ left: x + 'px' }">
					<li v-for="(project, i) in projectData" :style="{ 'background-image': 'url(' + project.image + ')' }">
						
					</li>
				</ul>
			</section>
			<blockquote>scroll from left to right</blockquote>
		</div>`,
	data: function() {
		return {
			isDragging: false,
			x: -23,
			endOfLeft: true,
			endOfRight: false
		}
	},
	mounted: function() {
		
	},
	watch: {
		currentBubble: function() {
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
				if ( this.currentBubble.i === 0 && direction === -1 || this.currentBubble.i === 8 && direction === 1) {
	
				} else {
					this.$emit("nextbubble", direction);
				}
			} else {
				if ( this.currentBubble.i === 0 && direction === "right" || this.currentBubble.i === 8 && direction === "left") {
	
				} else {
					let num = (direction === "right") ? -1 : 1;
					
					this.$emit("nextbubble", num);
				}
			}
		},
	}
})

//<h3 v-html="project.title"></h3>

//<img v-bind:src="project.image" alt="project.title">