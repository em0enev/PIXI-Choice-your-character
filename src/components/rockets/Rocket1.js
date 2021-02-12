import Fire from '../Fire';
import Rocket from '../Rocket';

export default class Rocket1 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket1',
      acceleration: 30,
      handling: 5,
      speed: 70,
      name: 'rocket-1'
    });

    const fire = this._inner.getChildByName('fire');
    fire.x = 300
    fire.y = 270
    fire.rotation = 10;
  }
}