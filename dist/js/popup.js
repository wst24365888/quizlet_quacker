import { QuizletQuackerSwitchController } from './quizlet_quacker_switch_controller.js';
let qqsc = new QuizletQuackerSwitchController();
let qqs = document.getElementById("qqs");
if (qqs != null) {
    qqs.addEventListener('click', () => {
        qqsc.changeStatus(qqs.checked);
    });
}
