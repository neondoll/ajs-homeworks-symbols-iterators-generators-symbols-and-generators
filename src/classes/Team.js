export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Делаем класс итерируемым с помощью генератора
  * [Symbol.iterator]() {
    // Более простая реализация генератора
    // yield* this.members.values();

    // Собственная реализация генератора
    const members = this.toArray();

    for (let index = 0; index < members.length; index += 1) {
      yield members[index];
    }
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен в команду!');
    }

    return this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    });

    return this.members;
  }

  toArray() {
    return [...this.members];
  }
}
