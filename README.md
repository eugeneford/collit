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

## Info objects
The entire logic of components and modules is based on use of the ColorInfo, LinearGradientInfo or RadialGradientInfo data types.

## ColorInfo object
Describes a specific color as a set of hex, rgb and hsl values

```js
{
   hex: "#333",
   rgb: { r: 51, g: 51, b: 51, a: 1 },
   hsl: { h: 0, s: 0 l: 0.1 a: 1 }
}
```

* "R", "G" and "B" — should contains the numeric values between 0 and 255 (eg. 128).<br />
* "H" — should contain the numeric value between 0 and 360 (eg. 270).<br />
* "S", "L" and "A" — should contains a numeric value between 0 and 1 (eg. 0.5).<br />

> "A" — inside the rgb and hsl values is optional and can be omitted.  

## LinearGradientInfo object
Describes a specific set of linear gradient values.
```js
{
   angle: 45,
   sideCorner: "top right"
   colorStopList: [
      {
         position: 0, // 0%
         color: { rgb: { r: 51, g: 51, b: 51, a: 1 } }
      },
      {
         position: 1, // 100%
         color: { hex: "#333" }
      }
   ],
}
```

* angle — defines the angle (from 0 to 360) of gradient line. Can be omitted.
* sideCorner — defines the direction of gradient line. Can be on of "top", "right", "left", "bottom", "top right", "bottom right", "bottom left", "top left" values.
* colorStopList — contains a set of color-stop values. 
  - position - defines the optional color stop position. Can be set as percentage (from 0 to 1) or length (any CSS number — px, em, pc, in, mm... eg. "20px") value.
  - color - defines the actual stop color. Should contain at least one of ColorInfo's value.

## RadialGradientInfo object
Describes a specific set of radial gradient values.
```js
{
   position: [.25, .75], // at 25% 75%
   shape: "circle",
   extent: "closest-side",
   colorStopList: [
      {
         position: 0, // 0%
         color: { hsl: { h: 0, s: 0 l: 0.1 a: 1 } }
      },
      {
         position: 1, // 100%
         color: { rgb: { r: 51, g: 51, b: 51, a: 1 } }
      }
   ],
}
```

* position — defines the position of the gradient, interpreted in the same way as css background-position property values. Can be set as a percentage (from 0 to 1) or length (any CSS number — px, em, pc, in, mm... eg. "20px") value. Can be omitted.
* shape — defines the actual shape of gradient. Can be set as "circle" or "ellipse" and can be omitted.
* extent - describes how big the ending shape must be. The possible values are: "closest-side", "closest-corner", "farthest-side", "farthest-corner"
* colorStopList — contains a set of color-stop values. 
  - position - defines the optional color stop position. Can be set as percentage (from 0 to 1) or length (any CSS number — px, em, pc, in, mm... eg. "20px") value.
  - color - defines the actual stop color. Should contain at least one of ColorInfo's value. 

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
Check if target string is a valid css rgba color definition
```js
import { Validator } from "react-color-tools";

var isRgba = Validator.isRgba("rgba(255,255,255,.5)") // true
var isNotRgba = Validator.isRgba("hsla(255,100%,100%,.5)") // false
```

#### isHsla(color)
Check if target string is a valid css HSLa color definition
```js
import { Validator } from "react-color-tools";

var isHsla = Validator.isHsla("hsla(0,0%,0%, .5)") // true
var isNotHsla = Validator.isHsla("hsl( 0, 5, 100% )") // false
```

#### isColor(color)
Check if target string is a valid css color definition
```js
var isColor = Validator.isColor("hsla(0,0%,0%, .5)") // true
var isColorToo = Validator.isColor("black") // true
var isNotColor = Validator.isColor("color") // false
```

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
Parse a valid hex color into a set of hex, rgb and hsl values
```js
import { Parser } from "react-color-tools";

var color = Parser.parseHex("#000");
// color => { hex: "#000", rgb: {r:0, g:0, b:0}, hsl: {h:0, s:0, l:0}}
```

#### parseRgb(color)

#### parseHsl(color)

#### parseRgba(color)

#### parseHsla(color)

#### parseColor(color)  