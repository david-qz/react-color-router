export default class Color {
  constructor(r, g, b, name = 'unknown') {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  toRoute() {
    return `/rgb/${this.r}/${this.g}/${this.b}`;
  }

  toCss() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  get lightness() {
    const cMax = Math.max(this.r, this.g, this.b) / 255;
    const cMin = Math.min(this.r, this.g, this.b) / 255;
    return cMax + cMin / 2;
  }
}
