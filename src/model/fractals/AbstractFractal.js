class AbstractFractal {
  constructor(width, height, recursionDepth, origin) {
    if (this.constructor === AbstractFractal) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.MAX_DEPTH = 8;
    this.points = null;
    this.width = width;
    this.height = height;
    this.origin = origin;
    this.depthToPoints = new Array(10+1);
    this.recursionDepth = -1;
    this.setRecursionDepth(recursionDepth);
  }

  setRecursionDepth(depth) {
    if(depth > this.MAX_DEPTH) {
      depth = this.MAX_DEPTH;
    }
    this.recursionDepth = depth;
    this.setPoints();
  }

  setDimensions(w, h) {
    this.width = w;
    this.height = h;
    this.wipeOutDepthToPointArray();
    this.setPoints();
  }
  
  setPoints() {
    if (this.pointsNeedBeSet()) {
      // console.log('I set '+ this.getTitle() + ' for ' + this.getRecursionDepth());
      this.depthToPoints[this.getRecursionDepth()] = this.set(
        this.origin[0], this.origin[1],
        this.width, this.height);
    }
  }

  wipeOutDepthToPointArray() {
    this.depthToPoints = new Array(10+1);
  }
  
  set(/* x, y, w, h, ls=new LinkedList(), r = 0 */) {
    throw new Error("Method 'set()' must be implemented.");
  }

  pointsNeedBeSet() {
    return !this.depthToPoints[this.getRecursionDepth()];
  }
  
  getTitle() {
    throw new Error("Method 'getTitle()' must be implemented.");
  }
  
  getReactState() {
    return {
      title: this.getTitle(),
      width: this.getWidth(),
      height: this.getHeight(),
      points: this.getPoints(),
      recursionDepth: this.getRecursionDepth(),
      maxRecursionDepth: this.MAX_DEPTH,
    };
  }
  
  getPoints() {
    return this.depthToPoints[this.getRecursionDepth()];
  }

  getWidth() {
    return this.width;
  }
  
  getHeight() {
    return this.height;
  }

  getRecursionDepth() {
    return this.recursionDepth;
  }
}

export default AbstractFractal;