/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:

Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

Come detto in allAgato il markup di partenza così vi concentrate sulla logica...
(cre scriverete prima del codice... vero?... VERO?? 🤞 😅 )

Buon divertimento  🤓 💬 */

/* SELEZIONO ELEMENTI HTML SUI QUALI DOVRò AGIRE */
const countdown = document.getElementById("countdown"); /* COUNTDOWN */
const numbersList = document.getElementById("numbers-list"); /* <ul> in cui verranno creati i <li> del generaNumeriRandom */
const answersForm = document.getElementById("answers-form");
const messageEl = document.getElementById("message"); /* varabile utilizzata per tornare messaggi all'utente dopo che ha inserito i numeri */
const inputFields = answersForm.querySelectorAll("input");/* SALVO I DATI DELL'USERINPUT */

/* SALVO IL RISULTATO DI generaNumeriRandom IN UNA VARIABILE */
const numeriDaMemorizzare = generaNumeriRandom(5, 1, 9);
console.log("Numeri da memorizzare:", numeriDaMemorizzare);/* DEBUG */

/* ORA DEVO USARE QUESTI VALORI PER MOSTRARLI IN PAGINA */
for (let i = 0; i < numeriDaMemorizzare.length; i++) {
    const li = document.createElement("li"); /* così non sono obbligato a modificare manualmente html. Ci penserà il ciclo a creare gli elementi */
    li.textContent = numeriDaMemorizzare[i];/* qui (dopo che il ciclo ha creato gli elementi, .textContent inserisce testo in un elemento html) */
    numbersList.appendChild(li);/* qui gli dico dove mettere gli elementi creati, ovvero nel <ul> selezionato sopra */
}
/* TIMER */
let tempo = 10; /* setto variabile iniziale */
countdown.textContent = tempo; /* con text content "spingo" il conteggio ad apparire in pagina nell'elemento con id countdown */
const timer = setInterval(function() {
    /* console.log(tempo); DEBUG*/
    tempo--;
    countdown.textContent = tempo; /* devo ripeterlo per spingerlo ogni volta che il numero cambia a causa del ciclo */
    if (tempo < 0){
        clearInterval(timer);
        countdown.textContent = "" 
        numbersList.classList.add("d-none");    // con .classlist.add("classe da aggiungere") posso aggiungere al volo una classe all'elemento
        answersForm.classList.remove("d-none"); // .classList.remove("d-none") => qui invece sto rimuovendo una classe
        /* console.log("tempo scaduto"); DEBUG*/
    }
}, 1000);

/* PER UTILIZZARE I NUMERI CHE RICEVE INPUT, DOVRO' USARE UN ARRAY?!*/
// intanto devo "ascoltare" l'input dell'utente
answersForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const numeriUtente = []; // poi salvare il risultato in un array
    for (let i = 0; i < inputFields.length; i++) {
        const valore = Number(inputFields[i].value);

        if (!valore) {
            messageEl.textContent = "Inserisci solo numeri validi!";
            return;
        }

        numeriUtente.push(valore);
    }
    const numeriIndovinati = [];

    for (let i = 0; i < numeriUtente.length; i++) { /* QUESTO ARRAY DOVREI CONFRONTARLO CON L'ARRAY numeriDaMemorizzare */
        if (numeriDaMemorizzare.includes(numeriUtente[i])) { /* INFINE DETERMINARE SE I DUE ARRAY HANNO AL LORO INTERNO GLI STESSI NUMERI */
            numeriIndovinati.push(numeriUtente[i]);
        }
    }

    messageEl.textContent =
        `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(", ")}`;
});














