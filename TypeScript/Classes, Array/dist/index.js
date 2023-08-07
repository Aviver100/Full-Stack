var Person = /** @class */ (function () {
    function Person(firstName, lastName, genre) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var SocialNetwork = /** @class */ (function () {
    function SocialNetwork(SocialNetworkname, accountIdentifier) {
        this.SocialNetworkname = SocialNetworkname;
        this.accountIdentifier = accountIdentifier;
    }
    SocialNetwork.prototype.addFollower = function (person) {
        // let follower:string[] = [person.firstName, person.lastName];
        // console.log(follower);
    };
    return SocialNetwork;
}());
var NewPerson = new Person("Shlomo", "Artzi", "Singer");
var NewPerson2 = new Person("Moshe", "Perez", "TV");
console.log(NewPerson.fullName);
console.log(NewPerson2.fullName);
