import colors from "./Colors";

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

