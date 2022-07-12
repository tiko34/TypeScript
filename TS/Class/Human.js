//Создание класса с хранящимися в нем параметрами
var Human = /** @class */ (function () {
    function Human(Name, FirstName, Age, sex) {
        this.Age = Age;
        this.Name = Name;
        this.FirstName = FirstName;
        this.sex = sex;
    }
    return Human;
}());
//создание переменной с типом данных "Human"
//let user:Human= new Human("Ben","Ten",15,true);
//Вывод строки 
//console.log(user);
