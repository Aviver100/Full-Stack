class Person {
    firstName: string;
    lastName: string;
    genre?: string;

    constructor(firstName: string, lastName: string, genre?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class SocialNetwork {
    SocialNetworkname: string;
    accountIdentifier: string;
    followers:Array<Person>;
    constructor(SocialNetworkname: string, accountIdentifier: string) {
        this.SocialNetworkname = SocialNetworkname;
        this.accountIdentifier = accountIdentifier;
        this.followers = new Array<Person>;
    }
    addFollower(person: Person) {
        this.followers.push(person);
    }
}

let NewPerson = new Person(`Shlomo`, `Artzi`, `Singer`);
let NewPerson2 = new Person(`Moshe`, `Perez`, `TV`);
let NewPerson3 = new Person(`Eli`, `Cohen`, `TV`);
let NewPerson4 = new Person(`Eli`, `Cohen`);

console.log(NewPerson);
console.log(NewPerson2);
console.log(NewPerson3);



let TwitterShlomo = new SocialNetwork(`Twitter`, `@Shlomo`);
TwitterShlomo.addFollower(NewPerson);
TwitterShlomo.addFollower(NewPerson2);
TwitterShlomo.addFollower(NewPerson4);

console.log(TwitterShlomo);






