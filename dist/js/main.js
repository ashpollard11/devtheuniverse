'use strict';

var router = new VueRouter({
	routes: [{ path: '/', component: HomeComponent }, { path: '/internal', component: InternalComponent }] // routes  short for `routes: routes`
});

var app = new Vue({
	el: '#app',
	router: router,
	data: {
		content: Object
	},
	watch: {},
	computed: {},
	created: function created() {
		// router.push('/portfolio');
		this.content = config;
	},
	methods: {}
});

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


//******particles*******


particlesJS("particles-js", {
	particles: {
		number: { value: 160, density: { enable: true, value_area: 800 } },
		color: { value: "#b3e9fe" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#b3e9fe" },
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
var count_particles, stats, _update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.display = "none";
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
_update = function update() {
	stats.begin();
	stats.end();
	// if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
	//   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	// }
	requestAnimationFrame(_update);
};
requestAnimationFrame(_update);

var particleEl = document.querySelector(".particles-js-canvas-el");

particleEl.style.width = "100%";
particleEl.style.height = "100vh";
//# sourceMappingURL=main.js.map
