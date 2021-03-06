// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function () {
  return this.strength;
};
Soldier.prototype.receiveDamage = function (damage){
   this.health = this.health - damage;
};
// Viking
function Viking (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function (damage) {
   this.health = this.health - damage;
   if (damage <=  this.health ){
     return this.name + " has received " + damage + " points of damage";
   } else {
     return this.name + " has died in act of combat";
   }
 };

// Saxon
function Saxon (health, strength) {}
Saxon.prototype = Object.create(Soldier.prototype);
// War
function War () {}
