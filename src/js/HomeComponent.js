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
					<div role="button" ref="scroll_arrow" class="scroll-arrow" :src="arrowSrc" :style="{ 'background-image': 'url(' + arrowSrc + ')' }" @click="onScroll()"></div>
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
				<a :href="item.link" target="_blank" class="button">view</a>
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
		},
		onScroll: function() {
			TweenMax.to(window, 1.75, {scrollTo: window.innerHeight, ease: Power2.easeInOut});
		}
	}
})

// 			<section class="ribbon-container" v-touch:swipe.left="scrollRibbon" v-touch:swipe.right="scrollRibbon">
// 				<nav class="ribbon" ref="ribbon" :style="{ left: x + 'px' }">
// 					<a v-bind:href="project.link" v-for="(project, i) in projectData" target="_blank">
// 						<li :style="{ 'background-image': 'url(' + project.image + ')' }"></li>
// 					</a>
// 				</nav>
// 			</section>