document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const output = document.getElementById('output');
    
    // Check if the browser supports the Web Speech API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = 'en-US';

        recognition.onstart = () => {
            output.textContent = 'Listening...';
        };

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            output.textContent = `You said: ${result}`;
        };

        recognition.onerror = (event) => {
            output.textContent = 'Error occurred: ' + event.error;
        };

        startBtn.addEventListener('click', () => {
            recognition.start();
        });
    } else {
        output.textContent = 'Speech recognition is not supported in this browser.';
    }
});
