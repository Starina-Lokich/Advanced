export default function extractSpecial(character) {
    if (typeof character !== 'object' || character === null) {
      throw new TypeError('Аргумент должен быть объектом');
    }
  
    if (!Array.isArray(character.special)) {
      throw new TypeError('Поле "special" должно быть массивом');
    }
  
    return character.special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      icon,
      description,
    }));
  }