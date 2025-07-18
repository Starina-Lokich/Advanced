import extractSpecial from '../src/destructuring.js';

describe('extractSpecial', () => {
  test('извлекает массив спец.атак с корректными полями', () => {
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

    const expected = [
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
        description: 'Описание недоступно',
      },
    ];

    expect(extractSpecial(character)).toEqual(expected);
  });

  test('выбрасывает ошибку при некорректных данных', () => {
    expect(() => extractSpecial(null)).toThrow(TypeError);
    expect(() => extractSpecial({ special: null })).toThrow(TypeError);
    expect(() => extractSpecial('string')).toThrow(TypeError);
    expect(() => extractSpecial({ special: 'string' })).toThrow(TypeError);
  });
});