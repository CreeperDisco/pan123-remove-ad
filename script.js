// ==UserScript==
// @name         123盘去广告
// @namespace    https://github.com/CreeperDisco/pan123-remove-ad
// @version      1.0
// @description  去除123盘背景广告、广告跳转、及广告横幅，添加了150%的缩放，窗口宽度自适应
// @author       CreeperDisco
// @license      GPL-3.0-only
// @copyright    2024, CreeperDisco
// @downloadURL  https://raw.githubusercontent.com/CreeperDisco/pan123-remove-ad/main/script.js
// @updateURL    https://raw.githubusercontent.com/CreeperDisco/pan123-remove-ad/main/script.js
// @match        https://www.123pan.com/s/*
// @icon         https://statics.123957.com/static-by-custom/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前文档对象
    var doc = window.document;

    // 设置缩放级别
    if (typeof doc.body.style.zoom !== 'undefined') {
        // 对于支持zoom属性的浏览器
        doc.body.style.zoom = '150%';
    } else if (typeof doc.body.style.webkitTransform !== 'undefined') {
        // 对于支持CSS3 transform属性的浏览器
        doc.body.style.webkitTransform = 'scale(1.5)';
        doc.body.style.transform = 'scale(1.5)';
    } else {
        // 如果以上都不支持，控制台给出提示
        console.log('您的浏览器不支持缩放.');
    }

    // 获取所有类名为contentBorder和sharheader的div元素
    var elementsToMove = document.querySelectorAll('.contentBorder, .sharheader');

    // 获取类名为appdiv web-wrap的div元素
    var appDivWebWrap = document.querySelector('.appdiv.web-wrap');

    // 遍历所有需要移动的div元素
    for (var i = 0; i < elementsToMove.length; i++) {
        // 将每个元素移动到appDivWebWrap div元素内
        appDivWebWrap.appendChild(elementsToMove[i]);
    }

    // 获取所有需要移除的div元素，包括类名为webbody svip-body和pointer的元素
    var elementsToRemove = document.querySelectorAll('.webbody.svip-body, .pointer');

    // 遍历所有需要移除的div元素
    for (var j = 0; j < elementsToRemove.length; j++) {
        // 从DOM中移除每个元素
        elementsToRemove[j].parentNode.removeChild(elementsToRemove[j]);
    }

    // 获取contentBorder元素
    var contentBorder = document.querySelector('.contentBorder');

    // 设置contentBorder元素的宽度为浏览器窗口宽度
    contentBorder.style.width = window.innerWidth + 'px';

    // 当窗口大小改变时，更新contentBorder元素的宽度
    window.addEventListener('resize', function() {
        contentBorder.style.width = window.innerWidth + 'px';
    });
})();
