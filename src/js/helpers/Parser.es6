import colors from "./Colors";
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
    if (typeof name !== "string") throw new TypeError("Type of target colorName should be a String");
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
    if (typeof color !== "string") throw new TypeError("Type of target colorName should be a String");
    if(!Validator.isHex(color)) throw new Error("Invalid hex color (should be eg. #fff or #000000");
    let hex, rgb, hsl;

    hex = color.toLowerCase();
    rgb = Converter.hexToRgb(hex);
    hsl = Converter.hexToHsl(hex);

    return { hex, rgb, hsl };
}
