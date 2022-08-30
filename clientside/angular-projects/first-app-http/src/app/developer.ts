
export class Developer {
  id: number|undefined;
  username: string;
  age: number;
  language: string;

  constructor(username: string, age: number, language: string) {
    this.username = username;
    this.age = age;
    this.language = language;
  }


}


