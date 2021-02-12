import Rocket from '../Rocket';

export default class Rocket3 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket3',
      acceleration: 20,
      handling: 55,
      speed: 90,
      name: 'rocket-3'
    });
    const fire = this._inner.getChildByName('fire');
    fire.x = 120
    fire.y = 100
    fire.rotation = 4;
    fire.scale.x = 0.5
    fire.scale.y = 0.5
  }
}