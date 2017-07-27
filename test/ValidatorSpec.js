var Validator = ColorTools.Validator;

describe("Validator Helper", function(){
   describe("isColorName()", function(){
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
});