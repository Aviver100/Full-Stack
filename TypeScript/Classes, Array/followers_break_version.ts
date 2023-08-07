class Person {
    firstName: string;
    lastName: string;
    genre?: string;
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
    static addFollower(person:Person) {
        let followers = [person.firstName, person.lastName];
        followers.push();
    }
    static addFollower(person:Person) {
        let followers = [person.firstName, person.lastName];
        followers.push[person.firstName, person.lastName];
        // return [person.firstName, person.lastName];
    }
}

let NewPerson = new Person(`Moshe`, `Cohen`, `Singer`);
let NewPerson2 = new Person(`Eli`, `Levi`, `TV`);
console.log(NewPerson.fullName);
console.log(NewPerson2.fullName);

SocialNetwork.addFollower(`jj`);
SocialNetwork.addFollower(`d`,`d`,`w`)

let follower = new SocialNetwork.addFollower(`AAA`);
console.log(follower);


