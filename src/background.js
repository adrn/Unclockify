chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    chrome.tabs.executeScript(null, { file: "jquery-2.1.1.min.js" }, function() {
        chrome.tabs.executeScript(tab.id, {
            "file": "doit.js"
        }, function () { // Execute your code
        });
    });
});
