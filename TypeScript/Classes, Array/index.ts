class Person {
    firstName: string;
    lastName: string;
    genre?: string;
    static firstname: string;
    constructor(firstName: string, lastName: string, genre: string) {
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
    constructor(SocialNetworkname: string, accountIdentifier: string) {
        this.SocialNetworkname = SocialNetworkname;
        this.accountIdentifier = accountIdentifier;
    }
    addFollower(person: Person) {
        // let follower:string[] = [person.firstName, person.lastName];
        // console.log(follower);
    }
}

let NewPerson = new Person(`Shlomo`, `Artzi`, `Singer`);
let NewPerson2 = new Person(`Moshe`, `Perez`, `TV`);
console.log(NewPerson.fullName);
console.log(NewPerson2.fullName);



