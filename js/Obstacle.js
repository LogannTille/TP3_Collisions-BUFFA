import ObjetGraphique from './ObjetGraphique.js';

class Obstacle extends ObjetGraphique {
  constructor(x, y, couleur, largeur, hauteur) {
    super(x, y, couleur, largeur, hauteur);
  }
}

export default Obstacle;
