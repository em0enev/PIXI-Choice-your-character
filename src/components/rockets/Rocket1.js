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
    this._fire.x = 300
    this._fire.y = 270
    this._fire.rotation = 10;
    this._inner.addChildAt(this._fire, 0)
  }
}