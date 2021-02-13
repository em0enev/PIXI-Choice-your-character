import Fire from '../Fire';
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
    this._fire = null;

    this._setFire();
    this.ignite();
  }
  ignite() {
    this._fire.ignite();
  }

  extinguish() {
    this.fire.extinguish();
  }

  _setFire() {
    this._fire = new Fire();
    this._fire.x = 95
    this._fire.y = 165
    this._fire.rotation = 4.7;
    this._fire.scale.x = 0.5;
    this._fire.scale.y = 0.5;
    this._inner.addChildAt(this._fire, 0)
  }
}