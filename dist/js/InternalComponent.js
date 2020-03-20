"use strict";

var InternalComponent = Vue.component("internal", {
	props: {
		content: Object
	},
	template: "<div class=\"content\" v-on:mousemove=\"onMouseMove\">\n\t\t\t<div class=\"wrapper\">\n\t\t\t\t<svg class=\"frame frame1\" ref=\"text_anim\">\n\t\t\t\t\t<path id=\"curve1\" ref=\"curve1\" class=\"curve curve1\" :d=\"d_attr\"/>\n\t\t\t\t\t<text x=\"0\">\n\t\t\t\t\t\t<textPath ref=\"curve1_textpath\" id=\"curve1_textpath\" href=\"#curve1\">\n\t\t\t\t\t\t\tAndrew Averso is the Creative Director and Lead Identity Specialist at Wild Places\n\t\t\t\t\t\t</textPath>\n\t\t\t\t\t</text>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</div>",
	data: function data() {
		return {
			//d="M1056.14,147.43a109.61,109.61,0,0,0-2.44-23.57,115.81,115.81,0,0,0-7.33-22.45,123.11,123.11,0,0,0-11.51-20.55l-1.69-2.41-1.77-2.35c-1.15-1.59-2.45-3.06-3.67-4.6-2.55-3-5.17-5.89-8-8.62S1014,57.54,1011,55s-6.15-4.82-9.42-6.95a113.19,113.19,0,0,0-20.58-11c-1.78-.78-3.63-1.37-5.44-2.07L970,33.38l-2.78-.83c-.93-.28-1.9-.43-2.84-.65l-5.69-1.24c-.94-.24-1.91-.3-2.87-.45l-2.89-.4c-1.92-.23-3.83-.61-5.77-.66l-5.81-.36-1.45-.1-1.45,0-2.91,0a134.63,134.63,0,0,0-23.11,2.16l-5.68,1.25-2.83.62-2.79.81-5.57,1.62c-1.84.61-3.64,1.31-5.46,2-3.68,1.21-7.15,2.94-10.69,4.47a27.24,27.24,0,0,0-2.6,1.28l-2.56,1.35-2.56,1.35c-.86.45-1.71.9-2.52,1.43-3.25,2.07-6.63,4-9.68,6.32-1.55,1.14-3.14,2.22-4.66,3.4l-4.43,3.7-2.21,1.86-2.06,2-4.14,4c-2.63,2.84-5.29,5.66-7.76,8.66a215.75,215.75,0,0,0-14.1,18.6c-4.4,6.46-8.56,13.1-12.57,19.86S799.7,129.11,795.84,136c-7.71,13.82-15.33,27.85-24,41.41-4.34,6.78-9,13.41-14,19.82a180.74,180.74,0,0,1-16.4,18.2l-2.23,2.12c-.74.71-1.49,1.41-2.28,2.07l-4.69,4-4.9,3.77c-.8.65-1.65,1.23-2.51,1.81L722.27,231c-.86.58-1.69,1.18-2.56,1.74l-2.65,1.6c-1.78,1-3.51,2.2-5.36,3.11l-5.49,2.89-5.64,2.56c-1.86.9-3.81,1.56-5.73,2.32s-3.83,1.51-5.83,2.12l-3,1-3,.85c-2,.59-4,1-6,1.52a126.3,126.3,0,0,1-24.65,3.06,127.6,127.6,0,0,1-48.81-8.24,117.64,117.64,0,0,1-41.72-27c-11.85-11.82-20.69-26.69-26.29-42.13A211.9,211.9,0,0,1,528.4,153c-2-7.82-3.68-15.65-5.37-23.37s-3.35-15.41-5.36-22.9a189.17,189.17,0,0,0-7.14-21.89,121.78,121.78,0,0,0-10.43-20A118.83,118.83,0,0,0,485.87,47.2c-1.35-1.31-2.63-2.71-4-4l-4.24-3.76c-3-2.37-5.88-4.77-9-6.87L466.23,31c-.79-.51-1.61-1-2.41-1.49L461.41,28l-1.21-.75L459,26.57l-5-2.69-5.14-2.39a120.32,120.32,0,0,0-21.47-7.1l-5.55-1.07c-1.85-.35-3.77-.53-5.65-.82l-2.84-.38-2.85-.24c-1.89-.14-3.79-.4-5.69-.41a106.27,106.27,0,0,0-44.36,6.9c-14,5.47-26.69,14.25-37.82,24.81s-20.92,22.77-30,35.54-17.5,26.13-25.95,39.55-16.93,26.93-26.16,40-19.27,25.79-31,37-25.12,21-40.21,27.38a112.37,112.37,0,0,1-23.42,7.09,124.6,124.6,0,0,1-24.28,2c-4,0-8.08-.36-12.11-.66-4-.5-8-.93-12-1.69A131,131,0,0,1,74.18,223a119.25,119.25,0,0,1-40.67-25.63A109.89,109.89,0,0,1,7.24,157.47,116.2,116.2,0,0,1,.17,110.56,115.31,115.31,0,0,0,8.93,156.8a107.61,107.61,0,0,0,26.86,38.14,117.26,117.26,0,0,0,40,23.68,125.75,125.75,0,0,0,22.62,5.62c3.83.62,7.72.93,11.6,1.32,3.88.18,7.77.44,11.65.33a121.66,121.66,0,0,0,23-2.36,106.1,106.1,0,0,0,21.89-7.12c14-6.3,26.54-15.71,37.46-26.68s20.5-23.43,29.37-36.38,17.06-26.46,25.31-40S275.27,86.17,284.38,73s19.16-26,30.95-37.38A144.76,144.76,0,0,1,334.43,20,116.17,116.17,0,0,1,356.37,8.21,117.23,117.23,0,0,1,405.25.12c2.08,0,4.12.25,6.18.38l3.08.24,3.06.38c2,.29,4.08.48,6.12.86l6.14,1.16a132.3,132.3,0,0,1,23.66,7.75l5.66,2.61,5.48,2.93,1.37.74,1.33.81L470,19.61c.89.54,1.78,1.07,2.65,1.63L475.19,23c3.45,2.29,6.68,4.91,9.92,7.5l4.66,4.12c1.56,1.37,3,2.9,4.46,4.34A130.27,130.27,0,0,1,510,58.29a133.65,133.65,0,0,1,11.57,22.06,200.07,200.07,0,0,1,7.68,23.29c2.12,7.83,3.83,15.65,5.55,23.42s3.33,15.45,5.21,23a200.82,200.82,0,0,0,6.7,22.12,103.2,103.2,0,0,0,23.53,38.07,106,106,0,0,0,37.52,24.41,118.58,118.58,0,0,0,44.41,7.72,115.26,115.26,0,0,0,22.52-2.59c1.84-.42,3.69-.81,5.51-1.34l2.74-.74,2.7-.86c1.81-.53,3.59-1.24,5.37-1.9s3.59-1.27,5.31-2.09l5.21-2.31,5.07-2.61c1.71-.83,3.3-1.88,5-2.82l2.45-1.45c.81-.51,1.58-1.06,2.38-1.58l2.36-1.6c.8-.52,1.59-1,2.33-1.64l4.56-3.45,4.38-3.69c.74-.6,1.44-1.24,2.14-1.9l2.09-2a172.23,172.23,0,0,0,15.59-17c4.81-6.06,9.3-12.41,13.63-18.91,8.63-13,16.38-26.79,24.32-40.54,4-6.89,8-13.77,12.14-20.6s8.55-13.57,13.18-20.15A225.66,225.66,0,0,1,828,71.59c2.62-3.08,5.46-6,8.29-8.9l4.49-4.19L843,56.41l2.39-1.92,4.78-3.84c1.64-1.21,3.34-2.34,5-3.51,3.29-2.42,6.89-4.36,10.38-6.46a27.72,27.72,0,0,1,2.68-1.45L871,37.85l2.73-1.37a30.14,30.14,0,0,1,2.76-1.29c3.76-1.54,7.45-3.27,11.34-4.48,1.93-.64,3.83-1.34,5.77-1.94l5.89-1.59,2.94-.78,3-.6,6-1.18a136.72,136.72,0,0,1,24.24-1.74l3,.05,1.52,0,1.52.14,6.05.53c2,.11,4,.55,6,.85l3,.49c1,.19,2,.28,3,.56L965.62,27c1,.25,2,.44,2.94.75l2.89.95,5.76,1.91c1.87.77,3.79,1.44,5.62,2.3a118,118,0,0,1,21.06,11.91c3.31,2.3,6.44,4.84,9.51,7.44s6,5.41,8.71,8.35,5.38,6,7.9,9.08c1.2,1.61,2.47,3.16,3.6,4.82l1.73,2.45,1.65,2.52a123.3,123.3,0,0,1,11,21.27,118.06,118.06,0,0,1,6.56,23A110.68,110.68,0,0,1,1056.14,147.43Z"
			// d_attr: "M39,427.81a117.52,117.52,0,0,0,90.06,30,116.11,116.11,0,0,0,46.2-14.39,118.47,118.47,0,0,0,36.39-31.71A158.16,158.16,0,0,0,234.41,369a176.44,176.44,0,0,0,9.87-47.29c1.05-16.06-.28-32.35-5-47.61a95.16,95.16,0,0,0-9.66-21.7,79.11,79.11,0,0,0-15.06-18.07,85.27,85.27,0,0,1-16.17-19.44,101.11,101.11,0,0,1-10.26-23.07,125.24,125.24,0,0,1-4.85-24.67,152.12,152.12,0,0,1-.35-25.07A182.05,182.05,0,0,1,193.18,93.2a178.43,178.43,0,0,1,10.11-23,148.51,148.51,0,0,1,13.56-21.29,124.49,124.49,0,0,1,38.23-33.29A122.55,122.55,0,0,1,303.63.53,123.56,123.56,0,0,1,438.77,123.2,122.17,122.17,0,0,1,428.41,173,124.42,124.42,0,0,1,399,214.26a164,164,0,0,1-41.79,27.84A182.46,182.46,0,0,1,309.47,257a153.68,153.68,0,0,1-25,2.07,125.56,125.56,0,0,1-25-2.45,101.16,101.16,0,0,1-23.95-8,85.11,85.11,0,0,1-20.92-14.23,79,79,0,0,0-19.43-13.24,95.29,95.29,0,0,0-22.52-7.52c-15.64-3.21-32-3-47.86-.37a175.9,175.9,0,0,0-46.11,14.38,158.11,158.11,0,0,0-40.28,26.78A117.65,117.65,0,0,0,2.89,316.84c-.44,2-.73,4-1.1,6s-.52,4-.79,6.05S.68,332.93.56,335s-.14,4.06-.12,6.1A117.53,117.53,0,0,0,39,427.81Zm0,0a117.82,117.82,0,0,1-28.53-39.29A119.08,119.08,0,0,1,37.21,253.19a165,165,0,0,1,40.31-27.91,179,179,0,0,1,46.62-15.6c16.18-3,33-3.74,49.39-.79a100.72,100.72,0,0,1,23.92,7.34,84.81,84.81,0,0,1,21.18,13.69,78.7,78.7,0,0,0,19.68,12.69,94.7,94.7,0,0,0,22.49,6.87c15.54,2.79,31.64,2.07,47.22-.79a173.43,173.43,0,0,0,45-15.1,159.09,159.09,0,0,0,38.79-26.85A113.26,113.26,0,0,0,417.28,78.22a112.88,112.88,0,0,0-66.81-60.65A113,113,0,0,0,225,55.25a159,159,0,0,0-23,41.2,173.21,173.21,0,0,0-10.68,46.29c-1.36,15.79-.52,31.89,3.75,47.09a94.7,94.7,0,0,0,9,21.73,78.59,78.59,0,0,0,14.54,18.38,85,85,0,0,1,15.65,19.75,100.41,100.41,0,0,1,9.61,23.09c4.52,16.06,5.38,32.84,4,49.23a179.27,179.27,0,0,1-11,47.91,164.8,164.8,0,0,1-23.88,42.8,119.22,119.22,0,0,1-132.12,39.7A117.8,117.8,0,0,1,39,427.81Z",
			d_attr: "M100.712,141.534 582.904,227.835 425.37,478.521 711.671,552.493",
			pathTL: new TimelineMax({}),
			start: Date.now(),
			points: [],
			strokes: [],
			prev: null,
			stroke: {},
			complete: true,
			tspanArr: [],
			num: 10
		};
	},
	mounted: function mounted() {
		// var tl = new TimelineMax({ repeat:-1, yoyo: true, repeatDelay: 1.5});

		// tl.to("#curve1", 1.5, {morphSVG: "#curve2"})
		// 	.to("#curve2", 1.5, {morphSVG: "#curve1"});

		// window.addEventListener('mousemove', this.onMouseMove);
		this.animateSequence();

		this.startPath();
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
		animateSequence: function animateSequence(e) {
			var _this = this;

			var path = this.$refs.curve1_textpath;
			var textPathArr = Array.from(path.textContent);
			var delay = "2s";
			var spacing = 40;
			var duration = 4;

			path.innerHTML = '';

			textPathArr.forEach(function (letter, i) {
				var str = null;

				var data = {
					letter: letter,
					spacing: spacing,
					duration: duration
				};

				if (letter.trim() !== '') {
					var tspan = document.createElement("tspan");
					tspan.style.animationDelay = delay + 'ms;';
					tspan.style.webkitAnimationDelay = delay + 'ms;';
					// tspan.innerHTML = letter;
					tspan.innerHTML = letter + '<animate attributeName="x" dur="' + duration + 's" repeatCount="1" values="0 ; ' + spacing + ' ; 0 ;" keyTimes="0 ; 0.25 ; 1"/>';
					path.appendChild(tspan);
					_this.tspanArr.push(tspan);

					delay += 50;
					spacing += 40;
					duration += 0.02;
				} else {
					str = letter;
				}

				if (spacing >= 1000) spacing = 1000;

				if (str) path.innerHTML += str;
			});
		},
		startPath: function startPath() {
			// console.clear();

			// TweenLite.defaultEase = Linear.easeNone;

			// var perf = window.performance;
			// var now  = perf ? perf.now.bind(perf) : Date.now;
			// var log  = console.log.bind(console);

			this.start = Date.now();

			this.stroke = {
				elapsed: 0,
				time: this.start,
				dist: 0,
				x: 0,
				y: 0
			};

			this.strokes = [this.stroke];
			this.prev = this.stroke;
		},
		onMouseMove: function onMouseMove(e) {
			// console.log("moving", e)
			// let adjustedCoords = {
			// 	x: e.x - this.$refs.curve1.clientWidth,
			// 	y: e.y - this.$refs.curve1.clientHeight
			// }
			// this.$refs.curve1.style.transform = "translate(" + adjustedCoords.x + "px, " + adjustedCoords.y + "px)";

			// this.pathTL.clear();

			if (!this.complete) return;

			var time = this.start;
			var elapsed = time - this.prev.time;

			var dist = this.getDistance(this.prev, e);

			var x = e.x * Math.sign(e.x);
			var y = e.y * Math.sign(e.y);

			this.stroke = {
				elapsed: elapsed,
				time: time,
				dist: this.prev.dist + dist,
				x: x,
				y: y
			};

			this.prev = this.stroke;
			this.strokes.push(this.stroke);
			this.points.push(x, y);

			var totalTime = (Date.now() - this.start) / 1000;
			var totalDist = this.strokes[this.strokes.length - 1].dist;

			this.$refs.curve1.setAttribute("d", this.solve(this.points, 1.2));
			if (this.points.length > 250) this.points.splice(0, 10);

			// let tl = this.pathTL;
			// let stroke = this.stroke;
			// this.strokes.reduce((tl, stroke) => {
			// 	var time = stroke.elapsed / 1000;
			// 	var draw = (stroke.dist / totalDist * 100) + "%";

			// this.complete = false;

			// return tl.to(this.$refs.curve1_textpath, time, { to: draw, onComplete: () => {
			// 	this.complete = true;

			// 	// this.$refs.curve2_textpath.innerHTML += " " + this.$refs.curve2_textpath.innerHTML;
			// }});

			// }, tl);
		},
		getDistance: function getDistance(p1, p2) {
			var dx = p2.x - p1.x;
			var dy = p2.y - p1.y;
			return Math.sqrt(dx * dx + dy * dy);
		},
		solve: function solve(data, k) {
			if (k == null) k = 1;

			var size = data.length;
			var last = size - 4;

			var path = "M" + data[0] + "," + data[1];

			for (var i = 0; i < size - 2; i += 2) {

				var x0 = i ? data[i - 2] : data[0];
				var y0 = i ? data[i - 1] : data[1];

				var x1 = data[i + 0];
				var y1 = data[i + 1];

				var x2 = data[i + 2];
				var y2 = data[i + 3];

				var x3 = i !== last ? data[i + 4] : x2;
				var y3 = i !== last ? data[i + 5] : y2;

				var cp1x = (x1 + (x2 - x0) / 6 * k).toFixed(2);
				var cp1y = (y1 + (y2 - y0) / 6 * k).toFixed(2);

				var cp2x = (x2 - (x3 - x1) / 6 * k).toFixed(2);
				var cp2y = (y2 - (y3 - y1) / 6 * k).toFixed(2);

				path += " C" + cp1x + "," + cp1y + "," + cp2x + "," + cp2y + "," + x2 + "," + y2;
			}

			return path;
		},
		getRandomInt: function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
});
//# sourceMappingURL=InternalComponent.js.map
