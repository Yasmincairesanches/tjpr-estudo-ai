// Funções de controle de telas
function showScreen(screenId) {
    const screens = ['home-screen', 'questions-screen', 'pomodoro-screen', 'simulados-screen', 'laws-screen'];
    screens.forEach(id => document.getElementById(id)?.classList.add('hide'));
    document.getElementById(screenId)?.classList.remove('hide');
}

// Controle do chat flutuante
function toggleAIChat() {
    const chat = document.getElementById('ai-chat');
    chat.classList.toggle('show');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    const container = document.getElementById('chat-messages');
    const userMessage = document.createElement('div');
    userMessage.className = 'bg-white p-3 rounded-lg mb-3';
    userMessage.innerHTML = `<div class="text-sm text-gray-600 mb-1">Você</div><div>${message}</div>`;
    container.appendChild(userMessage);

    input.value = '';
    container.scrollTop = container.scrollHeight;

    // Simula resposta da IA
    setTimeout(() => {
        const aiReply = document.createElement('div');
        aiReply.className = 'bg-gray-100 p-3 rounded-lg mb-3';
        aiReply.innerHTML = `<div class="text-sm text-gray-600 mb-1">Juris AI</div><div>Resposta simulada para: "${message}"</div>`;
        container.appendChild(aiReply);
        container.scrollTop = container.scrollHeight;
    }, 800);
}

// Temporizador Pomodoro
let timer;
let timerSeconds = 25 * 60;
function startPomodoro() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timerSeconds <= 0) {
            clearInterval(timer);
            document.getElementById('timer-display').textContent = '00:00';
            return;
        }
        timerSeconds--;
        const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
        const seconds = String(timerSeconds % 60).padStart(2, '0');
        document.getElementById('timer-display').textContent = `${minutes}:${seconds}`;
    }, 1000);
    document.getElementById('start-timer').classList.add('hide');
    document.getElementById('pause-timer').classList.remove('hide');
}

function pausePomodoro() {
    clearInterval(timer);
    document.getElementById('start-timer').classList.remove('hide');
    document.getElementById('pause-timer').classList.add('hide');
}

function resetPomodoro() {
    clearInterval(timer);
    timerSeconds = 25 * 60;
    document.getElementById('timer-display').textContent = '25:00';
    document.getElementById('start-timer').classList.remove('hide');
    document.getElementById('pause-timer').classList.add('hide');
}
