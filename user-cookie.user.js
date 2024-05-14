// ==UserScript==
// @name        一键ck获取替换
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       GM_registerMenuCommand
// @grant       GM_notification
// @grant       GM_setClipboard
// @version     1.0
// @author      superhao
// @description 2024/5/13 10:31:52
// ==/UserScript==

/**
 * 获取当前页面cookie
 */
function getCookie() {
    cookies = document.cookie
    return cookies
}
/**
* 将字符串cookie替换为数组cookie
* @cookieString cookie字符串
*/
function parseCookieString(cookieString) {
    // cookiesString.split(/\s*;\s*/).map(it => it.split('='))[0]
    cookies=cookieString.split(";").map(e=>e.trim())
    return cookies
}
GM_registerMenuCommand(
    "获取cookie",
    function () {
        cookie = getCookie()
        GM_setClipboard(cookie)
        GM_notification("cookie复制成功")
    });
GM_registerMenuCommand(
    "替换cookie",
    function () {
        cookies = prompt("请输入cookie：")
        cookies=parseCookieString(cookies)
        cookies.forEach(element => {
            document.cookie=element+";domain=.bilibili.com;path=/;"
        });
        location.reload();
    }
)