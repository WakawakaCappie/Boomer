// Наш герой.
const boomerang = require('./Boomerang')
const enemy = require('./Enemy')
// var player = require('play-sound')(opts = {})

class Hero {
  constructor(some) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 1;
    this.boomerang = some;
    this.boomerCount = 0;
    // this.lives = 3;
    // this.heroTrackPosition = 4;

  }

  
  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  moveUP() {
    // Идём вправо.
    if(this.heroTrackPosition>1){this.heroTrackPosition -= 1;}
  }

  moveDown() {
    // Идём вправо.
    if(this.heroTrackPosition<7){this.heroTrackPosition += 1};
  }
  attack() {
    if(this.boomerCount > 0){
      this.boomerCount -= 1
      this.boomerang.isActive = true
      this.boomerang.position = this.position
      this.boomerang.fly()
    }

  }

  die() {
    this.skin = '💀';
    // this.enemy.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
