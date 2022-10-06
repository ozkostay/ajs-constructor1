// import Character from './js/character';
import Bowerman from './js/bowerman';
import Swordsman from './js/swordsman';
import Magician from './js/magician';
import Daemon from './js/daemon';
import Undead from './js/undead';
import Zombie from './js/zombie';

const vasya = new Bowerman('vasya', 'Bowman');
const ivan = new Swordsman('ivan', 'Swordsman');
const piter = new Magician('piter', 'Magician');
const slava = new Daemon('slava', 'Daemon');
const kate = new Undead('kate', 'Undead');
const jon = new Zombie('jon', 'Zombie');

console.log(`${vasya.name} (${vasya.type}): ${vasya.attack}/${vasya.defence}`);
console.log(`${ivan.name} (${ivan.type}): ${ivan.attack}/${ivan.defence}`);
console.log(`${piter.name} (${piter.type}): ${piter.attack}/${piter.defence}`);
console.log(`${slava.name} (${slava.type}): ${slava.attack}/${slava.defence}`);
console.log(`${kate.name} (${kate.type}): ${kate.attack}/${kate.defence}`);
console.log(`${jon.name} (${jon.type}): ${jon.attack}/${jon.defence}`);
