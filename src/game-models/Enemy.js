const { game } = require('../Game');
// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = (40+ Math.floor(Math.random()*10));  
    this.espeed = 1
    
  }

  generateSkin() {
    const skins = ['👾','👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃', '🛸']; // '💀', 
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  
  moveLeft() {
    // Идём влево.
    this.position -= this.espeed;
  }

  die() {
    this.skin = '🔥'
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
