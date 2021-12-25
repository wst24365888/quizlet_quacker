export class QuizletQuackerSwitchController {
    public changeStatus(enabled: boolean): void {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            // console.log(tabs);

            tabs.forEach((tab) => {
                chrome.tabs.sendMessage(tab.id ?? chrome.tabs.TAB_ID_NONE, {
                    enabled: enabled,
                }, (response: { success: boolean }) => {
                    if(!response.success) {
                        console.error('Failed to enable Quizlet Quacker.');
                    }
                });
            });
        });
    }
}