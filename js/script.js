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

// al click del bottone play viene richiatama la funzione playGame
playButton.addEventListener('click', function(){
  playGame();
})



// metto tutto in una funziona unica che fa partire il gioco
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

  console.log('difficoltà scelta', difficulty);

  // creo la variabile per il numero di celle per riga
  let rowCells = parseInt();

  // creo la variabile per il numero di celle totali
  let totCells = rowCells * rowCells;

  // creo la funzione per generare la griglia easy
  function generateEasyGrid(tot){

    rowCells = 10;
    totCells = 100;

    const grid = document.createElement('div');
    grid.className = 'grid';
    mainContent.append(grid);

    for(let i = 0; i < totCells; i++){
      
      const squareComplete = createSquare(grid);

      squareComplete.innerHTML = i + 1;

      squareComplete.style.width = `calc(100% / ${rowCells})`;
      squareComplete.style.height = `calc(100% / ${rowCells})`;

    }

    generateBombs();

    return grid;
  }

  // creo la funzione per generare la griglia hard
  function generateHardGrid(tot){

    rowCells = 9;
    totCells = 81;

    const grid = document.createElement('div');
    grid.className = 'grid';
    mainContent.append(grid);

    for(let i = 0; i < totCells; i++){
      
      const squareComplete = createSquare(grid);

      squareComplete.innerHTML = i + 1;

      squareComplete.style.width = `calc(100% / ${rowCells})`;
      squareComplete.style.height = `calc(100% / ${rowCells})`;

    }

    generateBombs();

    return grid;
  }

  // creo la funzione per generare la griglia crazy
  function generateCrazyGrid(tot){

    rowCells = 7;
    totCells = 49;

    const grid = document.createElement('div');
    grid.className = 'grid';
    mainContent.append(grid);

    for(let i = 0; i < totCells; i++){
      
      const squareComplete = createSquare(grid);

      squareComplete.innerHTML = i + 1;

      squareComplete.style.width = `calc(100% / ${rowCells})`;
      squareComplete.style.height = `calc(100% / ${rowCells})`;

    }

    generateBombs();

    return grid;
  }






  // creo la funzione generale per creare un singolo quadrato
  function createSquare (target){

    const square = document.createElement('div');

    square.className = 'square';

    square.addEventListener('click', function(){
    
      square.classList.add('clicked');
      
    })

    target.append(square);

    return square;

  }


  // creo la costante totale delle bombe che è uguale a 16
  const totBombs = 16;

  // genero la funzione che crea le bombe
  function generateBombs(){

    // creo un array vuoto dove andranno messe le "bombe"
    const bombs = [];
    console.log(bombs);

    while(bombs.lenght < totBombs){
      // creo la costante "bomb" richiamando la funzione che genera un numero random in base al numero totale di celle
      const bomb = generateRandomNum(1, totCells);

      function generateRandNum(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      if(!bombs.includes(bomb)){  
        // aggiungo la bomba creata all'array vuoto se non è presente
        bombs.push(bomb);
      }
    }

    return bombs;
  }


}

