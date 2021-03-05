var calculate = document.getElementById("calculate");
var burgerName = document.getElementById("burger-name-input");
var ingredients = document.getElementsByClassName("add-ingredient");

// Evento click del bottone
calculate.addEventListener("click",
  function() {

    // controllo se è stato inserito il nome del panino
    if (burgerName.value != ""){

      // aggiungo il prezzo degli eventuali ingredienti al totale
      var sum = 50;
      for (var i = 0; i < ingredients.length; i++) {
        if (ingredients[i].checked == true) {
          sum += parseInt(ingredients[i].value);
        }
      }

      if ()
    } else {
      alert("Inserisci il nome del panino!");

    }
  }
);
