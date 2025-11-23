let tour = "X";  
let grille = ["", "", "", "", "", "", "", "", ""];
let scoreX = 0;
let scoreO = 0;
let fin = false;

// Affichage du tour
document.getElementById("tour").innerText = "Tour du joueur : " + tour;

// Combinaisons gagnantes
const combinaisonsGagnantes = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
];

// HISTORIQUE
let historique = [];

// JOUER
function jouer(index) {
    if (grille[index] !== "" || fin) return;

    grille[index] = tour;
    const cell = document.getElementsByClassName("case")[index];
    cell.innerText = tour;
    cell.style.color = (tour === "X") ? "blue" : "red";

    if (verifierGagnant()) {
        document.getElementById("message").innerText = tour + " a gagné !";

        // Score
        if (tour === "X") {
            scoreX++;
            document.getElementById("scoreX").innerText = scoreX;
        } else {
            scoreO++;
            document.getElementById("scoreO").innerText = scoreO;
        }

        // Historique
        historique.push(tour + " a gagné");
        fin = true;
        return;
    }

    if (!grille.includes("")) {
        document.getElementById("message").innerText = "Match nul !";
        historique.push("Match nul");
        fin = true;
        return;
    }

    // Changement de joueur
    tour = tour === "X" ? "O" : "X";
    document.getElementById("tour").innerText = "Tour du joueur : " + tour;
}

// Vérifier gagnant + colorer cases gagnantes
function verifierGagnant() {
    for (let c of combinaisonsGagnantes) {
        if (grille[c[0]] === tour &&
            grille[c[1]] === tour &&
            grille[c[2]] === tour) {

            colorerCasesGagnantes(c);
            return true;
        }
    }
    return false;
}

function colorerCasesGagnantes(pattern) {
    const cases = document.getElementsByClassName("case");
    pattern.forEach(i => {
        cases[i].style.backgroundColor = "lightgreen";
    });
}

// RESET PARTIE
function reset() {
    tour = "X";
    grille = ["", "", "", "", "", "", "", "", ""];
    fin = false;
    document.getElementById("tour").innerText = "Tour du joueur : X";
    document.getElementById("message").innerText = "";
    
    const cases = document.getElementsByClassName("case");
    for (let c of cases) {
        c.innerText = "";
        c.style.color = "black";
        c.style.backgroundColor = "white";
    }
}

// RESET SCORES
function resetScores() {
    scoreX = 0;
    scoreO = 0;
    document.getElementById("scoreX").innerText = scoreX;
    document.getElementById("scoreO").innerText = scoreO;
}

// OUVRIR POPUP HISTORIQUE
function ouvrirHistorique() {
    let ul = document.getElementById("listeHistorique");
    ul.innerHTML = "";

    historique.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    });

    document.getElementById("popupHistorique").style.display = "block";
}

// FERMER POPUP HISTORIQUE
function fermerHistorique() {
    document.getElementById("popupHistorique").style.display = "none";
}