
class Anim {
  constructor() {
    this.div = document.createElement('div');
    this.div.style.width = '100%';
    this.div.style.height = '100%';
    this.div.style.background = "linear-gradient(#e66465, #9198e5)";

    document.body.appendChild(this.div);

    this.a = 0;
    this.skip = 0;

    this.start();
  }
  
  start() {
    var animIndex = 0;
    var anims = [ this.anim1.bind(this), this.anim2.bind(this), this.anim3.bind(this), this.anim4.bind(this), this.anim5.bind(this), this.anim6.bind(this) ];
    this.frame = anims[animIndex];
    this.frame();

    setInterval(()  => {
      animIndex = (animIndex + 1) % anims.length;
      console.log(animIndex);
      this.frame = anims[animIndex];
    }, 3000);

  } 

  /*
  buildAnimTypeA(opts={orientation: 0}) {
    return function() {
      this.skip = (this.skip + 1) % 4;
      if(!this.skip) {
        this.a = (this.a+1)%360;
        const b = (this.a + 180) % 360;
        const alpha = this.a*Math.PI/180;
        const s = 0.8; //  + Math.sin(alpha) / 4.0;
        const l = 0.5; // 0.5 + Math.cos(alpha) / 2.0;

        const c1 = this.hslToRGB({ h: this.a, s: s, l: l});
        const c2 = this.hslToRGB({ h: b, s: s, l: l});
        const grad = `linear-gradient(${this.a}deg, ${c1.h}, ${c2.h})`;

        this.div.style.background = grad;

      }
      requestAnimationFrame(this.frame);
    }
  }
  */

  anim1() {
    this.skip = (this.skip + 1) % 4;
    if(!this.skip) {
      this.a = (this.a+1)%360;
      const b = (this.a + 180) % 360;
      const alpha = this.a*Math.PI/180;
      const s = 0.8; //  + Math.sin(alpha) / 4.0;
      const l = 0.5; // 0.5 + Math.cos(alpha) / 2.0;

      const c1 = this.hslToRGB({ h: this.a, s: s, l: l});
      const c2 = this.hslToRGB({ h: b, s: s, l: l});
      const grad = `linear-gradient(${this.a}deg, ${c1.h}, ${c2.h})`;

      this.div.style.background = grad;

    }
    requestAnimationFrame(this.frame);
  }

  anim3() {
    this.skip = (this.skip + 1) % 4;
    if(!this.skip) {
      this.a = (this.a+1)%360;
      const b = (this.a + 180) % 360;
      const alpha = this.a*Math.PI/180;
      const s = 0.8; //  + Math.sin(alpha) / 4.0;
      const l = 0.5; // 0.5 + Math.cos(alpha) / 2.0;

      const c1 = this.hslToRGB({ h: this.a, s: s, l: l});
      const c2 = this.hslToRGB({ h: b, s: s, l: l});
      const grad = `linear-gradient(0deg, ${c1.h}, ${c2.h})`;

      this.div.style.background = grad;

    }
    requestAnimationFrame(this.frame);
  }

  anim2() {
    this.skip = (this.skip + 1) % 2;
    if(!this.skip) {
      this.a = (this.a+1)%360;
      var x = parseInt(this.a*4*100/360);
      const b = (this.a + 90) % 360;
      const alpha = this.a*Math.PI/180;
      const s = 0.9; //  + Math.sin(alpha) / 4.0;
      const l = 0.5; // 0.5 + Math.cos(alpha) / 2.0;

      const c1 = this.hslToRGB({ h: this.a, s: s, l: l});
      const c2 = this.hslToRGB({ h: b, s: s, l: l});
      // const grad = `linear-gradient(0deg, ${c1.h}, ${c2.h})`;
      // const grad = `repeating-linear-gradient(${a}deg, ${c1.h}, ${c2.h}, ${c1.h} 20%)`;
      const grad = `repeating-linear-gradient(${90}deg, #000 ${x}%, ${c2.h} ${x+10}%, #000 ${x+20}%)`;

      this.div.style.background = grad;
    }

    requestAnimationFrame(this.frame);
  }

  anim4() {
    this.skip = (this.skip + 1) % 2;
    if(!this.skip) {
      this.a = (this.a+1)%360;
      var x = parseInt(this.a*4*100/360);
      const b = (this.a + 90) % 360;
      const alpha = this.a*Math.PI/180;
      const s = 0.9; //  + Math.sin(alpha) / 4.0;
      const l = 0.5; // 0.5 + Math.cos(alpha) / 2.0;

      const c1 = this.hslToRGB({ h: this.a, s: s, l: l});
      const c2 = this.hslToRGB({ h: b, s: s, l: l});
      // const grad = `linear-gradient(0deg, ${c1.h}, ${c2.h})`;
      // const grad = `repeating-linear-gradient(${a}deg, ${c1.h}, ${c2.h}, ${c1.h} 20%)`;
      const grad = `repeating-linear-gradient(0deg, #000 ${x}%, ${c2.h} ${x+10}%, #000 ${x+20}%)`;

      this.div.style.background = grad;
    }

    requestAnimationFrame(this.frame);
  }

  anim5() {
    this.skip = (this.skip + 1) % 4;
    if(!this.skip) {
      this.a = (this.a+1)%360;
      const b = (this.a + 180) % 360;
      const alpha = this.a*Math.PI/180;
      const s = 0.8; //  + Math.sin(alpha) / 4.0;
      const l = 0.5; // 0.5 + Math.cos(alpha) / 2.0;

      const c1 = this.hslToRGB({ h: this.a, s: s, l: l});
      const c2 = this.hslToRGB({ h: b, s: s, l: l});
      const grad = `linear-gradient(90deg, ${c1.h}, ${c2.h})`;

      this.div.style.background = grad;

    }
    requestAnimationFrame(this.frame);
  }


  anim6() {
    this.skip = (this.skip + 1) % 2;
    if(!this.skip) {
      this.a = (this.a+1)%360;
      var x = parseInt(this.a*4*100/360);
      const b = (this.a + 90) % 360;
      const alpha = this.a*Math.PI/180;
      const s = 0.9; //  + Math.sin(alpha) / 4.0;
      const l = 0.5; // 0.5 + Math.cos(alpha) / 2.0;

      const c1 = this.hslToRGB({ h: this.a, s: s, l: l});
      const c2 = this.hslToRGB({ h: b, s: s, l: l});
      // const grad = `linear-gradient(0deg, ${c1.h}, ${c2.h})`;
      // const grad = `repeating-linear-gradient(${a}deg, ${c1.h}, ${c2.h}, ${c1.h} 20%)`;
      const grad = `repeating-linear-gradient(${45}deg, #000 ${x}%, ${c2.h} ${x+10}%, #000 ${x+20}%)`;

      this.div.style.background = grad;
    }

    requestAnimationFrame(this.frame);
  }

  hslToRGB(hsl) {

    function normalize_rgb_value(color, m) {
      color = Math.floor((color + m) * 255);
      if (color < 0) { color = 0; }
      return color;
    }

    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    var h = hsl.h,
      s = hsl.s,
      l = hsl.l,
      c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r, g, b;

    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }

    r = normalize_rgb_value(r, m);
    g = normalize_rgb_value(g, m);
    b = normalize_rgb_value(b, m);

    // const hex = rgbToHex(r, g, b);

    // console.log(rgbToHex(r,g,b));
    // return rgbToHex(r, g, b);
    var rh = `00${Number(r).toString(16)}`.slice(-2);
    var rg = `00${Number(g).toString(16)}`.slice(-2);
    var rb = `00${Number(b).toString(16)}`.slice(-2);
    var hex = `#${rh}${rg}${rb}`;
    // return hex; 
    return { r: r, g: g, b: b, h: hex };
  }


}


window.onload = function() {
  const anim = new Anim();
}

