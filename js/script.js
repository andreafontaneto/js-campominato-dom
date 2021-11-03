/* 
PARTE 1
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

/*
PARTE 2
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// intercetto il bottone Play
const playButton = document.querySelector('.btn');

playButton.addEventListener('click', function(){
  playGame();
})

function playGame(){
  // intercetto il div con classe main-content
  const mainContent = document.querySelector('.main-content');

  // intercetto il menù con le 3 opzioni dell'html
  const difficulty = parseInt(document.getElementById('difficulty').value);

  // creo le 3 condizioni al click del play
  switch(difficulty){

    case 1:
      mainContent.innerHTML = '';
      generateEasyGrid();
      break;
    case 2:
      mainContent.innerHTML = '';
      generateHardGrid();
      break;
    case 3:
      mainContent.innerHTML = '';
      generateCrazyGrid();
      break;
  }

  console.log(difficulty);


  // creo la funzione per generare la griglia easy
  function generateEasyGrid(tot){

    const grid = document.createElement('div');
    grid.className = 'grid';
    mainContent.append(grid);

    for(let i = 0; i < 100; i++){
      
      const squareComplete = createSquare(grid);

      squareComplete.innerHTML = i + 1;

      squareComplete.style.width = 'calc(100% / 10)';
      squareComplete.style.height = 'calc(100% / 10)';

    }

    return grid;
  }

  // creo la funzione per generare la griglia hard
  function generateHardGrid(tot){

    const grid = document.createElement('div');
    grid.className = 'grid';
    mainContent.append(grid);

    for(let i = 0; i < 81; i++){
      
      const squareComplete = createSquare(grid);

      squareComplete.innerHTML = i + 1;

      squareComplete.style.width = 'calc(100% / 9)';
      squareComplete.style.height = 'calc(100% / 9)';

    }

    return grid;
  }

  // creo la funzione per generare la griglia crazy
  function generateCrazyGrid(tot){

    const grid = document.createElement('div');
    grid.className = 'grid';
    mainContent.append(grid);

    for(let i = 0; i < 49; i++){
      
      const squareComplete = createSquare(grid);

      squareComplete.innerHTML = i + 1;

      squareComplete.style.width = 'calc(100% / 7)';
      squareComplete.style.height = 'calc(100% / 7)';

    }

    return grid;
  }

  // creo la funzione generale per creare un singolo quadrato
  function createSquare (target){

    const square = document.createElement('div');

    square.className = 'square';

    target.append(square);

    return square;

  }
  }

