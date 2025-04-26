export default function orderByProps(obj, orderKeys) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Первый аргумент должен быть объектом');
    }
  
    if (!Array.isArray(orderKeys)) {
      throw new TypeError('Второй аргумент должен быть массивом');
    }
  
    const entries = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        entries.push({ key, value: obj[key] });
      }
    }

    return entries.sort((a, b) => {
      const indexA = orderKeys.indexOf(a.key);
      const indexB = orderKeys.indexOf(b.key);
  
      // Сортировка по указанному порядку
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
  
      // Если только один ключ есть в orderKeys, он идёт раньше
      if (indexA !== -1) {
        return -1;
      }
  
      if (indexB !== -1) {
        return 1;
      }
  
      // Алфавитная сортировка для остальных ключей
      return a.key.localeCompare(b.key);
    });
  }