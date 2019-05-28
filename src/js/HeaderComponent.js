let HeaderComponent = Vue.component("heading", {
	props: ["player1characters", "player2characters"],
	template:
		`<header>
			<img alt="devtheuniverse logo" class="logo" src="../../dist/img/logo-mini.png">
		</header>`,
	data: function() {
		return {
			
		}
	},
	mounted: function() {
		
	},
	methods: {

	}
})