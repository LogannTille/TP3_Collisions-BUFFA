// script.js
import Monstre from './Monstre.js';
import CercleAnime from './CercleAnime.js';
import Obstacle from './Obstacle.js';
import ObstacleAnime from './ObstacleAnime.js';
import Sortie from './Sortie.js';

// Bonnes pratiques
let canvas, ctx, w, h;

// Les balles
let tableauDesBalles = [];
let tableauDesObstacles = [];
let monstre;
let sortie;

let etatJeu;

// On exécutera init que quand la page sera chargée
window.onload = init;

function init() {
  console.log("page chargée");

  canvas = document.querySelector("#myCanvas");
  w = canvas.width;
  h = canvas.height;

  ctx = canvas.getContext('2d');

  // On créée les écouteurs de touches
  document.addEventListener("keydown", traiteToucheEnfoncee, false);
  document.addEventListener("keyup", traiteToucheRelachee, false);

  // Initialiser le monstre
  monstre = new Monstre(10, 10, "gray", 100, 100, 5);

  // Initialiser la sortie
  sortie = new Sortie(w - 30, h - 30, 15);

  // Créer des balles
  creerDesBalles(10);

  // Créer des obstacles
  creerDesObstacles(2);

  etatJeu = "Jeu";

  // On démarre l'animation
  requestAnimationFrame(mainloop);
}

//------- CODE DES ECOUTEURS
function traiteToucheEnfoncee(evt) {
  console.log("touche enfoncée code = " + evt.keyCode);
  switch (evt.keyCode) {
    case 39:
      // fleche à droite
      monstre.vx = monstre.speed;
      break;
    case 37:
      // fleche à gauche
      monstre.vx = -monstre.speed;
      break;

    case 40:
      // fleche en bas
      monstre.vy = monstre.speed;
      break;
    case 38:
      // fleche en haut
      monstre.vy = -monstre.speed;
      break;
    case 32:
      // barre d'espace
      if (etatJeu === "GameOver") {
        newGame();
      }
      break;
  }
}

function newGame() {
  etatJeu = "Jeu";
  monstre.x = 0;
  monstre.y = 0;
  monstre.vx = monstre.vy = 0;
}

function traiteToucheRelachee(evt) {
  console.log("touche relachee");
  // Si fleche haut ou bas relachee, on annule juste la vitesse
  // verticale
  if ((evt.keyCode === 40) || (evt.keyCode === 38))
    monstre.vy = 0;

  if ((evt.keyCode === 37) || (evt.keyCode === 39))
    monstre.vx = 0;
}

// ------ BOUCLE PRINCIPALE DU JEU
// boucle d'animation
function mainloop() {
  // 1) On efface le contenu du canvas
  ctx.clearRect(0, 0, w, h);

  switch (etatJeu) {
    case "Jeu":
      // 2) On dessine dans le canvas des objets
      dessinerLesBalles();
      dessinerLesObstacles();
      monstre.draw();
      sortie.draw();

      // 3) On déplace le monstre
      monstre.move();
      deplaceLesBalles();

      // 4) On teste s'il y a collision
      if ((monstre.x + monstre.largeur) >= w) {
        monstre.vx = -Math.abs(monstre.vx);
        monstre.x = w - monstre.largeur;
      }
      if (monstre.x <= 0) {
        monstre.vx = Math.abs(monstre.vx);
        monstre.x = 0;
      }
      if ((monstre.y + monstre.hauteur) >= h) {
        monstre.vy = -Math.abs(monstre.vy);
        monstre.y = h - monstre.hauteur;
      }
      if (monstre.y <= 0) {
        monstre.vy = Math.abs(monstre.vy);
        monstre.y = 0;
      }

      // Test de collision avec la sortie
      if (circRectsOverlap(monstre.x, monstre.y, monstre.largeur, monstre.hauteur, sortie.x, sortie.y, sortie.rayon)) {

      }

      // Test de collision avec les obstacles
      testRectObstacle(monstre);

      break;

    case "GameOver":
      afficheGameOver();
      break;

    case "MenuAccueuil":
      break;

    case "AfficheHighScores":
      break;
  }

  // 5) On rappelle la boucle 60 fois par seconde
  requestAnimationFrame(mainloop);
}


// Fonction de détection de collisions avec les obstacles
function testRectObstacle(monstre) {
  tableauDesObstacles.forEach(function (o, index) {
    if (rectsOverlap(monstre.x, monstre.y, monstre.largeur, monstre.hauteur, o.x, o.y, o.largeur, o.hauteur)) {
      // Game over, si le monstre touche un obstacle, il a perdu
      etatJeu = "GameOver";
    }
  });
}

