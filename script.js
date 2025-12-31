// Устанавливаем дату, до которой ведем отсчет - 1 января 2025 года
const newYearDate = new Date('January 1, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = newYearDate - now;

    // Проверка, если время вышло
    if (timeLeft < 0) {
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        document.getElementById('message').innerHTML = '<i class="fas fa-glass-cheers"></i> С НОВЫМ 2025 ГОДОМ! УРА! <i class="fas fa-glass-cheers"></i>';
        document.getElementById('message').style.animation = 'pulse 0.5s infinite';
        return;
    }

    // Расчет дней, часов, минут, секунд
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Обновление элементов на странице
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    // Меняем фразу при малом остатке времени
    const messageEl = document.getElementById('message');
    if (days === 0 && hours < 6) {
        messageEl.innerHTML = '<i class="fas fa-clock"></i> Совсем скоро! Приготовьтесь!';
        messageEl.style.background = 'linear-gradient(to right, #FF0000, #FF4500)';
    } else if (days === 0) {
        messageEl.innerHTML = '<i class="fas fa-hourglass-half"></i> Последние часы уходящего года!';
        messageEl.style.background = 'linear-gradient(to right, #FF8C00, #FFA500)';
    } else if (days < 10) {
        messageEl.innerHTML = '<i class="fas fa-calendar-alt"></i> Осталась меньше недели!';
        messageEl.style.background = 'linear-gradient(to right, #32CD32, #00FA9A)';
    }
}

// Запускаем обновление каждую секунду
setInterval(updateCountdown, 1000);

// Вызываем сразу, чтобы не было задержки в 1 секунду при загрузке
updateCountdown();
