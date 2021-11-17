"use strict";
class QuizletQuacker {
    foreground;
    background;
    constructor() {
        this.foreground = document.getElementsByClassName("hpidy4b s1oluvjw")[0];
        this.background = document.getElementsByClassName("we2bqom")[0];
    }
    removePaidWall() {
        this.foreground.classList.remove("hpidy4b");
        this.foreground.classList.remove("s1oluvjw");
        this.background.style.display = "none";
    }
    restorePaidWall() {
        this.foreground.classList.add("hpidy4b");
        this.foreground.classList.add("s1oluvjw");
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
            let qq = new QuizletQuacker();
            chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
                console.log(request);
                if (request.enabled) {
                    qq.removePaidWall();
                }
                else {
                    qq.restorePaidWall();
                }
                if (sendResponse) {
                    sendResponse({ success: true });
                }
            });
            break;
    }
};
