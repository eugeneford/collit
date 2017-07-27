import colors from "./Colors";
import charCodes from "./CharCodes";

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

