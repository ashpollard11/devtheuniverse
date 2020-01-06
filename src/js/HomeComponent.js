let HomeComponent = Vue.component("home", {
	props: {
		content: Object
	},
	template:
		`<div class="content">
			<section class="hero-content" ref="hero_content">
				<div ref="ash-icon" class="ash-icon" :style="{ 'background-image': 'url(' + iconSrc + ')' }"></div>
				<blockquote class="blockquote-carousel">
					<div class="carousel-container" ref="carousel_container" v-html="homeContent.blockquote_carousel"></div>
				</blockquote>
				<h1 v-for="(lines, i) in homeContent.h1" v-html="lines"></h1>
				<div class="scroll-prompt">
					<p>learn more about my work</p>
					<div ref="scroll_arrow" class="scroll-arrow" :src="arrowSrc" :style="{ 'background-image': 'url(' + arrowSrc + ')' }"></div>
				</div>
			</section>
			<section class="about-content" ref="about_content">
				<article v-for="(articles, i) in homeContent.about">
					<div class="about-icons" v-html="articles.icon"></div>
					<div class="article-head">
						<h2 v-html="articles.h2"></h2>
						<p v-html="articles.article_head"></p>
					</div>
					<div class="toolbox">
						<h3 v-html="articles.h3"></h3>
						<ul>
							<li v-for="(lines, i) in articles.toolbox" v-html="lines"></li>
						</ul>
					</div>
				</article>
			</section>
			<section class="work-content">
				<h2>My Portfolio</h2>
				<article v-for="(item, i) in homeContent.work">
				<img :src="item.image" alt="item.title">
				<h3 v-html="item.title"></h3>
				<p class="description" v-html="item.description"></p>
				<a :href="item.link" target="_blank">view</a>
				</article>
			</section>
			<section class="more-content">
				<p>Want to view more of my work or collaborate?</p>
				<a href="mailto:ash.pollard11@yahoo.com?subject=Let's Collaborate">email me</a>
			</section>
		</div>`,
	data: function() {
		return {
			homeContent: this.content.home_content,
			iconSrc: "../../dist/img/ash-icon.svg",
			arrowSrc: "../../dist/img/arrow.svg",
			carouselCount: 0
		}
	},
	mounted: function() {
		TweenMax.delayedCall(2, () => this.runCarousel());


		//****USEFUL LATER */
		// TweenMax.fromTo(this.$refs.arrow_path1, 0.22, {drawSVG: "0%"}, {drawSVG: "0% 100%", stroke: "#b3e9fe", yoyo: true, repeat: -1, repeatDelay: 0.22, delay: 0.1});
		// TweenMax.fromTo(this.$refs.arrow_path2, 0.22, {drawSVG: "0%"}, {drawSVG: "0% 100%", stroke: "#b3e9fe", yoyo: true, repeat: -1, repeatDelay: 0.22});
	},
	watch: {
	
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
		runCarousel: function(transitioning) {
			let carousel = this.$refs.carousel_container;
			let distance = (this.carouselCount === 3 || transitioning) ? "-=50px" : "-=100px";
			let duration = (this.carouselCount === 3 || transitioning) ? 0.8 : 1;

			let tw = TweenMax.to(carousel, duration, { y: distance, onComplete: () => {
				this.carouselCount++;

				if (this.carouselCount >= (carousel.children.length)) {
					this.carouselCount = 0;

					TweenMax.set(carousel, {clearProps:"y"});
					carousel.style.transform = "translateY(55px)"
					this.runCarousel(true);
				} else {
					TweenMax.delayedCall(3, () => this.runCarousel());
				}
			}});
		}
	}
})

{/* <img :src="project.image" alt="project.title"> */}


{/* <div class="arrow" role="button" ref="arrow" @click="nextSequence()">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.66 170.52">
<path class="arrow_path" ref="arrow_path1" d="M.52,153.48c0-5.09,0-10.19,0-15.29a2.05,2.05,0,0,1,.67-1.58q25-25.2,50-50.4c.92-.94.92-.94,0-1.89q-25-25.21-50-50.4a2.07,2.07,0,0,1-.65-1.6Q.53,17,.52,1.74a1.33,1.33,0,0,1,0-.2c0-.36-.12-.81.3-1s.56.3.77.51q8,8.07,16.06,16.15Q51,50.8,84.39,84.35c.74.73.76,1.1,0,1.85q-41,41.19-81.94,82.43a11.5,11.5,0,0,1-.86.85c-.24.19-.36.69-.77.49s-.32-.63-.32-1q0-4.75,0-9.51Z"/>
<path class="arrow_path" ref="arrow_path2" d="M77.6,153.41c0-5,0-9.93,0-14.89a2.77,2.77,0,0,1,.93-2.19Q103.25,111.46,128,86.56c1.27-1.29,1.27-1.29,0-2.54Q103.16,59,78.32,34a2.3,2.3,0,0,1-.73-1.77q0-15.22,0-30.47a3.13,3.13,0,0,1,0-.81c.1-.43.34-.68.78-.28.17.16.33.34.5.5l82.44,83.07a5.81,5.81,0,0,0,.43.43c.56.4.46.71,0,1.17-2.87,2.85-5.72,5.74-8.57,8.61L79,169.28l-.5.5c-.48.49-.71.14-.84-.28a2.73,2.73,0,0,1,0-.81Z"/>
</svg>
</div> */}

// 			<section class="ribbon-container" v-touch:swipe.left="scrollRibbon" v-touch:swipe.right="scrollRibbon">
// 				<nav class="ribbon" ref="ribbon" :style="{ left: x + 'px' }">
// 					<a v-bind:href="project.link" v-for="(project, i) in projectData" target="_blank">
// 						<li :style="{ 'background-image': 'url(' + project.image + ')' }"></li>
// 					</a>
// 				</nav>
// 			</section>