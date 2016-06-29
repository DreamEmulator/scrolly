/*
   _____      __                 _____                 ____
  / ___/___  / /___  ______     / ___/______________  / / /_  __
  \__ \/ _ \/ __/ / / / __ \    \__ \/ ___/ ___/ __ \/ / / / / /
 ___/ /  __/ /_/ /_/ / /_/ /   ___/ / /__/ /  / /_/ / / / /_/ /
/____/\___/\__/\__,_/ .___/   /____/\___/_/   \____/_/_/\__, /
                   /_/                                 /____/
*/

var scrolly = 1;

//Preload images

$.preloadImages = function () {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
}

$.preloadImages("backgrounds/haydn/HaydnA1.jpg", "backgrounds/haydn/HaydnA2.jpg", "backgrounds/haydn/HaydnA3.jpg", "backgrounds/haydn/HaydnA4.jpg", "backgrounds/haydn/HaydnA5.jpg", "backgrounds/haydn/HaydnA6.jpg", "backgrounds/adele/AdeleA1.jpg", "backgrounds/adele/AdeleA2.jpg", "backgrounds/adele/AdeleA3.jpg", "backgrounds/adele/AdeleA4.jpg", "backgrounds/adele/AdeleA5.jpg", "backgrounds/adele/AdeleA6.jpg");

//Populate with Text

var enterText = function () {
    //HOME
    if (scrolly === 1) {

        $(".titleButton").html("Home");
        //        pagina 1
        $(".titleBox1").html("Welkom bij Scrolly").removeClass("soulFont").removeClass("classicFont");
        $(".contentBox1").html("De interactieve Muziekwervaring van de Bibliotheek");
        //        pagina 2
        $(".titleBox2").html("Makkelijk").removeClass("soulFont").removeClass("classicFont");
        $(".contentBox2").html("Door te scrollen ontdek je interesante feitjes en krijg leuke inzichten in muziek. ");
        //        pagina 3
        $(".titleBox3").html("Ontdekken").removeClass("soulFont").removeClass("classicFont");
        $(".contentBox3").html("Als je rechtsboven op de titel klikt vind je een overzicht van al onze Scrolly&apos;s");
        //        pagina 4
        $(".titleBox4").html("Spelen met de Stream").removeClass("soulFont").removeClass("classicFont");
        $(".contentBox4").html("Daar kan je ook de stream beluisteren.");
        //        pagina 5
        $(".titleBox5").html("Kom vaak terug en je zult nieuwe Scrolly&apos;s ontdekken...").removeClass("soulFont").removeClass("classicFont");
        $(".contentBox5").html("De interactieve Muziekwervaring van de Bibliotheek");
        //        pagina 6
        $(".titleBox6").html("Veel plezier!").removeClass("soulFont").removeClass("classicFont");
        $(".contentBox6").html("Geniet van muziek en deel je favoriete Scrolly&apos;s met je vrienden...");
    }

    //ADELE
    else if (scrolly === 2) {

        $(".titleButton").html("Adele");
        //        pagina 1
        $(".titleBox1").html("De Invloeden van Adele").removeClass("classicFont").addClass("soulFont");
        $(".contentBox1").html("Van Motown to Amy Winehouse");
        //        pagina 2
        $(".titleBox2").html("Motown").removeClass("classicFont").addClass("soulFont");
        $(".contentBox2").html('&apos;The sound of young America&apos; was de slogan waarmee het label Motown in de jaren 60 de wereld veroverde. En Motown h&aacute;d een eigen geluid: poppy soul met korte liedjes met refreinen die je zo meefloot. <div class="mwPlugin"><iframe width="310" height="34" src="https://www.muziekweb.nl/Embed/JK174356-0001" frameborder="no" scrolling="no" allowtransparency="true"></iframe></div> ');
        //        pagina 3
        $(".titleBox3").html("Blue Eyed Soul").removeClass("classicFont").addClass("soulFont");
        $(".contentBox3").html('Toen blanke artiesten Soul omarmden, werd de term &apos;blue eyed soul&apos; bedacht. In de jaren 70 en 80 scoorden acts als Hall &amp; Oates, Paul Carrack en Simply Red wereldhits met hun gladde en commerci&euml;le sound.<div class="mwPlugin"><iframe width="310" height="34" src="https://www.muziekweb.nl/Embed/JK157624-0001" frameborder="no" scrolling="no" allowtransparency="true"></iframe></div> ');
        //        pagina 4
        $(".titleBox4").html("Neo Soul").removeClass("classicFont").addClass("soulFont");
        $(".contentBox4").html('In de jaren 90 pakten acts de authentieke soulsound weer op. Erykah Badu, D&apos;Angelo en The Roots brachten de sound van de jaren 60 bij een nieuwe generatie fans.<div class="mwPlugin"><iframe width="310" height="34" src="https://www.muziekweb.nl/Embed/JK99495-0012" frameborder="no" scrolling="no" allowtransparency="true"></iframe></div> ');
        //        pagina 5
        $(".titleBox5").html("Amy Winehouse").removeClass("classicFont").addClass("soulFont");
        $(".contentBox5").html('Amy Winehouse brak in 2006 door met haar album Back To Black. Samen met Adele zorgden ze voor een soul revival.<div class="mwPlugin"><iframe width="310" height="34" src="https://www.muziekweb.nl/Embed/JK138417-0005" frameborder="no" scrolling="no" allowtransparency="true"></iframe></div> ');
        //        pagina 6
        $(".titleBox6").html("Ontdek Meer").removeClass("classicFont").removeClass("soulFont");
        $(".contentBox6").html("<img src='backgrounds/adele/AdeleA7.jpg' class='pictogram'>Alles over soul <br> <img src='backgrounds/adele/AdeleA8.jpg' class='pictogram'>Soul Playlist <br> <img src='backgrounds/adele/AdeleA9.jpg' class='pictogram'>Andere Scrolly&apos;s");
    }

    //HAYDN
    else if (scrolly === 3) {

        $(".titleButton").text("Haydn");
        //        pagina 1
        $(".titleBox1").html("Weense Klassieke Stijl").removeClass("soulFont").addClass("classicFont");
        $(".contentBox1").html("Samen met Mozart en Beethoven stond Joseph Haydn (1732-1809) aan de wieg van de Weense klassieke stijl.");
        //        pagina 2
        $(".titleBox2").html("Opera&apos;s, Symfonie&euml;n en Kamermuziek").removeClass("soulFont").addClass("classicFont");
        $(".contentBox2").html("Tussen 1766 en 1790 werkte Haydn in dienst van een rijke Hongaarse graaf. <br>Haydn schreef voor zijn hof opera&apos;s, symfonie&euml;n en kamermuziek.");
        //        pagina 3
        $(".titleBox3").html("Haydn aan het hof").removeClass("soulFont").addClass("classicFont");
        $(".contentBox3").html("Na zijn tijd aan het hof ging Haydn twee keer naar Londen. <br>Daar schreef hij 12 beroemde symfonie&euml;n.");
        //        pagina 4
        $(".titleBox4").html("Strijkkwartetten").removeClass("soulFont").addClass("classicFont");
        $(".contentBox4").html("Haydn is ook geliefd om zijn strijkkwartetten. <br>Zoals de zonnige werken Sonnenquartette en Sonnenaufgang.");
        //        pagina 5
        $(".titleBox5").html("Laatste Jaren").removeClass("soulFont").addClass("classicFont");
        $(".contentBox5").html("In de laatste jaren van zijn leven schreef Haydn in Wenen een aantal grote werken.<br> Zoals de oratoria Die Sch&ouml;pfung en Die Jahreszeiten.");
        //        pagina 6
        $(".titleBox6").html("Ontdek meer over symfonie&euml;n!").removeClass("soulFont").removeClass("classicFont");
        $(".contentBox6").html("<img src='backgrounds/haydn/HaydnA7.jpg' class='pictogram'>Alles over symfonie&euml;n <br> <img src='backgrounds/haydn/HaydnA9.jpg' class='pictogram'>Haydn playlist <br> <img src='backgrounds/haydn/HaydnA8.jpg' class='pictogram'>Andere Scrolly&apos;s");
    }
};


//Get pages and setup canvas

var totalPages = 6



//    prompt("Hoeveel pagina's moet de scrolly worden?", "");

$(document).ready(function () {
    $("body").scrollTop(0);


    //    pageCheck();
    //    pageTurn();

    var scrollLength = (105 * totalPages) + "vh";

    $("body").css("height", scrollLength);


    //Create the Elements



    for (i = 1; i <= totalPages; i++) {

        var newTextBox = $("<div></div>").addClass("textBox " + i).attr("data-value", i);

        var newTitleBox = $("<h1></h1>").text(i).addClass("titleBox" + i).attr("data-value", i);

        var newContentBox = $("<p></p>").text("Lorem ipsum dolor sit amet, omnis oratio diceret ex sea. Eos saepe officiis at. An has malis partem primis. Pericula expetenda repudiandae mea te.").addClass("contentBox" + i).attr("data-value", i);

        //        var circle = "<div class='circle'></div>";

        var timeLine = $("#timeLine").append("<div class='circle " + i + "' data-value=" + i + "></div>");

        var newText = newTextBox.append(newTitleBox).append(newContentBox);


        $("#canvas").append(newText);
        enterText()
    }

    //Quo Vadis?

    $(".circle").click(
        function () {
            $("body").scrollTop(0);
            var quoVadis = (($(this).attr("data-value") - 0.5) * ($("#canvas").outerHeight(true)));
            console.log("Button clicked: " + quoVadis);
            $("body").scrollTop(quoVadis);
        }
    );

    console.log("ready!");
});

/*

   _____      __                 ______                 __  _
  / ___/___  / /___  ______     / ____/_  ______  _____/ /_(_)___  ____  _____
  \__ \/ _ \/ __/ / / / __ \   / /_  / / / / __ \/ ___/ __/ / __ \/ __ \/ ___/
 ___/ /  __/ /_/ /_/ / /_/ /  / __/ / /_/ / / / / /__/ /_/ / /_/ / / / (__  )
/____/\___/\__/\__,_/ .___/  /_/    \__,_/_/ /_/\___/\__/_/\____/_/ /_/____/
                   /_/
                                                 
*/

//global variables
var canvasHeight = $("#canvas").outerHeight(true);
var bodyHeight = $("body").outerHeight(true);
var offset = $("body").scrollTop();

var percentageScrolled = (offset / (bodyHeight - canvasHeight)) * 100;;
var page = 0;
var pageClass = undefined;
var dataValue = 0;
var classValue = 1;

//Global variables
var lastOffset = 0;
var scrollingDown = true;

var setClassValue = function () {
    classValue = $(".focus").attr("data-value");
};
var setDataValue = function () {
    dataValue = (parseInt($(".focus").attr("data-value")));
};


var pageCheck = function () {

    //local variables
    canvasHeight = $("#canvas").outerHeight(true);
    bodyHeight = $("body").outerHeight(true);
    offset = $("body").scrollTop();

    //Direction check
    if (offset > lastOffset) {
        // downscroll code
        scrollingDown = true;
        //        $(".textBox").animate({
        //                    transform: "translateY(-10%)"
        //                }, {
        //                    queue: false
        //                    , duration: 500
        //                    , easing: "easeInOutElastic"
        //        });
    } else if (offset < lastOffset) {
        // upscroll code
        scrollingDown = false;
        //        $(".textBox").animate({
        //            transform: "translateY(-10%)"
        //        }, {
        //            queue: false
        //            , duration: 500
        //            , easing: "easeInOutElastic"
        //        });
    }

    setTimeout(lastOffset = offset, 1);


    //Live resize
    page = (Math.floor(offset / canvasHeight) + 1);

    pageClass = "." + page;
    percentageScrolled = (offset / (bodyHeight - canvasHeight)) * 100;

    $("#canvas").addClass(page);
};


var pageTurn = function () {

    if (offset > (canvasHeight * 0.5)) {
        $("#cover").animate({
            opacity: "0"
        }, {
            queue: true
            , duration: 500
            , easing: "easeOutCubic"
        }).remove();
    };

    $("#canvas").removeClass("showMenu");

    $("#canvas, .textBox, .titleBox, .circle").filter($(pageClass)).addClass("focus").removeClass("nonFocus");
    //out of focus
    $("#canvas, .textBox, .titleBox, .circle").not($(pageClass)).addClass("nonFocus").removeClass("focus");

    var newDataValue = (parseInt($(".focus").attr("data-value")));
    var newClassValue = $(".focus").attr("data-value");

    if (scrollingDown === true) {

        $(".textBox").stop().css("transform", "translate3d(0, -010vh, 0)");
        setTimeout(function () {
            $(".textBox").css("transform", "translate3d(0,0,0)")
        }, 750);
    } else {
        $(".textBox").stop().css("transform", "translate3d(0, 10vh, 0)");
        setTimeout(function () {
            $(".textBox").css("transform", "translate3d(0,0,0)")
        }, 750);
    };

    //    Swap Background

    if ((newDataValue !== dataValue) && (scrollingDown === true)) {
        //Feedback
        console.log(Math.floor(percentageScrolled) + "% Scrolled");
        console.log("Scrolling down: " + scrollingDown);
        console.log("Turning page to page " + page);

        //above of below?



        (parseInt($(this).attr("data-value")).clearQueue);

        $("#canvas, .textBox, .titleBox, .contentBox").each(
            function () {
                if (parseInt($(this).attr("data-value")) > page) {
                    $(this).stop().css({
                        top: "150vh"
                        , opacity: "0"
                            //                    }, {
                            //                        queue: true
                            //                        , duration: 2000
                            //                        , easing: "easeInOutCubic"
                    });
                } else if (parseInt($(this).attr("data-value")) < page) {
                    $(this).stop().css({
                        top: "-150vh"
                        , opacity: "0"
                            //                    }, {
                            //                        queue: true
                            //                        , duration: 2000
                            //                        , easing: "easeInOutCubic"
                    });
                } else if (parseInt($(this).attr("data-value")) === page) {
                    $(this).stop().css({
                        top: "30vh"
                        , opacity: "1"
                            //                    }, {
                            //                        queue: true
                            //                        , duration: 2500
                            //                        , easing: "easeInOutCubic"
                    });
                }
            });

    } else if ((newDataValue !== dataValue) && (scrollingDown === false)) {
        //Feedback
        console.log(Math.floor(percentageScrolled) + "% Scrolled");
        console.log("Scrolling down: " + scrollingDown);
        console.log("Turning page to page " + page);

        //above of below?



        (parseInt($(this).attr("data-value")).clearQueue);

        $("#canvas, .textBox, .titleBox, .contentBox").each(
            function () {
                if (parseInt($(this).attr("data-value")) > page) {
                    $(this).stop().css({
                        top: "150vh"
                        , opacity: "0"
                            //                    }, {
                            //                        queue: true
                            //                        , duration: 2000
                            //                        , easing: "easeInOutCubic"
                    });
                } else if (parseInt($(this).attr("data-value")) < page) {
                    $(this).stop().css({
                        top: "-150vh"
                        , opacity: "0"
                            //                    }, {
                            //                        queue: true
                            //                        , duration: 2000
                            //                        , easing: "easeInOutCubic"
                    });
                } else if (parseInt($(this).attr("data-value")) === page) {
                    $(this).stop().css({
                        top: "30vh"
                        , opacity: "1"
                            //                    }, {
                            //                        queue: true
                            //                        , duration: 2500
                            //                        , easing: "easeInOutCubic"
                    });
                }
            });

    }

    if (newDataValue !== dataValue) {
        $("#canvas").addClass("back" + newClassValue).removeClass("back" + classValue);
    }

    setDataValue();
    setClassValue();
};


//Buttons

$(".menuButton, .titleButton").click(function () {
    $("#menu").css("opacity", "1");
    $("#canvas").toggleClass("showMenu");
});

$(".homeButton").click(function () {

    $("body").scrollTop(0);

    pageCheck();
    pageTurn();

    scrolly = 1

    $(".textBox").css("opacity", "0");

    setTimeout(function () {
        enterText();
        $("body").removeClass("haydn").removeClass("adele");
        $("#canvas").removeClass("showMenu");
        $("#menu").css("opacity", "0");
        $(".textBox").css("opacity", "1");

    }, 500);
});

$(".adeleButton").click(function () {

    $("body").scrollTop(0);

    pageCheck();
    pageTurn();

    scrolly = 2;

    $(".textBox").css("opacity", "0");

    setTimeout(function () {
        enterText();
        $("body").removeClass("haydn").addClass("adele");
        $("#canvas").removeClass("showMenu");
        $("#menu").css("opacity", "0");
        $(".textBox").css("opacity", "1");
    }, 500);
});

$(".haydnButton").click(function () {

    $("body").scrollTop(0);

    pageCheck();
    pageTurn();

    scrolly = 3;

    $(".textBox").css("opacity", "0");

    setTimeout(function () {
        enterText();
        $("body").removeClass("adele").addClass("haydn");
        $("#canvas").removeClass("showMenu");
        $("#menu").css("opacity", "0");
        $(".textBox").css("opacity", "1");
    }, 500);
});




/*

   ______      ____   ______                 __  _
  / ____/___ _/ / /  / ____/_  ______  _____/ /_(_)___  ____  _____
 / /   / __ `/ / /  / /_  / / / / __ \/ ___/ __/ / __ \/ __ \/ ___/
/ /___/ /_/ / / /  / __/ / /_/ / / / / /__/ /_/ / /_/ / / / (__  )
\____/\__,_/_/_/  /_/    \__,_/_/ /_/\___/\__/_/\____/_/ /_/____/
                                                                   

*/

//Scroll Activated Code
$(window).scroll(function () {





    pageTurn();
    pageCheck();


});