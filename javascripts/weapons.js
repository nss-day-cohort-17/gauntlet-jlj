var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Mace = function() {
  this.name = "mace";
  this.damage = 12;
  this.hands = 2;
};
Mace.prototype = new Weapon();

var Lance = function() {
  this.name = "lance";
  this.damage = 10;
  this.hands = 2;
};
Lance.prototype = new Weapon();

var Spike = function() {
  this.name = "spike";
  this.damage = 18;
  this.hands = 2;
};
Spike.prototype = new Weapon();

var Bomb = function() {
  this.name = "bomb";
  this.damage = 50;
  this.hands = 2;
};
Bomb.prototype = new Weapon();

var Tomahawk = function() {
  this.name = "tomahawk";
  this.damage = 18;
  this.hands = 2;
};
Tomahawk.prototype = new Weapon();
