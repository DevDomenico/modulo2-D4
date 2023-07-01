
const utenteCheEffettuaLAcquisto = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  };
  
  // Altri due utenti che effettuano gli acquisti
  const utente2 = {
    name: "Giulia",
    lastName: "Bianchi",
    isAmbassador: false,
  };
  
  const utente3 = {
    name: "Luca",
    lastName: "Verdi",
    isAmbassador: true,
  };
  
  // Lista dei prezzi array
  const prices = [34, 5, 2];
  
  // Costo di spedizione
  const shippingCost = 50;
  
  // Calcolo del costo totale del carrello
  let costoTotale = 10;

  //eseguo un loop for attraverso l'array prices e calcolare il costo totale del carrello. 
  //In ogni iterazione, il prezzo dell'elemento corrente viene aggiunto al costo totale.
  for (let i = 0; i < prices.length; i++) {
    costoTotale += prices[i];
  }
  //Viene utilizzata una condizione if per controllare se l'utente che effettua l'acquisto è un ambassador (isAmbassador è true). 
  //In tal caso, viene applicato uno sconto del 30% 
  if (utenteCheEffettuaLAcquisto.isAmbassador) {
    costoTotale = costoTotale * 0.7; // Sconto del 30% per gli ambassador
  }
  
  //Viene utilizzata un'altra condizione if per controllare se il costo totale del carrello 
  //è inferiore o uguale a 100.
  if (costoTotale <= 100) {
    costoTotale += shippingCost;
  }
  
  console.log("Il costo totale del carrello è: " + costoTotale);
  
  //Stampa delle informazioni sull'utente
  //Viene costruita una stringa stringaBase che contiene il nome e il cognome dell'utente che effettua l'acquisto. 
  //Se l'utente è un ambassador, viene aggiunto il testo "è un ambassador" alla stringa, altrimenti viene aggiunto 
  //il testo "non è un ambassador
  let stringaBase = utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + " ";
  
  if (utenteCheEffettuaLAcquisto.isAmbassador) {
    stringaBase += "è un ambassador";
  } else {
    stringaBase += "non è un ambassador";
  }
  
  console.log(stringaBase);
  
  //array di ambassador
  const ambassador = [];
  
  if (utenteCheEffettuaLAcquisto.isAmbassador) {
    ambassador.push(utenteCheEffettuaLAcquisto);
  }
  
  if (utente2.isAmbassador) {
    ambassador.push(utente2);
  }
  
  if (utente3.isAmbassador) {
    ambassador.push(utente3);
  }
  
  console.log("Array di ambassador: ", ambassador);
  
  
 
  
