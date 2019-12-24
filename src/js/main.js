const router = new VueRouter({
	routes: [
		//{ path: '/', component: HomeComponent },
		{ path: '/portfolio', component: HomeComponent },
		// { path: '/about', component: AboutComponent },
	//   { path: '/versus', component: VersusComponent }
	]	// routes  short for `routes: routes`
})

var app = new Vue({
	el: '#app',
	router: router,
	data: {
		content: Object
	},
	watch: {

	},
	computed: {

	},
	created: function () {
		// router.push('/portfolio');
		this.content = config;
	},
	methods: {


		// nextBubble: function(direction) {
		// 	let nextDirection = this.currentBubble.i + direction;
		// 	console.log("next bubble", nextDirection)
		// 	this.currentBubble = this.projectData[nextDirection];
		// },
		// exitPortfolio: function() {
		// 	this.currentBubble = this.projectData[0];
		// },
		// directSelectBubble: function(selection) {
		// 	this.currentBubble = this.projectData[selection];
		// }
	}
})














// let menu = document.querySelector('.hamburger');
// let nav = document.querySelector('.social');

// menu.addEventListener('click', function(e) {
// 	menu.classList.toggle('is-active');
// 	nav.classList.toggle('is-active');
// })

// let logopath = document.querySelector(".logo-path");
// let header = document.querySelector(".overlay");
// let video = document.querySelector("video");
// let title = document.querySelector(".dev-name");
// let slogan = document.querySelector(".slogan");
// let sideNav = document.querySelector(".side-nav");
// let sideNavButton = document.querySelector(".nav-button");

// let filterAll = document.querySelector(".all");
// let filterDD = document.querySelector(".dd");
// let filterDev = document.querySelector(".dev");
// let filterGfx = document.querySelector(".gfx");

// let filterButtons = document.querySelectorAll(".filterProjects");
// let items = document.querySelectorAll(".dev-item");



// var tl = new TimelineMax();

// if (window.scrollY === 0) {
// 	tl.from(logopath, 2, {drawSVG: "50% 50%", delay:1.8})
// 	tl.to(title, 0.5, {opacity:1})
// 	tl.to(slogan, 0.5, {opacity:1})
// 	tl.to(logopath, 2, {opacity:0, delay:3})
// 	tl.to(title, 0.5, {opacity:1})
// 	tl.to(slogan, 0.5, {opacity:1})
// 	tl.to(sideNav, 0.5, {opacity:1})
// 	tl.to(window, 2, {scrollTo: window.innerHeight, ease: Power2.easeInOut});
// } else {
// 	tl.from(logopath, 2, {drawSVG: "50% 50%", delay:1.8})
// 	tl.to(title, 0.5, {opacity:1})
// 	tl.to(slogan, 0.5, {opacity:1})
// 	tl.to(logopath, 2, {opacity:0, delay:3})
// 	tl.to(title, 0.5, {opacity:1})
// 	tl.to(slogan, 0.5, {opacity:1})
// 	tl.to(sideNav, 0.5, {opacity:1});

// 	sideNav.style.opacity = 1;
// }

// sideNavButton.addEventListener("click", function(e) {
// 	sideNav.classList.toggle("is-open");
// 	sideNav.classList.toggle("is-closed");
// 	sideNavButton.classList.toggle("is-open");
// });

// //filter buttons
// filterButtons.forEach((button) => {
// 	button.addEventListener("click", (e) => {
// 		let filteredItems = Array.from(items);
// 		filteredItems = filteredItems.filter((item) => {
// 			item.classList.remove("filtered");
// 			if (!item.classList.contains(button.id) && button.id !== "all") {
// 				console.log(item)
// 				item.classList.add("filtered");
// 			}
// 		})
// 	})
// })




// var tl2 = new TimelineMax();







//******particles*******


particlesJS("particles-js", {
	particles: {
		number: { value: 160, density: { enable: true, value_area: 800 } },
		color: { value: "#e4bb40" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#e4bb40" },
			polygon: { nb_sides: 5 },
			image: { src: "img/github.svg", width: 100, height: 100 }
		},
		opacity: {
			value: 1,
			random: true,
			anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
		},
		size: {
			value: 3,
			random: true,
			anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 1,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 600 }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "bubble" },
			onclick: { enable: true, mode: "repulse" },
			resize: true
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
			repulse: { distance: 400, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.display = "none";
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
	stats.begin();
	stats.end();
	// if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
	//   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	// }
	requestAnimationFrame(update);
};
requestAnimationFrame(update);


let particleEl = document.querySelector(".particles-js-canvas-el");

particleEl.style.width = "100%";
particleEl.style.height = "100vh";