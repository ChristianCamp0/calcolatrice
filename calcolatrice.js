//Funzioni
function somma(n1, n2) {
    return n1 + n2;
}

function meno(n1, n2) {
    return n1 - n2;
}

function molti(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    if (n2 === 0) {
        return "Errore";
    }
    return n1 / n2;
}
//menu della calcolatrice
let scelta;

do {
    scelta = prompt(
        "CALCOLATRICE\n" +
        "1 - Somma\n" +
        "2 - Sottrazione\n" +
        "3 - Moltiplicazione\n" +
        "4 - Diviso\n" +
        "0 - Esci \n"
    );

    if (scelta === "0") {
        break;
    }

    let n1 = parseFloat(prompt("Primo numero:"));
    let n2 = parseFloat(prompt("Secondo numero:"));
    let risultato;
//rimando alle funzioni scritte in precedenza
    switch (scelta) {
        case "1":
            risultato = somma(n1, n2);
            break;
        case "2":
            risultato = meno(n1, n2);
            break;
        case "3":
            risultato = molti(n1, n2);
            break;
        case "4":
            risultato = div(n1, n2);
            break;
        default:
            alert("Scelta sbagliata");
            continue;
    }
    
    alert("Risultato: " + risultato);

} while (true);
