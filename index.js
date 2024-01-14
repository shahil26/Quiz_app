import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://api-key-maps-381222-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const questions = ref(database, 'question')
const answers = ref(database, 'answer')



console.log(app)

const buttonEl = document.getElementById('registerbtn')

function getInputValue() {
    const inputEl = document.getElementById('inputFeild')
    return inputEl.value
}

// ----------- Control Functions Begin ------------- //

function showTimer(val) {
}

function showQuestion(val) {
}

function showResult(val) {
}

function showLeaderBoard(val) {
}
// ----------- Control Functions End ------------- //

// ----------- Master Control Functions Begins ------------- //

function controlTest(val) {
    const controlValue = 2
    for (let i = 0; i<= controlValue; i++) {
        showTimer(val)
        showQuestion(val)
        showResult(val)
        showLeaderBoard(val)
    }
}

// ----------- Master Control Functions Ends ------------- //

// Function for login button

buttonEl.addEventListener('click', () => {
    const val = getInputValue()
    controlTest(val)
})