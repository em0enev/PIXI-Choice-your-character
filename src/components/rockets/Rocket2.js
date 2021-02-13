import Rocket from '../Rocket';

export default class Rocket2 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket2',
      acceleration: 40,
      handling: 25,
      speed: 30,
      name: 'rocket-2'
    });
    // const fire = this._inner.getChildByName('fire');
    // fire.x = 300
    // fire.y = 270
    // fire.rotation = 10;
  }
}