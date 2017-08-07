import colors from "./Colors";
import regEx from "./RegEx";
import * as Validator from "./Validator";
import * as Converter from "./Converter";

/**
 * Parse a valid CSS1, CSS2.1, CSS3 color name into a set of hex, rgb and hsl values
 * @param name — a string with specified color name
 * @throws TypeError — if type of value passed to function was not a string
 * @throws Error — if color name passed to function was invalid
 * @returns {{hex: string, rgb: {r: number, g:number, b:number}, hsl: {h: number, s:number, l:number}}}
 *
 * @example
 * var color = Parser.parseColorName("black"); // color => { hex: "#000", rgb: {r:0, g:0, b:0}, hsl: {h:0, s:0, l:0}}
 */
export function parseColorName(name){
    if (typeof name !== "string") throw new TypeError("Type of target name should be a String");
    if(!Validator.isColorName(name)) throw new Error("Invalid color name");
    return colors[name.toLowerCase()];
}

/**
 * Parse a valid hex color into a set of hex, rgb and hsl values
 * @param color - a string to be parsed
 * @throws TypeError — if type of value passed to function was not a string
 * @throws Error — if color name passed to function was not a valid hex color
 * @returns {{hex: string, rgb: {r: number, g:number, b:number}, hsl: {h: number, s:number, l:number}}}
 *
 * @example
 * var color = Parser.parseHex("#000"); // color => { hex: "#000", rgb: {r:0, g:0, b:0}, hsl: {h:0, s:0, l:0}}
 */
export function parseHex(color){
    if (typeof color !== "string") throw new TypeError("Type of target color should be a String");
    if(!Validator.isHex(color)) throw new Error("Invalid hex color (should be eg. #fff or #000000");
    let hex, rgb, hsl;

    hex = color.toLowerCase();
    rgb = Converter.hexToRgb(hex);
    hsl = Converter.hexToHsl(hex);

    return { hex, rgb, hsl };
}

/**
 * Parse a valid css rgb color into a set of hex, rgb and hsl values
 * @param color - a string to be parsed
 * @throws TypeError — if type of value passed to function was not a string
 * @throws Error — if color name passed to function was not a valid css rgb color
 * @returns {{hex: string, rgb: {r: number, g:number, b:number}, hsl: {h: number, s:number, l:number}}}
 *
 * @example
 * var color = Parser.parseRgb("rgb(128,128,128"); // color => { hex: "#808080", rgb: {r:128, g:128, b:128}, hsl: {h:0, s:0, l:0.5}}
 */
export function parseRgb(color){
  if (typeof color !== "string") throw new TypeError("Type of target color should be a String");
  let colorChunks, hex, rgb, hsl;

  // Try to split initial string to r, g, b chunks
  colorChunks = color.match(regEx.RGB_ONLY);

  // Throw an error if chunks was not created
  if(!colorChunks) throw new Error("Invalid css rgb color (should be eg. rgb(0,0,0)");

  // Or build colorInfo
  rgb = { r: +colorChunks[2], g: +colorChunks[3], b: +colorChunks[4] };
  hex = Converter.rgbToHex(rgb);
  hsl = Converter.rgbToHsl(rgb);

  return { hex, rgb, hsl };
}

/**
 * Parse a valid css hsl color into a set of hex, rgb and hsl values
 * @param color - a string to be parsed
 * @throws TypeError — if type of value passed to function was not a string
 * @throws Error — if color name passed to function was not a valid css hsl color
 * @returns {{hex: string, rgb: {r: number, g:number, b:number}, hsl: {h: number, s:number, l:number}}}
 *
 * @example
 * var color = Parser.parseHsl("hsl(240,100%,50%"); // color => { hex: "#00f", rgb: {r:0, g:0, b:255}, hsl: {h:240, s:1, l:0.5}}
 */
export function parseHsl(color){
  if (typeof color !== "string") throw new TypeError("Type of target color should be a String");
  let colorChunks, hex, rgb, hsl;

  // Try to split initial string to h, s, l chunks
  colorChunks = color.match(regEx.HSL_ONLY);

  // Throw an error if chunks was not created
  if(!colorChunks) throw new Error("Invalid css hsl color (should be eg. hsl(240, 100%, 50%)");

  // Or build colorInfo
  hsl = { h: +colorChunks[1], s: parseFloat(colorChunks[2]) / 100, l: parseFloat(colorChunks[3]) / 100 };
  rgb = Converter.hslToRgb(hsl);
  hex = Converter.rgbToHex(rgb);

  return { hex, rgb, hsl };
}

/**
 * Parse a valid css rgba color into a set of hex, rgb and hsl values
 * @param color - a string to be parsed
 * @throws TypeError — if type of value passed to function was not a string
 * @throws Error — if color name passed to function was not a valid css rgba color
 * @returns {{hex: string, rgb: {r: number, g:number, b:number, a:number}, hsl: {h: number, s:number, l:number, a:number}}}
 *
 * @example
 * var color = Parser.parseRgba("rgba(255,0,0,.5)"); // color => { hex: "#f00", rgb: {r:255, g:0, b:0, a: 0.5}, hsl: {h:0, s:1, l: 0.5, a: 0.5} }
 */
export function parseRgba(color){
  if (typeof color !== "string") throw new TypeError("Type of target color should be a String");
  let colorChunks, hex, rgb, hsl;

  // Try to split initial string to h, s, l chunks
  colorChunks = color.match(regEx.RGBA_ONLY);

  // Throw an error if chunks was not created
  if(!colorChunks) throw new Error("Invalid css rgba color (should be eg. rgba(255, 0, 0, .5)");

  // Or build colorInfo
  rgb = { r: +colorChunks[2], g: +colorChunks[3], b: +colorChunks[4], a: +colorChunks[8] };
  hsl = Converter.rgbToHsl(rgb);
  hex = Converter.rgbToHex(rgb);

  return { hex, rgb, hsl };
}

/**
 * Parse a valid css hsla color into a set of hex, rgb and hsl values
 * @param color - a string to be parsed
 * @throws TypeError — if type of value passed to function was not a string
 * @throws Error — if color name passed to function was not a valid css hsla color
 * @returns {{hex: string, rgb: {r: number, g:number, b:number, a:number}, hsl: {h: number, s:number, l:number, a:number}}}
 *
 * @example
 * var color = Parser.parseRgba("hsla(0,255,0,.5)"); // color => { hex: "#0f0", rgb: {r:0, g:255, b:0, a: 0.5}, hsl: {h:120, s:1, l: 0.5, a: 0.5} }
 */
export function parseHsla(color){
  if (typeof color !== "string") throw new TypeError("Type of target color should be a String");
  let colorChunks, hex, rgb, hsl;

  // Try to split initial string to h, s, l chunks
  colorChunks = color.match(regEx.HSLA_ONLY);

  // Throw an error if chunks was not created
  if(!colorChunks) throw new Error("Invalid css hsla color (should be eg. hsla(120, 100%, 50%, .5)");

  // Or build colorInfo
  hsl = { h: +colorChunks[1], s: parseFloat(colorChunks[2]) / 100, l: parseFloat(colorChunks[3]) / 100, a: +colorChunks[4] };
  rgb = Converter.hslToRgb(hsl);
  hex = Converter.rgbToHex(rgb);

  return { hex, rgb, hsl };
}

/**
 * Parse a valid css color into a set of hex, rgb and hsl values
 * @param color - a string to be parsed
 * @throws TypeError — if type of value passed to function was not a string
 * @throws Error — if color name passed to function was not a valid css color
 * @returns {{hex: string, rgb: {r: number, g:number, b:number, a:number}, hsl: {h: number, s:number, l:number, a:number}}}
 *
 * @example
 * var color = Parser.parseColor("hsla(0,255,0,.5)"); // color => { hex: "#0f0", rgb: {r:0, g:255, b:0, a: 0.5}, hsl: {h:120, s:1, l: 0.5, a: 0.5} }
 * var anotherColor = Parser.parseColor("rgba(255,0,0,.5)"); // color => { hex: "#f00", rgb: {r:255, g:0, b:0, a: 0.5}, hsl: {h:0, s:1, l: 0.5, a: 0.5} }
 * var oneMoreColor = Parser.parseColor("black"); // color => { hex: "#000", rgb: {r:0, g:0, b:0}, hsl: {h:0, s:0, l:0}}
 */
export function parseColor(color){
  if (typeof color !== "string") throw new TypeError("Type of target color should be a String");

  // Try to parse one of the available css color formats
  if(Validator.isColorName(color)) return parseColorName(color);
  if(Validator.isHex(color)) return parseHex(color);
  if(Validator.isRgb(color)) return parseRgb(color);
  if(Validator.isRgba(color)) return parseRgba(color);
  if(Validator.isHsl(color)) return parseHsl(color);
  if(Validator.isHsla(color)) return parseHsla(color);

  // Otherwise, throw an Error
  throw new Error("Invalid css color");
}