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
const messageEl = document.getElementById("message");
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
console.log(numeriDaMemorizzare);