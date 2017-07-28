# react-color-tools
A Bunch of Tools for work with Colors in CSS way. Eg. Color Picker, Gradient Tool, Color Palette and more.

## How to Install

```js
npm install --save react-color-tools
```

```js
import { NoviColorPicker } from "react-color-tools"

...

```

## ColorInfo object
The entire logic of components and modules is based on use of the ColorInfo object, which describes a specific color as a set of hex, rgb and hsl values.

```js
{
   hex: "#333",
   rgb: { r: 51, g: 51, b: 51, a: 1 },
   hsl: { h: 0, s: 0 l: 0.1 a: 1 }
}
```
"R", "G" and "B" keys should contains the numeric values between 0 and 255 (eg. 128).<br />
"H" key should contain the numeric value between 0 and 360 (eg. 270).<br />
"S", "L" and "A" keys should contains a numeric value between 0 and 1 (eg. 0.5).<br />
"A" key inside the rgb and hsl values is optional and can be omitted.  

## Parent Components

### NoviColorPicker

```js
import { NoviColorPicker } from "react-color-tools"

...

```

### NoviGradientTool

```js
import { NoviGradientTool } from "react-color-tools"

...

```

### EnsoPalette

```js
import { EnsoPalette } from "react-color-tools"

...

```

### EnsoColorPicker

```js
import { EnsoColorPicker } from "react-color-tools"

...

```

### EnsoGradientTool

```js
import { EnsoGradientTool } from "react-color-tools"

...

```

### EnsoGradientRuler

```js
import { EnsoGradientRuler } from "react-color-tools"

...

```

## Widget Components

### Wheel

```js
import { Wheel } from "react-color-tools"

...

```

#### value - object { hue, saturation }

#### onChange(hue, saturation)

#### onChangeComplete(hue, saturation)

#### size - diametr of wheel


### Lightness

```js
import { Lightness } from "react-color-tools"

...

```

#### value

#### onChange(hue, saturation)

#### onChangeComplete(hue, saturation)

#### direction - horizontal, vertical

#### width

#### height


### Opacity

```js
import { Opacity } from "react-color-tools"

...

```

#### value

#### onChange(hue, saturation)

#### onChangeComplete(hue, saturation)

#### direction - horizontal, vertical

#### width

#### height


### Hue

```js
import { Hue } from "react-color-tools"

...

```

#### value

#### onChange(hue, saturation)

#### onChangeComplete(hue, saturation)

#### direction - horizontal, vertical

#### width

#### height


### Saturation

```js
import { Saturation } from "react-color-tools"

...

```

#### value

#### onChange(hue, saturation)

#### onChangeComplete(hue, saturation)

#### direction - horizontal, vertical

#### width

#### height


### Swatch

```js
import { Swatch } from "react-color-tools"

...

```

#### color

#### onClick(color)

#### width

#### height


### Input

```js
import { Input } from "react-color-tools"

...

```

#### value

#### format - all, hex, rgb, hsb, r, g, b, a, h, s, b, angle, gradient. For example "rgb+a"

#### onChange(hue, saturation)

#### width

#### height


### Gradient

```js
import { Gradient } from "react-color-tools"

...

```

#### colors

#### active

#### onChange(colors)

#### onChangeComplete(colors)

#### direction

#### width

#### height


### Ruler

```js
import { Ruler } from "react-color-tools"

...

```

#### value

#### type - linear, radial

#### onChange

#### onChangeComplete


## Helpers

### Converter
Converter helper allows you to convert hex to rgb, rgb to hex, hsl to rgb, rgb to hsl, hex to hsl, hsl to hex etc.
 
#### hexToRgb(hex)
Converts an HEX color value to RGB.

```js
import { Converter } from "react-color-tools";

var rgb = Converter.hexToRgb("#333"); // rgb => {r:51, g:51, b: 51};
```

#### hexToHsl(hex)
Converts an HEX color value to HSL.
> Converting hex to hsl is done using a additional converting to RGB. HEX -> RGB -> HSL.

```js
import { Converter } from "react-color-tools";

var hsl = Converter.hexToHsl("#333"); // hsl => {h: 0, s: 0, l: 0.2};
```

#### rgbToHex(rgb)
Converts an RGB color value to HEX.
```js
import { Converter } from "react-color-tools";

var hex = Converter.rgbToHex({r: 51, g: 51, b: 51}); // hex => "#333";
```

#### rgbToHsl(rgb)
Converts an RGB color value to HSL.
```js
import { Converter } from "react-color-tools";

var hsl = Converter.rgbToHsl({r: 11, g: 11, b: 11}); // hsl => {h: 0, s: 0, l: 0.04};
```

#### hslToHex(hsl)
Converts an HSL color value to Hex.
> Converting hsl to hex is done using a additional converting to RGB. HSL -> RGB -> HEX.

```js
import { Converter } from "react-color-tools";

var hex = Converter.hslToHex({h: 0, s: 0.5, l: 0.3}); // hex => "#732626;
```

#### hslToRgb(hsl)
Converts an HSL color value to RGB.
```js
import { Converter } from "react-color-tools";

var rgb = Converter.hslToRgb({h: 300, s: 0.5, l: 0.5}); // rgb => {r: 191, g: 64, b: 191};
```

### Validator
Validator Helper that allows you to check if color is defined as a correct hex, rgb, rgba, hsl, hsla CSS string or gradient defined correctly.

#### isColorName(name)
Check if target name is a valid CSS1, CSS2.1, CSS3 color name
```js
import { Validator } from "react-color-tools";

var isColor = Validator.isColorName("black"); // true
var isNotColor = Validator.isColorName("avadakedavra"); // false
```

#### isHex(color)
Check if target string is a valid hex color
```js
import { Validator } from "react-color-tools";

var isHex = Validator.isHex("#333"); // true
var isNotHex = Validator.isHex("#rgb"); // false
``` 

#### isRgb(color)
Check if target string is a valid css rgb color definition
```js
import { Validator } from "react-color-tools";

var isRgb = Validator.isRgb("rgb( 0, 0, 0 )") // true
var isNotRgb = Validator.isRgb("hsl( 0, 0, 100% )") // false
```

#### isHsl(color)

Check if target string is a valid css HSL color definition
```js
import { Validator } from "react-color-tools";

var isHsl = Validator.isHsl("hsl(0,0%,0%)") // true
var isNotHsl = Validator.isHsl("hsl( 0, 5, 100% )") // false
```

#### isRgba(color)

#### isHsla(color)
Check if target string is a valid css HSLa color definition
```js
import { Validator } from "react-color-tools";

var isHsla = Validator.isHsla("hsla(0,0%,0%, .5)") // true
var isNotHsla = Validator.isHsla("hsl( 0, 5, 100% )") // false
```

#### isColor(color)

#### isLinearGradient(gradient)

#### isRadialGradient(gradient)

#### isGradient(gradient)


### Parser
Parser Helper allows you to parse a CSS based color definition into the ColorInfo object, which contains a hex, rgb and hsl values of target css value.

#### parseColorName(name)
Parse a valid CSS1, CSS2.1, CSS3 color name into a set of hex, rgb and hsl values.
```js
import { Parser } from "react-color-tools";

var color = Parser.parseColorName("black");

// color => { hex: "#000", rgb: {r:0, g:0, b:0}, hsl: {h:0, s:0, l:0}}
```

#### parseHex(color)

#### parseRgb(color)

#### parseHsb(color)

#### parseRgba(color)

#### parseHsba(color)

#### parseColor(color)

#### parseLinearGradient(gradient)

#### parseRadialGradient(gradient)

#### parseGradient(gradient)

#### parse(value)
