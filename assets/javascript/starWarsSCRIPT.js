// Global var(s)
var baseAttack = 0;         // original attack strength
var userPlayer;             // holds the PLAYER (object)
var oppPlayer;              // holds the OPPONENT (object)
var charArray = [];         // establishes an empty array where we will later initCharacters in a function
var playerSelect = false;   // flags IF user has selected a player yet, ESLE (false)
var opponentSelect = false; // flags IF an opponent was selected ELSE (false)


// construct the functionality of character(s)
function Character(name, hp, ap, counter, pic) { 
    this.name = name;
    this.healthPoints = hp;
    this,attackPower = ap;
    this.counterAttack = counter;
    this.pic = pic;
}

// INCREACE ^Character(ap) {ap += baseAttack}
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

// Attack f(n)
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $("#msg").html("You attacked " + 
        Obj.name + "for " + this.attackPower + " damage points.");
    this.increaseAttack();
};

// initialize characters.append(charArray)
function initCharacters() {
    var luke = new Character("Luke Skywaker", 100, 10, 5, "images/Download-Luke-Skywalker-PNG-Transparent-Image.png");
    var vader = new Character("Darth Vader", 200, 50, 30, "images/star_wars_darth_vader___render_png_by_jonathanrey_d72vnhh-pre.png");
    var obiWan = new Character("Obi-Wan Kenobi", 150, 15, 2, "images/db7icdk-b431c795-d67e-48b7-894a-a756703c01f0.png");
    var chewy = new Character("Chewbacca", 180, 30, 12, "images/imgbin-chewbacca-star-wars-day-wookiee-luke-skywalker-paper-cylinder-columns-wU6sNR8fkQMBNv911kspy34z0.jpg");
    charArray.push(luke, vader, obiWan, chewy);
}

// "Save" the original attackValue
function setBaseAttack(Obj) {
    baseAttack = Obj.attackPower;
}

// checks IF Character is alive
function isAlive(Obj) {
    if (Obj.healthPoints > 0) {
        return true;
    }
    return false;
}

// checks IF USER has won
function isWiner() {
    if (charArray.length == 0 && playerSelect.healthPoints > 0)
        return true;
        else {
            return false;
        }
}

// create the characterCards to appear on mainGameScreen
function characterCards(divID) {
    $(divID).children().remove();

    for (var i = 0; i < charArray.length; i++) {
        $(divID).append("<div />");
        $(divID + " div: last-child").addClass("card");
        $(divID + " div: last-child").append("<img />");
        $(divID + " img: last-child").attr("id", charArray[i].name);
        $(divID + " img: last-child").attr("class", "card-img-top");
        $(divID + " img: last-child").attr("src", charArray[i].pic);
        $(divID + " img: last-child").attr("width", 150);
        $(divID + " img: last-child").addClass("img-thumbnail");
        $(divID + " div: last-child").append(charArray[i].name + "<br");
        $(divID + " div: last-child").append("HP: " + charArray[i].healthPoints);
        $(divID + " div: last-child").append();

    }
}

// update the characterPic location on the screen (one div to the other)
function updatePics(fromDivID, toDivID) {
    $(fromDivID).children().remove();

    for (var i = 0; i < charArray.length; i++) {
        $(toDivID).append("<img />");
        $(toDivID + " img: last-child").attr("id", charArray[i].name);
        $(toDivID + " img: last-child").attr("src", charArray[i].pic);
        $(toDivID + " img: last-child").attr("width", 150);
        $(toDivID + " img: last-child").addClass("img-thumbnail");

    }
}

/////// AUDIO FILE HERE VVVVVVVVVVVVVV ///////


//////////////////////////////////////////////

// CHANGE the view from the startScreen to the mainGameScreen
function changeView() {
    $("#starScreen").empty();
    $("#mainGameScreen").show();
}

$(document).on("click", "img", function() {
    // Stores the opponent that USER selected out of the defender variable and removes it from [charArray]
    if (playerSelect && !opponentSelect && (this.id != userPlayer.name)) {
        
        for(var j = 0; j < charArray.length; j++) {
            if (charArray[j].name == (this).id) {
                oppPlayer = charArray[j];     // SETS OPPONENT
                charArray.splice(j, 1);
                opponentSelect = true;
                $("#msg").html("Click the button to attack now!");
            }
        }
        $("#opponentDiv").append(this);   // APPENDS the selected opponent to the DIV
        $("#opponentDiv").addClass("animate zoomInRight");
        $("#opponentDiv").append("<br>" + oppPlayer.name);
        $("#opponentHealthDiv").append("HP: " + oppPlayer.healthPoints);
        $("#opponentHealthDiv").addClass("animated zoomInRight");
    }

    /* Stores the character that USER 'clicks' on in the userPlayer var 
    && removes it from charArray */
    if (!playerSelect) {
        for( var i = 0; i < charArray.length; i++) {
            if (charArray[i].name == (this).id) {
                userPlayer = charArray[i];           //SETS CURRENT AVI
                /*  playAudio();                     //STARTS THEME SONG
                
               $("body").css({
                   "background-image": "url('~path~ + this.id[0] + ".jpg')"    //CHANGES BACKGROUND PIC ACCORDING TO THE USER 'click' 
               }); */
               setBaseAttack(userPlayer);
               charArray.splice(i, i);
               playerSelect = true;
               changeView();
               $("#msg").html("Pick an opponent to fight!");
               
            }
        }
        updatePics("#game", "#opponentsLeftDiv");
        $("#playerDiv").append(this);   // APPENDS the selected PLAYER to the DIV
        $("#playerDiv").addClass("animate zoomInRight");
        $("#playerDiv").append("<br>" + oppPlayer.name);
        $("#playerHealthDiv").append("HP: " + oppPlayer.healthPoints);
        $("#playerHealthDiv").addClass("animated zoomInRight");
    }

    // The attack button functionality
    $(document).on("click", "#attackBtn", function () {
        if (playerSelect && opponentSelect) {
            if (isAlive(userPlayer) && isAlive(oppPlayer)) {
                userPlayer.attack(oppPlayer);
                oppPlayer.counterAttack(userPlayer);
                $("#playerHealthDiv").html("HP: " + userPlayer.healthPoints);
                $("#opponentHealthDiv").html("HP: " + oppPlayer.healthPoints);
            }
            if (!isAlive(userPlayer)) {
                $("#playerHealthDiv").alert("YOU LOSE! GAME OVER!");
                $("#msg").hmtl("Try again...?");
                $(document).on("click", "attackBtn" function () {
                    alert("Are you sure?");
                    alert("Cuz that last round was rough, I felt the force from here!");
                    alert("MWAHAHAHAHAHAHHHH");
                    location.reload();
                });
                
            }
        }
        if (!isAlive(oppPlayer)) {
            $("#opponentDiv").removeClass("animated zoomInRight");
            
        }
    })


})