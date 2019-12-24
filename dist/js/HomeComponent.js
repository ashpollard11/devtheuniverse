"use strict";

// let HomeComponent = Vue.component("home", {
// 	props: {
// 		projectData: Array,
// 		currentBubble: Object
// 	},
// 	template:
// 		`<div class="home-section">
// 			<div class="overlay" v-if="showHint"></div>
// 			<section class="hint-container" v-if="showHint">
// 				<ul>
// 					<li class="point point-1" ref="point1"></li>
// 					<li class="point point-2" ref="point2"></li>
// 					<li class="point point-3" ref="point3"></li>
// 				</ul>
// 				<div class="circle">
// 					<p v-html="hintBlurb" class="hint"></p>
// 				</div>
// 				<button role="button" class="close" v-html="closeSymbol" @click="closeHint"></button>
// 			</section>
// 			<section class="directory-container" :class="{ active: openDirectory }">
// 				<blockquote>jump to project</blockquote>
// 				<ul>
// 					<li v-for="(project, i) in projectData" @click="directorySelect(i)" v-html="project.shortTitle"></li>
// 				</ul>
// 				<button role="button" type="button" class="directory" @click="toggleDirectory" :class="{ active: openDirectory }"></button>
// 			</section>
// 			<section class="button-container">
// 				<button role="button" type="button" class="left-scroll" ref="left" v-if="!isMobile" @click="scrollRibbon(-1)" :class="{ hidden: endOfLeft }">
// 					<div class="small"></div>
// 					<div class="large"></div>
// 				</button>
// 				<button role="button" type="button" class="right-scroll" ref="right" v-if="!isMobile" @click="scrollRibbon(1)" :class="{ hidden: endOfRight }">
// 					<div class="large"></div>
// 					<div class="small"></div>
// 				</button>
// 			</section>
// 			<section class="ribbon-container" v-touch:swipe.left="scrollRibbon" v-touch:swipe.right="scrollRibbon">
// 				<nav class="ribbon" ref="ribbon" :style="{ left: x + 'px' }">
// 					<a v-bind:href="project.link" v-for="(project, i) in projectData" target="_blank">
// 						<li :style="{ 'background-image': 'url(' + project.image + ')' }"></li>
// 					</a>
// 				</nav>
// 			</section>
// 			<blockquote v-html="scrollSwipeBlurb" class="blurb"></blockquote>
// 		</div>`,
// 	data: function() {
// 		return {
// 			x: -23,
// 			endOfLeft: true,
// 			endOfRight: false,
// 			scrollSwipeBlurb: String,
// 			hintBlurb: String,
// 			openDirectory: false,
// 			showHint: false,
// 			hintTl: new TimelineMax(),
// 			closeSymbol: "&times;"
// 		}
// 	},
// 	mounted: function() {
// 		this.scrollSwipeBlurb = (this.isMobile) ? "swipe to view portfolio" : "navigate bubbles to view portfolio";
// 		this.hintBlurb = (this.isMobile) ? "tap the tab to view all projects" : "click the tab to view all projects";

// 		//delay show hint
// 		TweenMax.delayedCall(1, () => {
// 			this.showHint = true;
// 		})

// 		if (this.$refs.left) {

// 			let leftFirst, leftLast, rightFirst, rightLast;

// 			leftFirst = TweenMax.to(this.$refs.left.firstChild, 0.5, {x: -20, scale: 0.8,  yoyo: true, repeat: -1, repeatDelay: 1, ease: Bounce.easeIn});
// 			leftLast = TweenMax.to(this.$refs.left.lastChild, 0.5, {x: -20, scale: 0.8, yoyo: true, repeat: -1, repeatDelay: 1, ease: Bounce.easeIn});
// 			rightFirst = TweenMax.to(this.$refs.right.firstChild, 0.5, {x: 20, scale: 0.8,  yoyo: true, repeat: -1, repeatDelay: 1, ease: Bounce.easeIn});
// 			rightLast = TweenMax.to(this.$refs.right.lastChild, 0.5, {x: 20, scale: 0.8, yoyo: true, repeat: -1, repeatDelay: 1, ease: Bounce.easeIn});

// 			this.$refs.left.addEventListener("mouseover", (e) => {
// 				leftFirst.kill();
// 				leftLast.kill();
// 			});
// 			this.$refs.left.addEventListener("mouseout", (e) => {
// 				leftFirst.play();
// 				leftLast.play();
// 			});

// 			this.$refs.right.addEventListener("mouseover", (e) => {
// 				rightFirst.kill();
// 				rightLast.kill();
// 			});
// 			this.$refs.right.addEventListener("mouseout", (e) => {
// 				rightFirst.play();
// 				rightLast.play();
// 			});
// 		}
// 	},
// 	watch: {
// 		currentBubble: function() {
// 			this.x = this.currentBubble.xPos;

// 			if (this.currentBubble.i === 0) {
// 				this.endOfLeft = true;
// 			} else if (this.currentBubble.i === (this.projectData.length - 1)) {
// 				this.endOfRight = true;
// 			} else {
// 				this.endOfLeft = false;
// 				this.endOfRight = false;
// 			}
// 		},
// 		showHint: function() {
// 			if (this.showHint) {
// 				Vue.nextTick(() => {
// 					this.hintTl.to(this.$refs.point3, 0.1, {opacity:1,  delay:0.2})
// 					this.hintTl.to(this.$refs.point2, 0.1, {opacity:1})
// 					this.hintTl.to(this.$refs.point1, 0.1, {opacity:1});
// 				});
// 			}
// 		}
// 	},
// 	computed: {
// 		isMobile: function() {
// 			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		}
// 	},
// 	methods: {
// 		scrollRibbon: function(direction) {
// 			console.log(direction)
// 			if (!this.isMobile) {
// 				if ( this.currentBubble.i === 0 && direction === -1 || this.currentBubble.i === (this.projectData.length - 1) && direction === 1) {

// 				} else {
// 					this.$emit("nextbubble", direction);
// 				}
// 			} else {
// 				if ( this.currentBubble.i === 0 && direction === "right" || this.currentBubble.i === (this.projectData.length - 1) && direction === "left") {

// 				} else {
// 					let num = (direction === "right") ? -1 : 1;

// 					this.$emit("nextbubble", num);
// 				}
// 			}
// 		},
// 		toggleDirectory: function() {
// 			this.openDirectory = !this.openDirectory;
// 		},
// 		directorySelect: function(selection) {
// 			this.toggleDirectory();

// 			this.$emit('directselectbubble', selection);
// 		},
// 		closeHint: function() {
// 			this.showHint = false;
// 		}
// 	}
// })

//<img v-bind:src="project.image" alt="project.title">

{/* <aside class="secondary-content" ref="secondary-content">
 <h2 v-if="content.secondary" v-html="content.secondary.h2"></h2>
 </aside> */}

var HomeComponent = Vue.component("home", {
	props: {
		content: Object
	},
	template: "<div class=\"content\">\n\t\t\t<article class=\"hero-content\" ref=\"hero_content\">\n\t\t\t\t<div ref=\"ash-icon\" class=\"ash-icon\" :src=\"iconSrc\" :style=\"{ 'background-image': 'url(' + iconSrc + ')' }\"></div>\n\t\t\t\t<blockquote class=\"blockquote-carousel\">\n\t\t\t\t\t<div class=\"carousel-container\" ref=\"carousel_container\" v-html=\"homeContent.blockquote_carousel\"></div>\n\t\t\t\t</blockquote>\n\t\t\t\t<h1 v-for=\"(lines, i) in homeContent.h1\" v-html=\"lines\"></h1>\n\t\t\t</article>\n\t\t\t<div class=\"scroll-prompt\">\n\t\t\t\t<div ref=\"scroll_arrow\" class=\"scroll-arrow\" :src=\"arrowSrc\" :style=\"{ 'background-image': 'url(' + arrowSrc + ')' }\"></div>\n\t\t\t\t<p>learn more about my work</p>\n\t\t\t</div>\n\t\t</div>",
	data: function data() {
		return {
			homeContent: this.content.home_content,
			iconSrc: "../../dist/img/ash-icon.svg",
			arrowSrc: "../../dist/img/arrow.svg",
			carouselCount: 0
		};
	},
	mounted: function mounted() {
		var _this = this;

		TweenMax.delayedCall(2, function () {
			return _this.runCarousel();
		});

		//****USEFUL LATER */
		// TweenMax.fromTo(this.$refs.arrow_path1, 0.22, {drawSVG: "0%"}, {drawSVG: "0% 100%", stroke: "#b3e9fe", yoyo: true, repeat: -1, repeatDelay: 0.22, delay: 0.1});
		// TweenMax.fromTo(this.$refs.arrow_path2, 0.22, {drawSVG: "0%"}, {drawSVG: "0% 100%", stroke: "#b3e9fe", yoyo: true, repeat: -1, repeatDelay: 0.22});
	},
	watch: {},
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
		runCarousel: function runCarousel(transitioning) {
			var _this2 = this;

			var carousel = this.$refs.carousel_container;
			var distance = this.carouselCount === 3 || transitioning ? "-=50px" : "-=100px";
			var duration = this.carouselCount === 3 || transitioning ? 0.8 : 1;

			var tw = TweenMax.to(carousel, duration, { y: distance, onComplete: function onComplete() {
					_this2.carouselCount++;

					if (_this2.carouselCount >= carousel.children.length) {
						_this2.carouselCount = 0;

						TweenMax.set(carousel, { clearProps: "y" });
						carousel.style.transform = "translateY(55px)";
						_this2.runCarousel(true);
					} else {
						TweenMax.delayedCall(3, function () {
							return _this2.runCarousel();
						});
					}
				} });
		}

		// nextSequence: function() {

		// 	this.timelineActive = true;
		// 	let previousHeight = getComputedStyle(this.$refs.primary_content).height;
		// 	this.$refs.primary_content.classList.remove(this.content.class)


		// 	var tl = new TimelineMax({});
		// 	tl.add(() => { 
		// 		this.content = "";
		// 		this.$refs.primary_content.classList.add("transitioning");
		// 	})
		// 	tl.to(this.$refs.primary_content, 0.4, {height: 0.1, transformOrigin: "center center", delay: 0.2})
		// 	tl.to(this.$refs.primary_content, 0.4, {height: previousHeight, transformOrigin: "center center", delay: 0.4})
		// 	tl.add(() => { 
		// 		this.$emit("updatesequence");
		// 		this.$refs.primary_content.classList.remove("transitioning");
		// 		this.content = this.currentSequence;
		// 		this.$nextTick(() => {
		// 			if(this.content.class) this.$refs.primary_content.classList.add(this.content.class);
		// 		})
		// 	})

		// }
	}
});

{/* <img v-bind:src="project.image" alt="project.title"> */}

{/* <div class="arrow" role="button" ref="arrow" @click="nextSequence()">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.66 170.52">
 <path class="arrow_path" ref="arrow_path1" d="M.52,153.48c0-5.09,0-10.19,0-15.29a2.05,2.05,0,0,1,.67-1.58q25-25.2,50-50.4c.92-.94.92-.94,0-1.89q-25-25.21-50-50.4a2.07,2.07,0,0,1-.65-1.6Q.53,17,.52,1.74a1.33,1.33,0,0,1,0-.2c0-.36-.12-.81.3-1s.56.3.77.51q8,8.07,16.06,16.15Q51,50.8,84.39,84.35c.74.73.76,1.1,0,1.85q-41,41.19-81.94,82.43a11.5,11.5,0,0,1-.86.85c-.24.19-.36.69-.77.49s-.32-.63-.32-1q0-4.75,0-9.51Z"/>
 <path class="arrow_path" ref="arrow_path2" d="M77.6,153.41c0-5,0-9.93,0-14.89a2.77,2.77,0,0,1,.93-2.19Q103.25,111.46,128,86.56c1.27-1.29,1.27-1.29,0-2.54Q103.16,59,78.32,34a2.3,2.3,0,0,1-.73-1.77q0-15.22,0-30.47a3.13,3.13,0,0,1,0-.81c.1-.43.34-.68.78-.28.17.16.33.34.5.5l82.44,83.07a5.81,5.81,0,0,0,.43.43c.56.4.46.71,0,1.17-2.87,2.85-5.72,5.74-8.57,8.61L79,169.28l-.5.5c-.48.49-.71.14-.84-.28a2.73,2.73,0,0,1,0-.81Z"/>
 </svg>
 </div> */}
//# sourceMappingURL=HomeComponent.js.map
