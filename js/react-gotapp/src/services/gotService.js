export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'
  }

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllCharacters() {
    const res = await this.getResourse(`/characters?page=5&pageSize=10`);

    return res.map(this._transformCharacter)
  }
  async getCharacter(id) {
    const character = await this.getResourse(`/characters/${id}`);

    return this._transformCharacter(character);
  }

  async getAllHouses() {
    const houses = await this.getResourse(`/houses/`);

    return houses.map(this._transformCharacter);
  }
  async getHouse(id) {
    const house = await this.getResourse(`/houses/${id}`);

    return this._transformCharacter(house);
  }

  async getAllBooks() {
    const books = await this.getResourse(`/books/`);

    return books.map(this._transformCharacter)
  }
  async getBook(id) {
    const book = await this.getResourse(`/books/${id}`);

    return this._transformCharacter(book);
  }

  isSet(data) {
    if (data) {
      return data 
    } else {
      return 'no data'
    }
  }

  _transformCharacter = (char) => {
    return {
      name: this.isSet(char.name),
      gender: this.isSet(char.gender),
      born: this.isSet(char.born),
      died: this.isSet(char.died),
      culture: this.isSet(char.culture)
    }
  }

  _transformHouse = (house) => {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  _transformBook = (book) => {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released
    }
  }
}