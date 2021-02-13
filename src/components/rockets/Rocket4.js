import Rocket from '../Rocket';

export default class Rocket4 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket4',
      acceleration: 10,
      handling: 85,
      speed: 60,
      name: 'rocket-4'
    });
    // const fire = this._inner.getChildByName('fire');
    // fire.x = 95
    // fire.y = 165
    // fire.rotation = 4.7;
    // fire.scale.x = 0.5
    // fire.scale.y = 0.5
  }
}