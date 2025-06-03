function homepage(){
    window.location.href = "index.html";
}

function showGameInfo(){

  var game = document.getElementById("game");
  var gameValue = game.options[game.selectedIndex].value;    
  var jogo = document.querySelector(".description");

    if (gameValue == 1) {
        jogo.textContent = "Simplesmente o jogo que mais joguei na vida, gosto demais e ja criei" + "\n" + "muitos momentos bons, amizades e entre outros... Tenho um carinho muito grande..." + "\n" + "Nota 10!";
    }

    else if (gameValue == 2){
        jogo.textContent = "Meu jogo favorito da vida toda, fui top 20 brasileiro e me ajudou em momentos onde precisava distrair a cabeça e me divertir... Fico triste ate hoje que o jogo esteja parado. INCRIVEL!";
    }

    else if (gameValue == 3){
        jogo.textContent = "Jogo de tower defense incrivelmente divertido para jogar tanto sozinho quanto com amigos, jogo bonito e leve, otimo para dias de diversao...";
    }

    else if (gameValue == 4){
        jogo.textContent = "Jogo de PS3 incrivel, um dos melhores jogo campanha que ja joguei, jogo com trilha sonora incrivel, batalhas e mecanicas incriveis, recomendo demais!";
    }

    else if (gameValue == 5){
        jogo.textContent = "Joguei pouco mas acho interessante, jogo com mecanicas boas e poderes, muito bom para o competitivo, bem legal...";
    }
    
    else if (gameValue == 6){
        jogo.textContent = "O jogo que mudou minha vida, principalmente a infancia que passei jogando o mesmo. Desenvolvi contato e logica de programaçao atraves dele, com o mod ComputerCraft e a linguagem LUA. Incrivel!";
    }

    else{
      window.location.href = "hobbies.html";
    }
}