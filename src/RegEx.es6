// RegExp Helpers
const BYTE = "0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5]";
const PERCENTAGE = "0%|[1-9]\\d?%|100%";
const FRACTION = "(?:0|0?.[1-9]+)";
const DEGREES = "(?:0(?:deg)?|[1-9]\\d?(?:deg)?|[12]\\d\\d(?:deg)?|3[0-5]\\d(?:deg)?)";
const GRADIANS = "(?:0grad|[1-9]\\d?grad|[123]\\d\\dgrad|400grad)";
const TURN = `(?:${FRACTION})turn`;
const ANGLE = `${DEGREES}|${GRADIANS}|${TURN}`;
const SIDE_CORNER = "to\\s+((?:(?:left|right)(?:\\s+(?:top|bottom))?))";
const HEX = "\\#[0-9a-f]{3}|[0-9a-f]{6}";
const RGB = `rgb\\(\\s*((${BYTE})\\s*,\\s*(${BYTE})\\s*,\\s*(${BYTE})|(${PERCENTAGE})\\s*,\\s*(${PERCENTAGE})\\s*,\\s*(${PERCENTAGE}))\\s*\\)`;
const RGBA =`rgba\\(\\s*((${BYTE})\\s*,\\s*(${BYTE})\\s*,\\s*(${BYTE})|(${PERCENTAGE})\\s*,\\s*(${PERCENTAGE})\\s*,\\s*(${PERCENTAGE}))\\s*,\\s*(${FRACTION}|${PERCENTAGE})\\s*\\)`;
const HSL = `hsl\\(\\s*(${ANGLE})\\s*,\\s*(${PERCENTAGE})\\s*,\\s*(${PERCENTAGE})\\s*\\)$`;
const HSLA = `hsla\\(\\s*(${ANGLE})\\s*,\\s*(${PERCENTAGE})\\s*,\\s*(${PERCENTAGE})\\s*,\\s*(${FRACTION}|${PERCENTAGE})\\s*\\)`;
const COLOR_STOP = `${HEX}|${RGB}|${RGBA}|${HSL}|${HSLA}(?:\\s+${PERCENTAGE})?`;

export default {
    DEGREES: new RegExp(DEGREES, "i"),
    ANGLE: new RegExp(ANGLE, "i"),
    SIDE_CORNER: new RegExp(SIDE_CORNER, "i"),
    HEX: new RegExp(HEX, "i"),
    BYTE: new RegExp(BYTE, "i"),
    PERCENTAGE: new RegExp(PERCENTAGE, "i"),
    FRACTION: new RegExp(FRACTION, "i"),
    RGB_ONLY: new RegExp(`^${RGB}$`, "i"),
    RGBA_ONLY:  new RegExp(`^${RGBA}$`, "i"),
    HSL_ONLY: new RegExp(`^${HSL}$`, "i"),
    HSLA_ONLY: new RegExp(`^${HSLA}$`, "i"),
};
