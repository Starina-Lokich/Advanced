import orderByProps from './orderByProps.js';
import extractSpecial from './destructuring.js';

// Пример использования orderByProps
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const orderKeys = ['name', 'level'];
console.log(orderByProps(obj, orderKeys));

// Пример использования extractSpecial
const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

console.log(extractSpecial(character));