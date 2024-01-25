import ObjetGraphique from './ObjetGraphique.js';

class Monstre extends ObjetGraphique {
  constructor(x, y, couleur, largeur, hauteur, vitesse) {
    super(x, y, couleur, largeur, hauteur);
    this.vx = vitesse;
    this.vy = vitesse;
  }


  draw(ctx) {
    // Sauvegarde le contexte avant d'apporter des modifications
    ctx.save();

    // Translation et mise à l'échelle
    ctx.translate(this.x, this.y);
    ctx.scale(this.scale, this.scale);

    // Dessin du monstre
    ctx.fillStyle = this.couleur;
    ctx.fillRect(0, 0, this.largeur, this.hauteur);

    // Dessin des yeux
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 10, 10);
    ctx.fillRect(30, 10, 10, 10);

    // Dessin de la pupille
    ctx.fillStyle = "black";
    ctx.fillRect(15, 15, 5, 5);
    ctx.fillRect(35, 15, 5, 5);

    // Dessin de la bouche
    ctx.fillStyle = "red";
    ctx.fillRect(10, 30, 30, 10);

    // Dessin des dents
    ctx.fillStyle = "white";
    ctx.fillRect(10, 30, 5, 5);
    ctx.fillRect(15, 30, 5, 5);
    ctx.fillRect(20, 30, 5, 5);
    ctx.fillRect(25, 30, 5, 5);
    ctx.fillRect(30, 30, 5, 5);
    ctx.fillRect(35, 30, 5, 5);
    ctx.fillRect(40, 30, 5, 5);
    ctx.fillRect(45, 30, 5, 5);

    // Restaure le contexte après le dessin
    ctx.restore();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

export default Monstre;
