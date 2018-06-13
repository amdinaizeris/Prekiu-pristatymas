"use strict"
const pristatymo_kaina = 20;

function pristatyti() {
    document.getElementById("city").style.display = "block";
}

function nePristatyti() {
    document.getElementById("city").style.display = "none";
}

function skaiciuoti() {
    let kaina = parseInt(document.getElementById("kaina").value);
    let miestas = document.getElementById("miestas").value;
    let nepristatyti = document.getElementById("ne");
    let pristatyti = document.getElementById("taip");

    let mokamas = `Prekės kaina : ${kaina} €<br>
    Pristatymas: ${pristatymo_kaina} €<br>
    Iš viso: ${kaina + pristatymo_kaina} €<br>
    Prekę pristatysime į "${miestas}" per 1-3 dienas.`;

    let nemokamas = `Iš viso: ${kaina} €<br>
    Prekę pristatysime į "${miestas}" per 1-3 dienas.`;

    let nepristatyti_text = `Prekės kaina : ${kaina} €<br>
    Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`;

    if (isNaN(kaina) || kaina === 0) {
        document.getElementById("checkout").innerHTML = "Įveskite kainą";
    } else {
        if (nepristatyti.checked) {
            document.getElementById("checkout").innerHTML = nepristatyti_text;
        } else if (pristatyti.checked) {
            if ((kaina >= 50) || (miestas.toLowerCase() === "vilnius")) {
                document.getElementById("checkout").innerHTML = nemokamas;
            } else if (miestas == "") {
                document.getElementById("checkout").innerHTML = "Įveskite miestą";
            } else {
                document.getElementById("checkout").innerHTML = mokamas;
            }
        }
    }
}