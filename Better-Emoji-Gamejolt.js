// ==UserScript==
// @name         Better Emoji Gamejolt
// @namespace    Violentmonkey Scripts
// @match        https://gamejolt.com/*
// @grant        none
// @author       Stormwindsky
// @description  Replaces multiple default Gamejolt emojis with custom versions.
// ==/UserScript==

(function() {
    'use strict';

    // Emoji Mapping: "Old URL ID" : "New GitHub URL"
    const emojiMap = {
        // Previous Batches
        "21896741": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E6.png?raw=true",
        "21896764": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E1.png?raw=true",
        "21896759": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E29.png?raw=true",
        "21896751": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E18.png?raw=true",
        "21896744": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E19.png?raw=true",
        "21896740": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E2.png?raw=true",
        "21896742": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E20.png?raw=true",
        "21896761": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E21.png?raw=true",
        "21896762": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E43.png?raw=true",
        "21896750": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/Heart.png?raw=true",
        "21896753": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/lightning.png?raw=true",
        "21896747": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/fire.png?raw=true",
        "21896766": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E29.png?raw=true",
        "21896763": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E35.png?raw=true",
        "21896772": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E38.png?raw=true",
        "21896765": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/E9.png?raw=true",
        "21896770": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/tongue.png?raw=true",

        // Latest Addition
        "21896756": "https://github.com/Stormwindsky/Better-Emoji-Gamejolt/blob/main/Emojis/Ninja.png?raw=true"
    };

    /**
     * Efficiently scans images and replaces sources if a match is found.
     */
    function replaceEmojis() {
        const images = document.querySelectorAll('img[src*="gjcdn.net"]');
        
        images.forEach(img => {
            if (img.dataset.replaced) return;

            for (const [id, newUrl] of Object.entries(emojiMap)) {
                if (img.src.includes(id)) {
                    img.src = newUrl;
                    img.style.objectFit = "contain";
                    img.dataset.replaced = "true"; 
                    break;
                }
            }
        });
    }

    const observer = new MutationObserver(() => {
        replaceEmojis();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    replaceEmojis();
})();
