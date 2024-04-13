const emojis = ['\u{1F973}', '\u{1F388}', '\u{1F389}', '\u{1F38A}', '\u{1F380}', '\u{1F381}', '\u{1F382}', '\u{1F60D}', '\u{1F618}'];

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}


const gradients = ['gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5'];


const container = document.getElementById('container');


function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    balloon.classList.add(randomGradient);

    
    const balloonText = document.createElement('span');
    balloonText.textContent = getRandomEmoji() + ' ';
    balloon.appendChild(balloonText);

   
    container.appendChild(balloon);

    
    const startX = Math.random() * (window.innerWidth - balloon.offsetWidth);
    const startY = Math.random() * (window.innerHeight - balloon.offsetHeight);
    balloon.style.left = `${startX}px`;
    balloon.style.bottom= `${startY}px`;

      
}


setInterval(createBalloon, 20000);

    
