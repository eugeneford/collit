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
});