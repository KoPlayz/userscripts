// ==UserScript==
// @name         Auto live chat replay
// @namespace    https://github.com/KoPlayz/userscripts/
// @version      1.0
// @description  Clicks on the YouTube live chat replay button automatically
// @author       https://github.com/KoPlayz
// @match        https://www.youtube.com/
// @grant        none
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/491046/Auto%20live%20chat%20replay.user.js
// @updateURL https://update.greasyfork.org/scripts/491046/Auto%20live%20chat%20replay.meta.js
// ==/UserScript==

(function() {
    'use strict';

    function clickLiveChatButton() {
        var liveChatButton = document.querySelector('.ytd-live-chat-frame.style-scope yt-button-shape .yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline.yt-spec-button-shape-next yt-touch-feedback-shape .yt-spec-touch-feedback-shape--touch-response.yt-spec-touch-feedback-shape .yt-spec-touch-feedback-shape__fill');
        if (liveChatButton) {
            liveChatButton.click();
        }
    }

    // Wait for the page to fully load
    window.addEventListener('load', function() {
        // Delay the click to ensure that the element is ready
        setTimeout(clickLiveChatButton, 2000);
    });
})();
