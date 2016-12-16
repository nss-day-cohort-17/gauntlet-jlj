/*
  Test code to generate a human player and an orc player
 */

 var selectedClass
 var selectedWeapon
var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new Gauntlet.Armory.BroadSword());
// console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

function setHealthBar() {
  $("player1Health").attr("max", function() {
    return warrior.health
  })



}


function displayStats() {
    var p1Stats;
    var p2Stats;
    p1Stats = warrior.toString();
    p2Stats = orc.toString();
    $(".player-one").html(p1Stats)
    $(".player-two").html(p2Stats)
}

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        warrior.playerName = $("#player-name").val()
        // console.log(warrior);
        break;

      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        warrior.class = new Gauntlet.GuildHall[selectedClass]
        // console.log(warrior);
        break;

        case "card--battleground":
          moveAlong = ($("#player-name").val() !== "");
          warrior.weapon = new Gauntlet.Armory[selectedWeapon]
          console.log(warrior);
          displayStats();
          break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});


console.log(Gauntlet);

$(".btn--blue").click(function(e) {
 selectedClass = $(this).find(".btn__text")
 selectedClass = selectedClass[0].textContent;
  // console.log(selectedClass);
})


$(".btn--green").click(function(e) {
 selectedWeapon = $(this).find(".btn__text")
 selectedWeapon = selectedWeapon[0].textContent;
  // console.log(selectedWeapon);
})

$("#attack-button").click(function(e){


    $(".player-one").html(`${warrior.playerName} attacked ${orc.playerName} for ${warrior.weapon.attackDamage()}`)


    setTimeout(function(){
        $(".player-two").html(`${orc.playerName} attacked ${warrior.playerName} for ${orc.weapon.attackDamage()}`)
        console.log(warrior)
    }, 1000)



})
