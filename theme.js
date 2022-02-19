function loadScript(url) {
    let script = document.createElement('script');
    script.setAttribute('type', 'module');
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
}

(() => {
    loadScript("/appearance/themes/Knowledge Brain/script/module/blockattrs.js");
    loadScript("/appearance/themes/Knowledge Brain/script/module/goto.js");
    loadScript("/appearance/themes/Knowledge Brain/script/module/style.js");
    loadScript("/appearance/themes/Knowledge Brain/script/module/timestamp.js");

    // loadScript("/appearance/themes/Dark+/script/test/listener.js");
})();
