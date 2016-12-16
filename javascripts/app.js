/*
  Test code to generate a human player and an orc player
 */

 var selectedClass
 var selectedWeapon
var warrior = new Gauntlet.Combatants.Human();


var orc = new Gauntlet.Combatants.Orc();
orc.class = Gauntlet.GuildHall.Random();
orc.setWeapon(new Gauntlet.Armory.BroadSword());


/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

function checkHealth(player) {
  if (player.health <= 0) {
    $("#attack-button").attr("disabled", "true")
    $("#playAgain").removeClass("hidden-class")
    // return false
  }
  // return true
}


function displayStats() {
    var p1Stats;
    var p2Stats;
    p1Stats = warrior.toString();
    p2Stats = orc.toString();
    $(".player-one").html(p1Stats)
    $(".player-two").html(p2Stats)
    $("#player1Health").attr("max", warrior.health)
    $("#player1Health").attr("value", warrior.health)
    $("#player2Health").attr("max", orc.health)
    $("#player2Health").attr("value", orc.health)

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

$(".btn--yellow").click(function(e) {
  selectedClass = $(this).find(".btn__text")
  selectedClass = selectedClass[0].textContent;
})


$(".btn--green").click(function(e) {
 selectedWeapon = $(this).find(".btn__text")
 selectedWeapon = selectedWeapon[0].textContent;
  // console.log(selectedWeapon);
})

$("#playAgain").click(function() {
  warrior.health = 0
  orc.generateClass();
  orc.setWeapon(new Gauntlet.Armory.BroadSword());
  $("#attack-button").removeAttr("disabled")
  $("#playAgain").addClass("hidden-class")
})

$("#attack-button").click(function(e){

    var player1AttDmg = warrior.weapon.attackDamage()
    orc.health -= player1AttDmg
    $(".player-one").html(`${warrior.playerName} attacked ${orc.playerName} for ${player1AttDmg}`)
    $("#player2Health").attr("value", orc.health)
    checkHealth(orc)
    // if (checkHealth(orc)) {

        setTimeout(function(){
        var player2AttDmg = orc.weapon.attackDamage()
        warrior.health -= player2AttDmg
          $(".player-two").html(`${orc.playerName} attacked ${warrior.playerName} for ${orc.weapon.attackDamage()}`)
           $("#player1Health").attr("value", warrior.health)
           checkHealth(warrior)
      }, 1000)
    // }





})
