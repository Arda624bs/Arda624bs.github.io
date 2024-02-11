$(document).ready(function () {
    $('.button.ja').click(function() {
        var audio = document.getElementById('yesSound');
        audio.volume = 0; 
        audio.play(); 

        var fadeDuration = 2000;
        var volumeStep = 1 / (fadeDuration / 100);

        var fadeInterval = setInterval(function() {
            if (audio.volume < 1) {
                audio.volume = Math.min(audio.volume + volumeStep, 1);
            } else {
                clearInterval(fadeInterval); 
            }
        }, 100);

        setTimeout(function() {
            var fadeOutInterval = setInterval(function() {
                if (audio.volume > 0) {
                    audio.volume = Math.max(audio.volume - volumeStep, 0);
                } else {
                    clearInterval(fadeOutInterval);
                }
            }, 100);
        }, 16000);

        audio.addEventListener('ended', function() {
            clearInterval(fadeInterval);
            clearInterval(fadeOutInterval);
            audio.volume = 0;
        }, false);

        for (let i = 0; i < 20; i++) { 
            setTimeout(createBalloon, i * 200);
        }

        function createBalloon() {
            var balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
            document.body.appendChild(balloon);
        
            setTimeout(() => {
                balloon.remove();
            }, 8000); 
        }
    });
});
