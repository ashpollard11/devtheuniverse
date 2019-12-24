"use strict";

var config = {
	home_content: {
		h1: ["Hi, I'm Ashley Pollard. I'm an <span>Interactive &amp; Front End Developer.</span>", "I create <span>user-driven interactive experiences</span> within <span>web-based</span> environments."],
		blockquote_carousel: "<span>web dev.</span><span>game dev.</span><span>UX/UI.</span><span>interactive.</span>"
	}
	// 	ul: [
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title> <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sass</title><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.JS</title><path style="" d="M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adobe Illustrator</title><path style="" d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm7.325 12.25l-.792 2.998c-.017.083-.05.102-.148.102H5.917c-.1 0-.115-.033-.1-.148l2.84-9.945c.05-.18.082-.338.098-.833 0-.066.033-.1.083-.1h2.096c.066 0 .1.018.116.1l3.185 10.794c.017.083 0 .132-.083.132h-1.65c-.083 0-.132-.02-.148-.086l-.825-3.015H8.322zm2.788-1.625c-.28-1.106-.94-3.528-1.188-4.7h-.017c-.214 1.17-.742 3.15-1.155 4.7h2.36zm4.5-5.558c0-.643.445-1.023 1.023-1.023.61 0 1.023.412 1.023 1.023 0 .66-.43 1.023-1.04 1.023-.6 0-1.01-.363-1.01-1.023zm.112 2.274c0-.08.033-.11.116-.11h1.57c.088 0 .12.033.12.116v7.895c0 .083-.016.116-.115.116h-1.55c-.1 0-.133-.05-.133-.13V8.64z"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JSON</title><path style="" d="M12.043 23.968c.479-.004.953-.029 1.426-.094 1.08-.138 2.143-.433 3.146-.863 1.409-.602 2.698-1.471 3.793-2.543 1.003-.989 1.842-2.151 2.44-3.427.509-1.097.869-2.274 1.02-3.476.149-1.16.135-2.346-.045-3.499-.149-.96-.419-1.896-.793-2.788-.24-.561-.525-1.101-.854-1.617-1.168-1.837-2.861-3.314-4.81-4.301-.693-.355-1.423-.645-2.172-.869h-.005c.119.063.24.132.345.201.12.074.239.146.351.225.569.385 1.094.827 1.559 1.33 1.063 1.145 1.797 2.548 2.218 4.041.284.982.434 1.998.495 3.017.044.743.044 1.491-.047 2.229-.149 1.27-.554 2.51-1.228 3.596-.495.803-1.14 1.519-1.903 2.084-1.244.928-2.877 1.482-4.436 1.114-.254-.061-.51-.146-.748-.258-.271-.124-.54-.277-.779-.449-.465-.311-.885-.685-1.244-1.106-.435-.52-.794-1.111-1.049-1.747-.314-.806-.479-1.672-.494-2.54-.03-1.273.225-2.553.854-3.67.42-.744.989-1.396 1.663-1.918.225-.178.464-.333.704-.479l.016-.007c-.466-.105-.96-.151-1.441-.12-.418.029-.823.105-1.228.239-.359.12-.704.271-1.019.45-.255.149-.508.315-.733.495-.211.18-.42.359-.615.555-1.123 1.153-1.768 2.682-2.022 4.256-.15.973-.15 1.961-.091 2.951.105 1.394.391 2.786.945 4.061.344.794.793 1.527 1.348 2.173.854.987 1.934 1.753 3.132 2.231.675.271 1.394.465 2.113.54.074.015.149.015.209.015l-.021-.032zm-2.934-.398c-.164-.07-.314-.149-.45-.228-.149-.083-.3-.168-.449-.259-.585-.362-1.108-.787-1.589-1.275-1.094-1.138-1.827-2.567-2.247-4.081-.284-1.034-.435-2.102-.495-3.172-.044-.703-.029-1.393.046-2.082.135-1.257.495-2.501 1.124-3.58.449-.794 1.063-1.498 1.783-2.053.494-.374 1.049-.69 1.633-.9.824-.299 1.708-.389 2.563-.27.33.045.658.121.959.225.029 0 .029 0 .045.03.015.015.045.015.06.03.045.016.104.045.165.074.239.12.479.271.704.42.899.629 1.633 1.498 2.097 2.502.42.914.615 1.934.631 2.938.014 1.079-.18 2.157-.645 3.146-.555 1.184-1.498 2.188-2.638 2.832.09.03.18.045.271.075.225.044.449.074.688.074 1.468.045 2.892-.659 3.94-1.647.195-.18.375-.375.54-.585.225-.27.435-.539.614-.823.239-.375.435-.75.614-1.154.226-.539.404-1.094.509-1.664.196-1.004.211-2.022.149-3.026-.135-2.022-.673-4.045-1.842-5.724-.18-.254-.359-.494-.555-.719-.329-.375-.689-.719-1.063-1.034-.42-.345-.885-.659-1.363-.915-.493-.223-1.078-.447-1.692-.598l-.3-.06c-.209-.03-.42-.044-.634-.06-.325-.015-.669-.01-1.015.016-.704.045-1.412.16-2.112.337-3.356.866-6.292 3.205-7.855 6.308C.799 7.657.445 8.714.238 9.8c-.239 1.243-.27 2.523-.104 3.775.12 1.02.374 2.023.778 2.977.227.57.511 1.124.825 1.648 1.094 1.783 2.683 3.236 4.51 4.24.688.391 1.408.69 2.157.945.226.074.45.149.689.209l.016-.024z"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path style="" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>`,
	// 		`<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.58 223.4"><title>C#</title><path style="" d="M89.59,221c9.43,5.51,21.31.57,31-4.56,24.44-13,48.3-27.3,70.4-44,2.63-2,5.33-4.11,6.86-7,1.72-3.29,1.76-7.18,1.76-10.9l0-83.27c0-5.29-.07-10.86-2.72-15.44s-7.47-7.44-12.08-10.07L113.45,4.88c-3.82-2.19-7.81-4.43-12.2-4.82-6.18-.55-12,2.63-17.4,5.7L18,43.3c-6,3.39-12.21,7.1-15.34,13.18C.09,61.51,0,67.42,0,73.08l0,76.14c0,5,0,10,1.5,14.78,1.79,5.67,5.42,8.61,10.23,11.65M97.13,223h0ZM55.44,23.08h0v0h0l0,0ZM1.14,65.43h0ZM113,47.08a63.86,63.86,0,0,1,43.64,31.66L127.76,95.4c-7.15-12-22.76-18.31-36.25-14.58S67.87,98,67.93,112,78.28,139.29,91.8,142.9s29.07-2.81,36.11-14.91l28.75,16.69A66.56,66.56,0,0,1,106,176.86a65.41,65.41,0,0,1-69.31-81A66.36,66.36,0,0,1,92.46,46.63a63,63,0,0,1,8.79-.52c2.69,0,5.55,0,8.24.22M139,128.71c.42-2.9.72-5.8.88-8.72.22-.67-.32-.45-.59-.45-1.37,0-2.75-.05-4.13-.07,0-1.45,0-2.89,0-4.34,0-.61.18-.78.77-.76,1,0,3.5,0,3.71,0,.39,0,.86.26.91-.47.1-1.53.91-5.74.94-6.26.06-1-.1-1.18-1.12-1.24-.74,0-1.49,0-2.24,0s-1.2-.24-1.16-1.1,0-1.56,0-2.35.29-1,1-1c1,0,1.92,0,2.88,0a1.24,1.24,0,0,0,1.32-1.13,9.41,9.41,0,0,0,.13-1c.17-1.77.36-3.54.53-5.32a1,1,0,0,1,1.18-1c.71,0,1.42,0,2.13,0,1.54,0,1.63.11,1.43,1.67s-.34,3.4-.52,5.1c-.16,1.43.17,1.76,1.65,1.78.89,0,1.78,0,2.67,0,2.43,0,2.5-.08,2.68-2.47.12-1.6.31-3.19.48-4.78.13-1.17.28-1.28,1.5-1.31.5,0,1.9-.19,2-.15,1.44.52,1.41.52,1.24,2.07-.2,1.8-.41,3.6-.53,5.41-.06.88.31,1.23,1.16,1.22s1.63,0,2.45,0,1.15.34,1.11,1.15,0,1.49,0,2.24-.36,1.12-1.15,1.1c-1,0-2,0-3,0-.64,0-1.12.26-1.22.94-.19,1.41-.24,5.84-.39,6.49s.15.58.57.58c1.14,0,2.28,0,3.42,0,.49,0,.69.12.68.65,0,1.28,0,2.57,0,3.85,0,.51-.16.68-.67.67-1.21,0-2.43,0-3.63,0-.71,0-1,.15-1.06.89-.21,2.55-.51,5.1-.72,7.65-.05.68-.24.92-1,.89a33.81,33.81,0,0,0-3.63,0c-.81,0-1-.16-.9-1,.32-2.54.53-5.1.81-7.65.07-.62-.11-.79-.73-.78-1.6,0-3.21,0-4.81,0-.56,0-.71.18-.75.72-.19,2.27-.42,4.53-.67,6.8-.2,1.89-.23,1.93-2.14,1.87C141.41,128.87,140.2,129.17,139,128.71ZM109.78,46.15Zm.18,0h0ZM40.1,81.83h0l.11-.12h0A.41.41,0,0,0,40.1,81.83ZM154.83,29.08h0v0Zm-106-2.15h0Zm0,0h0Zm-4.9,2.77h0Zm0,0h0ZM199.35,159.39c.06,0,0,0,0,.05v-.33A2.72,2.72,0,0,0,199.35,159.39Zm-64-141.63Zm-22-12.45h0s0,0,0,0ZM80.05,8.57h0l0-.05ZM23.17,41.49ZM43.55,193.86Z"/><path d="M147.23,114.39a17.55,17.55,0,0,1,1.92,0c.86,0,1.71,0,2.57,0,.36,0,.57-.06.61-.51q.28-3.24.65-6.48c.07-.58-.13-.72-.68-.71-1.64,0-3.28,0-4.92,0-.42,0-.63.08-.67.57-.18,2-.36,4-.63,5.95C145.93,114.22,146.27,114.51,147.23,114.39Z"/></svg>`,
	// 		`<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219 225"><title>Unity</title><path style="" d="M210.14,106.74c3.46-5.26,7.19-10.48,8.86-16.74,0-675-14.74-61.55-21.12-85.36A7.55,7.55,0,0,0,195,0h-1.5C189.39,1,133,15,109,21.51a10,10,0,0,0-6.57,5.09c-2.67,4.81-5.64,9.46-8.13,14.35-1.89,3.71-4.4,5.26-8.62,4.95-4.84-.35-9.75.13-14.61-.14s-8.28,1.42-11.61,4.79C41.18,69,1,109.42,0,111.75v.75c.94,1.6,42.07,43.7,61.57,63.24a11,11,0,0,0,8.36,3.45c6-.06,12,0,18,0a5.51,5.51,0,0,1,5.43,3.13c2.78,5,5.81,9.92,8.51,15a12.19,12.19,0,0,0,8.31,6.34c8.94,2.33,64.57,18.34,84.09,21.39H195c1.78-1.2,2.48-3,3-5,6.73-27.65,21-84.24,21-85-.88-2-6.36-13.75-8.91-17.12C207.13,114,207.52,110.71,210.14,106.74ZM62.73,83.45c9.79-10,19.63-19.93,29.35-30A12.66,12.66,0,0,1,98.5,50c21.13-5.38,42.24-10.85,64.3-16.54-9,15.48-17.51,30.26-26.06,45C132.81,85.33,128.86,92.12,125,99c-.87,1.53-1.75,2.38-3.72,2.38-24.72-.08-49.45,0-74.18-.06a9.88,9.88,0,0,1-1.48-.32C51.49,95,57.1,89.2,62.73,83.45Zm66.75,99.25c-10.28-2.63-20.53-5.35-30.83-7.88a13.88,13.88,0,0,1-7-4c-14.54-15-29.21-29.81-43.83-44.7-.61-.62-1.18-1.26-2.44-2.6h4.12c23.49,0,47,0,70.49-.07,2.74,0,4.15.87,5.51,3.24,11.64,20.38,23.44,40.66,35.17,61,.55.94,1.42,1.75,1.37,3.31Zm71.18-69c-6.17,21.82-12.25,43.67-18.61,66.43-3-5.17-5.55-9.57-8.09-14Q159.16,140.56,144.34,115c-.93-1.6-1.42-2.85-.32-4.73C156.39,89,168.64,67.75,180.94,46.49a14.49,14.49,0,0,1,1.2-1.51c2.92,10.51,5.74,20.69,8.58,30.85,3.16,11.29,6.35,22.56,9.48,33.85C200.56,111,201.08,112.16,200.66,113.67Z"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adobe Photoshop</title><path style="" d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm4.8 4.48c0-.067.14-.116.224-.116.644-.033 1.588-.05 2.578-.05 2.772 0 3.85 1.52 3.85 3.466 0 2.54-1.842 3.63-4.102 3.63-.38 0-.51-.017-.775-.017v3.842c0 .083-.033.116-.115.116H5.916c-.083 0-.115-.03-.115-.113V5.78zm1.775 5.312c.23.016.412.016.81.016 1.17 0 2.27-.412 2.27-1.996 0-1.27-.786-1.914-2.122-1.914-.396 0-.775.016-.957.033v3.864zm8.607-1.188c-.792 0-1.056.396-1.056.726 0 .363.18.61 1.237 1.155 1.568.76 2.062 1.485 2.062 2.557 0 1.6-1.22 2.46-2.87 2.46-.876 0-1.62-.183-2.05-.43-.065-.033-.08-.082-.08-.165V14.74c0-.1.048-.133.114-.084.624.413 1.352.594 2.012.594.792 0 1.122-.33 1.122-.776 0-.363-.23-.677-1.237-1.205-1.42-.68-2.014-1.37-2.014-2.527 0-1.287 1.006-2.36 2.755-2.36.86 0 1.464.132 1.794.28.082.05.1.132.1.198v1.37c0 .083-.05.133-.15.1-.444-.264-1.1-.43-1.743-.43z"/></svg>`,
	// 		`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gulp</title><path d="M15.156 19.432l.636-1.084s-1.444.591-3.86.591c-2.418 0-3.84-.568-3.84-.568l.711 1.183.252 3.729c0 .403 1.314.718 2.936.718 1.623 0 2.938-.314 2.938-.718l.229-3.835v-.016zm.615-7.046c-.769.046-1.153.903-1.539 1.805-.143.33-.63 1.737-.948 1.563-.318-.173.413-1.329.619-2.017-.237.174-1.105.849-1.329.215-.358.314-1.129.48-1.042-.329-.191.345-.621.823-1.139.614-.673-.255.395-2.411.66-2.307.266.121-.053.6-.136.794-.186.419-.398.958-.255 1.063.24.194.904-.703.919-.719.124-.165.479-1.229.763-1.107.285.134-.711 1.541-.34 1.826.076.06.383-.03.569-.239.12-.12.078-.42.479-1.378.404-.959.764-2.156 1.039-2.066s.049.703-.051.943c-.464 1.078-1.268 2.844-.89 2.71.374-.135.569-.135.943-.569.374-.434.345-1.152.599-1.137.24.014.21.254.15.418.24-.27 1.152-.868 1.363-.284.254.688-1.304 1.692-.914 1.632.375-.045.988-.434 1.258-.793l.719-6.5s-.734.6-5.361.6-5.284-.584-5.284-.584l.613 5.93c.33-.928 1.108-2.814 2.322-2.74.554.03 1.303 1.109.658 1.139-.27.015-.3-.539-.614-.614-.239-.046-.554.135-.763.345-.404.404-1.304 2.006-1.184 2.801.15 1.018 1.407-.346 1.617-.75.149-.283.254-1.138.568-1.048.33.09-.029.974-.27 1.737-.27.869-.404 1.781-.732 1.676-.33-.104.209-1.227.178-1.422-.313.299-.883 1.02-1.631.659l.374 3.699s1.019.793 4.073.793 4.118-.793 4.118-.793l.479-4.283c-.389.39-1.617 1.063-1.692.3-.059-.614 1.333-1.498.974-1.514l.06-.069zM17.346.669l-2.659 2.8-.486 1.901c1.881.12 3.189.386 3.189.694 0 .419-2.414.757-5.391.757s-5.39-.343-5.39-.763c0-.419 2.414-.764 5.391-.764.423 0 .844 0 1.264.016l.561-2.276L16.65.039c.068-.09.28-.015.474.15.194.149.299.344.239.434v.03l-.017.016zm-3.834 5.795s-.523 0-.61-.08c-.022-.025-.036-.058-.036-.09 0-.058.039-.091.09-.11l.044.075c-.021.006-.029.015-.033.023 0 .041.314.069.555.066.239-.003.531-.023.533-.064 0-.012-.023-.023-.061-.033l.045-.072c.063.02.117.058.117.121 0 .11-.141.128-.23.141-.107.015-.412.023-.412.023h-.002z"/></svg>`
	// 	]
	// },
	// ul: [
	// `<a href="../../links/exploded-guitars.html" target="_blank"><img src="../../dist/img/guitars.png" alt="exploded guitars"></a>`
	// {
	// 	title: "<span>Exploded Guitars &mdash; MODA</span><br/><br/>Vue.JS, 3D Animation",
	// 	shortTitle: "Exploded Guitars &mdash; MODA",
	// 	link: "../../links/exploded-guitars.html",
	// 	image: "../../dist/img/guitars.png",
	// },
	// {
	// 	title: "<span>Slow It Down</span><br/><br/>Pixi.JS, Create.JS, Spine Animation",
	// 	shortTitle: "Slow It Down",
	// 	link: "https://sesamestreetincommunities.org/interactive-assets/SSIC063_SlowItDown/",
	// 	image: "../../dist/img/slow.png",
	// },
	// {
	// 	title: "<span>Across The Campus</span><br/><br/>Vanilla JavaScript, Node.JS, Express &amp; Responsive CSS",
	// 	shortTitle: "Across The Campus",
	// 	link: "node/index.html",
	// 	image: "../../dist/img/across-the-campus.png",
	// },
	// {
	// 	title: "<span>Zoe's Pet Shelter</span><br/><br/>HTML5 Canvas &amp; Create.JS",
	// 	shortTitle: "Zoe's Pet Shelter",
	// 	link: "https://www.sesamestreet.org/games?id=25778",
	// 	image: "../../dist/img/zoes_pet_shelter.png",
	// },
	// {
	// 	title: "<span>KR Steakbar</span><br/><br/>Vanilla JavaScript, DrawSVG, MorphSVG &amp; Responsive CSS",
	// 	shortTitle: "KR Steakbar",
	// 	link: "teams2/index.html",
	// 	image: "../../dist/img/table80-3.jpg",
	// },
	// {
	// 	title: "<span>Rick &amp; Morty Battles</span><br/><br/>Vue.JS, TweenMax &amp; Responsive CSS",
	// 	shortTitle: "Rick & Morty Battles",
	// 	link: "vue/final/index.html",
	// 	image: "../../dist/img/rm-bg.jpg",
	// },
	// {
	// 	title: "<span>Around the Plate</span><br/><br/>Vanilla JavaScript, AJAX &amp; Responsive CSS for Mobile &amp; Tablet",
	// 	shortTitle: "Around the Plate",
	// 	link: "ajax/index.html",
	// 	image: "../../dist/img/around-the-plate.png",
	// },
	// {
	// 	title: "<span>Aesthetic Me</span><br/><br/>React.JS, Redux &amp; Responsive CSS",
	// 	shortTitle: "Aesthetic Me",
	// 	link: "react/",
	// 	image: "../../dist/img/unicornhangover.jpg",
	// },
	// {
	// 	title: "<span>Kayla's Playground</span><br/><br/>Unity &amp; C#",
	// 	shortTitle: "Kayla's Playground",
	// 	link: "https://simmer.io/@devtheuniverse/~5792c22a-df5f-505f-c0e1-1a06675531e5",
	// 	image: "../../dist/img/kaylapg.png",
	// }
	// ]
};
//# sourceMappingURL=content.js.map
