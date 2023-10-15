function getProbability() {
  // on obtient un float à un chiffre après la virgule
  return Math.floor(Math.random() * 10) / 10;
}

// classes
class Killer {
  constructor(name) {
    this.hp = 100;
    this.name = name;
  }
  isDead() {
    return this.hp <= 0;
  }

  takeDamage(damage) {
    this.hp = Math.max(0, this.hp - damage); // valeur max des hp du tueur - les dégats reçus
  }
}

class Characteristic {
  constructor(name, deathRate, dmgRate, deathNdmgRate) {
    this.name = name;
    this.deathRate = deathRate;
    this.dmgRate = dmgRate;
    this.deathNdmgRate = deathNdmgRate;
  }
}

class Survivor {
  constructor(name, characteristics) {
    this.name = name;
    this.characteristics = characteristics;
  }
  shouldDie() {
    const rand = getProbability();
    return rand <= this.characteristics.deathRate;
  }
  shouldDodge() {
    const rand = getProbability();
    return rand <= this.characteristics.dmgRate;
  }
  shouldAttackAndDie() {
    const rand = getProbability();
    return rand <= this.characteristics.deathNdmgRate;
  }
}

const names = [
  "Tom",
  "Emilie",
  "Jacques",
  "Tony",
  "Laura",
  "Mélanie",
  "Emma",
  "William",
  "Hugo",
  "Louise"
];
const characteristics = [
  new Characteristic("blond(e)", 0.3, 0.5, 0.2),
  new Characteristic("brun(e)", 0.3, 0.3, 0.4),
  new Characteristic("sportif(ve)", 0.1, 0.8, 0.1),
  new Characteristic("riche", 0.4, 0.1, 0.5),
  new Characteristic("nerd", 0.8, 0.1, 0.1),
];
const Jason = new Killer("Jason");

const survivors = [];

while (survivors.length < 5) {
  const randomIndex = Math.floor(Math.random() * names.length);
  const name = names[randomIndex];
  const randomCharacteristic = Math.floor(
    Math.random() * characteristics.length
  );

  survivors.push(new Survivor(name, characteristics[randomCharacteristic]));
  names.splice(randomIndex, 1);
  characteristics.splice(randomCharacteristic, 1);
}
survivors.forEach((survivor) => {
  console.log(`${survivor.name} est ${survivor.characteristics.name}.`);
});

// Code
const dead = [];

while (!Jason.isDead() && survivors.length > 0) {
  const randomIndex = Math.floor(Math.random() * survivors.length); // randomIndex choisi une cible parmi les survivants
  const target = survivors[randomIndex]; // la cible du tueur
  console.log(`Jason attaque ${target.name}.`);
  let action = false;
  while (!action) {
    // tant que l'action est fausse on continue la boucle
    if (target.shouldDie()) {
      // test si la cible meurt
      dead.push(target);
      survivors.splice(survivors.indexOf(target), 1); // target[randomIndex]
      action = true;
      console.log(`Jason a tué ${target.name}.`);
    } else if (target.shouldDodge()) {
      // test si la cible esquive
      Jason.takeDamage(10);
      action = true;
      console.log(`${target.name} a esquivé et a infligé 10 dmg.`);
    } else if (target.shouldAttackAndDie()) {
      // test de si la cible attaque et meurt
      dead.push(target);
      survivors.splice(survivors.indexOf(target), 1);
      Jason.takeDamage(15);
      action = true;
      console.log(`Jason a tué ${target.name} mais a pris 15 dmg.`);
    }
  }
}

// vérification que Jason est mort
const isJasonDead = Jason.isDead();
if (isJasonDead) {
  console.log("Jason est mort.");
  console.log(
    `Les survivants ont gagné mais RIP à ${dead.map((s) => s.name).join(", ")}.` // affiche seulement le nom de tous les morts dans la liste des morts
  );
} else {
  console.log(`Jason a survécu avec ${Jason.hp} hp.`);
}
