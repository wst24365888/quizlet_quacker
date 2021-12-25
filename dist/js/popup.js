import { QuizletQuackerSwitchController } from './quizlet_quacker_switch_controller.js';
const qqsc = new QuizletQuackerSwitchController();
const qqs = document.getElementById("qq-switch");
if (qqs != null) {
    qqs.addEventListener('click', () => {
        qqsc.changeStatus(qqs.checked);
    });
}
