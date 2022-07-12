var Human = /** @class */ (function () {
    function Human(Name, FirstName, Age, sex) {
        this.Age = Age;
        this.Name = Name;
        this.FirstName = FirstName;
        this.sex = sex;
    }
    return Human;
}());
var user = new Human("Ben", "Ten", 15, true);
console.log(user);
