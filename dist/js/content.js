"use strict";

var config = {
  home_content: {
    h1: ["Hi, I'm Ashley Pollard. I'm an <span>Interactive &amp; Front End Developer.</span>", "I create <span>user-driven interactive experiences</span> within <span>web-based</span> environments."],
    blockquote_carousel: "<span>web dev.</span><span>game dev.</span><span>UX/UI.</span><span>interactive.</span>",
    about: [{
      icon: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border-radius: 5px;\"><title>JavaScript</title><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\"/></svg>",
      h2: "Front-End Developer",
      article_head: "I like to be experimental and push the boundaries of web development.",
      h3: "My toolbox and languages include:",
      toolbox: ["HTML", "CSS / SCSS", "JavaScript", "Vue.JS", "Gatsby.JS", "Wordpress", "Gulp", //lets eventually replace this with command line
      "Github", "Bitbucket"]
    }, {
      icon: "<svg role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219 225\"><title>Unity</title><path style=\"\" d=\"M210.14,106.74c3.46-5.26,7.19-10.48,8.86-16.74,0-675-14.74-61.55-21.12-85.36A7.55,7.55,0,0,0,195,0h-1.5C189.39,1,133,15,109,21.51a10,10,0,0,0-6.57,5.09c-2.67,4.81-5.64,9.46-8.13,14.35-1.89,3.71-4.4,5.26-8.62,4.95-4.84-.35-9.75.13-14.61-.14s-8.28,1.42-11.61,4.79C41.18,69,1,109.42,0,111.75v.75c.94,1.6,42.07,43.7,61.57,63.24a11,11,0,0,0,8.36,3.45c6-.06,12,0,18,0a5.51,5.51,0,0,1,5.43,3.13c2.78,5,5.81,9.92,8.51,15a12.19,12.19,0,0,0,8.31,6.34c8.94,2.33,64.57,18.34,84.09,21.39H195c1.78-1.2,2.48-3,3-5,6.73-27.65,21-84.24,21-85-.88-2-6.36-13.75-8.91-17.12C207.13,114,207.52,110.71,210.14,106.74ZM62.73,83.45c9.79-10,19.63-19.93,29.35-30A12.66,12.66,0,0,1,98.5,50c21.13-5.38,42.24-10.85,64.3-16.54-9,15.48-17.51,30.26-26.06,45C132.81,85.33,128.86,92.12,125,99c-.87,1.53-1.75,2.38-3.72,2.38-24.72-.08-49.45,0-74.18-.06a9.88,9.88,0,0,1-1.48-.32C51.49,95,57.1,89.2,62.73,83.45Zm66.75,99.25c-10.28-2.63-20.53-5.35-30.83-7.88a13.88,13.88,0,0,1-7-4c-14.54-15-29.21-29.81-43.83-44.7-.61-.62-1.18-1.26-2.44-2.6h4.12c23.49,0,47,0,70.49-.07,2.74,0,4.15.87,5.51,3.24,11.64,20.38,23.44,40.66,35.17,61,.55.94,1.42,1.75,1.37,3.31Zm71.18-69c-6.17,21.82-12.25,43.67-18.61,66.43-3-5.17-5.55-9.57-8.09-14Q159.16,140.56,144.34,115c-.93-1.6-1.42-2.85-.32-4.73C156.39,89,168.64,67.75,180.94,46.49a14.49,14.49,0,0,1,1.2-1.51c2.92,10.51,5.74,20.69,8.58,30.85,3.16,11.29,6.35,22.56,9.48,33.85C200.56,111,201.08,112.16,200.66,113.67Z\"/></svg>",
      h2: "Game Developer",
      article_head: "I build games that are visually exciting, challenging, creative, and most importantly, fun!",
      h3: "My toolbox also includes:",
      toolbox: ["PIXI.JS", "Create.JS", "Spine Animation Development", "Adobe Animation Development", "Unity", "C#"]
    }, {
      icon: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Adobe Illustrator</title><path style=\"\" d=\"M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm7.325 12.25l-.792 2.998c-.017.083-.05.102-.148.102H5.917c-.1 0-.115-.033-.1-.148l2.84-9.945c.05-.18.082-.338.098-.833 0-.066.033-.1.083-.1h2.096c.066 0 .1.018.116.1l3.185 10.794c.017.083 0 .132-.083.132h-1.65c-.083 0-.132-.02-.148-.086l-.825-3.015H8.322zm2.788-1.625c-.28-1.106-.94-3.528-1.188-4.7h-.017c-.214 1.17-.742 3.15-1.155 4.7h2.36zm4.5-5.558c0-.643.445-1.023 1.023-1.023.61 0 1.023.412 1.023 1.023 0 .66-.43 1.023-1.04 1.023-.6 0-1.01-.363-1.01-1.023zm.112 2.274c0-.08.033-.11.116-.11h1.57c.088 0 .12.033.12.116v7.895c0 .083-.016.116-.115.116h-1.55c-.1 0-.133-.05-.133-.13V8.64z\"/></svg>",
      h2: "Illustrator",
      article_head: "My career started with illustration, and that paved the way for me to become a Developer.",
      h3: "I work with:",
      toolbox: ["Adobe Illustrator", "Adobe Photoshop", "Graphite / Ink Pen &amp; Paper", "Acrylic and Watercolor Paint", "Colored Pencils &amp; Markers"]
    }],
    work: [{
      title: "Dinosaur Train",
      alt: "dinosaur train dino flight",
      description: "Dino Flight is a game that encourages perseverance while flying, catching sticks and dodging obstacles.",
      link: "https://pbskids.org/dinosaurtrain/games/dinoflight.html",
      image: "../../dist/img/dino-flight.png"
    }, {
      title: "Museum of Design Atlanta",
      alt: "exploded guitars kiosk",
      description: "Exploded Guitars is a 3D interactive kiosk developed for MODA's Wire &amp; Wood exhibit.",
      link: "../../links/exploded-guitars.html",
      image: "../../dist/img/guitars.png"
    }, {
      title: "Sesame Street",
      alt: "slow it down game",
      description: "Slow It Down is a web-based game that encourages mental calmness through various methods of relaxation within six mini-games.",
      link: "https://sesamestreetincommunities.org/interactive-assets/SSIC063_SlowItDown/",
      image: "../../dist/img/slow.png"
    }, {
      title: "Across The Campus",
      alt: "across the campus",
      description: "Across The Campus is an online bulletin board-style forum for college and university campus events, inquiries and other classified posts.",
      link: "node/index.html",
      image: "../../dist/img/across-the-campus.png"
    }, {
      title: "Sesame Street",
      alt: "across the campus",
      description: "Zoe's Pet Shelter is a web-based game where the user sorts different animals by specific categories.",
      link: "https://www.sesamestreet.org/games?id=25778",
      image: "../../dist/img/zoes_pet_shelter.png"
    }, {
      title: "KR Steakbar",
      alt: "kr steakbar",
      description: "KR Steakbar is an experimental website redesign for the restaurant.",
      link: "teams2/index.html",
      image: "../../dist/img/table80-3.png"
    }, {
      title: "Rick &amp; Morty Battles",
      alt: "rick and morty battles",
      description: "Rick &amp; Morty Battles is a small web-based two-player game where the user chooses a team of four characters to face off with their opponent's selected team.",
      link: "vue/final/index.html",
      image: "../../dist/img/rm-bg.png"
    }, {
      title: "Around The Plate",
      alt: "around the plate",
      description: "Around The Plate is a mobile app mockup used to search for recipes from almost any country in the world.",
      link: "ajax/index.html",
      image: "../../dist/img/around-the-plate.png"
    } // {
    // 	title: "Aesthetic Me",
    // 	alt: "aesthetic me",
    // 	description: "Aesthetic Me is a faux e-commerce site that sells 'aesthetics'.",
    // 	link: "react/",
    // 	image: "../../dist/img/unicornhangover.jpg",
    // },
    // {
    // 	title: "Kayla's Playground",
    // 	alt: "kayla's playground",
    // 	description: "Kayla's Playground is a small Unity game that encourages the user to explore an unfamiliar world and destroy enemies along the way.",
    // 	link: "https://simmer.io/@devtheuniverse/~5792c22a-df5f-505f-c0e1-1a06675531e5",
    // 	image: "../../dist/img/kaylapg.png",
    // }
    ]
  }
};
//# sourceMappingURL=content.js.map
