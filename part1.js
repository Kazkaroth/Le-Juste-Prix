let secondes = 30;
let prix = 0;
let paris = null;
let prixMax = 1000;
let isPlay = true;
const couleurs = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];




$(document).ready(function () {
    $("#commencer").click(function () {

        $("body").css("background-color", function () {
            return couleurs[Math.floor(Math.random() * couleurs.length)];
            });

        $("#nombre").val('');

        secondes = 30;

        $(".prixMax").html(prixMax);

        prix = Math.floor(Math.random() * prixMax);
        isPlay = true;
        $(".reponse").html("Trouvez le Juste Prix !");

        $("#paris").css(
            {
                "visibility" : "visible",
                "opacity": "1"
            });

        let chrono = setInterval(function () {
            if (secondes === 0){
                clearInterval(chrono);
                $(".reponse").html("Perdu !");
                $("#paris").css(
                    {
                        "visibility" : "hidden",
                        "opacity": "0"
                    });
                isPlay = false;
            }
            else if (isPlay){
             secondes--;
                $(".chrono").html(secondes);
            }
            else {
             clearInterval(chrono)
             }

        }, 1000);
    });

    $("#paris").submit(function (e) {
        if (isPlay) {
            paris = $("#nombre").val();

            if (paris == prix) {
                $(".reponse").html("Félicitation tu as gagné un cookie ! Vas trouvez du taf maintenant !");
                $("#paris").css(
                    {
                        "visibility" : "hidden",
                        "opacity": "0"
                    });
                isPlay = false;
            }
            else if (paris < prix) {
                $(".reponse").html("Plus grand !");
            }
            else {
                $(".reponse").html("Plus petit !");
            }

            $("#nombre").val('');
        }
        e.preventDefault();
    });



});