/* SICURAMENTE MI SERVE UNA FUNZIONE PER GENERARE NUMERI */
function generaNumeriRandom (count, min, max){
    let numeri = [];
    while (numeri.length < count){
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numeri.includes(num)){
            numeri.push(num);
        }
    }
    return numeri
}

