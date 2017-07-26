var Parser = ColorTools.Parser;

describe("Parser Helper", function() {
    describe("parseColorName(value)", function() {
        it("Correctly parsed \"black\" color", function () {
            var color = Parser.parseColorName("black");
            expect(color).toEqual({ hex: "#000", rgb: {r:0, g:0, b:0}, hsl: {h:0, s:0, l:0}});
        });

        it("Correctly parsed \"silver\" color", function () {
            var color = Parser.parseColorName("silver");
            expect(color).toEqual({ hex: "#c0c0c0", rgb: {r:192, g:192, b:192}, hsl: {h:0, s:0, l:0.75}});
        });

        it("Correctly parsed \"gray\" color", function () {
            var color = Parser.parseColorName("gray");
            expect(color).toEqual({ hex: "#808080", rgb: {r:128, g:128, b:128}, hsl: {h:0, s:0, l:0.5}});
        });

        it("Correctly parsed \"white\" color", function () {
            var color = Parser.parseColorName("white");
            expect(color).toEqual({ hex: "#fff", rgb: {r:255, g:255, b:255}, hsl: {h:0, s:0, l:1}});
        });

        it("Correctly parsed \"maroon\" color", function () {
            var color = Parser.parseColorName("maroon");
            expect(color).toEqual({ hex: "#800000", rgb: {r:128, g:0, b:0}, hsl: {h:0, s:1, l:.25}});
        });

        it("Correctly parsed \"red\" color", function () {
            var color = Parser.parseColorName("red");
            expect(color).toEqual({ hex: "#ff0000", rgb: {r:255, g:0, b:0}, hsl: {h:0, s:1, l:.5}});
        });

        it("Correctly parsed \"purple\" color", function () {
            var color = Parser.parseColorName("purple");
            expect(color).toEqual({ hex: "#800080", rgb: {r:128, g:0, b:128}, hsl: {h:300, s:1, l:.25}});
        });

        it("Correctly parsed \"fuchsia\" color", function () {
            var color = Parser.parseColorName("fuchsia");
            expect(color).toEqual({ hex: "#ff00ff", rgb: {r:255, g:0, b:255}, hsl: {h:300, s:1, l:.5}});
        });

        it("Correctly parsed \"green\" color", function () {
            var color = Parser.parseColorName("green");
            expect(color).toEqual({ hex: "#008000", rgb: {r:0, g:128, b:0}, hsl: {h:120, s:1, l:.25}});
        });

        it("Correctly parsed \"lime\" color", function () {
            var color = Parser.parseColorName("lime");
            expect(color).toEqual({ hex: "#00ff00", rgb: {r:0, g:255, b:0}, hsl: {h:120, s:1, l:.5}});
        });

        it("Correctly parsed \"olive\" color", function () {
            var color = Parser.parseColorName("olive");
            expect(color).toEqual({ hex: "#808000", rgb: {r:128, g:128, b:0}, hsl: {h:60, s:1, l:.25}});
        });

        it("Correctly parsed \"yellow\" color", function () {
            var color = Parser.parseColorName("yellow");
            expect(color).toEqual({ hex: "#ffff00", rgb: {r:255, g:255, b:0}, hsl: {h:60, s:1, l:.5}});
        });

        it("Correctly parsed \"navy\" color", function () {
            var color = Parser.parseColorName("navy");
            expect(color).toEqual({ hex: "#000080", rgb: {r:0, g:0, b:128}, hsl: {h:240, s:1, l:.25}});
        });

        it("Correctly parsed \"blue\" color", function () {
            var color = Parser.parseColorName("blue");
            expect(color).toEqual({ hex: "#0000ff", rgb: {r:0, g:0, b:255}, hsl: {h:240, s:1, l:.5}});
        });

        it("Correctly parsed \"teal\" color", function () {
            var color = Parser.parseColorName("teal");
            expect(color).toEqual({ hex: "#008080", rgb: {r:0, g:128, b:128}, hsl: {h:180, s:1, l:.25}});
        });

        it("Correctly parsed \"aqua\" color", function () {
            var color = Parser.parseColorName("aqua");
            expect(color).toEqual({ hex: "#00ffff", rgb: {r:0, g:255, b:255}, hsl: {h:180, s:1, l:.5}});
        });

        it("Correctly parsed \"aliceblue\" color", function () {
            var color = Parser.parseColorName("aliceblue");
            expect(color).toEqual({ hex: "#f0f8ff", rgb: {r:240, g:248, b:255}, hsl: {h:208, s:1, l:.97}});
        });

        it("Correctly parsed \"antiquewhite\" color", function () {
            var color = Parser.parseColorName("antiquewhite");
            expect(color).toEqual({ hex: "#faebd7", rgb: {r:250, g:235, b:215}, hsl: {h:34, s:.78, l:.91}});
        });

        it("Correctly parsed \"aquamarine\" color", function () {
            var color = Parser.parseColorName("aquamarine");
            expect(color).toEqual({ hex: "#7fffd4", rgb: {r:127, g:255, b:212}, hsl: {h:160, s:1, l:.75}});
        });

        it("Correctly parsed \"azure\" color", function () {
            var color = Parser.parseColorName("azure");
            expect(color).toEqual({ hex: "#f0ffff", rgb: {r:240, g:255, b:255}, hsl: {h:180, s:1, l:.97}});
        });

        it("Correctly parsed \"beige\" color", function () {
            var color = Parser.parseColorName("beige");
            expect(color).toEqual({ hex: "#f5f5dc", rgb: {r:245, g:245, b:220}, hsl: {h:60, s:.56, l:.91}});
        });

        it("Correctly parsed \"bisque\" color", function () {
            var color = Parser.parseColorName("bisque");
            expect(color).toEqual({ hex: "#ffe4c4", rgb: {r:255, g:228, b:196}, hsl: {h:33, s:1, l:.88}});
        });

        it("Correctly parsed \"blanchedalmond\" color", function () {
            var color = Parser.parseColorName("blanchedalmond");
            expect(color).toEqual({ hex: "#ffebcd", rgb: {r:255, g:235, b:205}, hsl: {h:36, s:1, l:.9}});
        });

        it("Correctly parsed \"blueviolet\" color", function () {
            var color = Parser.parseColorName("blueviolet");
            expect(color).toEqual({ hex: "#8a2be2", rgb: {r:138, g:43, b:226}, hsl: {h:271, s:.76, l:.53}});
        });

        it("Correctly parsed \"brown\" color", function () {
            var color = Parser.parseColorName("brown");
            expect(color).toEqual({ hex: "#a52a2a", rgb: {r:165, g:42, b:42}, hsl: {h:0, s:.59, l:.41}});
        });

        it("Correctly parsed \"burlywood\" color", function () {
            var color = Parser.parseColorName("burlywood");
            expect(color).toEqual({ hex: "#deb887", rgb: {r:222, g:184, b:135}, hsl: {h:34, s:.57, l:.7}});
        });

        it("Correctly parsed \"cadetblue\" color", function () {
            var color = Parser.parseColorName("cadetblue");
            expect(color).toEqual({ hex: "#5f9ea0", rgb: {r:95, g:158, b:160}, hsl: {h:182, s:.25, l:.5}});
        });

        it("Correctly parsed \"chartreuse\" color", function () {
            var color = Parser.parseColorName("chartreuse");
            expect(color).toEqual({ hex: "#7fff00", rgb: {r:127, g:255, b:0}, hsl: {h:90, s:1, l:.5}});
        });

        it("Correctly parsed \"chocolate\" color", function () {
            var color = Parser.parseColorName("chocolate");
            expect(color).toEqual({ hex: "#d2691e", rgb: {r:210, g:105, b:30}, hsl: {h:25, s:.75, l:.47}});
        });

        it("Correctly parsed \"coral\" color", function () {
            var color = Parser.parseColorName("coral");
            expect(color).toEqual({ hex: "#ff7f50", rgb: {r:255, g:127, b:80}, hsl: {h:16, s:1, l:.66}});
        });

        it("Correctly parsed \"cornflowerblue\" color", function () {
            var color = Parser.parseColorName("cornflowerblue");
            expect(color).toEqual({ hex: "#6495ed", rgb: {r:100, g:149, b:237}, hsl: {h:219, s:.79, l:.66}});
        });

        it("Correctly parsed \"cornsilk\" color", function () {
            var color = Parser.parseColorName("cornsilk");
            expect(color).toEqual({ hex: "#fff8dc", rgb: {r:255, g:248, b:220}, hsl: {h:48, s:1, l:.93}});
        });

        it("Correctly parsed \"crimson\" color", function () {
            var color = Parser.parseColorName("crimson");
            expect(color).toEqual({ hex: "#dc143c", rgb: {r:220, g:20, b:60}, hsl: {h:348, s:.83, l:.47}});
        });

        it("Correctly parsed \"cyan\" color", function () {
            var color = Parser.parseColorName("cyan");
            expect(color).toEqual({ hex: "#00ffff", rgb: {r:0, g:255, b:255}, hsl: {h:180, s:1, l:.5}});
        });

        it("Correctly parsed \"darkblue\" color", function () {
            var color = Parser.parseColorName("darkblue");
            expect(color).toEqual({ hex: "#00008b", rgb: {r:0, g:0, b:139}, hsl: {h:240, s:1, l:.27}});
        });

        it("Correctly parsed \"darkcyan\" color", function () {
            var color = Parser.parseColorName("darkcyan");
            expect(color).toEqual({ hex: "#008b8b", rgb: {r:0, g:139, b:139}, hsl: {h:180, s:1, l:.27}});
        });

        it("Correctly parsed \"darkgoldenrod\" color", function () {
            var color = Parser.parseColorName("darkgoldenrod");
            expect(color).toEqual({ hex: "#b8860b", rgb: {r:184, g:134, b:11}, hsl: {h:43, s:.89, l:.38}});
        });

        it("Correctly parsed \"darkgray\" color", function () {
            var color = Parser.parseColorName("darkgray");
            expect(color).toEqual({ hex: "#a9a9a9", rgb: {r:169, g:169, b:169}, hsl: {h:0, s: 0, l: 0.66}});
        });

        it("Correctly parsed \"darkgrey\" color", function () {
            var color = Parser.parseColorName("darkgrey");
            expect(color).toEqual({ hex: "#a9a9a9", rgb: {r:169, g:169, b:169}, hsl: {h:0, s: 0, l: 0.66}});
        });

        it("Correctly parsed \"darkgreen\" color", function () {
            var color = Parser.parseColorName("darkgreen");
            expect(color).toEqual({ hex: "#006400", rgb: {r:0, g:100, b:0}, hsl: {h:120, s: 1, l: 0.2}});
        });

        it("Correctly parsed \"darkkhaki\" color", function () {
            var color = Parser.parseColorName("darkkhaki");
            expect(color).toEqual({ hex: "#bdb76b", rgb: {r:189, g:183, b:107}, hsl: {h:56, s: .38, l: .58}});
        });

        it("Correctly parsed \"darkmagenta\" color", function () {
            var color = Parser.parseColorName("darkmagenta");
            expect(color).toEqual({ hex: "#8b008b", rgb: {r:139, g:0, b:139}, hsl: {h:300, s: 1, l: .27}});
        });

        it("Correctly parsed \"darkolivegreen\" color", function () {
            var color = Parser.parseColorName("darkolivegreen");
            expect(color).toEqual({ hex: "#556b2f", rgb: {r:85, g:107, b:47}, hsl: {h:82, s: .39, l: .3}});
        });

        it("Correctly parsed \"darkorange\" color", function () {
            var color = Parser.parseColorName("darkorange");
            expect(color).toEqual({ hex: "#ff8c00", rgb: {r:255, g:140, b:0}, hsl: {h:33, s: 1, l: .5}});
        });

        it("Correctly parsed \"darkorchid\" color", function () {
            var color = Parser.parseColorName("darkorchid");
            expect(color).toEqual({ hex: "#9932cc", rgb: {r:153, g:50, b:204}, hsl: {h:280, s: .61, l: .5}});
        });

        it("Correctly parsed \"darkred\" color", function () {
            var color = Parser.parseColorName("darkred");
            expect(color).toEqual({ hex: "#8b0000", rgb: {r:139, g:0, b:0}, hsl: {h:0, s: 1, l: .27}});
        });

        it("Correctly parsed \"darksalmon\" color", function () {
            var color = Parser.parseColorName("darksalmon");
            expect(color).toEqual({ hex: "#e9967a", rgb: {r:233, g:150, b:122}, hsl: {h:15, s: .72, l: .7}});
        });

        it("Correctly parsed \"darkseagreen\" color", function () {
            var color = Parser.parseColorName("darkseagreen");
            expect(color).toEqual({ hex: "#8fbc8f", rgb: {r:143, g:188, b:143}, hsl: {h:120, s: .25, l: .65}});
        });

        it("Correctly parsed \"darkslateblue\" color", function () {
            var color = Parser.parseColorName("darkslateblue");
            expect(color).toEqual({ hex: "#483d8b", rgb: {r:72, g:61, b:139}, hsl: {h:248, s: .39, l: .39}});
        });

        it("Correctly parsed \"darkslategray\" color", function () {
            var color = Parser.parseColorName("darkslategray");
            expect(color).toEqual({ hex: "#2f4f4f", rgb: {r:47, g:79, b:79}, hsl: {h:180, s: .25, l: .25}});
        });

        it("Correctly parsed \"darkslategrey\" color", function () {
            var color = Parser.parseColorName("darkslategrey");
            expect(color).toEqual({ hex: "#2f4f4f", rgb: {r:47, g:79, b:79}, hsl: {h:180, s: .25, l: .25}});
        });

        it("Correctly parsed \"darkturquoise\" color", function () {
            var color = Parser.parseColorName("darkturquoise");
            expect(color).toEqual({ hex: "#00ced1", rgb: {r:0, g:206, b:209}, hsl: {h:181, s: 1, l: .41}});
        });

        it("Correctly parsed \"darkviolet\" color", function () {
            var color = Parser.parseColorName("darkviolet");
            expect(color).toEqual({ hex: "#9400d3", rgb: {r:148, g:0, b:211}, hsl: {h:282, s: 1, l: .41}});
        });

        it("Correctly parsed \"deeppink\" color", function () {
            var color = Parser.parseColorName("deeppink");
            expect(color).toEqual({ hex: "#ff1493", rgb: {r:255, g:20, b:147}, hsl: {h:328, s: 1, l: .54}});
        });

        it("Correctly parsed \"deepskyblue\" color", function () {
            var color = Parser.parseColorName("deepskyblue");
            expect(color).toEqual({ hex: "#00bfff", rgb: {r:0, g:191, b:255}, hsl: {h:195, s: 1, l: .5}});
        });

        it("Correctly parsed \"dimgray\" color", function () {
            var color = Parser.parseColorName("dimgray");
            expect(color).toEqual({ hex: "#696969", rgb: {r:105, g:105, b:105}, hsl: {h:0, s: 0, l: .41}});
        });

        it("Correctly parsed \"dimgrey\" color", function () {
            var color = Parser.parseColorName("dimgrey");
            expect(color).toEqual({ hex: "#696969", rgb: {r:105, g:105, b:105}, hsl: {h:0, s: 0, l: .41}});
        });

        it("Correctly parsed \"dodgerblue\" color", function () {
            var color = Parser.parseColorName("dodgerblue");
            expect(color).toEqual({ hex: "#1e90ff", rgb: {r:30, g:144, b:255}, hsl: {h:210, s: 1, l: .56}});
        });

        it("Correctly parsed \"firebrick\" color", function () {
            var color = Parser.parseColorName("firebrick");
            expect(color).toEqual({ hex: "#b22222", rgb: {r:178, g:34, b:34}, hsl: {h:0, s: .68, l: .42}});
        });

        it("Correctly parsed \"floralwhite\" color", function () {
            var color = Parser.parseColorName("floralwhite");
            expect(color).toEqual({ hex: "#fffaf0", rgb: {r:255, g:250, b:240}, hsl: {h:40, s: 1, l: .97}});
        });

        it("Correctly parsed \"forestgreen\" color", function () {
            var color = Parser.parseColorName("forestgreen");
            expect(color).toEqual({ hex: "#228b22", rgb: {r:34, g:139, b:34}, hsl: {h:120, s: .61, l: .34}});
        });

        it("Correctly parsed \"gainsboro\" color", function () {
            var color = Parser.parseColorName("gainsboro");
            expect(color).toEqual({ hex: "#dcdcdc", rgb: {r:220, g:220, b:220}, hsl: {h:0, s: 0, l: .86}});
        });

        it("Correctly parsed \"ghostwhite\" color", function () {
            var color = Parser.parseColorName("ghostwhite");
            expect(color).toEqual({ hex: "#f8f8ff", rgb: {r:248, g:248, b:255}, hsl: {h:240, s: 1, l: .99}});
        });

        it("Correctly parsed \"gold\" color", function () {
            var color = Parser.parseColorName("gold");
            expect(color).toEqual({ hex: "#ffd700", rgb: {r:255, g:215, b:0}, hsl: {h:51, s: 1, l: .5}});
        });

        it("Correctly parsed \"goldenrod\" color", function () {
            var color = Parser.parseColorName("goldenrod");
            expect(color).toEqual({ hex: "#daa520", rgb: {r:218, g:165, b:32}, hsl: {h:43, s: .74, l: .49}});
        });

        it("Correctly parsed \"greenyellow\" color", function () {
            var color = Parser.parseColorName("greenyellow");
            expect(color).toEqual({ hex: "#adff2f", rgb: {r:173, g:255, b:47}, hsl: {h:84, s: 1, l: .59}});
        });

        it("Correctly parsed \"grey\" color", function () {
            var color = Parser.parseColorName("grey");
            expect(color).toEqual({ hex: "#808080", rgb: {r:128, g:128, b:128}, hsl: {h:0, s: 0, l: .5}});
        });

        it("Correctly parsed \"honeydew\" color", function () {
            var color = Parser.parseColorName("honeydew");
            expect(color).toEqual({ hex: "#f0fff0", rgb: {r:240, g:255, b:240}, hsl: {h:120, s: 1, l: .97}});
        });

        it("Correctly parsed \"hotpink\" color", function () {
            var color = Parser.parseColorName("hotpink");
            expect(color).toEqual({ hex: "#ff69b4", rgb: {r:255, g:105, b:180}, hsl: {h:330, s: 1, l: .71}});
        });

        it("Correctly parsed \"indianred\" color", function () {
            var color = Parser.parseColorName("indianred");
            expect(color).toEqual({ hex: "#cd5c5c", rgb: {r:205, g:92, b:92}, hsl: {h:0, s: .53, l: .58}});
        });

        it("Correctly parsed \"indigo\" color", function () {
            var color = Parser.parseColorName("indigo");
            expect(color).toEqual({ hex: "#4b0082", rgb: {r:75, g:0, b:130}, hsl: {h:275, s: 1, l: .25}});
        });

        it("Correctly parsed \"ivory\" color", function () {
            var color = Parser.parseColorName("ivory");
            expect(color).toEqual({ hex: "#fffff0", rgb: {r:255, g:255, b:240}, hsl: {h:60, s: 1, l: .97}});
        });

        it("Correctly parsed \"khaki\" color", function () {
            var color = Parser.parseColorName("khaki");
            expect(color).toEqual({ hex: "#f0e68c", rgb: {r:240, g:230, b:140}, hsl: {h:54, s: .77, l: .75}});
        });

        it("Correctly parsed \"lavender\" color", function () {
            var color = Parser.parseColorName("lavender");
            expect(color).toEqual({ hex: "#e6e6fa", rgb: {r:230, g:230, b:250}, hsl: {h:240, s: .67, l: .94}});
        });

        it("Correctly parsed \"lavenderblush\" color", function () {
            var color = Parser.parseColorName("lavenderblush");
            expect(color).toEqual({ hex: "#fff0f5", rgb: {r:255, g:240, b:245}, hsl: {h:340, s: 1, l: .97}});
        });
    });

});