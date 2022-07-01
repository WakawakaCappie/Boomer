// Сделаем отдельный класс для отображения игры в консоли.
const { game } = require('./Game');

class View {
  render(track,track1,track7,score,boom) {
    const yourTeamName = 'AKAI';

    // Тут всё рисуем.
    console.clear();
    console.log(track1.join(''));
    console.log(track.join(' '));
    console.log(track7.join(''));
    console.log()
    console.log('\n\n');
    console.log(`Your Score = ${score}. Бумерангов в наличии = ${boom}`)
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}


module.exports = View;
