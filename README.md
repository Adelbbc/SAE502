# 🎮 SAE502 — Jeu du Mort Pion (Tic Tac Toe)

Ce projet est une implémentation du jeu du Mort Pion / Tic Tac Toe réalisée dans le cadre de la SAE 502.  
L’objectif était de programmer un jeu simple utilisant HTML, CSS et JavaScript, en ajoutant plusieurs fonctionnalités définies dans un Trello.

---

## 🧠 Objectifs du projet
- Créer une grille de jeu 3x3 interactive  
- Gérer les tours des joueurs (X et O)  
- Détecter automatiquement les victoires  
- Afficher les scores des joueurs  
- Sauvegarder les scores entre les parties avec localStorage  
- Ajouter un bouton "Recommencer" pour relancer une partie sans recharger la page  
- Produire un README clair expliquant le fonctionnement du jeu  

---

## 🕹️ Fonctionnement du jeu

Deux joueurs s’affrontent :

- Le joueur X commence toujours  
- Chaque joueur clique sur une case vide pour jouer  
- Le jeu vérifie automatiquement les victoires, le match nul et change le tour  
- Un message affiche le résultat en fin de partie  

---

## 🏆 Gestion des scores

Les scores de X et O sont affichés au-dessus du plateau.

### ✔️ Scores sauvegardés automatiquement  
Grâce à localStorage :
- Les scores restent même si la page est rafraîchie  
- Les victoires sont enregistrées automatiquement  
- Les scores sont mis à jour en direct à l’écran  

---

## 🔄 Bouton "Recommencer"

Le bouton "Recommencer" permet de :
- vider la grille  
- relancer une nouvelle partie  
- remettre le tour à X  
- conserver les scores  
La page ne se recharge pas, tout se fait en JavaScript.

---

## 📦 Technologies utilisées

HTML → structure du jeu  
JavaScript → logique du jeu, victoires, scores, localStorage, reset amélioré  

---

## 🧩 Arborescence du projet

SAE502  
│── jeu.html  
└── README.md  

---

## 👨‍💻 Auteurs du projet
Groupe SAE — BUT Informatique  
Membres :  
- Adelbbc  
- Yahya  
- Sylvain

---

## 📌 Tâches réalisées (Trello → GitHub Commits)

✔️ Affichage des scores au-dessus de la grille  
✔️ Sauvegarde des scores avec localStorage  
✔️ Bouton Recommencer + reset du jeu  
✔️ Création d’un README complet  

---

## 🚀 Lancer le jeu

Pour jouer, il suffit d’ouvrir le fichier :

jeu.html

dans un navigateur comme Chrome, Firefox ou Edge.  
Aucune installation n’est nécessaire.

---

