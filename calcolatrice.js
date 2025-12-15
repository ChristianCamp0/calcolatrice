// Il menu della calcolatrice
function calcolatrice() {
    let scelta;
    do {
        scelta = prompt(
            "Calcolatrice!\n" +
            "Inserisci il numero corrispondente al calcolo:\n" +
            "1. Somma\n" +
            "2. Sottrazione\n" +
            "3. Moltiplicazione\n" +
            "4. Divisione\n" +
            "0. Esci\n" +
            "Inserisci la tua scelta:"
        );

        if (scelta === "0") {
            alert("Arrivederci!");
            break;
        }

        let num1 = parseFloat(prompt("Inserisci il primo numero:"));
        let num2 = parseFloat(prompt("Inserisci il secondo numero:"));
        let risultato;

        switch (scelta) {
            case "1":
                risultato = somma(num1, num2);
                break;
            case "2":
                risultato = sottrazione(num1, num2);
                break;
            case "3":
                risultato = moltiplicazione(num1, num2);
                break;
            case "4":
                risultato = divisione(num1, num2);
                break;
            default:
                alert("Scelta non valida!");
                continue;
        }

        alert("Risultato: " + risultato);
    } while (true);
}

// Le funzioni per il funzionamento della calcolatrice
function somma(a, b) {
    return a + b;
}

function sottrazione(a, b) {
    return a - b;
}

function moltiplicazione(a, b) {
    return a * b;
}

function divisione(a, b) {
    if (b === 0) {
        return "Errore: divisione per zero!";
    }
    return a / b;
}

// Avvia della calcolatrice
calcolatrice();
