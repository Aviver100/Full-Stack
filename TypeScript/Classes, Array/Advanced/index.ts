class Person {
    firstName: string;
    lastName: string;
    genre?: string;
    static fullName: Person;

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
    accountIdentifier?: string;
    followers: Array<Person>;
    fullName?: Person;
    constructor(SocialNetworkname: string, accountIdentifier?: string) {
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
    removeFollower(fullName: string) {
        for (let i = 0; i < this.followers.length; i++) {
            if (this.followers[i].fullName == fullName) {
                this.followers.splice(i);
                console.log(`The follower ${fullName} was deleted`);
            }
        }
    }
    print() {
        let followerList = this.followers.map(follower => ` ` + follower.fullName)
        console.log(`${this.SocialNetworkname} followers: ${followerList}`);
    }
}

class Celeb extends Person {
    addFollower(socialNetwork:SocialNetwork, person: Person) {
        if (socialNetwork.followers.includes(person)) {
            console.log(`You are already following`);
        } else {
            socialNetwork.followers.push(person);
        }
    }
    removeFollower(socialNetwork:SocialNetwork, fullName: string) {
        for (let i = 0; i < socialNetwork.followers.length; i++) {
            if (socialNetwork.followers[i].fullName == fullName) {
                socialNetwork.followers.splice(i);
                console.log(`The follower ${fullName} was deleted`);
            }
        }
    }
    details(){

    }
}


let ShlomoArtzi = new Person(`Shlomo`, `Artzi`, `Singer`);
let LionelMessi = new Person(`Lionel`, `Messi`, `football`);

let Twitter = new SocialNetwork(`Twitter`);
let instagram = new SocialNetwork(`instagram`);
let Facebook = new SocialNetwork(`Facebook`);


let NewPerson3 = new Person(`Eli`, `David`);
let NewPerson4 = new Person(`Moshe`, `Cohen`);
let NewPerson5 = new Person(`Dani`, `Dani`);


// Twitter.addFollower(NewPerson3);
// Twitter.addFollower(NewPerson4);
// Twitter.addFollower(NewPerson5);
// instagram.addFollower(NewPerson5);
// instagram.addFollower(NewPerson4);


// console.log(Twitter);
// Twitter.removeFollower(` `);

// console.log(instagram);
// instagram.removeFollower(` `);

// instagram.print();



let ronaldo = new Celeb(`Cristiano`, `Ronaldo`, `football`);

ronaldo.addFollower(Facebook, NewPerson3);
ronaldo.addFollower(Facebook, NewPerson4);
// ronaldo.removeFollower(`Eli David`);
console.log(ronaldo);

// FacebookRonaldo.removeFollower(`Eli Cohen`);
