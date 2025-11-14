let tour = "X";  
let grille = ["", "", "", "", "", "", "", "", ""];
let scoreX = 0;
let scoreO = 0;
let fin = false;

document.getElementById("tour").innerText = "Tour du joueur : " + tour;

const combinaisonsGagnantes = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
];

function jouer(index) {
    if (grille[index] !== "" || fin) return;

    grille[index] = tour;
    const cell = document.getElementsByClassName("case")[index];
    cell.innerText = tour;
    cell.style.color = (tour === "X") ? "blue" : "red";

    if (verifierGagnant()) {
        document.getElementById("message").innerText = tour + " a gagné !";

        if (tour === "X") {
            scoreX++;
            document.getElementById("scoreX").innerText = scoreX;
        } else {
            scoreO++;
            document.getElementById("scoreO").innerText = scoreO;
        }

        fin = true;
        return;
    }

    if (!grille.includes("")) {
        document.getElementById("message").innerText = "Match nul !";
        fin = true;
        return;
    }

   
    tour = tour === "X" ? "O" : "X";
    document.getElementById("tour").innerText = "Tour du joueur : " + tour;

}

function verifierGagnant() {
    return combinaisonsGagnantes.some(c =>
        grille[c[0]] === tour &&
        grille[c[1]] === tour &&
        grille[c[2]] === tour
    );
}

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
    }
}

function resetScores() {
    scoreX = 0;
    scoreO = 0;
    document.getElementById("scoreX").innerText = scoreX;
    document.getElementById("scoreO").innerText = scoreO;
}
