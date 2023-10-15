// Classes

class Character {
  constructor(name, mentalHealth) {
    this.name = name;
    this.mentalHealth = mentalHealth;
  }
}

class Road {
  constructor(radio) {
    this.trafficLight = 30;
    this.taxiChange = 0;
    this.radio = radio;
  }
}

let John = new Character("John", 10);
console.log(`${John.name} a ${John.mentalHealth} de santé mentale.`);

let playlist = [
  "Wejdene - Anissa",
  "Drake - Slime You Out",
  "Travis Scott - Telekinesis",
  "Post Malone - Chemical",
  "Seventeen - Super",
];

let returnTrip = new Road(playlist);

console.log(returnTrip.radio);

// Boucle
let alive = true;
while (alive && returnTrip.trafficLight > 0) {
  // tant que john est en vie et qu'il reste des feux, la boucle continue
  // radio passant une musique parmi la playlist
  returnTrip.radio = Math.floor(Math.random() * playlist.length); // returnTrip.radio est un int
  console.log(`Play ${playlist[returnTrip.radio]}`); // == 'play'+ playlist[returnTrip.radio]
  if (returnTrip.radio == 0) {
    // si la musique qui passe à la radio est Wejdene, John n'aime pas
    John.mentalHealth -= 1;
    returnTrip.trafficLight -= 1;
    returnTrip.taxiChange += 1;
    console.log(
      `John n'aime pas la chanson et quitte le taxi. Il lui reste ${John.mentalHealth} de santé mentale et ${returnTrip.trafficLight} feux avant de rentrer chez lui.`
    );
    if (John.mentalHealth == 0) {
      alive = false;
      console.log("Explosion");
      break;
    }
  } else {
    returnTrip.trafficLight -= 1;
    console.log(
      `John aime la chanson. Il lui reste ${John.mentalHealth} de santé mentale et ${returnTrip.trafficLight} feux avant de rentrer chez lui.`
    );
  }
}

// Vérification de si John est en vie
if (alive) {
  console.log(
    `John est bien rentré chez lui et a changé ${returnTrip.taxiChange} fois de taxis.`
  );
}
