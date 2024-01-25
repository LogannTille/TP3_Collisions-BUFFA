import ObjetGraphique from './ObjetGraphique.js';

class Sortie extends ObjetGraphique {
  constructor(x, y, rayon) {
    super(x, y, 'yellow', rayon * 2, rayon * 2);
    this.rayon = rayon;
  }

  draw(ctx) {
    super.draw(ctx);
    ctx.beginPath();
    ctx.arc(this.x + this.rayon, this.y + this.rayon, this.rayon, 0, 2 * Math.PI);
    ctx.fillStyle = this.couleur;
    ctx.fill("yellow");
    ctx.closePath();
  }
}

export default Sortie;
