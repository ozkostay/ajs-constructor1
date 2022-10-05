export default function Character(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw new Error('Недопустимая длина имени персонажа');
  }

  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if (!types.find((item) => item === type)) {
    throw new Error('Недопустый тип персонажа');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attackProtection = {
    Bowman: '25/25',
    Swordsman: '40/10',
    Magician: '10/40',
    Undead: '25/25',
    Zombie: '40/10',
    Daemon: '10/40',
  };
}
