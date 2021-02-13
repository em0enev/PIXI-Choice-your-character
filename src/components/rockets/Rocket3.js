import Fire from '../Fire';
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
    this._fire = null;

    this._setFire();
    this.ignite();
    // const fire = this._inner.getChildByName('fire');
    // fire.x = 120
    // fire.y = 100
    // fire.rotation = 4;
    // fire.scale.x = 0.5
    // fire.scale.y = 0.5
  }
  ignite() {
    this._fire.ignite();
  }

  extinguish() {
    this.fire.extinguish();
  }

  _setFire() {
    this._fire = new Fire();
    this._fire.x = 120
    this._fire.y = 100
    this._fire.rotation = 4;
    this._fire.scale.x = 0.5;
    this._fire.scale.y = 0.5;
    this._inner.addChildAt(this._fire, 0)
  }
}