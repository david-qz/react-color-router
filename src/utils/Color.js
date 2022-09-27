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

  // https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
  get luminance() {
    const r = this.r / 255;
    const g = this.r / 255;
    const b = this.r / 255;

    const rBold = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const gBold = g <= 0.03928 ? g / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const bBold = b <= 0.03928 ? b / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);

    return 0.2126 * rBold + 0.7152 * gBold + 0.0722 * bBold;
  }
}
