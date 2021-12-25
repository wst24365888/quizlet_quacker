class QuizletQuacker {
    private paywall: HTMLElement;

    private foreground: HTMLElement;
    private background: HTMLElement;

    private refForeground: HTMLElement;

    constructor() {
        this.paywall = document.getElementsByClassName("paywalled-section")[0] as HTMLElement;

        this.foreground = this.paywall.children[0] as HTMLElement;
        this.background = this.paywall.children[1] as HTMLElement;

        this.refForeground = this.foreground.cloneNode(true) as HTMLElement;
    }

    public removePayWall(): void {
        for(let c of this.refForeground.classList) {
            this.foreground.classList.remove(c);
        }
        
        this.background.style.display = "none";
    }

    public restorePayWall(): void {
        for(let c of this.refForeground.classList) {
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
            const qq: QuizletQuacker = new QuizletQuacker();

            chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
                console.log(request);

                if (request.enabled) {
                    qq.removePayWall();
                } else {
                    qq.restorePayWall();
                }

                if (sendResponse) {
                    sendResponse({ success: true });
                }
            });

            break;
    }
}
