import ObjetGraphique from './ObjetGraphique.js';

class CercleAnime extends ObjetGraphique {
  constructor(x, y, couleur, rayon, vitesseX, vitesseY) {
    super(x, y, couleur, rayon * 2, rayon * 2);
    this.rayon = rayon;
    this.vx = vitesseX;
    this.vy = vitesseY;
  }

  draw(ctx) {
    super.draw(ctx);
    ctx.beginPath();
    ctx.arc(this.x + this.rayon, this.y + this.rayon, this.rayon, 0, 2 * Math.PI);
    ctx.fillStyle = this.couleur;
    ctx.fill("red");
    ctx.closePath();

  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

export default CercleAnime;
