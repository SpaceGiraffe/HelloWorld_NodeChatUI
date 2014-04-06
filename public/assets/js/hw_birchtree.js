"use strict";

window.HelloWorld.BirchTree = (function() {

  function BirchTree(instance, x, y, scale, fpf) {
    this.instance = instance;
    this.source   = 'birch-tree.png';
    this.image    = null;

    // image properties
    this.x        = x;
    this.y        = y;
    this.width    = 3840;
    this.height   = 708;

    // bounding box properties
    this.sx       = 0;
    this.sy       = 0;
    this.sWidth   = 384;
    this.sHeight  = 708;

    // image scale
    this.scale    = (function(scale) {
      return scale ? scale : 1;
    })(scale);

    // frames per frame:
    // the number of Engine frames that must pass before this Sprite
    // may advance one frame. The higher the number, the slower the animation
    // 1 is 1:1 speed with the Engine. 30 is 1 frame per second.
    this.fpf      = (function(fpf){
      return fpf ? fpf : 1;
    })(fpf);

    // the current frame
    this.frame    = 1;
    this.frames   = 9;

    this.init();
  }

  // extend Sprite class
  BirchTree.prototype = Object.create(Sprite.prototype);

  BirchTree.prototype.renderState = function() {
    if (this.instance.engine.frame % this.fpf == 0 && this.frame <= this.frames) {
      switch (this.instance.environment.condition) {
        case 'snow':
        this.sy = 0;
          this.frame++;
          break;
        case 'rain':
          //
          break;
        default:
          if (this.frame > 1) {
            this.frame --;
          }
      }
    }
    if (this.frame > this.frames) {
      this.frame = this.frames;
    }
  }

  BirchTree.prototype.update = function() {
    this.renderState();

    if (this.sx <= this.width - this.sWidth) {
      console.log(this.sx);
      this.sx = this.frame * this.sWidth - this.sWidth;
    }
  }

  BirchTree.prototype.draw = function() {
    this.instance.getContext().drawImage(
      this.image,
      this.sx,
      this.sy,
      this.sWidth,
      this.sHeight,
      this.x,
      this.y,
      this.sWidth * this.scale,
      this.height * this.scale
    );
  };

  return BirchTree;

})();

//var PineTree = window.HelloWorld.PineTree;
