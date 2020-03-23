console.log("Hello World! From Deal Hunter Suite Background Script!");

chrome.browserAction.onClicked.addListener(tab => {
    var currentTab = tab;

    chrome.windows.create({
        url: chrome.extension.getURL("/mainPage/index.html"),
        width: 420,
        height: 720,
        type: "panel",
        setSelfAsOpener: true
    });
});