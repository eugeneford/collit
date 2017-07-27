import * as Validator from "./Validator";
/**
 * Converts an HEX color value to RGB.
 *
 * @param  {string} hex    The color in hex format. For example: "#333".
 * @return {Object}        The RGB color object..
 * @throws {Error}         Will throw an error if the argument is not a string
 * @example
 * rgb = Converter.hexToRgb("#333"); // rgb => {r:51, g:51, b: 51};
 */
export function hexToRgb(hex) {
    if (typeof hex !== 'string') throw new TypeError(`Type of ${hex} is not a String!`);
    if (!Validator.isHex(hex)) throw new Error("Invalid hex color");

    let color = hex;
    // Remove "#" from string
    color = color.slice(1); 

    // convert short hex form to full
    if (color.length === 3 ) color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(4, 6), 16);
    const b = parseInt(color.substring(2, 4), 16);
    return {r, g, b};
}

/**
 * Converts an HEX color value to HSL.
 * Converting hex to hsl is done using a additional converting to RGB. HEX -> RGB -> HSL.
 *
 * @param  {string} hex    The color in hex format.
 * @return {Object}        The HSL color object.
 * @example
 * hsl = Converter.hexToHsl("#333"); // hsl => {h: 0, s: 0, l: 0.2};
 */
export function hexToHsl(hex) {
    return rgbToHsl(hexToRgb(hex));
}


/**
 * Converts an RGB color value to HEX.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h in the set [0, 360], s and l in the set [0, 1].
 *
 * @param  {Object} rgb     The RGB color object. For example: {r: 51, g: 51, b: 51}.
 * @return {string}         The hex color.
 * @example
 * hex = Converter.rgbToHex({r: 51, g: 51, b: 51}); // hex => "#333";
 */
export function rgbToHex(rgb) {
    if (typeof rgb !== 'object') throw new TypeError(`Type of ${rgb} is not an Object!`);
    if (rgb.r == null || rgb.g == null || rgb.b == null) throw  new Error("Invalid RGB color");

    let hex = ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);

    // checking for hex short form
    if (hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5]) hex = hex[0] + hex[2] + hex[4];
    return "#" + hex;
}


/**
 * Converts an RGB color value to HSL.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h in the set [0, 360], s and l in the set [0, 1].
 *
 * @param  {Object} rgb     The RGB color object. For example: {r: 51, g: 51, b: 51}.
 * @throws {Error}          Will throw an error if the argument is not an Object
 * @return {Object}         The HSL color object.
 * @example
 * hsl = Converter.rgbToHsl({r: 11, g: 11, b: 11}); // hsl => {h: 0, s: 0, l: 0.04};
 */
export function rgbToHsl(rgb) {
    if (typeof rgb !== 'object') throw new TypeError(`Type of ${rgb} is not an Object!`);
    if (rgb.r == null || rgb.g == null || rgb.b == null) throw  new Error("Invalid RGB color");

    let r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100) / 100;
    l = Math.round(l * 100) / 100;

    return {h, s, l};
}


/**
 * Converts an HSL color value to Hex.
 * Assumes h is contained in the set [0, 360], s and l are contained in the set [0, 1]
 * Converting hsl to hex is done using a additional converting to RGB. HSL -> RGB -> HEX.
 *
 * @param  {Object} hsl    The HSL color object. For example: {h: 120, s: 0.5, l: 0.5}.
 * @return {string}        The color in hex format.
 * @example
 * hex = Converter.hslToHex({h: 0, s: 0.5, l: 0.3}); // hex => "#732626;
 */
export function hslToHex(hsl) {
    return rgbToHex(hslToRgb(hsl));
}


/**
 * Converts an HSL color value to RGB.
 * Assumes h is contained in the set [0, 360], s and l are contained in the set [0, 1] and
 * returns r,g and b in the set [0, 255].
 *
 * @param  {Object} hsl    The HSL color object. For example: {h: 120, s: 0.5, l: 0.5}.
 * @throws {Error}         Will throw an error if the argument is not an Object
 * @return {Object}        The RGB color object.
 * @example
 * rgb = Converter.hslToRgb({h: 300, s: 0.5, l: 0.5}); // rgb => {r: 191, g: 64, b: 191};
 */
export function hslToRgb(hsl) {
    if (typeof hsl !== 'object') throw new TypeError(`Type of ${hsl} is not an Object!`);

    if (hsl.h == null || hsl.s == null || hsl.l == null) throw  new Error("Invalid HSL color");
    let r, g, b, h = hsl.h / 360, s = hsl.s, l = hsl.l;

    if (s === 0) {
        r = g = b = l;
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    return {r, g, b};
}