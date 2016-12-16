
var Gauntlet = Gauntlet || {};
Gauntlet.Armory = {};

Gauntlet.Armory.Shelf = function() {
  this.name = ""
  this.damage = 0
  this.hands = 1
}

Gauntlet.Armory.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
  this.attackDamage = function() {
    return Math.floor(Math.random() * (this.damage - 3) + (this.damage + 3))
  }
};


Gauntlet.Armory.Weapon.prototype = new Gauntlet.Armory.Shelf();

Gauntlet.Armory.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.Armory.Dagger.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.Armory.BroadSword.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Armory.WarAxe.prototype = new Gauntlet.Armory.Weapon();


Gauntlet.Armory.Mace = function() {
  this.name = "mace";
  this.damage = 12;
  this.hands = 2;
};
Gauntlet.Armory.Mace.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Lance = function() {
  this.name = "lance";
  this.damage = 10;
  this.hands = 2;
};
Gauntlet.Armory.Lance.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Pike = function() {
  this.name = "pike";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Armory.Pike.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Bomb = function() {
  this.name = "bomb";
  this.damage = 50;
  this.hands = 2;
};
Gauntlet.Armory.Bomb.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Tomahawk = function() {
  this.name = "tomahawk";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Armory.Tomahawk.prototype = new Gauntlet.Armory.Weapon();
