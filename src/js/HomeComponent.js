let HomeComponent = Vue.component("home", {
	props: {
		projectData: Array,
		currentBubble: Object
	},
	template:
		`<div class="home-section">
			<div class="overlay" v-if="showHint"></div>
			<section class="hint-container" v-if="showHint">
				<ul>
					<li class="point point-1" ref="point1"></li>
					<li class="point point-2" ref="point2"></li>
					<li class="point point-3" ref="point3"></li>
				</ul>
				<div class="circle">
					<p v-html="hintBlurb" class="hint"></p>
				</div>
				<button role="button" class="close" v-html="closeSymbol" @click="closeHint"></button>
			</section>
			<section class="directory-container" :class="{ active: openDirectory }">
				<blockquote>jump to project</blockquote>
				<ul>
					<li v-for="(project, i) in projectData" @click="directorySelect(i)"> {{ project.shortTitle }} </li>
				</ul>
				<button role="button" type="button" class="directory" @click="toggleDirectory" :class="{ active: openDirectory }"></button>
			</section>
			<section class="button-container">
				<button role="button" type="button" class="left-scroll" v-if="!isMobile" @click="scrollRibbon(-1)" :class="{ hidden: endOfLeft }"></button>
				<button role="button" type="button" class="right-scroll" v-if="!isMobile" @click="scrollRibbon(1)" :class="{ hidden: endOfRight }"></button>
			</section>
			<section class="ribbon-container" v-touch:swipe.left="scrollRibbon" v-touch:swipe.right="scrollRibbon">
				<nav class="ribbon" ref="ribbon" :style="{ left: x + 'px' }">
					<a v-bind:href="project.link" v-for="(project, i) in projectData" target="_blank">
						<li :style="{ 'background-image': 'url(' + project.image + ')' }"></li>
					</a>
				</nav>
			</section>
			<blockquote v-html="scrollSwipeBlurb" class="blurb"></blockquote>
		</div>`,
	data: function() {
		return {
			x: -23,
			endOfLeft: true,
			endOfRight: false,
			scrollSwipeBlurb: String,
			hintBlurb: String,
			openDirectory: false,
			showHint: false,
			tl: new TimelineMax(),
			closeSymbol: "&times;"
		}
	},
	mounted: function() {
		this.scrollSwipeBlurb = (this.isMobile) ? "swipe to view portfolio" : "navigate bubbles to view portfolio";
		this.hintBlurb = (this.isMobile) ? "tap the tab to view all projects" : "click the tab to view all projects";

		//delay show hint
		TweenMax.delayedCall(1, () => {
			this.showHint = true;
		})
	},
	watch: {
		currentBubble: function() {
			this.x = this.currentBubble.xPos;

			if (this.currentBubble.i === 0) {
				this.endOfLeft = true;
			} else if (this.currentBubble.i === (this.projectData.length - 1)) {
				this.endOfRight = true;
			} else {
				this.endOfLeft = false;
				this.endOfRight = false;
			}
		},
		showHint: function() {
			if (this.showHint) {
				Vue.nextTick(() => {
					console.log(this.$refs.point1);
					this.tl.to(this.$refs.point3, 0.2, {opacity:1,  delay:0.2})
					this.tl.to(this.$refs.point2, 0.2, {opacity:1})
					this.tl.to(this.$refs.point1, 0.2, {opacity:1});
				});
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
		toggleDirectory: function() {
			this.openDirectory = !this.openDirectory;
		},
		directorySelect: function(selection) {
			this.toggleDirectory();

			this.$emit('directselectbubble', selection);
		},
		closeHint: function() {
			this.showHint = false;
		}
	}
})

//<img v-bind:src="project.image" alt="project.title">