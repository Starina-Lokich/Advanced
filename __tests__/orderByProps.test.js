import orderByProps from '../src/orderByProps.js';

describe('orderByProps', () => {
  test('сортирует свойства объекта в указанном порядке', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const orderKeys = ['name', 'level'];

    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];

    expect(orderByProps(obj, orderKeys)).toEqual(expected);
  });

  test('выбрасывает ошибку при некорректных аргументах', () => {
    expect(() => orderByProps(null, ['name'])).toThrow(TypeError);
    expect(() => orderByProps({ name: 'мечник' }, null)).toThrow(TypeError);
    expect(() => orderByProps('string', ['name'])).toThrow(TypeError);
    expect(() => orderByProps({ name: 'мечник' }, 'string')).toThrow(TypeError);
  });
});