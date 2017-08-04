var Parser = ColorTools.Parser;

describe("Parser Helper", function () {
  describe("parseColorName(value)", function () {
    it("Threw a TypeError when a non-string value was passed as parameter", function () {
      expect(function () {
        Parser.parseColorName(1)
      }).toThrowError(TypeError);
    });

    it("Threw an Error when invalid color name was passed", function () {
      expect(function () {
        Parser.parseColorName("avadakedavra")
      }).toThrowError(Error);
    });

    it("Correctly parsed \"black\" color", function () {
      var color = Parser.parseColorName("black");
      expect(color).toEqual({hex: "#000", rgb: {r: 0, g: 0, b: 0}, hsl: {h: 0, s: 0, l: 0}});
    });

    it("Correctly parsed \"silver\" color", function () {
      var color = Parser.parseColorName("silver");
      expect(color).toEqual({hex: "#c0c0c0", rgb: {r: 192, g: 192, b: 192}, hsl: {h: 0, s: 0, l: 0.75}});
    });

    it("Correctly parsed \"gray\" color", function () {
      var color = Parser.parseColorName("gray");
      expect(color).toEqual({hex: "#808080", rgb: {r: 128, g: 128, b: 128}, hsl: {h: 0, s: 0, l: 0.5}});
    });

    it("Correctly parsed \"white\" color", function () {
      var color = Parser.parseColorName("white");
      expect(color).toEqual({hex: "#fff", rgb: {r: 255, g: 255, b: 255}, hsl: {h: 0, s: 0, l: 1}});
    });

    it("Correctly parsed \"maroon\" color", function () {
      var color = Parser.parseColorName("maroon");
      expect(color).toEqual({hex: "#800000", rgb: {r: 128, g: 0, b: 0}, hsl: {h: 0, s: 1, l: .25}});
    });

    it("Correctly parsed \"red\" color", function () {
      var color = Parser.parseColorName("red");
      expect(color).toEqual({hex: "#ff0000", rgb: {r: 255, g: 0, b: 0}, hsl: {h: 0, s: 1, l: .5}});
    });

    it("Correctly parsed \"purple\" color", function () {
      var color = Parser.parseColorName("purple");
      expect(color).toEqual({hex: "#800080", rgb: {r: 128, g: 0, b: 128}, hsl: {h: 300, s: 1, l: .25}});
    });

    it("Correctly parsed \"fuchsia\" color", function () {
      var color = Parser.parseColorName("fuchsia");
      expect(color).toEqual({hex: "#ff00ff", rgb: {r: 255, g: 0, b: 255}, hsl: {h: 300, s: 1, l: .5}});
    });

    it("Correctly parsed \"green\" color", function () {
      var color = Parser.parseColorName("green");
      expect(color).toEqual({hex: "#008000", rgb: {r: 0, g: 128, b: 0}, hsl: {h: 120, s: 1, l: .25}});
    });

    it("Correctly parsed \"lime\" color", function () {
      var color = Parser.parseColorName("lime");
      expect(color).toEqual({hex: "#00ff00", rgb: {r: 0, g: 255, b: 0}, hsl: {h: 120, s: 1, l: .5}});
    });

    it("Correctly parsed \"olive\" color", function () {
      var color = Parser.parseColorName("olive");
      expect(color).toEqual({hex: "#808000", rgb: {r: 128, g: 128, b: 0}, hsl: {h: 60, s: 1, l: .25}});
    });

    it("Correctly parsed \"yellow\" color", function () {
      var color = Parser.parseColorName("yellow");
      expect(color).toEqual({hex: "#ffff00", rgb: {r: 255, g: 255, b: 0}, hsl: {h: 60, s: 1, l: .5}});
    });

    it("Correctly parsed \"navy\" color", function () {
      var color = Parser.parseColorName("navy");
      expect(color).toEqual({hex: "#000080", rgb: {r: 0, g: 0, b: 128}, hsl: {h: 240, s: 1, l: .25}});
    });

    it("Correctly parsed \"blue\" color", function () {
      var color = Parser.parseColorName("blue");
      expect(color).toEqual({hex: "#0000ff", rgb: {r: 0, g: 0, b: 255}, hsl: {h: 240, s: 1, l: .5}});
    });

    it("Correctly parsed \"teal\" color", function () {
      var color = Parser.parseColorName("teal");
      expect(color).toEqual({hex: "#008080", rgb: {r: 0, g: 128, b: 128}, hsl: {h: 180, s: 1, l: .25}});
    });

    it("Correctly parsed \"aqua\" color", function () {
      var color = Parser.parseColorName("aqua");
      expect(color).toEqual({hex: "#00ffff", rgb: {r: 0, g: 255, b: 255}, hsl: {h: 180, s: 1, l: .5}});
    });

    it("Correctly parsed \"aliceblue\" color", function () {
      var color = Parser.parseColorName("aliceblue");
      expect(color).toEqual({hex: "#f0f8ff", rgb: {r: 240, g: 248, b: 255}, hsl: {h: 208, s: 1, l: .97}});
    });

    it("Correctly parsed \"antiquewhite\" color", function () {
      var color = Parser.parseColorName("antiquewhite");
      expect(color).toEqual({hex: "#faebd7", rgb: {r: 250, g: 235, b: 215}, hsl: {h: 34, s: .78, l: .91}});
    });

    it("Correctly parsed \"aquamarine\" color", function () {
      var color = Parser.parseColorName("aquamarine");
      expect(color).toEqual({hex: "#7fffd4", rgb: {r: 127, g: 255, b: 212}, hsl: {h: 160, s: 1, l: .75}});
    });

    it("Correctly parsed \"azure\" color", function () {
      var color = Parser.parseColorName("azure");
      expect(color).toEqual({hex: "#f0ffff", rgb: {r: 240, g: 255, b: 255}, hsl: {h: 180, s: 1, l: .97}});
    });

    it("Correctly parsed \"beige\" color", function () {
      var color = Parser.parseColorName("beige");
      expect(color).toEqual({hex: "#f5f5dc", rgb: {r: 245, g: 245, b: 220}, hsl: {h: 60, s: .56, l: .91}});
    });

    it("Correctly parsed \"bisque\" color", function () {
      var color = Parser.parseColorName("bisque");
      expect(color).toEqual({hex: "#ffe4c4", rgb: {r: 255, g: 228, b: 196}, hsl: {h: 33, s: 1, l: .88}});
    });

    it("Correctly parsed \"blanchedalmond\" color", function () {
      var color = Parser.parseColorName("blanchedalmond");
      expect(color).toEqual({hex: "#ffebcd", rgb: {r: 255, g: 235, b: 205}, hsl: {h: 36, s: 1, l: .9}});
    });

    it("Correctly parsed \"blueviolet\" color", function () {
      var color = Parser.parseColorName("blueviolet");
      expect(color).toEqual({hex: "#8a2be2", rgb: {r: 138, g: 43, b: 226}, hsl: {h: 271, s: .76, l: .53}});
    });

    it("Correctly parsed \"brown\" color", function () {
      var color = Parser.parseColorName("brown");
      expect(color).toEqual({hex: "#a52a2a", rgb: {r: 165, g: 42, b: 42}, hsl: {h: 0, s: .59, l: .41}});
    });

    it("Correctly parsed \"burlywood\" color", function () {
      var color = Parser.parseColorName("burlywood");
      expect(color).toEqual({hex: "#deb887", rgb: {r: 222, g: 184, b: 135}, hsl: {h: 34, s: .57, l: .7}});
    });

    it("Correctly parsed \"cadetblue\" color", function () {
      var color = Parser.parseColorName("cadetblue");
      expect(color).toEqual({hex: "#5f9ea0", rgb: {r: 95, g: 158, b: 160}, hsl: {h: 182, s: .25, l: .5}});
    });

    it("Correctly parsed \"chartreuse\" color", function () {
      var color = Parser.parseColorName("chartreuse");
      expect(color).toEqual({hex: "#7fff00", rgb: {r: 127, g: 255, b: 0}, hsl: {h: 90, s: 1, l: .5}});
    });

    it("Correctly parsed \"chocolate\" color", function () {
      var color = Parser.parseColorName("chocolate");
      expect(color).toEqual({hex: "#d2691e", rgb: {r: 210, g: 105, b: 30}, hsl: {h: 25, s: .75, l: .47}});
    });

    it("Correctly parsed \"coral\" color", function () {
      var color = Parser.parseColorName("coral");
      expect(color).toEqual({hex: "#ff7f50", rgb: {r: 255, g: 127, b: 80}, hsl: {h: 16, s: 1, l: .66}});
    });

    it("Correctly parsed \"cornflowerblue\" color", function () {
      var color = Parser.parseColorName("cornflowerblue");
      expect(color).toEqual({hex: "#6495ed", rgb: {r: 100, g: 149, b: 237}, hsl: {h: 219, s: .79, l: .66}});
    });

    it("Correctly parsed \"cornsilk\" color", function () {
      var color = Parser.parseColorName("cornsilk");
      expect(color).toEqual({hex: "#fff8dc", rgb: {r: 255, g: 248, b: 220}, hsl: {h: 48, s: 1, l: .93}});
    });

    it("Correctly parsed \"crimson\" color", function () {
      var color = Parser.parseColorName("crimson");
      expect(color).toEqual({hex: "#dc143c", rgb: {r: 220, g: 20, b: 60}, hsl: {h: 348, s: .83, l: .47}});
    });

    it("Correctly parsed \"cyan\" color", function () {
      var color = Parser.parseColorName("cyan");
      expect(color).toEqual({hex: "#00ffff", rgb: {r: 0, g: 255, b: 255}, hsl: {h: 180, s: 1, l: .5}});
    });

    it("Correctly parsed \"darkblue\" color", function () {
      var color = Parser.parseColorName("darkblue");
      expect(color).toEqual({hex: "#00008b", rgb: {r: 0, g: 0, b: 139}, hsl: {h: 240, s: 1, l: .27}});
    });

    it("Correctly parsed \"darkcyan\" color", function () {
      var color = Parser.parseColorName("darkcyan");
      expect(color).toEqual({hex: "#008b8b", rgb: {r: 0, g: 139, b: 139}, hsl: {h: 180, s: 1, l: .27}});
    });

    it("Correctly parsed \"darkgoldenrod\" color", function () {
      var color = Parser.parseColorName("darkgoldenrod");
      expect(color).toEqual({hex: "#b8860b", rgb: {r: 184, g: 134, b: 11}, hsl: {h: 43, s: .89, l: .38}});
    });

    it("Correctly parsed \"darkgray\" color", function () {
      var color = Parser.parseColorName("darkgray");
      expect(color).toEqual({hex: "#a9a9a9", rgb: {r: 169, g: 169, b: 169}, hsl: {h: 0, s: 0, l: 0.66}});
    });

    it("Correctly parsed \"darkgrey\" color", function () {
      var color = Parser.parseColorName("darkgrey");
      expect(color).toEqual({hex: "#a9a9a9", rgb: {r: 169, g: 169, b: 169}, hsl: {h: 0, s: 0, l: 0.66}});
    });

    it("Correctly parsed \"darkgreen\" color", function () {
      var color = Parser.parseColorName("darkgreen");
      expect(color).toEqual({hex: "#006400", rgb: {r: 0, g: 100, b: 0}, hsl: {h: 120, s: 1, l: 0.2}});
    });

    it("Correctly parsed \"darkkhaki\" color", function () {
      var color = Parser.parseColorName("darkkhaki");
      expect(color).toEqual({hex: "#bdb76b", rgb: {r: 189, g: 183, b: 107}, hsl: {h: 56, s: .38, l: .58}});
    });

    it("Correctly parsed \"darkmagenta\" color", function () {
      var color = Parser.parseColorName("darkmagenta");
      expect(color).toEqual({hex: "#8b008b", rgb: {r: 139, g: 0, b: 139}, hsl: {h: 300, s: 1, l: .27}});
    });

    it("Correctly parsed \"darkolivegreen\" color", function () {
      var color = Parser.parseColorName("darkolivegreen");
      expect(color).toEqual({hex: "#556b2f", rgb: {r: 85, g: 107, b: 47}, hsl: {h: 82, s: .39, l: .3}});
    });

    it("Correctly parsed \"darkorange\" color", function () {
      var color = Parser.parseColorName("darkorange");
      expect(color).toEqual({hex: "#ff8c00", rgb: {r: 255, g: 140, b: 0}, hsl: {h: 33, s: 1, l: .5}});
    });

    it("Correctly parsed \"darkorchid\" color", function () {
      var color = Parser.parseColorName("darkorchid");
      expect(color).toEqual({hex: "#9932cc", rgb: {r: 153, g: 50, b: 204}, hsl: {h: 280, s: .61, l: .5}});
    });

    it("Correctly parsed \"darkred\" color", function () {
      var color = Parser.parseColorName("darkred");
      expect(color).toEqual({hex: "#8b0000", rgb: {r: 139, g: 0, b: 0}, hsl: {h: 0, s: 1, l: .27}});
    });

    it("Correctly parsed \"darksalmon\" color", function () {
      var color = Parser.parseColorName("darksalmon");
      expect(color).toEqual({hex: "#e9967a", rgb: {r: 233, g: 150, b: 122}, hsl: {h: 15, s: .72, l: .7}});
    });

    it("Correctly parsed \"darkseagreen\" color", function () {
      var color = Parser.parseColorName("darkseagreen");
      expect(color).toEqual({hex: "#8fbc8f", rgb: {r: 143, g: 188, b: 143}, hsl: {h: 120, s: .25, l: .65}});
    });

    it("Correctly parsed \"darkslateblue\" color", function () {
      var color = Parser.parseColorName("darkslateblue");
      expect(color).toEqual({hex: "#483d8b", rgb: {r: 72, g: 61, b: 139}, hsl: {h: 248, s: .39, l: .39}});
    });

    it("Correctly parsed \"darkslategray\" color", function () {
      var color = Parser.parseColorName("darkslategray");
      expect(color).toEqual({hex: "#2f4f4f", rgb: {r: 47, g: 79, b: 79}, hsl: {h: 180, s: .25, l: .25}});
    });

    it("Correctly parsed \"darkslategrey\" color", function () {
      var color = Parser.parseColorName("darkslategrey");
      expect(color).toEqual({hex: "#2f4f4f", rgb: {r: 47, g: 79, b: 79}, hsl: {h: 180, s: .25, l: .25}});
    });

    it("Correctly parsed \"darkturquoise\" color", function () {
      var color = Parser.parseColorName("darkturquoise");
      expect(color).toEqual({hex: "#00ced1", rgb: {r: 0, g: 206, b: 209}, hsl: {h: 181, s: 1, l: .41}});
    });

    it("Correctly parsed \"darkviolet\" color", function () {
      var color = Parser.parseColorName("darkviolet");
      expect(color).toEqual({hex: "#9400d3", rgb: {r: 148, g: 0, b: 211}, hsl: {h: 282, s: 1, l: .41}});
    });

    it("Correctly parsed \"deeppink\" color", function () {
      var color = Parser.parseColorName("deeppink");
      expect(color).toEqual({hex: "#ff1493", rgb: {r: 255, g: 20, b: 147}, hsl: {h: 328, s: 1, l: .54}});
    });

    it("Correctly parsed \"deepskyblue\" color", function () {
      var color = Parser.parseColorName("deepskyblue");
      expect(color).toEqual({hex: "#00bfff", rgb: {r: 0, g: 191, b: 255}, hsl: {h: 195, s: 1, l: .5}});
    });

    it("Correctly parsed \"dimgray\" color", function () {
      var color = Parser.parseColorName("dimgray");
      expect(color).toEqual({hex: "#696969", rgb: {r: 105, g: 105, b: 105}, hsl: {h: 0, s: 0, l: .41}});
    });

    it("Correctly parsed \"dimgrey\" color", function () {
      var color = Parser.parseColorName("dimgrey");
      expect(color).toEqual({hex: "#696969", rgb: {r: 105, g: 105, b: 105}, hsl: {h: 0, s: 0, l: .41}});
    });

    it("Correctly parsed \"dodgerblue\" color", function () {
      var color = Parser.parseColorName("dodgerblue");
      expect(color).toEqual({hex: "#1e90ff", rgb: {r: 30, g: 144, b: 255}, hsl: {h: 210, s: 1, l: .56}});
    });

    it("Correctly parsed \"firebrick\" color", function () {
      var color = Parser.parseColorName("firebrick");
      expect(color).toEqual({hex: "#b22222", rgb: {r: 178, g: 34, b: 34}, hsl: {h: 0, s: .68, l: .42}});
    });

    it("Correctly parsed \"floralwhite\" color", function () {
      var color = Parser.parseColorName("floralwhite");
      expect(color).toEqual({hex: "#fffaf0", rgb: {r: 255, g: 250, b: 240}, hsl: {h: 40, s: 1, l: .97}});
    });

    it("Correctly parsed \"forestgreen\" color", function () {
      var color = Parser.parseColorName("forestgreen");
      expect(color).toEqual({hex: "#228b22", rgb: {r: 34, g: 139, b: 34}, hsl: {h: 120, s: .61, l: .34}});
    });

    it("Correctly parsed \"gainsboro\" color", function () {
      var color = Parser.parseColorName("gainsboro");
      expect(color).toEqual({hex: "#dcdcdc", rgb: {r: 220, g: 220, b: 220}, hsl: {h: 0, s: 0, l: .86}});
    });

    it("Correctly parsed \"ghostwhite\" color", function () {
      var color = Parser.parseColorName("ghostwhite");
      expect(color).toEqual({hex: "#f8f8ff", rgb: {r: 248, g: 248, b: 255}, hsl: {h: 240, s: 1, l: .99}});
    });

    it("Correctly parsed \"gold\" color", function () {
      var color = Parser.parseColorName("gold");
      expect(color).toEqual({hex: "#ffd700", rgb: {r: 255, g: 215, b: 0}, hsl: {h: 51, s: 1, l: .5}});
    });

    it("Correctly parsed \"goldenrod\" color", function () {
      var color = Parser.parseColorName("goldenrod");
      expect(color).toEqual({hex: "#daa520", rgb: {r: 218, g: 165, b: 32}, hsl: {h: 43, s: .74, l: .49}});
    });

    it("Correctly parsed \"greenyellow\" color", function () {
      var color = Parser.parseColorName("greenyellow");
      expect(color).toEqual({hex: "#adff2f", rgb: {r: 173, g: 255, b: 47}, hsl: {h: 84, s: 1, l: .59}});
    });

    it("Correctly parsed \"grey\" color", function () {
      var color = Parser.parseColorName("grey");
      expect(color).toEqual({hex: "#808080", rgb: {r: 128, g: 128, b: 128}, hsl: {h: 0, s: 0, l: .5}});
    });

    it("Correctly parsed \"honeydew\" color", function () {
      var color = Parser.parseColorName("honeydew");
      expect(color).toEqual({hex: "#f0fff0", rgb: {r: 240, g: 255, b: 240}, hsl: {h: 120, s: 1, l: .97}});
    });

    it("Correctly parsed \"hotpink\" color", function () {
      var color = Parser.parseColorName("hotpink");
      expect(color).toEqual({hex: "#ff69b4", rgb: {r: 255, g: 105, b: 180}, hsl: {h: 330, s: 1, l: .71}});
    });

    it("Correctly parsed \"indianred\" color", function () {
      var color = Parser.parseColorName("indianred");
      expect(color).toEqual({hex: "#cd5c5c", rgb: {r: 205, g: 92, b: 92}, hsl: {h: 0, s: .53, l: .58}});
    });

    it("Correctly parsed \"indigo\" color", function () {
      var color = Parser.parseColorName("indigo");
      expect(color).toEqual({hex: "#4b0082", rgb: {r: 75, g: 0, b: 130}, hsl: {h: 275, s: 1, l: .25}});
    });

    it("Correctly parsed \"ivory\" color", function () {
      var color = Parser.parseColorName("ivory");
      expect(color).toEqual({hex: "#fffff0", rgb: {r: 255, g: 255, b: 240}, hsl: {h: 60, s: 1, l: .97}});
    });

    it("Correctly parsed \"khaki\" color", function () {
      var color = Parser.parseColorName("khaki");
      expect(color).toEqual({hex: "#f0e68c", rgb: {r: 240, g: 230, b: 140}, hsl: {h: 54, s: .77, l: .75}});
    });

    it("Correctly parsed \"lavender\" color", function () {
      var color = Parser.parseColorName("lavender");
      expect(color).toEqual({hex: "#e6e6fa", rgb: {r: 230, g: 230, b: 250}, hsl: {h: 240, s: .67, l: .94}});
    });

    it("Correctly parsed \"lavenderblush\" color", function () {
      var color = Parser.parseColorName("lavenderblush");
      expect(color).toEqual({hex: "#fff0f5", rgb: {r: 255, g: 240, b: 245}, hsl: {h: 340, s: 1, l: .97}});
    });

    it("Correctly parsed \"lawngreen\" color", function () {
      var color = Parser.parseColorName("lawngreen");
      expect(color).toEqual({hex: "#7cfc00", rgb: {r: 124, g: 252, b: 0}, hsl: {h: 90, s: 1, l: .49}});
    });

    it("Correctly parsed \"lemonchiffon\" color", function () {
      var color = Parser.parseColorName("lemonchiffon");
      expect(color).toEqual({hex: "#fffacd", rgb: {r: 255, g: 250, b: 205}, hsl: {h: 54, s: 1, l: .9}});
    });

    it("Correctly parsed \"lightblue\" color", function () {
      var color = Parser.parseColorName("lightblue");
      expect(color).toEqual({hex: "#add8e6", rgb: {r: 173, g: 216, b: 230}, hsl: {h: 195, s: .53, l: .79}});
    });

    it("Correctly parsed \"lightcoral\" color", function () {
      var color = Parser.parseColorName("lightcoral");
      expect(color).toEqual({hex: "#f08080", rgb: {r: 240, g: 128, b: 128}, hsl: {h: 0, s: .79, l: .72}});
    });

    it("Correctly parsed \"lightcyan\" color", function () {
      var color = Parser.parseColorName("lightcyan");
      expect(color).toEqual({hex: "#e0ffff", rgb: {r: 224, g: 255, b: 255}, hsl: {h: 180, s: 1, l: .94}});
    });

    it("Correctly parsed \"lightgoldenrodyellow\" color", function () {
      var color = Parser.parseColorName("lightgoldenrodyellow");
      expect(color).toEqual({hex: "#fafad2", rgb: {r: 250, g: 250, b: 210}, hsl: {h: 60, s: .8, l: .9}});
    });

    it("Correctly parsed \"lightgray\" color", function () {
      var color = Parser.parseColorName("lightgray");
      expect(color).toEqual({hex: "#d3d3d3", rgb: {r: 211, g: 211, b: 211}, hsl: {h: 0, s: 0, l: .83}});
    });

    it("Correctly parsed \"lightgrey\" color", function () {
      var color = Parser.parseColorName("lightgrey");
      expect(color).toEqual({hex: "#d3d3d3", rgb: {r: 211, g: 211, b: 211}, hsl: {h: 0, s: 0, l: .83}});
    });

    it("Correctly parsed \"lightgreen\" color", function () {
      var color = Parser.parseColorName("lightgreen");
      expect(color).toEqual({hex: "#90ee90", rgb: {r: 144, g: 238, b: 144}, hsl: {h: 120, s: .73, l: .75}});
    });

    it("Correctly parsed \"lightpink\" color", function () {
      var color = Parser.parseColorName("lightpink");
      expect(color).toEqual({hex: "#ffb6c1", rgb: {r: 255, g: 182, b: 193}, hsl: {h: 351, s: 1, l: .86}});
    });

    it("Correctly parsed \"lightsalmon\" color", function () {
      var color = Parser.parseColorName("lightsalmon");
      expect(color).toEqual({hex: "#ffa07a", rgb: {r: 255, g: 160, b: 122}, hsl: {h: 17, s: 1, l: .74}});
    });

    it("Correctly parsed \"lightseagreen\" color", function () {
      var color = Parser.parseColorName("lightseagreen");
      expect(color).toEqual({hex: "#20b2aa", rgb: {r: 32, g: 178, b: 170}, hsl: {h: 177, s: .7, l: .41}});
    });

    it("Correctly parsed \"lightskyblue\" color", function () {
      var color = Parser.parseColorName("lightskyblue");
      expect(color).toEqual({hex: "#87cefa", rgb: {r: 135, g: 206, b: 250}, hsl: {h: 203, s: .92, l: .75}});
    });

    it("Correctly parsed \"lightslategray\" color", function () {
      var color = Parser.parseColorName("lightslategray");
      expect(color).toEqual({hex: "#778899", rgb: {r: 119, g: 136, b: 153}, hsl: {h: 210, s: .14, l: .53}});
    });

    it("Correctly parsed \"lightslategrey\" color", function () {
      var color = Parser.parseColorName("lightslategrey");
      expect(color).toEqual({hex: "#778899", rgb: {r: 119, g: 136, b: 153}, hsl: {h: 210, s: .14, l: .53}});
    });

    it("Correctly parsed \"lightyellow\" color", function () {
      var color = Parser.parseColorName("lightyellow");
      expect(color).toEqual({hex: "#ffffe0", rgb: {r: 255, g: 255, b: 224}, hsl: {h: 60, s: 1, l: .94}});
    });

    it("Correctly parsed \"limegreen\" color", function () {
      var color = Parser.parseColorName("limegreen");
      expect(color).toEqual({hex: "#32cd32", rgb: {r: 50, g: 205, b: 50}, hsl: {h: 120, s: .61, l: .5}});
    });

    it("Correctly parsed \"linen\" color", function () {
      var color = Parser.parseColorName("linen");
      expect(color).toEqual({hex: "#faf0e6", rgb: {r: 250, g: 240, b: 230}, hsl: {h: 30, s: .67, l: .94}});
    });

    it("Correctly parsed \"magenta\" color", function () {
      var color = Parser.parseColorName("magenta");
      expect(color).toEqual({hex: "#ff00ff", rgb: {r: 255, g: 0, b: 255}, hsl: {h: 300, s: 1, l: .5}});
    });

    it("Correctly parsed \"mediumaquamarine\" color", function () {
      var color = Parser.parseColorName("mediumaquamarine");
      expect(color).toEqual({hex: "#66cdaa", rgb: {r: 102, g: 205, b: 170}, hsl: {h: 160, s: .51, l: .6}});
    });

    it("Correctly parsed \"mediumblue\" color", function () {
      var color = Parser.parseColorName("mediumblue");
      expect(color).toEqual({hex: "#0000cd", rgb: {r: 0, g: 0, b: 205}, hsl: {h: 240, s: 1, l: .4}});
    });

    it("Correctly parsed \"mediumorchid\" color", function () {
      var color = Parser.parseColorName("mediumorchid");
      expect(color).toEqual({hex: "#ba55d3", rgb: {r: 186, g: 85, b: 211}, hsl: {h: 288, s: .59, l: .58}});
    });

    it("Correctly parsed \"mediumpurple\" color", function () {
      var color = Parser.parseColorName("mediumpurple");
      expect(color).toEqual({hex: "#9370db", rgb: {r: 147, g: 112, b: 219}, hsl: {h: 260, s: .6, l: .65}});
    });

    it("Correctly parsed \"mediumseagreen\" color", function () {
      var color = Parser.parseColorName("mediumseagreen");
      expect(color).toEqual({hex: "#3cb371", rgb: {r: 60, g: 179, b: 113}, hsl: {h: 147, s: .5, l: .47}});
    });

    it("Correctly parsed \"mediumslateblue\" color", function () {
      var color = Parser.parseColorName("mediumslateblue");
      expect(color).toEqual({hex: "#7b68ee", rgb: {r: 123, g: 104, b: 238}, hsl: {h: 249, s: .8, l: .67}});
    });

    it("Correctly parsed \"mediumspringgreen\" color", function () {
      var color = Parser.parseColorName("mediumspringgreen");
      expect(color).toEqual({hex: "#00fa9a", rgb: {r: 0, g: 250, b: 154}, hsl: {h: 157, s: 1, l: .49}});
    });

    it("Correctly parsed \"mediumturquoise\" color", function () {
      var color = Parser.parseColorName("mediumturquoise");
      expect(color).toEqual({hex: "#48d1cc", rgb: {r: 72, g: 209, b: 204}, hsl: {h: 178, s: .6, l: .55}});
    });

    it("Correctly parsed \"mediumvioletred\" color", function () {
      var color = Parser.parseColorName("mediumvioletred");
      expect(color).toEqual({hex: "#c71585", rgb: {r: 199, g: 21, b: 133}, hsl: {h: 322, s: .81, l: .43}});
    });

    it("Correctly parsed \"midnightblue\" color", function () {
      var color = Parser.parseColorName("midnightblue");
      expect(color).toEqual({hex: "#191970", rgb: {r: 25, g: 25, b: 112}, hsl: {h: 240, s: .64, l: .27}});
    });

    it("Correctly parsed \"mintcream\" color", function () {
      var color = Parser.parseColorName("mintcream");
      expect(color).toEqual({hex: "#f5fffa", rgb: {r: 245, g: 255, b: 250}, hsl: {h: 150, s: 1, l: .98}});
    });

    it("Correctly parsed \"mistyrose\" color", function () {
      var color = Parser.parseColorName("mistyrose");
      expect(color).toEqual({hex: "#ffe4e1", rgb: {r: 255, g: 228, b: 225}, hsl: {h: 6, s: 1, l: .94}});
    });

    it("Correctly parsed \"moccasin\" color", function () {
      var color = Parser.parseColorName("moccasin");
      expect(color).toEqual({hex: "#ffe4b5", rgb: {r: 255, g: 228, b: 181}, hsl: {h: 38, s: 1, l: .85}});
    });

    it("Correctly parsed \"navajowhite\" color", function () {
      var color = Parser.parseColorName("navajowhite");
      expect(color).toEqual({hex: "#ffdead", rgb: {r: 255, g: 222, b: 173}, hsl: {h: 36, s: 1, l: .84}});
    });

    it("Correctly parsed \"oldlace\" color", function () {
      var color = Parser.parseColorName("oldlace");
      expect(color).toEqual({hex: "#fdf5e6", rgb: {r: 253, g: 245, b: 230}, hsl: {h: 39, s: .85, l: .95}});
    });

    it("Correctly parsed \"olivedrab\" color", function () {
      var color = Parser.parseColorName("olivedrab");
      expect(color).toEqual({hex: "#6b8e23", rgb: {r: 107, g: 142, b: 35}, hsl: {h: 80, s: .6, l: .35}});
    });

    it("Correctly parsed \"orangered\" color", function () {
      var color = Parser.parseColorName("orangered");
      expect(color).toEqual({hex: "#ff4500", rgb: {r: 255, g: 69, b: 0}, hsl: {h: 16, s: 1, l: .5}});
    });

    it("Correctly parsed \"orchid\" color", function () {
      var color = Parser.parseColorName("orchid");
      expect(color).toEqual({hex: "#da70d6", rgb: {r: 218, g: 112, b: 214}, hsl: {h: 302, s: .59, l: .65}});
    });

    it("Correctly parsed \"palegoldenrod\" color", function () {
      var color = Parser.parseColorName("palegoldenrod");
      expect(color).toEqual({hex: "#eee8aa", rgb: {r: 238, g: 232, b: 170}, hsl: {h: 55, s: .67, l: .80}});
    });

    it("Correctly parsed \"palegreen\" color", function () {
      var color = Parser.parseColorName("palegreen");
      expect(color).toEqual({hex: "#98fb98", rgb: {r: 152, g: 251, b: 152}, hsl: {h: 120, s: .93, l: .79}});
    });

    it("Correctly parsed \"paleturquoise\" color", function () {
      var color = Parser.parseColorName("paleturquoise");
      expect(color).toEqual({hex: "#afeeee", rgb: {r: 175, g: 238, b: 238}, hsl: {h: 180, s: .65, l: .81}});
    });

    it("Correctly parsed \"palevioletred\" color", function () {
      var color = Parser.parseColorName("palevioletred");
      expect(color).toEqual({hex: "#db7093", rgb: {r: 219, g: 112, b: 147}, hsl: {h: 340, s: .6, l: .65}});
    });

    it("Correctly parsed \"papayawhip\" color", function () {
      var color = Parser.parseColorName("papayawhip");
      expect(color).toEqual({hex: "#ffefd5", rgb: {r: 255, g: 239, b: 213}, hsl: {h: 37, s: 1, l: .92}});
    });

    it("Correctly parsed \"peachpuff\" color", function () {
      var color = Parser.parseColorName("peachpuff");
      expect(color).toEqual({hex: "#ffdab9", rgb: {r: 255, g: 218, b: 185}, hsl: {h: 28, s: 1, l: .86}});
    });

    it("Correctly parsed \"peru\" color", function () {
      var color = Parser.parseColorName("peru");
      expect(color).toEqual({hex: "#cd853f", rgb: {r: 205, g: 133, b: 63}, hsl: {h: 30, s: .59, l: .53}});
    });

    it("Correctly parsed \"pink\" color", function () {
      var color = Parser.parseColorName("pink");
      expect(color).toEqual({hex: "#ffc0cb", rgb: {r: 255, g: 192, b: 203}, hsl: {h: 350, s: 1, l: .88}});
    });

    it("Correctly parsed \"plum\" color", function () {
      var color = Parser.parseColorName("plum");
      expect(color).toEqual({hex: "#dda0dd", rgb: {r: 221, g: 160, b: 221}, hsl: {h: 300, s: .47, l: .75}});
    });

    it("Correctly parsed \"powderblue\" color", function () {
      var color = Parser.parseColorName("powderblue");
      expect(color).toEqual({hex: "#b0e0e6", rgb: {r: 176, g: 224, b: 230}, hsl: {h: 187, s: .52, l: .8}});
    });

    it("Correctly parsed \"rosybrown\" color", function () {
      var color = Parser.parseColorName("rosybrown");
      expect(color).toEqual({hex: "#bc8f8f", rgb: {r: 188, g: 143, b: 143}, hsl: {h: 0, s: .25, l: .65}});
    });

    it("Correctly parsed \"royalblue\" color", function () {
      var color = Parser.parseColorName("royalblue");
      expect(color).toEqual({hex: "#4169e1", rgb: {r: 65, g: 105, b: 225}, hsl: {h: 225, s: .73, l: .57}});
    });

    it("Correctly parsed \"saddlebrown\" color", function () {
      var color = Parser.parseColorName("saddlebrown");
      expect(color).toEqual({hex: "#8b4513", rgb: {r: 139, g: 69, b: 19}, hsl: {h: 25, s: .76, l: .31}});
    });

    it("Correctly parsed \"salmon\" color", function () {
      var color = Parser.parseColorName("salmon");
      expect(color).toEqual({hex: "#fa8072", rgb: {r: 250, g: 128, b: 114}, hsl: {h: 6, s: .93, l: .71}});
    });

    it("Correctly parsed \"sandybrown\" color", function () {
      var color = Parser.parseColorName("sandybrown");
      expect(color).toEqual({hex: "#f4a460", rgb: {r: 244, g: 164, b: 96}, hsl: {h: 28, s: .87, l: .67}});
    });

    it("Correctly parsed \"seagreen\" color", function () {
      var color = Parser.parseColorName("seagreen");
      expect(color).toEqual({hex: "#2e8b57", rgb: {r: 46, g: 139, b: 87}, hsl: {h: 146, s: .5, l: .36}});
    });

    it("Correctly parsed \"seashell\" color", function () {
      var color = Parser.parseColorName("seashell");
      expect(color).toEqual({hex: "#fff5ee", rgb: {r: 255, g: 245, b: 238}, hsl: {h: 25, s: 1, l: .97}});
    });

    it("Correctly parsed \"sienna\" color", function () {
      var color = Parser.parseColorName("sienna");
      expect(color).toEqual({hex: "#a0522d", rgb: {r: 160, g: 82, b: 45}, hsl: {h: 19, s: .56, l: .4}});
    });

    it("Correctly parsed \"skyblue\" color", function () {
      var color = Parser.parseColorName("skyblue");
      expect(color).toEqual({hex: "#87ceeb", rgb: {r: 135, g: 206, b: 235}, hsl: {h: 197, s: .71, l: .73}});
    });

    it("Correctly parsed \"slateblue\" color", function () {
      var color = Parser.parseColorName("slateblue");
      expect(color).toEqual({hex: "#6a5acd", rgb: {r: 106, g: 90, b: 205}, hsl: {h: 248, s: .53, l: .58}});
    });

    it("Correctly parsed \"slategray\" color", function () {
      var color = Parser.parseColorName("slategray");
      expect(color).toEqual({hex: "#708090", rgb: {r: 112, g: 128, b: 144}, hsl: {h: 210, s: .13, l: .5}});
    });

    it("Correctly parsed \"slategrey\" color", function () {
      var color = Parser.parseColorName("slategrey");
      expect(color).toEqual({hex: "#708090", rgb: {r: 112, g: 128, b: 144}, hsl: {h: 210, s: .13, l: .5}});
    });

    it("Correctly parsed \"snow\" color", function () {
      var color = Parser.parseColorName("snow");
      expect(color).toEqual({hex: "#fffafa", rgb: {r: 255, g: 250, b: 250}, hsl: {h: 0, s: 1, l: .99}});
    });

    it("Correctly parsed \"springgreen\" color", function () {
      var color = Parser.parseColorName("springgreen");
      expect(color).toEqual({hex: "#00ff7f", rgb: {r: 0, g: 255, b: 127}, hsl: {h: 150, s: 1, l: .5}});
    });

    it("Correctly parsed \"steelblue\" color", function () {
      var color = Parser.parseColorName("steelblue");
      expect(color).toEqual({hex: "#4682b4", rgb: {r: 70, g: 130, b: 180}, hsl: {h: 207, s: .44, l: .49}});
    });

    it("Correctly parsed \"tan\" color", function () {
      var color = Parser.parseColorName("tan");
      expect(color).toEqual({hex: "#d2b48c", rgb: {r: 210, g: 180, b: 140}, hsl: {h: 34, s: .44, l: .69}});
    });

    it("Correctly parsed \"thistle\" color", function () {
      var color = Parser.parseColorName("thistle");
      expect(color).toEqual({hex: "#d8bfd8", rgb: {r: 216, g: 191, b: 216}, hsl: {h: 300, s: .24, l: .8}});
    });

    it("Correctly parsed \"tomato\" color", function () {
      var color = Parser.parseColorName("tomato");
      expect(color).toEqual({hex: "#ff6347", rgb: {r: 255, g: 99, b: 71}, hsl: {h: 9, s: 1, l: .64}});
    });

    it("Correctly parsed \"turquoise\" color", function () {
      var color = Parser.parseColorName("turquoise");
      expect(color).toEqual({hex: "#40e0d0", rgb: {r: 64, g: 224, b: 208}, hsl: {h: 174, s: .72, l: .56}});
    });

    it("Correctly parsed \"violet\" color", function () {
      var color = Parser.parseColorName("violet");
      expect(color).toEqual({hex: "#ee82ee", rgb: {r: 238, g: 130, b: 238}, hsl: {h: 300, s: .76, l: .72}});
    });

    it("Correctly parsed \"wheat\" color", function () {
      var color = Parser.parseColorName("wheat");
      expect(color).toEqual({hex: "#f5deb3", rgb: {r: 245, g: 222, b: 179}, hsl: {h: 39, s: .77, l: .83}});
    });

    it("Correctly parsed \"whitesmoke\" color", function () {
      var color = Parser.parseColorName("whitesmoke");
      expect(color).toEqual({hex: "#f5f5f5", rgb: {r: 245, g: 245, b: 245}, hsl: {h: 0, s: 0, l: .96}});
    });

    it("Correctly parsed \"yellowgreen\" color", function () {
      var color = Parser.parseColorName("yellowgreen");
      expect(color).toEqual({hex: "#9acd32", rgb: {r: 154, g: 205, b: 50}, hsl: {h: 80, s: .61, l: .5}});
    });

    it("Correctly parsed \"rebeccapurple\" color", function () {
      var color = Parser.parseColorName("rebeccapurple");
      expect(color).toEqual({hex: "#663399", rgb: {r: 102, g: 51, b: 153}, hsl: {h: 270, s: .5, l: .4}});
    });
  });

  describe("parseHex(color)", function () {
    it("Threw a TypeError when color was not a string", function () {
      expect(function () {
        Parser.parseHex(123)
      }).toThrowError(TypeError);
    });

    it("Threw an Error when color was not a hex string", function () {
      expect(function () {
        Parser.parseHex("rgb(0,0,0)")
      }).toThrowError(Error);
    });

    it("Successfully parsed a hex color in short form (#000)", function () {
      expect(Parser.parseHex("#000")).toEqual({
        hex: "#000",
        rgb: { r: 0, g: 0, b: 0 },
        hsl: { h: 0, s: 0, l: 0 }
      });
    });

    it("Successfully parsed a hex color in long form (#ffffff)", function () {
      expect(Parser.parseHex("#ffffff")).toEqual({
        hex: "#ffffff",
        rgb: { r: 255, g: 255, b: 255 },
        hsl: { h: 0, s: 0, l: 1 }
      });
    });
  });

  describe("parseRgb(color)", function () {
    it("Threw a TypeError when color was not a string", function () {
      expect(function () {
        Parser.parseRgb(123)
      }).toThrowError(TypeError);
    });

    it("Threw an Error when color was not a css rgb string", function () {
      expect(function () {
        Parser.parseRgb("rgb( 3 3,2")
      }).toThrowError(Error);
    });

    it("Successfully parsed valid css rgb color", function () {
      expect(Parser.parseRgb("rgb( 128, 128, 128 )")).toEqual({
        hex: "#808080",
        rgb: { r: 128, g: 128, b: 128 },
        hsl: { h: 0, s: 0, l: .5 }
      });
    })
  });
});