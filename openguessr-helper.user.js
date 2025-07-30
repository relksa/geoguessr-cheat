// ==UserScript==
// @name         OpenGuesr Auto Country Popup (Demo)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Menampilkan popup negara saat game mulai (contoh demo saja)
// @match        https://openguessr.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    setTimeout(() => {
        const negara = "🇧🇷 Brazil (contoh)";
        const box = document.createElement("div");
        box.innerText = `Negara kemungkinan: ${negara}`;
        box.style = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #222;
            color: #fff;
            padding: 10px 15px;
            font-size: 16px;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
        `;
        document.body.appendChild(box);
    }, 3000);
})();
