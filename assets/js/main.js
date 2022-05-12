let mylist = document.getElementById('mylist');
const messageAlarm = document.getElementById('message-alarm');
const messageOutput = document.getElementById('message-output');
const messageInput = document.getElementById('message-input');




// function showtxt() {

//     console.log(Boolean(messageInput.value));
//     if (messageInput.value) {
//         messageOutput.innerHTML = messageInput.value
//         messageAlarm.style.visibility = 'hidden'
//         messageOutput.style.visibility = 'visible'
//     }

//     else {
//         messageAlarm.innerHTML = 'Bitte gib eine Nachricht ein!';
//         messageOutput.style.visibility = 'hidden'
//         messageAlarm.style.visibility = 'visible'
//     }
// }

function showtxt() {
    switch (Boolean(messageInput.value)) {
        case true:
            console.log('is TRUE');
            messageOutput.innerHTML = messageInput.value
            messageAlarm.style.visibility = 'hidden'
            messageOutput.style.visibility = 'visible'
            break;

        default:
            console.log('is FALSE');
            messageAlarm.innerHTML = 'Bitte gib eine Nachricht ein!';
            messageOutput.style.visibility = 'hidden'
            messageAlarm.style.visibility = 'visible'
            break;
    }
}

