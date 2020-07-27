window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#90EE90",
        "#FFB6C1",
        "#6eceee",
        "#f0e374",
        "#fa25fa",
        "#b9645a" 

    ];

    console.log(sounds);

    // programando teclas e sons

pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        criarBolha(index);

    });
 });

    // função para criar bolhas

    const criarBolha  = (index) => {
        const bolha = document.createElement("div");
        visual.appendChild(bolha);
        bolha.style.backgroundColor = colors[index];
        bolha.style.animation = 'jump 1s ease';
        bolha.addEventListener("animationend", function() {
            visual.removeChild(this);
          });
      
        
    }

});

