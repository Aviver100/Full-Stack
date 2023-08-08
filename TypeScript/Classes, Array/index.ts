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
    followers: Array<Person>;
    constructor(SocialNetworkname: string, accountIdentifier: string) {
        this.SocialNetworkname = SocialNetworkname;
        this.accountIdentifier = accountIdentifier;
        this.followers = new Array<Person>;
    }
    addFollower(person: Person) {
        if (this.followers.includes(person)) {
            console.log(`You are already following`);
        } else {
            this.followers.push(person);
        }
    }
    removeFollower(fullName: string): Person {
        if (this.followers.includes(Person.fullName)) {
            this.followers.splice(person);
        } else {
            console.log(``);
        }
    }
}

let ShlomoArtzi = new Person(`Shlomo`, `Artzi`, `Singer`);
let LionelMessi = new Person(`Lionel`, `Messi`, `football`);

let TwitterShlomo = new SocialNetwork(`Twitter`, `@Shlomo`);
let instagramMessi = new SocialNetwork(`instagram`, `@Messi`);

let NewPerson3 = new Person(`Eli`, `David`);
let NewPerson4 = new Person(`Eli`, `Cohen`);
let NewPerson5 = new Person(`Dani`, `Dani`);


// TwitterShlomo.addFollower(NewPerson);
TwitterShlomo.addFollower(NewPerson3);
TwitterShlomo.addFollower(NewPerson4);
TwitterShlomo.addFollower(NewPerson5);

console.log(TwitterShlomo);
console.log(instagramMessi);






