const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result',oneSpeak)

function oneSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNatela(chute)
    verificaChuteValorValido(chute)
}

 function exibeChuteNatela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
 }

 recognition.addEventListener('end', () => recognition.start())


