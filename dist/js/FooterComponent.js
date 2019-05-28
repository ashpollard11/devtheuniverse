"use strict";

var FooterComponent = Vue.component("footing", {
    props: ["player1characters", "player2characters"],
    template: "<footer>\n        <ul>\n            <li class=\"social social-1\">\n                <a href=\"https://www.linkedin.com/in/ashley-pollard-6a17183a/\" target=\"_blank\" title=\"LinkedIn\">\n                    <svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 130 130\">\n                        <path class=\"li-path\" d=\"M128.66,61.16v-.89c-.26-1.82-.16-3.67-.48-5.49a68.62,68.62,0,0,0-2.52-10v40.6a67.62,67.62,0,0,0,2-7.33,67.29,67.29,0,0,0,1-8v-.89c-.35-.22-.26-.44,0-.66V67.15a1.68,1.68,0,0,1,0-1.77v-.67a1.7,1.7,0,0,1,0-1.78V61.6C128.42,61.45,128.36,61.31,128.66,61.16Z\"/>\n                        <path class=\"li-path\" d=\"M78.1,2.44c-5.73-1.24-11.51-1.14-17.32-1A51.81,51.81,0,0,0,45.35,4.23L45,4.34h40.1A66.9,66.9,0,0,0,78.1,2.44Z\"/>\n                        <path class=\"li-path\" d=\"M4.56,44.39c0,.14-.1.28-.15.42a52.39,52.39,0,0,0-3,15.85c-.09,4.88-.31,9.76.51,14.59A69.79,69.79,0,0,0,4.59,85.77C4.68,72,4.61,58.19,4.56,44.39Z\"/>\n                        <path class=\"li-path\" d=\"M43.85,125.36a67.26,67.26,0,0,0,8.43,2.36,73,73,0,0,0,7.78.93H61c.06-.25.25-.21.43-.18h0c.19,0,.37,0,.46.18h1.33a6,6,0,0,1,3.55,0h1.56c.09-.21.26-.22.45-.19h0c.19,0,.38-.07.44.19h.44a.55.55,0,0,1,.41-.11,45.75,45.75,0,0,0,14.66-2.65c.48-.15.94-.32,1.41-.49Q65,125.16,43.85,125.36Z\"/>\n                        <path class=\"li-path\" d=\"M106.14,16.1a62.66,62.66,0,0,0-21-11.76H45A64.18,64.18,0,0,0,4.56,44.39c.05,13.8.12,27.59,0,41.38A62.73,62.73,0,0,0,23.94,114a62.36,62.36,0,0,0,19.91,11.41q21.12-.21,42.24,0a64.07,64.07,0,0,0,39.57-40V44.76A62.86,62.86,0,0,0,106.14,16.1Zm-62,84.15c-10.91.25-10.91.34-10.91-10.6,0-11.65.07-23.29,0-34.93,0-2.81.33-4.12,3.72-4.1,10.32.06,10.32-.12,10.32,10.1v15.1c0,7.08-.1,14.17,0,21.24C47.29,99.52,46.59,100.19,44.1,100.25ZM47.18,37c0,6.44,0,6.44-8.18,6.44-5.82,0-5.82,0-5.82-8,0-5.74,0-5.28,9-5.88C49.29,29,46.76,33.68,47.18,37ZM97,97.71c0,.91.19,2.21-1.06,2.27-3.93.16-7.87.28-11.8.07-1.89-.1-1.07-2-1.08-3.07-.07-8,0-16.09-.06-24.13,0-3.85-1.75-6.8-5.65-7.74-3.46-.85-6.19.64-7.92,3.72-1,1.7-.8,3.66-.81,5.53,0,7.26-.11,14.51,0,21.76.06,2.83-.35,4.16-3.76,4.15-10.27,0-10.27.14-10.27-10.23V75.38c0-7.25.08-14.51,0-21.76,0-2.2.49-3.11,2.85-2.95,3,.2,6.78-1.11,8.82.29,4.44,3,8,.14,12-.16,8.37-.64,17,6.35,18.2,15.26C97.79,76.56,96.71,87.16,97,97.71Z\"/>\n                    </svg>\n                </a>\n            </li>\n            <li class=\"social social-2\">\n                <a href=\"https://codepen.io/devtheuniverse/\" target=\"_blank\" title=\"CodePen\">\n                    <svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 130 130\">\n                        <path class=\"cp-path\" d=\"M128.18,54.78A64.19,64.19,0,0,0,78.1,2.44c-5.73-1.24-11.51-1.14-17.32-1A51.81,51.81,0,0,0,45.35,4.23,64.2,64.2,0,0,0,4.41,44.81a52.39,52.39,0,0,0-3,15.85c-.09,4.88-.31,9.76.51,14.59a64.24,64.24,0,0,0,50.34,52.47,73,73,0,0,0,7.78.93H61c.06-.25.25-.21.43-.18h0c.19,0,.37,0,.46.18h1.33a6,6,0,0,1,3.55,0h1.56c.09-.21.26-.22.45-.19h0c.19,0,.38-.07.44.19h.44a.55.55,0,0,1,.41-.11,45.75,45.75,0,0,0,14.66-2.65,64.23,64.23,0,0,0,43-47.86,67.29,67.29,0,0,0,1-8v-.89c-.35-.22-.26-.44,0-.66V67.15a1.68,1.68,0,0,1,0-1.77v-.67a1.7,1.7,0,0,1,0-1.78V61.6c-.24-.15-.3-.29,0-.44v-.89C128.4,58.45,128.5,56.6,128.18,54.78ZM102.46,80.09Q84.85,91.81,67.27,103.55a3.63,3.63,0,0,1-4.42,0Q45.27,91.82,27.66,80.1a3.88,3.88,0,0,1-1.89-3.51q0-11.53,0-23.08A3.89,3.89,0,0,1,27.65,50Q45.26,38.3,62.84,26.54a3.63,3.63,0,0,1,4.42,0Q84.9,38.31,102.55,50.05a3.71,3.71,0,0,1,1.79,3.34c0,3.88,0,7.77,0,11.65s0,7.7,0,11.54A3.84,3.84,0,0,1,102.46,80.09Z\"/>\n                        <path class=\"cp-path\" d=\"M63.17,128.65h3.55A11.13,11.13,0,0,0,63.17,128.65Z\"/>\n                        <path class=\"cp-path\" d=\"M63.17,128.65a11.13,11.13,0,0,1,3.55,0A6,6,0,0,0,63.17,128.65Z\"/>\n                        <path class=\"cp-path\" d=\"M128.66,64.71V62.93A3,3,0,0,0,128.66,64.71Z\"/>\n                        <path class=\"cp-path\" d=\"M128.66,64.71a3,3,0,0,1,0-1.78A1.7,1.7,0,0,0,128.66,64.71Z\"/>\n                        <path class=\"cp-path\" d=\"M128.66,67.15V65.38A3,3,0,0,0,128.66,67.15Z\"/>\n                        <path class=\"cp-path\" d=\"M128.66,67.15a3,3,0,0,1,0-1.77A1.68,1.68,0,0,0,128.66,67.15Z\"/>\n                        <path class=\"cp-path\" d=\"M128.66,69.15v-.66A.51.51,0,0,0,128.66,69.15Z\"/>\n                        <path class=\"cp-path\" d=\"M128.66,69.15a.51.51,0,0,1,0-.66C128.4,68.71,128.31,68.93,128.66,69.15Z\"/>\n                        <path class=\"cp-path\" d=\"M128.66,61.6v-.44A.3.3,0,0,0,128.66,61.6Z\"/>\n                        <path class=\"cp-path\" d=\"M128.66,61.6a.3.3,0,0,1,0-.44C128.36,61.31,128.42,61.45,128.66,61.6Z\"/>\n                        <path class=\"cp-path\" d=\"M61,128.65h.44v-.11C61.23,128.54,61.07,128.52,61,128.65Z\"/>\n                        <path class=\"cp-path\" d=\"M61.38,128.47h0c-.18,0-.37-.07-.43.18.12-.13.28-.11.44-.11A.2.2,0,0,1,61.38,128.47Z\"/>\n                        <path class=\"cp-path\" d=\"M61.47,128.58s0,.07-.08.07h.45a.47.47,0,0,0-.37-.11S61.48,128.57,61.47,128.58Z\"/>\n                        <path class=\"cp-path\" d=\"M61.38,128.47h0s.08,0,.09.07a.47.47,0,0,1,.37.11C61.75,128.44,61.57,128.43,61.38,128.47Z\"/>\n                        <path class=\"cp-path\" d=\"M61.47,128.58s0,0,0,0h-.08v.11S61.45,128.63,61.47,128.58Z\"/>\n                        <path class=\"cp-path\" d=\"M61.39,128.54h.08s0,0-.09-.07a.2.2,0,0,0,0,.07Z\"/>\n                        <path class=\"cp-path\" d=\"M68.72,128.54c-.16,0-.32,0-.44.11h.44s0-.07,0-.11Z\"/>\n                        <path class=\"cp-path\" d=\"M68.73,128.54v-.08c-.19,0-.36,0-.45.19.12-.14.28-.11.44-.11Z\"/>\n                        <path class=\"cp-path\" d=\"M68.79,128.59a.1.1,0,0,1-.07.06h.45a.47.47,0,0,0-.37-.11A.07.07,0,0,1,68.79,128.59Z\"/>\n                        <path class=\"cp-path\" d=\"M68.73,128.46h0a.17.17,0,0,1,.07.08.47.47,0,0,1,.37.11C69.11,128.39,68.92,128.44,68.73,128.46Z\"/>\n                        <path class=\"cp-path\" d=\"M68.79,128.59a.07.07,0,0,0,0-.05h-.07s0,.07,0,.11A.1.1,0,0,0,68.79,128.59Z\"/>\n                        <path class=\"cp-path\" d=\"M68.8,128.54a.17.17,0,0,0-.07-.08h0v.08Z\"/>\n                        <path class=\"cp-path\" d=\"M47.69,60.56c4.42-3,8.83-5.92,13.26-8.84a1.52,1.52,0,0,0,.77-1.43c0-4.43,0-8.87,0-13.31a3.36,3.36,0,0,0-.13-1.51l-26.4,17.6c3.88,2.59,7.68,5.12,11.47,7.68C47.13,61.08,47.37,60.77,47.69,60.56Z\"/>\n                        <path class=\"cp-path\" d=\"M68.91,51.53l13.7,9.17a.67.67,0,0,0,.88,0c3.79-2.55,7.6-5.09,11.47-7.67L68.58,35.48c-.09.17-.15.23-.15.29q0,7.44,0,14.87A1,1,0,0,0,68.91,51.53Z\"/>\n                        <path class=\"cp-path\" d=\"M60.84,78.29c-4.12-2.72-8.22-5.48-12.33-8.22-1.49-1-1.49-1-3,0L35.16,77,61.7,94.71V93.53c0-4.55,0-9.1,0-13.64A1.67,1.67,0,0,0,60.84,78.29Z\"/>\n                        <path class=\"cp-path\" d=\"M82.37,69.57C78.69,72,75.1,74.64,71.29,76.88a5.23,5.23,0,0,0-2.94,5.54c.25,4,.07,8,.07,12.29L95,77c-3.86-2.58-7.61-5.07-11.32-7.6C83.08,69,82.78,69.29,82.37,69.57Z\"/>\n                        <path class=\"cp-path\" d=\"M65.53,57.34a.67.67,0,0,0-.88-.05C60.83,59.86,57,62.42,53.06,65c3.95,2.64,7.81,5.22,11.66,7.81.31.2.52.09.78-.09l11.56-7.71Z\"/>\n                        <path class=\"cp-path\" d=\"M32.56,59.41V70.68L41,65Z\"/>\n                        <path class=\"cp-path\" d=\"M97.57,70.69V59.39l-8.45,5.66Z\"/>\n                    </svg>\n                </a>\n            </li>\n            <li class=\"social social-3\">\n                <a href=\"https://github.com/ashpollard11/\" target=\"_blank\" title=\"GitHub\">\n                    <svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 130 130\">\n                        <path class=\"gh-path\" d=\"M1.34,56.11c1.59-2.56,1.47-5.59,2.28-8.37A64.55,64.55,0,0,1,69.17,1.43c27,1.3,52.6,23.22,58.21,50.63,6.45,31.49-12,64.15-42.22,74.9-1.11.39-2.73.15-3.32,1.69h-2C78.34,127,78.54,125,78.53,123c0-5-.08-9.94,0-14.9s-.14-9.57-2.6-14c-1.54-2.75-.73-4.77,2.49-5.57a55.81,55.81,0,0,0,5.7-1.71c14.67-5.42,21.45-22,14.25-35.83a24.46,24.46,0,0,1-3.1-13.67c.55-7.69-2.08-9.37-8.63-5.54-5.22,3.05-10.28,3.91-16.1,2.32a25.38,25.38,0,0,0-13.28.37,14.74,14.74,0,0,1-12.34-1.88,21.75,21.75,0,0,0-3.52-1.83c-4.6-1.84-7-.62-6.73,4.24.41,6.33-1.42,11.71-3.8,17.48-6.26,15.15,1.32,30.11,17,35,1.26.4,2.54.73,3.82,1.06,2.94.74,3.54,2.46,2.54,5.23-3.39,9.35-9.71,10.58-16.16,3-2.05-2.39-3.87-5-6.85-6.34-.9-.41-1.9-.9-2.76-.06a1.82,1.82,0,0,0,0,2.69c5.68,5.18,9,13.57,18.59,13.44,1.7,0,3.65.62,3.79,2.55.49,6.52,1.81,13.1-.79,19.5h-2C23.19,124.17,2.53,96.12,1.84,76.33A1.91,1.91,0,0,0,1.34,75Z\"/>\n                    </svg>\n                </a>\n            </li>\n        </ul>\n\t</footer>",
    data: function data() {
        return {};
    },
    mounted: function mounted() {},
    methods: {}
});
//# sourceMappingURL=FooterComponent.js.map
