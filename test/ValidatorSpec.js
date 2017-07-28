var Validator = ColorTools.Validator;

describe("Validator Helper", function(){
   describe("isColorName(name)", function(){
       it("Returned true for a valid CSS color (cyan)", function(){
           expect(Validator.isColorName("cyan")).toBe(true);
       });

       it("Returned false for the unknown color (avadakedavra)", function(){
           expect(Validator.isColorName("avadakedavra")).toBe(false);
       });

       it("Threw a TypeError when a non-string value was passed as parameter", function(){
           expect(function(){ Validator.isColorName(25)}).toThrowError(TypeError);
       });
   });

    describe("isHex(color)", function(){
        it("Threw a TypeError when a non-string value was passed as parameter", function(){
            expect(function(){ Validator.isHex(25)}).toThrowError(TypeError);
        });

        it("Returned false when color was not started with hash", function(){
            expect(Validator.isHex("333")).toBe(false);
        });

        it("Returned false when target string can not define a hex color in short or long forms (#3333)", function(){
            expect(Validator.isHex("#3333")).toBe(false);
        });

        it("Returned false one of the characters of target string is not a valid hex number", function(){
            expect(Validator.isHex("#24fr31")).toBe(false);
        });

        it("Returned true for a valid hex color in short form (#fff)", function(){
            expect(Validator.isHex("#fff")).toBe(true);
        });

        it("Returned true for a valid hex color in long form (#f5f5f5)", function(){
            expect(Validator.isHex("#f5f5f5")).toBe(true);
        });
    });

    describe("isRgb(color)", function(){
        it("Threw a TypeError when a non-string value was passed as parameter", function(){
            expect(function(){ Validator.isRgb(25)}).toThrowError(TypeError);
        });

        it("Returned true for a single-digit rgb color definition ( rgb(0,0,0) )", function(){
            expect(Validator.isRgb("rgb(0,0,0)")).toBe(true);
        });

        it("Returned true for a two-digit rgb color definition ( rgb(99,99,99) )", function(){
            expect(Validator.isRgb("rgb(99,99,99)")).toBe(true);
        });

        it("Returned true for a three-digit rgb color definition ( rgb(255,255, 255) )", function(){
            expect(Validator.isRgb("rgb(255,255, 255)")).toBe(true);
        });

        it("Returned false when the whitespace between rgb and ( was spotted ( rgb (0,100%,100%) )", function(){
            expect(Validator.isRgb("rgb (0,100%,100%)")).toBe(false);
        });

        it("Returned false when one of the values was less then 0 ( was spotted ( rgb(-1,0,0) )", function(){
            expect(Validator.isRgb("rgb(-1,0,0)")).toBe(false);
        });

        it("Returned false when one of the values was a fractional number ( was spotted ( rgb(0,0,0.5) )", function(){
            expect(Validator.isRgb("rgb(0,0,0.5)")).toBe(false);
        });

        it("Returned false when when one of the values was greater than 255 (rgb(260, 255, 255))", function(){
            expect(Validator.isRgb("rgb(260, 255, 255)")).toBe(false);
        });

    });

    describe("isHsl(color)", function(){
        it("Threw a TypeError when a non-string value was passed as parameter", function(){
            expect(function(){ Validator.isHsl(25)}).toThrowError(TypeError);
        });

        it("Returned true for a single-digit hsl color definition (hsl(0,0%,0%))", function(){
            expect(Validator.isHsl("hsl(0,0%,0%)")).toBe(true);
        });

        it("Returned true for a two-digit hsl color definition ( hsl(60,25%,50%) )", function(){
            expect(Validator.isHsl("hsl(60,25%,50%)")).toBe(true);
        });

        it("Returned true for a three-digit hsl color definition (hsl(240,100%, 100%)) )", function(){
            expect(Validator.isHsl("hsl(240,100%, 100%)")).toBe(true);
        });

        it("Returned false when the whitespace between hsl and ( was spotted ( hsl (240,100%, 100%))", function(){
            expect(Validator.isHsl("hsl (240,100%, 100%)")).toBe(false);
        });

        it("Returned false when one of the values was less then 0 ( hsl(-10,0,0) )", function(){
            expect(Validator.isHsl("hsl(-10,0%,0%)")).toBe(false);
        });

        it("Returned false when one of the values was a fractional number (hsl(0.5,0%,0%))", function(){
            expect(Validator.isHsl("hsl(0.5,0%,0%)")).toBe(false);
        });

        it("Returned false when saturation was not percentage (hsl(120, 0, 0%))", function(){
            expect(Validator.isHsl("hsl(120, 0, 0%)")).toBe(false);
        });

        it("Returned false when lightness was not percentage (hsl(120, 0%, 0))", function(){
            expect(Validator.isHsl("hsl(120, 0%, 0)")).toBe(false);
        });

        it("Returned false when hue was greater than 359 (hsl(360, 0%, 0%))", function(){
            expect(Validator.isHsl("hsl(360, 0%, 0%)")).toBe(false);
        });

        it("Returned false when saturation was greater than 100% (hsl(320, 105%, 0%))", function(){
            expect(Validator.isHsl("hsl(320, 105%, 0%)")).toBe(false);
        });

        it("Returned false when lightness was greater than 100% (hsl(320, 0%, 105%))", function(){
            expect(Validator.isHsl("hsl(320, 0%, 105%)")).toBe(false);
        });

        it("Returned false when word 'hsl' was wrong hls(320, 0%, 100%)", function(){
            expect(Validator.isHsl("hls(320, 0%, 100%)")).toBe(false);
        });
    });

    describe("isHsla(color)", function(){
        it("Threw a TypeError when a non-string value was passed as parameter", function(){
            expect(function(){ Validator.isHsla(25)}).toThrowError(TypeError);
        });

        it("Returned true for a single-digit hsl color definition with alpha 0 (hsla(0,0%,0%, 0))", function(){
            expect(Validator.isHsla("hsla(0,0%,0%, 0)")).toBe(true);
        });

        it("Returned true for a two-digit hsl color definition with alpha 0.5 ( hsla(60,25%,50%, 0.5) )", function(){
            expect(Validator.isHsla("hsla(60,25%,50%, 0.5)")).toBe(true);
        });

        it("Returned true for a three-digit hsl color definition with alpha 1 (hsl(240,100%, 100%, 1)) )", function(){
            expect(Validator.isHsla("hsla(240,100%, 100%, 1)")).toBe(true);
        });

        it("Returned true when alpha was set in percentage (hsl(240,100%, 100%, 50%)) )", function(){
            expect(Validator.isHsla("hsla(240,100%, 100%, 50%)")).toBe(true);
        });

        it("Returned true when alpha was float number without zero with dot (hsla(240,100%, 100%, .5)) )", function(){
            expect(Validator.isHsla("hsla(240,100%, 100%, .5)")).toBe(true);
        });

        it("Returned false alpha set in percentage and greater than 100% (hsl(240,100%, 100%, 101%)) )", function(){
            expect(Validator.isHsla("hsla(240,100%, 100%, 101%)")).toBe(false);
        }); 

        // it("Returned false when the whitespace between hsl and ( was spotted ( hsl (240,100%, 100%))", function(){
        //     expect(Validator.isHsla("hsl (240,100%, 100%)")).toBe(false);
        // });
        //
        // it("Returned false when one of the values was less then 0 ( hsl(-10,0,0) )", function(){
        //     expect(Validator.isHsla("hsl(-10,0%,0%)")).toBe(false);
        // });
        //
        // it("Returned false when one of the values was a fractional number (hsl(0.5,0%,0%))", function(){
        //     expect(Validator.isHsla("hsl(0.5,0%,0%)")).toBe(false);
        // });
        //
        // it("Returned false when saturation was not percentage (hsl(120, 0, 0%))", function(){
        //     expect(Validator.isHsla("hsl(120, 0, 0%)")).toBe(false);
        // });
        //
        // it("Returned false when lightness was not percentage (hsl(120, 0%, 0))", function(){
        //     expect(Validator.isHsla("hsl(120, 0%, 0)")).toBe(false);
        // });
        //
        // it("Returned false when hue was greater than 359 (hsl(360, 0%, 0%))", function(){
        //     expect(Validator.isHsla("hsl(360, 0%, 0%)")).toBe(false);
        // });
        //
        // it("Returned false when saturation was greater than 100% (hsl(360, 105%, 0%))", function(){
        //     expect(Validator.isHsla("hsl(360, 105%, 0%)")).toBe(false);
        // });
        //
        // it("Returned false when lightness was greater than 100% (hsl(360, 0%, 105%))", function(){
        //     expect(Validator.isHsla("hsl(360, 0%, 105%)")).toBe(false);
        // });
    });
});