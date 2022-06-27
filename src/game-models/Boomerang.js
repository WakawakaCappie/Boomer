// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
    this.isActive = false;
    this.afterKill = false;
    this.wayback = null;
  }

  fly() {
    if(this.isActive ){
      this.moveRight();
      this.wayback = 8
    }
    if(this.afterKill && this.wayback >0){
      this.moveLeft();
      this.wayback -= 1
    } else {
      this.afterKill = false
    }
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
