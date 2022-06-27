// Наш герой.
const Boomerang = require('./Boomerang');
const {saveName} = require('../../write_db');
const prompt = require("prompt-sync")();
// var player = require('play-sound')(opts = {})

class Hero {
  constructor(some) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 1;
    this.gamerName = prompt('Введите имя игрока: ',);
    this.gamerScore = 0;
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
    if (this.heroTrackPosition > 1) { this.heroTrackPosition -= 1; }
  }

  moveDown() {
    // Идём вправо.
    if (this.heroTrackPosition < 7) { this.heroTrackPosition += 1; }
  }

  attack() {
    if (this.boomerCount > 0) {
      this.boomerCount -= 1;
      this.boomerang.isActive = true;
      this.boomerang.position = this.position;
      this.boomerang.fly();
    }
  }

  die() {
    this.skin = '💀';
    setTimeout( async () => {
      await saveName( this.gamerName, this.gamerScore); //запись имени игрока и результата игры в бд
      console.log('YOU ARE DIED!💀');
      process.exit();
    }, 1000)
  }
}

module.exports = Hero;
