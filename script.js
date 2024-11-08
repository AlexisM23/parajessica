document.addEventListener('click', function(event) {
    const buttons = document.querySelectorAll('.reason-button');
    buttons.forEach(button => {
        if (button.contains(event.target)) {
            button.classList.toggle('active');
        } else {
            button.classList.remove('active');
        }
    });
});

function showWords() {
    // Limpiar palabras anteriores
    const existingWords = document.querySelectorAll('.words');
    existingWords.forEach(word => word.remove());

    const words = [
        "INFINITAMENTE",
        "PERMANENTEMENTE",
        "ETERNAMENTE",
        "ILIMITADAMENTE",
        "INTERMINABLEMENTE",
        "Y TAN LOCAMENTE, JESSICA MIA ❤️"
    ];
    let delay = 0;
    words.forEach((word, index) => {
        setTimeout(() => {
            const wordElement = document.createElement('div');
            wordElement.className = 'words';
            wordElement.textContent = word;
            document.body.appendChild(wordElement);
            wordElement.style.display = 'block';
        }, delay);
        delay += 1000; // 1 segundo entre cada palabra
    });
}

function showFireworks() {
    const fireworksElement = document.createElement('div');
    fireworksElement.className = 'fireworks';
    fireworksElement.textContent = 'Gracias por existir ❤️';
    document.body.appendChild(fireworksElement);
    fireworksElement.style.display = 'block';
    setTimeout(() => {
        fireworksElement.style.display = 'none';
        document.body.removeChild(fireworksElement);
    }, 2000); // Duración de la animación
}

function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play();
}
