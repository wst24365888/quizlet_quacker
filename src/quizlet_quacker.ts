class QuizletQuacker {
    private foreground: HTMLElement;
    private background: HTMLElement;

    constructor() {
        this.foreground = <HTMLElement> document.getElementsByClassName("hpidy4b s1oluvjw")[0];
        this.background = <HTMLElement> document.getElementsByClassName("we2bqom")[0];
    }

    public removePaidWall(): void {
        this.foreground.classList.remove("hpidy4b");
        this.foreground.classList.remove("s1oluvjw");
        
        this.background.style.display = "none";
    }

    public restorePaidWall(): void {
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
            let qq: QuizletQuacker = new QuizletQuacker();

            chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
                console.log(request);

                if (request.enabled) {
                    qq.removePaidWall();
                } else {
                    qq.restorePaidWall();
                }

                if (sendResponse) {
                    sendResponse({ success: true });
                }
            });

            break;
    }
}
