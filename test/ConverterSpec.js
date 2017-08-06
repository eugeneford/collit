var Converter = Collit.Converter;

describe("Converter Helper", function () {
    describe("hexToRgb()", function () {
        it('#1 Successfully converted hex to rgb when hex was in short form ("#333")', function () {
            var rgbExpected = {r: 51, g: 51, b: 51};
            expect(Converter.hexToRgb("#333")).toEqual(rgbExpected);
        });

        it('#2 Successfully converted hex to rgb ("#333333")', function () {
            var rgbExpected = {r: 51, g: 51, b: 51};
            expect(Converter.hexToRgb("#333333")).toEqual(rgbExpected);
        });

        it('#3 Convert failed when string is not valid hex "#" ("333333")', function () {
            var rgbExpected = {r: 51, g: 51, b: 51};
            expect(function(){Converter.hexToRgb("333333")}).toThrowError(Error);
        });

        it("#4 Convert failed when parameter was number(333333)", function () {
            expect(function(){Converter.hexToRgb(333333)}).toThrowError(TypeError);
        });
    });

    describe("rgbToHsl()", function () {
        it('#1 Successfully converted rgb to hsl when R,G and B values are equal ({r: 11, g: 11, b: 11})', function () {

            var rgbExpected = {h: 0, s: 0, l: 0.04};
            expect(Converter.rgbToHsl({r: 11, g: 11, b: 11})).toEqual(rgbExpected);
        });

        it('#2 Successfully converted rgb to hsl when Red value is greater than other. ({r: 111, g: 11, b: 11})', function () {

            var rgbExpected = {h: 0, s: 0.82, l: 0.24};
            expect(Converter.rgbToHsl({r: 111, g: 11, b: 11})).toEqual(rgbExpected);
        });

        it('#3 Successfully converted rgb to hsl when Green value is greater than other. ({r: 11, g: 111, b: 11})', function () {

            var rgbExpected = {h: 120, s: 0.82, l: 0.24};
            expect(Converter.rgbToHsl({r: 11, g: 111, b: 11})).toEqual(rgbExpected);
        });

        it('#4 Successfully converted rgb to hsl when Blue value is greater than other. ({r: 11, g: 11, b: 111})', function () {

            var rgbExpected = {h: 240, s: 0.82, l: 0.24};
            expect(Converter.rgbToHsl({r: 11, g: 11, b: 111})).toEqual(rgbExpected);
        });

        it('#5 Successfully converted rgb to hsl when color lightness is greater than 50% . ({r: 255, g: 235, b: 100})', function () {

            var rgbExpected = {h: 52, s: 1, l: 0.70};
            expect(Converter.rgbToHsl({r: 255, g: 235, b: 100})).toEqual(rgbExpected);
        });

        it('#6 Successfully converted rgb to hsl when Red value is greater than other, and Green value is less than Blue. ({r: 200, g: 50, b: 150})', function () {

            var rgbExpected = {h: 320, s: 0.6, l: 0.49};
            expect(Converter.rgbToHsl({r: 200, g: 50, b: 150})).toEqual(rgbExpected);
        });

        it('#7 Convert failed when parameter was not Object. (150, 200, 300)', function () {
            expect(function(){Converter.rgbToHsl(150, 200, 300)}).toThrowError(TypeError);
        });

        it('#8 Convert failed when object had not one of needed key. {r: 200, g: 150}', function () {
            expect(function(){Converter.rgbToHsl({r: 200, g: 150})}).toThrowError(Error);
        });
    });

    describe("hslToRgb()", function () {
        it('#1 Successfully converted hsl to rgb ({h: 300, s: 0.5, l: 0.5})', function () {

            var rgbExpected = {r: 191, g: 64, b: 191};
            expect(Converter.hslToRgb({h: 300, s: 0.5, l: 0.5})).toEqual(rgbExpected);
        });
        it('#2 Successfully converted hsl to rgb when saturation is 0 ({h: 300, s: 0, l: 0.5})', function () {

            var rgbExpected = {r: 128, g: 128, b: 128};
            expect(Converter.hslToRgb({h: 300, s: 0, l: 0.5})).toEqual(rgbExpected);
        });
        it('#3 Successfully converted hsl to rgb when lighness is less than 0.5 ({h: 300, s: 0.5, l: 0.3})', function () {

            var rgbExpected = {r: 115, g: 38, b: 115};
            expect(Converter.hslToRgb({h: 300, s: 0.5, l: 0.3})).toEqual(rgbExpected);
        });

        it('#4 Successfully converted hsl to rgb when hue is 0 ({h: 0, s: 0.5, l: 0.3})', function () {

            var rgbExpected = {r: 115, g: 38, b: 38};
            expect(Converter.hslToRgb({h: 0, s: 0.5, l: 0.3})).toEqual(rgbExpected);
        });

        it('#5 Convert failed when parameter was not Object. (120, 0.5, 0.1)', function () {
            expect(function(){Converter.hslToRgb(120, 0.5, 0.1)}).toThrowError(TypeError);
        });

        it('#6 Convert failed when object had not one of needed key. ({h: 0, l: 0.3})', function () {
            expect(function(){Converter.hslToRgb({h: 0, l: 0.3})}).toThrowError(Error);
        });
    });
    describe("rgbToHex()", function () {
        it('#1 Successfully converted rgb to hex ({r: 112, g: 65, b: 73})', function () {

            var rgbExpected = "#704149";
            expect(Converter.rgbToHex({r: 112, g: 65, b: 73})).toEqual(rgbExpected);
        });
        it('#2 Successfully converted rgb to hex in short format ({r: 51, g: 51, b: 51})', function () {
            var rgbExpected = "#333";
            expect(Converter.rgbToHex({r: 51, g: 51, b: 51})).toEqual(rgbExpected);
        });

        it('#3 Convert failed when parameter was not Object. (120, 0.5, 0.1)', function () {
            expect(function(){Converter.rgbToHex(120, 0.5, 0.1)}).toThrowError(TypeError);
        });

        it('#4 Convert failed when object had not one of needed key. ({r: 200, g: 150})', function () {
            expect(function(){Converter.rgbToHex({r: 200, g: 150})}).toThrowError(Error);
        });
    });
    describe("hexToHsl()", function () {
        it('#1 Successfully converted hex to hsl ("#333")', function () {

            var rgbExpected = {h: 0, s: 0, l: 0.2};
            expect(Converter.hexToHsl("#333")).toEqual(rgbExpected);
        });
    });
    describe("hslToHex()", function () {
        it('#1 Successfully converted hsl to hex ({h: 0, s: 0.5, l: 0.3})', function () {

            var rgbExpected = "#732626";
            expect(Converter.hslToHex({h: 0, s: 0.5, l: 0.3})).toEqual(rgbExpected);
        });
    });
});