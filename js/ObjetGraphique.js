class ObjetGraphique {
  constructor(x, y, couleur, largeur, hauteur) {
    this.x = x;
    this.y = y;
    this.couleur = couleur;
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  draw(ctx) {
    // Méthode pour dessiner l'objet sur le contexte du canvas (ctx)
    ctx.fillStyle = this.couleur;
    ctx.fillRect(this.x, this.y, this.largeur, this.hauteur);
  }

  move(dx, dy) {
    // Méthode pour déplacer l'objet par un déplacement (dx, dy)
    this.x += dx;
    this.y += dy;
  }

  // Vous pouvez ajouter d'autres méthodes ici en fonction des besoins
}

export default ObjetGraphique;
