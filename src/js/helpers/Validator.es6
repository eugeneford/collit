import colors from "./Colors";
import charCodes from "./CharCodes";
import regEx from "./RegEx";

/**
 * Check if target name is a valid CSS1, CSS2.1, CSS3 color name
 * @param name — color name to test
 * @throws TypeError — if name that was passed is not a valid color name
 * @returns {boolean}
 *
 * @example
 * var isColor = Validator.isColorName("black"); // true
 * var isNotColor = Validator.isColorName("avadakedavra"); // false
 */
export function isColorName(name){
    if(typeof name !== "string") throw new TypeError("Type of target name should be a String");
    return colors.hasOwnProperty(name.toLowerCase());
}

/**
 * Check if target string is a valid hex color
 * @param color — target hex string to test
 * @throws TypeError — if type of color that was passed is not a string
 * @returns {boolean}
 *
 * @example
 * var isHex = isHex("#333"); // true
 * var isNotHex = isHex("#rgb"); // false
 */
export function isHex(color){
    if(typeof color !== "string") throw new TypeError("Type of target name should be a String");
    // if color doesn't start with #
    if(color.charCodeAt(0) !== charCodes.HASH) return false;
    // if a possible color doesn't consist of 4 (#333) or 7 chars (#333333)
    if(color.length !== 4 && color.length !== 7) return false;

    let i, char, colorInLowerCase = color.toLowerCase();
    // Try to identify a non-valid hex color while looping trough other chars starting after #
    for (i = 1; i < colorInLowerCase.length; i++){
        char = colorInLowerCase.charCodeAt(i);
        // if char is not a valid hex number
        if ((char < charCodes.ZERO || char > charCodes.NINE) && (char < charCodes.A || char > charCodes.F)) return false;
    }

    // Otherwise, string is a hex color — return true
    return true;
}


/**
 * Check if target string is a valid css rgb color definition
 * @param color — target rgb string to test
 * @throws TypeError — if type of color that was passed is not a string
 * @returns {boolean}
 *
 * @example
 * var isRgb = Validator.isRgb("rgb( 0, 0, 0 )") // true
 * var isNotRgb = Validator.isRgb("hsl( 0, 0, 100% )") // false
 */
export function isRgb(color){
    if(typeof color !== "string") throw new TypeError("Type of target name should be a String");
    return regEx.RGB_ONLY.test(color);
}

/**
 * Check if target string is a valid css rgba color definition
 * @param color — target rgba string to test
 * @throws TypeError — if type of color that was passed is not a string
 * @returns {boolean}
 *
 * @example
 * var isRgba = Validator.isRgba("rgba(255,255,255,.5)") // true
 * var isNotRgba = Validator.isRgba("hsla(255,100%,100%,.5)") // false
 */
export function isRgba(color){
    if(typeof color !== "string") throw new TypeError("Type of target name should be a String");
    return regEx.RGBA_ONLY.test(color);
}

/**
 * Check if target string is a valid css HSL color definition
 * @param color — target HSL string to test
 * @throws TypeError — if type of color that was passed is not a string
 * @returns {boolean}
 *
 * @example
 * var isHsl = Validator.isHsl("hsl(0,0%,0%)") // true
 * var isNotHsl = Validator.isHsl("hsl( 0, 5, 100% )") // false
 */
export function isHsl(color){
    if(typeof color !== "string") throw new TypeError("Type of target name should be a String");
    return regEx.HSL_ONLY.test(color);
}

/**
 * Check if target string is a valid css HSLa color definition
 * @param color — target HSLa string to test
 * @throws TypeError — if type of color that was passed is not a string
 * @returns {boolean}
 *
 * @example
 * var isHsla = Validator.isHsla("hsla(0,0%,0%, .5)") // true
 * var isNotHsla = Validator.isHsla("hsl( 0, 5, 100% )") // false
 */
export function isHsla(color){
    if(typeof color !== "string") throw new TypeError("Type of target name should be a String");
    return regEx.HSLA_ONLY.test(color);
}

/**
 * Check if target string is a valid css color definition
 * @param color — target color string to test
 * @returns {boolean}
 *
 * @example
 * var isColor = Validator.isColor("hsla(0,0%,0%, .5)") // true
 * var isColorToo = Validator.isColor("black") // true
 * var isNotColor = Validator.isColor("color") // false
 */
export function isColor(color){
    return isColorName(color) || isHex(color) || isRgb(color) || isRgba(color) || isHsl(color) || isHsla(color);
}

/**
 * Check if target string is a valid css gradient definition
 * @param gradient — target gradient string to test
 * @returns {boolean}
 *
 * @example
 * var isHsla = Validator.isGradient("hsla(0,0%,0%, .5)") // true
 * var isNotHsla = Validator.isGradient("hsl( 0, 5, 100% )") // false
 */
export function isGradient(gradient){
    return isLinearGradient(gradient) || isRadialGradient(gradient);
}

/**
 * Check if target string is a valid css gradient definition
 * @param gradient — target gradient string to test
 * @throws TypeError — if type of color that was passed is not a string
 * @returns {boolean}
 *
 * @example
 * var isHsla = Validator.isLinearGradient("hsla(0,0%,0%, .5)") // true
 * var isNotHsla = Validator.isLinearGradient("hsl( 0, 5, 100% )") // false
 */
export function isLinearGradient(gradient){
    if(typeof gradient !== "string") throw new TypeError("Type of target name should be a String");

    // checking for general linear-gradient syntax
    let matches = /^linear-gradient\([^(]*(\([^)]*\)[^(]*)*[^)]*\)$/g.exec(gradient);
    console.dir(matches);




}

/**
 * Check if target string is a valid css gradient definition
 * @param gradient — target gradient string to test
 * @throws TypeError — if type of color that was passed is not a string
 * @returns {boolean}
 *
 * @example
 * var isHsla = Validator.isRadialGradient("hsla(0,0%,0%, .5)") // true
 * var isNotHsla = Validator.isRadialGradient("hsl( 0, 5, 100% )") // false
 */
export function isRadialGradient(gradient){
    if(typeof color !== "string") throw new TypeError("Type of target name should be a String");
}

