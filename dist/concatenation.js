function concatenation(firstWord, secondWord) {
    console.log(`${firstWord} ${secondWord}`);
}
export { concatenation };
let user = {
    name: "Hulk",
    age: 34,
};
let Skipe = {
    name: "Ben",
    age: 89,
};
let arrString;
arrString = [1, 2];
let matrix = [[1, 2], [3], [234, 34453]];
let mixed = [1, "23", "23,dssdf", 134];
let numbers = [1, 2, 3];
let users = [
    { name: "Vova", age: 35 },
    { name: "Ulia", age: 32 },
];
let arr = ["adad", 234, { name: "Less" }];
let notSure = 4;
notSure = "string";
notSure = true;
notSure = {};
notSure = 10;
let num;
num = 12;
function fetchUserData(id, callback) {
    const responsData = { name: "Tom" };
    callback(responsData);
}
// fetchUserData("123", (data) => {
//   console.log(data.name);
// });
function fetchData() {
    return "Tom";
}
let userData = fetchData();
if (typeof userData === "string") {
    // console.log(userData.toUpperCase());
}
let tupleType;
tupleType = ["123", true];
tupleType = ["jasd", true];
tupleType.push("12345");
let otherCortage;
otherCortage = ["Vova", 1, 3, 5, 7, 6];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
const person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("Role ", Role.ADMIN);
}
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "ACTIVE";
    UserStatus["Inactive"] = "INACTIVE";
    UserStatus["Banned"] = "BANNED";
})(UserStatus || (UserStatus = {}));
let status = UserStatus.Active;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
})(HttpCodes || (HttpCodes = {}));
function respond(status) {
    console.log(status);
}
respond(HttpCodes.OK);
let mixedTypes;
mixedTypes = "str";
mixedTypes = 15;
mixedTypes = true;
function combine(param1, param2) {
    if (typeof param1 === "number" && param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
let pet = {
    legs: 4,
    bark: () => console.log(),
};
function isDog(pet) {
    return "bark" in pet;
}
const ceo = {
    name: "Vova",
    id: 1,
    employees: [
        {
            name: "Matt",
            id: 2,
        },
    ],
};
let value;
value = 1;
value = 2;
let answer;
answer = "yes";
answer = "no";
function getButtonSize(size) {
    switch (size) {
        case "small":
            return { fontSize: "10px", padding: "5px" };
        case "medium":
            return { fontSize: "14px", padding: "10px" };
        case "large":
            return { fontSize: "18px", padding: "15px" };
        default:
            return { fontSize: "14px", padding: "10px" };
    }
}
let myBtnStyle = getButtonSize("small");
function greet() {
    return "Hello, world!";
}
let result = greet();
const getUserNames = (users) => {
    return users.map((user) => user.name);
};
const clients = [
    { name: "Vova", id: 1 },
    { name: "Eva", id: 2 },
    { name: "Matt", id: 3 },
];
const fnb = getUserNames(clients);
function logMessage(message) {
    console.log(message);
}
function doSomething(callback) {
    callback();
}
// doSomething(() => console.log("Callback!"));
function throwError(message) {
    throw new Error(message);
}
let myFunc;
myFunc = (first, second) => {
    console.log(`First: ${first}, Second: ${second}`);
};
myFunc("Hello", 35);
function calc(param1, param2, callback) {
    console.log("Result", callback(param1, param2));
}
const userWithCoords = {
    id: 1,
    name: "Voav",
    coords: [10, 20],
};
// ======================================================
var AnimalIds;
(function (AnimalIds) {
    AnimalIds["cat"] = "cat";
    AnimalIds["dog"] = "dog";
    AnimalIds["fish"] = "fish";
})(AnimalIds || (AnimalIds = {}));
let cat = {
    meow: () => "Meow! I'm a cat",
};
let dog = {
    bark: () => "Woof! I am a dog",
};
let fish = {
    swim: () => undefined,
};
// =========================================
function greetName(name) {
    if (name) {
        return `Hello, ${name}`;
    }
    else {
        return "Hello!";
    }
}
const Alice = {
    name: "Alice",
    age: 15,
};
const Ulya = { name: "Ulya" };
let sobaka = {
    name: "Kratos",
    age: 4,
};
class MyDog {
    constructor() {
        this.name = "Fido";
        this.bark = "Woof!";
    }
}
class Animal2 {
    walk() {
        console.log("The animal walks...");
    }
    eat() {
        console.log("The animal eats...");
    }
}
const animal = new Animal2();
function combines(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printDetails(obj) {
    console.log(`Name ${obj.name}`);
    if ("priviliges" in obj) {
        console.log(`Priviliges: ${obj.priviliges.join(", ")}`);
    }
    if ("startDate" in obj) {
        console.log(`Start date: ${obj.startDate}`);
    }
}
// ============================
class Car {
    drive() {
        console.log("Driving a car...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log(`Loading cargo: ${amount}`);
    }
}
const carInstance = new Car();
const truckInstance = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
const croc = {
    bark: () => console.log("Bark-bark"),
};
const pant = {
    meow: () => console.log("meow-meow"),
};
function isCroc(animal) {
    return "bark" in animal;
}
function letAnimalTalk(animal) {
    if (isCroc(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
letAnimalTalk(pant);
function isWorker(team) {
    return team.startDate !== undefined;
}
const teamMember = { name: "Bob", priviliges: ["cool"] };
if (isWorker(teamMember)) {
    console.log(`Welcome on board, ${teamMember.name}! Your start date is ${teamMember.startDate}`);
}
// ============================
let someValue = "string";
let strLength1 = someValue.length;
let strLength2 = someValue.length;
const userA = {
    name: "Vova",
    gender: "Male",
    country: "Ukr",
};
let gamers = {};
let gamer = {
    id: "one",
    name: "two",
    email: "three@ukr.net",
};
gamers[gamer.id] = gamer;
function comb(inp1, inp2) {
    if (typeof inp1 === "number" && typeof inp2 === "number") {
        return inp1 + inp2;
    }
    else if (typeof inp1 === "string" && typeof inp2 === "string") {
        return inp1 + inp2;
    }
    else if (typeof inp1 === "string" && typeof inp2 === "number") {
        return inp1 + inp2;
    }
    else if (typeof inp1 === "number" && typeof inp2 === "string") {
        return inp1 + inp2;
    }
}
function concatenate(strs, separator) {
    if (separator !== undefined) {
        return strs.join(separator);
    }
    else {
        return strs.join("");
    }
}
let names = ["Alice", "Bob", "Charlie"];
console.log(concatenate(names));
console.log(concatenate(names, ", "));
function checkUser(name, type, privilegesOrRegistrationDate) {
    if (type === "admin") {
        return {
            type,
            name,
            priviliges: privilegesOrRegistrationDate,
        };
    }
    return {
        type,
        name,
        registrationDate: new Date(),
    };
}
const userType = checkUser("Nikita", "user");
// console.log(userType);
const adminType = checkUser("Tonya", "admin", ["manageUsers", "deletePosts"]);
// console.log(adminType);
let arrNew = [];
arrNew = ["str", 10];
const promise = new Promise((resolve) => {
    setInterval(() => resolve("Done!"), 0);
});
promise.then((res) => console.log(res));
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: "Alisa" }, { age: 29 });
function getLength(str) {
    return str.length;
}
function arrayLogger(array) {
    array.forEach((item) => console.log(item));
}
function getPersonInfo(person, key) {
    return person[key];
}
const john = {
    name: "John",
    age: 25,
    location: "NY",
};
function extractValue(obj, key) {
    return obj[key];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Hello");
textStorage.addItem("World");
console.log(textStorage.getItems());
// textStorage.addItem(1);
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());
// numberStorage.addItem("2");
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getKey() {
        return this.key;
    }
    getValue() {
        return this.value;
    }
}
const pair1 = new KeyValuePair("name", "Alice");
console.log(pair1.getKey());
console.log(pair1.getValue());
const pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey());
console.log(pair2.getValue());
function createUser(data) {
    const defaultUser = {
        id: Date.now(),
        name: "",
        email: "",
        registered: false,
    };
    return { ...defaultUser, ...data };
}
const newUser = createUser({ name: "Vova", email: "vp@gm.com" });
let alice = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
alice.name = "Bob";
let aliceRead = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
const arrRead = ["One", "Two", "Three"];
let userBasicInfo = {
    id: 1,
    name: "John Doe",
    // email: "john@example.com",
};
const translations = {
    Mon: "Понеділок",
    Tue: "Вівторок",
    Wed: "Середа",
    Thu: "Четверг",
    Fri: "П'ятниця",
    Sat: "Субота",
    Sun: "Неділя",
};
//
var UserRoles;
(function (UserRoles) {
    UserRoles["admin"] = "admin";
    UserRoles["manager"] = "manager";
    UserRoles["employee"] = "manger";
})(UserRoles || (UserRoles = {}));
const userRolesStatuses = {
    [UserRoles.admin]: true,
    [UserRoles.manager]: true,
    [UserRoles.employee]: true,
};
const obg = {
    name: "Kratos",
    age: 23,
};
function greeting() {
    return "Hello, world!";
}
function multiply(a, b) {
    return a * b;
}
function createLoggedFunction(func) {
    let funcRef = func;
    const loggedFunction = (...args) => {
        console.log(`Function ${func.name} was called with arguments:`, args);
        const result = funcRef(...args);
        return result;
    };
    return loggedFunction;
}
//# sourceMappingURL=concatenation.js.map