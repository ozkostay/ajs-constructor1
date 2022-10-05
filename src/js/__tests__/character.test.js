import Character from '../character';

test('Проверка объекта персонажа', () => {
  const standartHero = {
    name: 'Konon',
    type: 'Bowman',
    health: 100,
    level: 1,
    attackProtection: {
      Bowman: '25/25',
      Swordsman: '40/10',
      Magician: '10/40',
      Undead: '25/25',
      Zombie: '40/10',
      Daemon: '10/40',
    },
  };
  const NewHero = new Character('Konon', 'Bowman');
  expect(NewHero).toEqual(standartHero);
});

test('Проверка throw.name персонажа', () => {
  expect(() => { Character('Konon678901', 'Bowman'); }).toThrow();
});

test('Проверка throw.name персонажа', () => {
  expect(() => { Character('Konon', 'BowmanFail'); }).toThrow();
});
