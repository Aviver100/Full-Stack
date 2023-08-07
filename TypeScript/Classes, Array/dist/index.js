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
        this.followers = new Array;
    }
    SocialNetwork.prototype.addFollower = function (person) {
        this.followers.push(person);
    };
    return SocialNetwork;
}());
var NewPerson = new Person("Shlomo", "Artzi", "Singer");
var NewPerson2 = new Person("Moshe", "Perez", "TV");
var NewPerson3 = new Person("Eli", "Cohen", "TV");
var NewPerson4 = new Person("Eli", "Cohen");
console.log(NewPerson);
console.log(NewPerson2);
console.log(NewPerson3);
var TwitterShlomo = new SocialNetwork("Twitter", "@Shlomo");
TwitterShlomo.addFollower(NewPerson);
TwitterShlomo.addFollower(NewPerson2);
TwitterShlomo.addFollower(NewPerson4);
console.log(TwitterShlomo);
