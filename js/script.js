//seleziono il mio container della griglia
const myContainer = document.querySelector('.myContainer');
//memorizzo il value dell'option di livello di difficoltá
// let valueDifficult = document.querySelector('');
const selectDifficult = document.getElementById('selectDifficult');

//genero la griglia una volta cliccato il bottone PLAY
const playButton = document.querySelector('header .play button.btn_custom');

playButton.addEventListener('click', function () {
   
   initGrid();

});

function initGrid() {
   
   //cicolo che crea TOT quadrati dipendentemente dalla difficoltá scelta
   for (let i = 0; i < 100; i++) {
      
      //creo l'elemento square e lo aggiungo dentro al container
      const square = createSquare(myContainer);
      //aggiungo la classe allo square
      square.className = ('square easy');
      //inserisco il numbero indice+1 dentro lo square
      square.innerHTML = (i+1);
      console.log('Square numero ', square.innerHTML);
      
   }
}

//funzione che crea quadrati 'square' e li inserire nel container (target)
function createSquare(target) {
   
   const square = document.createElement('div');
   target.append(square);

   return square;
}

