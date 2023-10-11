class pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }
  isLucky() {
    const entre_0_et_100 = Math.random() * 100;
    const entier = Math.floor(entre_0_et_100);

    return entier <= this.luck;
  }

  isDead() {
    return this.hp <= 0;
  }

  attackPokemon(pokemon) {
    if (this.isLucky()) { // on vérifie la luck de l'attaquant c'est pourquoi this.
      let damages = this.attack - pokemon.defense;
      pokemon.hp -= damages; // pokemon.hp = pokemon.hp - damages
      console.log(
        `${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp ! Il lui reste ${pokemon.hp}.`
      );
    } else {
      console.log(`${this.name} a raté son attaque !`);
    }
  }
}

function fight(pokemon1, pokemon2) {
  // Tant que les deux sont vivants
  while (!pokemon1.isDead() && !pokemon2.isDead()) { // ! pour le contraire
    // Premier attaque le second
    pokemon1.attackPokemon(pokemon2);
    // Si le second est mort
    if (pokemon2.isDead()) {
      // On sort si second est mort
      break;
    }
    // Sinon le second attaque le premier
    pokemon2.attackPokemon(pokemon1);

    // et rebelote
  }

  // Verification de qui a gagné en regardant qui est mort
  // Si le premier est mort
  if (pokemon1.isDead()) {
    // Affiche que le premier est mort
    console.log(
      `${pokemon1.name} est mort, tué par ${pokemon2.name} qui a ${pokemon2.hp} HP !`
    );
    // Sinon le second est mort
  } else {
    console.log(
      `${pokemon2.name} est mort, tué par ${pokemon1.name} qui a ${pokemon1.hp} HP !`
    );
  }
}

let Psychokwak = new pokemon("Psychokwak", 10, 5, 30, 75);
let Tiplouf = new pokemon("Tiplouf", 15, 3, 30, 50);

fight(Psychokwak, Tiplouf);