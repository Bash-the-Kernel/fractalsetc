import Point from './Point.js';
import LinkedList from './LinkedList.js';
import AbstractFractal from './AbstractFractal.js';

class BoxFractal extends AbstractFractal {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, recursionDepth, origin);
    this.MAX_DEPTH = 7;
  }
  
  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    if (r >= this.recursionDepth) {
      let p = new Point(x, y, w, h, null, this.flipCoin());
      ls.add(p);
      return ls;
    }

    ls = this.set(x, y, w / 3, h / 3, ls, ++r);
    ls = this.set(x + 2 * w / 3, y, w / 3, h / 3, ls, r);
    ls = this.set(x, y + 2 * h / 3, w / 3, h / 3, ls, r);
    ls = this.set(x + 2 * w / 3, y + 2 * h / 3, w / 3, h / 3, ls, r);
    return this.set(x + w / 3, y + h / 3, w / 3, h / 3, ls, r);
  }

  getTitle() {
    return 'Box Fractal';
  }

  flipCoin() {
    return Math.random() >= 0.33;
  }
}

export default BoxFractal;
