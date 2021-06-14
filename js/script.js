// subito nuova dichiarazione di inizio document ready
//STANDARD - CONTIENE TUTTO IL CODICE SUCCESSIVO mettiano in HTML
//lo script js in head


document.addEventListener('DOMContentLoaded', function () {

      /*Un alert() espone 5 numeri generati casualmente.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

1)generare 5 numeri random popolare lista cpu 5elemnti
2)stamparli in un alert con chiusura  a 30sec
3)proporre all utente prompt per inserimento numeri
      3)check validità numeri
4)popolare lista player 5 numeri
5)confrontare le liste ??? -> generare lista ===

*/

//1)generare 5 numeri random 1 a 100 popolare lista cpu 5elemnti

var listResult = [];
var listUser = [];
var listNumCpu = [];
var maxNum = 100;
var numRnd = 5;


function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

while (listNumCpu.length < numRnd){
      var randomNum = getRandomNumber(1, maxNum);
      if (!listNumCpu.includes(randomNum)){
            listNumCpu.push(randomNum);
      }
}
console.log(listNumCpu)
//document.getElementById('numeriCpu').innerText = listNumCpu;

//2)stamparli in un alert con chiusura  a 30sec

alert(listNumCpu);
console.log(listNumCpu)

//3)proporre all utente prompt per inserimento numeri QUI TIMER PARTE DOPO 30SEC
     // 3)check validità numeri /NUOVO ARRAY SUBITO QUI 5)confrontare le liste ??? -> generare lista ===

setTimeout (function (){
      while (listUser.length < numRnd){
            var inputUser = parseInt(prompt('inserisci un numero della lista precedente'));
            listUser.push(inputUser);
      
      console.log(listUser)
      if (listNumCpu.includes(inputUser)){
            listResult.push(inputUser);


      }
      }
      
      console.log('Beccati '+ listResult.length + ' numeri, che sono ' + listResult);
      document.querySelector('.quanti-presi').innerHTML = "hai beccato " + listResult.length + " numeri";
      document.querySelector('.quali-presi').innerHTML = "che sono " + listResult ;
}, 5000);


})

