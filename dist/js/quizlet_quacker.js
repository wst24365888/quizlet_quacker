"use strict";
class QuizletQuacker {
    paywall;
    foreground;
    background;
    refForeground;
    constructor() {
        this.paywall = document.getElementsByClassName("paywalled-section")[0];
        this.foreground = this.paywall.children[0];
        this.background = this.paywall.children[1];
        this.refForeground = this.foreground.cloneNode(true);
    }
    removePayWall() {
        for (let c of this.refForeground.classList) {
            this.foreground.classList.remove(c);
        }
        this.background.style.display = "none";
    }
    restorePayWall() {
        for (let c of this.refForeground.classList) {
            this.foreground.classList.add(c);
        }
        this.background.style.display = "block";
    }
}
document.onreadystatechange = () => {
    switch (document.readyState) {
        case "loading":
            break;
        case "interactive":
            break;
        case "complete":
            const qq = new QuizletQuacker();
            chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
                console.log(request);
                if (request.enabled) {
                    qq.removePayWall();
                }
                else {
                    qq.restorePayWall();
                }
                if (sendResponse) {
                    sendResponse({ success: true });
                }
            });
            break;
    }
};
