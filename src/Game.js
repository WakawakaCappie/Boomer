// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const keypress = require('keypress');



// Основной класс игры.
// Тут будут все настройки, проверки, запуск.


class Game {
  #keyboard = {
    a: (hero, boomer) => {hero.moveLeft()},// boomer.moveLeft()},
    d: (hero, boomer) => {hero.moveRight()},// boomer.moveRight()},
    w: (hero ) => {hero.moveUp()},
    s: (hero) => {hero.moveDown()},
    r: (hero, position) => {hero.attack()},
      // hero.boomerang.isActive = true;
      //  position.boomerang.position = this.hero.position + 1 
    
    // t: () => console.log('t'),
    // y: () => console.log('y'),
  };
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(new Boomerang()); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.track = [];
    this.regenerateTrack();
    this.view = new View();
    this.score = 0;
    this.renderSpeed = 500;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array());
    this.track1 = (new Array(30)).fill('🌲');
    this.track7 = (new Array(30)).fill('🌲');
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[0] = '🏡'
    this.track[this.trackLength] = '⛩'
    
  }

  check() {
    if (this.hero.position === this.enemy.position || this.hero.position === this.enemy.position +1 ) {
      this.hero.die();
    }
    else if (this.hero.boomerang.position === this.enemy.position && this.hero.boomerang.isActive === true || this.hero.boomerang.position +1 === this.enemy.position && this.hero.boomerang.isActive === true){
      this.hero.boomerang.isActive = false;
      this.enemy.die();
      // this.renderSpeed += Math.floor(Math.random()*100);
      this.score += 1;
      this.enemy = new Enemy();
      this.renderSpeed -= 100
      this.hero.boomerang.afterKill = true;
    }
    else if ( this.hero.boomerang.position <= this.hero.position){
      this.hero.boomerang.afterKill = false;
      this.hero.boomerCount +=1
      this.hero.boomerang.position = undefined;
    }
    else if (this.enemy.position < 0){
      this.enemy = new Enemy();
      this.renderSpeed += Math.floor(Math.random()*100);
    }
    else if (this.hero.boomerang.position === this.trackLength){
      this.hero.boomerang.isActive = false;
      this.hero.boomerang.afterKill = true;
    }


  }

  play() {
    this.runInteractiveConsole();
    setInterval(() => {
      // Let's play!
      this.check();
      this.enemy.moveLeft();
      this.hero.boomerang.fly();
      // console.log(this.hero.position);
      // console.log(this.enemy.position);
      // console.log(this.enemy);
      this.regenerateTrack();
      this.view.render(this.track,this.track1,this.track7,this.score,this.hero.boomerCount,this.enemy.enemySpeed);
    }, this.renderSpeed);

  }

  runInteractiveConsole() {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in this.#keyboard) {
          this.#keyboard[key.name](this.hero)//)//this.hero.boomerang);
        }
        // Прерывание программы.
        if (key.ctrl && key.name === 'c') {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }

}

module.exports = Game;
