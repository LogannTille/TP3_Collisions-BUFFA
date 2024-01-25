import Obstacle from './Obstacle.js';

class ObstacleAnime extends Obstacle {
  constructor(x, y, couleur, largeur, hauteur, vitesseX, vitesseY) {
    super(x, y, couleur, largeur, hauteur);
    this.vx = vitesseX;
    this.vy = vitesseY;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

export default ObstacleAnime;
