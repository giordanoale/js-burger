var calculate = document.getElementById("calculate");
var burgerName = document.getElementById("burger-name-input");

// Evento click del bottone
calculate.addEventListener("click",
  function() {

    // controllo se è stato inserito il nome del panino
    if (burgerName.value != ""){

    } else {
      alert("Inserisci il nome del panino!");

    }
  }
);
