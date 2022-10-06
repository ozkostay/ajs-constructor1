import Character from '../character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Проверка класса Bowman', () => {
  const newHero = new Bowerman('Konan', 'Bowman');
  expect(newHero.name).toBe('Konan');
  expect(newHero.type).toBe('Bowman');
  expect(newHero.health).toBe(100);
  expect(newHero.level).toBe(1);
  expect(newHero.attack).toBe(25);
  expect(newHero.defence).toBe(25);
});

test('Проверка класса Swordsman', () => {
  const newHero = new Swordsman('Konan', 'Swordsman');
  expect(newHero.name).toBe('Konan');
  expect(newHero.type).toBe('Swordsman');
  expect(newHero.health).toBe(100);
  expect(newHero.level).toBe(1);
  expect(newHero.attack).toBe(40);
  expect(newHero.defence).toBe(10);
});

test('Проверка класса Magician', () => {
  const newHero = new Magician('Konan', 'Magician');
  expect(newHero.name).toBe('Konan');
  expect(newHero.type).toBe('Magician');
  expect(newHero.health).toBe(100);
  expect(newHero.level).toBe(1);
  expect(newHero.attack).toBe(10);
  expect(newHero.defence).toBe(40);
});

test('Проверка класса Daemon', () => {
  const newHero = new Daemon('Konan', 'Daemon');
  expect(newHero.name).toBe('Konan');
  expect(newHero.type).toBe('Daemon');
  expect(newHero.health).toBe(100);
  expect(newHero.level).toBe(1);
  expect(newHero.attack).toBe(10);
  expect(newHero.defence).toBe(40);
});

test('Проверка класса Undead', () => {
  const newHero = new Undead('Konan', 'Undead');
  expect(newHero.name).toBe('Konan');
  expect(newHero.type).toBe('Undead');
  expect(newHero.health).toBe(100);
  expect(newHero.level).toBe(1);
  expect(newHero.attack).toBe(25);
  expect(newHero.defence).toBe(25);
});

test('Проверка класса Zombie', () => {
  const newHero = new Zombie('Konan', 'Zombie');
  expect(newHero.name).toBe('Konan');
  expect(newHero.type).toBe('Zombie');
  expect(newHero.health).toBe(100);
  expect(newHero.level).toBe(1);
  expect(newHero.attack).toBe(40);
  expect(newHero.defence).toBe(10);
});

test('Проверка throw.name персонажа', () => {
  expect(() => { new Character('Konon678901', 'Bowman'); }).toThrow();
});

test('Проверка throw.name персонажа', () => {
  expect(() => { new Character('Konon', 'BowmanFail'); }).toThrow();
});
