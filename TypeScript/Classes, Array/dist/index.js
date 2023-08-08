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
        if (this.followers.includes(person)) {
            console.log("You are already following");
        }
        else {
            this.followers.push(person);
        }
    };
    SocialNetwork.prototype.removeFollower = function (fullName) {
        if (this.followers.includes(Person.fullName)) {
            this.followers.splice(person);
        }
        else {
            console.log("");
        }
    };
    return SocialNetwork;
}());
var ShlomoArtzi = new Person("Shlomo", "Artzi", "Singer");
var LionelMessi = new Person("Lionel", "Messi", "football");
var TwitterShlomo = new SocialNetwork("Twitter", "@Shlomo");
var instagramMessi = new SocialNetwork("instagram", "@Messi");
var NewPerson3 = new Person("Eli", "David");
var NewPerson4 = new Person("Eli", "Cohen");
var NewPerson5 = new Person("Dani", "Dani");
// TwitterShlomo.addFollower(NewPerson);
TwitterShlomo.addFollower(NewPerson3);
TwitterShlomo.addFollower(NewPerson4);
TwitterShlomo.addFollower(NewPerson5);
console.log(TwitterShlomo);
console.log(instagramMessi);
