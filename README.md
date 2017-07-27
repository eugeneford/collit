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

A alpha-key inside the rgb and hsl values is optional and can be omitted.

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

### Convertor

```js
import { Convertor } from "react-color-tools"

...

```

#### hexToRgb(hex)

#### hexToHsb(hex)

#### rgbToHex(rgb)

#### rgbToHsb(rgb)

#### hsbToHex(hsb)

#### hsbToRgb(hsb)

### Validator

```js
import { Validator } from "react-color-tools"

...

```

#### isHex(color)

#### isRgb(color)

#### isHsb(color)

#### isRgba(color)

#### isHSBA(color)

#### isColor(color)

#### isLinearGradient(gradient)

#### isRadialGradient(gradient)

#### isGradient(gradient)


### Parser
Parser Helper allows you to parse a CSS based color definition into the ColorInfo object, which contains a hex, rgb and hsl values of target css value.

#### parseColorName(value)
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
