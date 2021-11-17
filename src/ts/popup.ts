import { QuizletQuackerSwitchController } from './quizlet_quacker_switch_controller.js';

let qqsc = new QuizletQuackerSwitchController();
let qqs: HTMLInputElement | null = <HTMLInputElement | null>document.getElementById("qq-switch");

if (qqs != null) {
    qqs.addEventListener('click', () => {
        qqsc.changeStatus(qqs!.checked);
    });
}