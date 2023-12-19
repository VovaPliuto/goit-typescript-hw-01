function concatenation(firstWord: string, secondWord: string) {
  console.log(`${firstWord} ${secondWord}`);
}

export { concatenation };

type User = { name: string; age: number };

let user: User = {
  name: "Hulk",
  age: 34,
};

let Skipe: User = {
  name: "Ben",
  age: 89,
};

let arrString: number[];

arrString = [1, 2];

let matrix: number[][] = [[1, 2], [3], [234, 34453]];

let mixed: (string | number)[] = [1, "23", "23,dssdf", 134];
let numbers: Array<number> = [1, 2, 3];

let users: User[] = [
  { name: "Vova", age: 35 },
  { name: "Ulia", age: 32 },
];

let arr: any[] = ["adad", 234, { name: "Less" }];

let notSure: unknown = 4;
notSure = "string";
notSure = true;
notSure = {};
notSure = 10;

let num: number;

num = 12;

function fetchUserData(id: string, callback: (data: any) => void): void {
  const responsData = { name: "Tom" };

  callback(responsData);
}

// fetchUserData("123", (data) => {
//   console.log(data.name);
// });

function fetchData() {
  return "Tom";
}

let userData: unknown = fetchData();
if (typeof userData === "string") {
  // console.log(userData.toUpperCase());
}

let tupleType: [string, boolean];
tupleType = ["123", true];
tupleType = ["jasd", true];

tupleType.push("12345");

let otherCortage: [string, ...number[]];
otherCortage = ["Vova", 1, 3, 5, 7, 6];

enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Role ", Role.ADMIN);
}

enum UserStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Banned = "BANNED",
}

let status: UserStatus = UserStatus.Active;

enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
  console.log(status);
}

respond(HttpCodes.OK);

let mixedTypes: string | number | boolean;

mixedTypes = "str";
mixedTypes = 15;
mixedTypes = true;

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === "number" && param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish = {
  legs: 4,
  bark: () => console.log(),
};

function isDog(pet: Dog | Fish): pet is Dog {
  return "bark" in pet;
}

type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
  name: "Vova",
  id: 1,
  employees: [
    {
      name: "Matt",
      id: 2,
    },
  ],
};

type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1;
value = 2;

type YesOrNo = "yes" | "no";
let answer: YesOrNo;
answer = "yes";
answer = "no";

type ButtonSize = "small" | "medium" | "large";

function getButtonSize(size: ButtonSize) {
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

function greet(): string {
  return "Hello, world!";
}

let result = greet();

// ====================================

type User1 = {
  name: string;
  id: number;
};

const getUserNames = (users: User1[]): string[] => {
  return users.map((user) => user.name);
};

const clients: User1[] = [
  { name: "Vova", id: 1 },
  { name: "Eva", id: 2 },
  { name: "Matt", id: 3 },
];

const fnb = getUserNames(clients);

function logMessage(message: string): void {
  console.log(message);
}

function doSomething(callback: () => void) {
  callback();
}

// doSomething(() => console.log("Callback!"));

function throwError(message: string): never {
  throw new Error(message);
}

let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first, second) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc("Hello", 35);

type CallbackType = (...nums: number[]) => number;

function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result", callback(param1, param2));
}

// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

// ==================================================

type Coordinate = [number, number];

type UserWithCoords = {
  id: number;
  name: string;
  coords: Coordinate;
};

const userWithCoords: UserWithCoords = {
  id: 1,
  name: "Voav",
  coords: [10, 20],
};

// ======================================================

enum AnimalIds {
  cat = "cat",
  dog = "dog",
  fish = "fish",
}

type Animal = {
  [AnimalIds.cat]: {
    meow: () => string;
  };
  [AnimalIds.dog]: {
    bark: () => string;
  };
  [AnimalIds.fish]: {
    swim: () => undefined;
  };
};

let cat: Animal[AnimalIds.cat] = {
  meow: () => "Meow! I'm a cat",
};

let dog: Animal[AnimalIds.dog] = {
  bark: () => "Woof! I am a dog",
};

let fish: Animal[AnimalIds.fish] = {
  swim: () => undefined,
};

// =========================================

function greetName(name?: string) {
  if (name) {
    return `Hello, ${name}`;
  } else {
    return "Hello!";
  }
}

type Person = {
  name: string;
  age?: number;
};

const Alice = {
  name: "Alice",
  age: 15,
};

const Ulya = { name: "Ulya" };

interface Beast {
  name: string;
}

interface Beast {
  age: number;
}

let sobaka: Beast = {
  name: "Kratos",
  age: 4,
};

// ==========================

interface Animal1 {
  name: string;
}

interface Doggie extends Animal1 {
  bark: string;
}

class MyDog implements Doggie {
  name = "Fido";
  bark = "Woof!";
}

// ============================

interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class Animal2 implements Walkable, Eatable {
  walk() {
    console.log("The animal walks...");
  }

  eat() {
    console.log("The animal eats...");
  }
}

const animal = new Animal2();

// ============================

type ComplexType = string | number;

function combines(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// ============================

type Admin = {
  name: string;
  priviliges: string[];
};

type Employeer = {
  name: string;
  startDate: Date;
};

type AdminOrEmployee = Admin | Employeer;

function printDetails(obj: AdminOrEmployee) {
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

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

type Vehicle = Car | Truck;

const carInstance = new Car();
const truckInstance = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// useVehicle(carInstance);
// useVehicle(truckInstance);

// ============================

type Croc = {
  bark: () => void;
};

type Pant = {
  meow: () => void;
};

const croc = {
  bark: () => console.log("Bark-bark"),
};

const pant = {
  meow: () => console.log("meow-meow"),
};

function isCroc(animal: Croc | Pant): animal is Croc {
  return "bark" in animal;
}

function letAnimalTalk(animal: Croc | Pant) {
  if (isCroc(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

letAnimalTalk(pant);

// ============================

type Chef = {
  name: string;
  priviliges: string[];
};

type Worker = {
  name: string;
  startDate: Date;
};

type Team = Chef | Worker;

function isWorker(team: Team): team is Worker {
  return (team as Worker).startDate !== undefined;
}

const teamMember: Team = { name: "Bob", priviliges: ["cool"] };

if (isWorker(teamMember)) {
  console.log(
    `Welcome on board, ${teamMember.name}! Your start date is ${teamMember.startDate}`
  );
}

// ============================
let someValue: unknown = "string";

let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// const input = document.getElementById("inputEmail") as HTMLInputElement;

// input.value = "test@test.ts";
// ============================

type PersonA = {
  name: string;
  [x: string]: string;
};

const userA: PersonA = {
  name: "Vova",
  gender: "Male",
  country: "Ukr",
};

type Gamer = {
  id: string;
  name: string;
  email: string;
};

type Gamers = {
  [id: string]: Gamer;
};

let gamers: Gamers = {};

let gamer: Gamer = {
  id: "one",
  name: "two",
  email: "three@ukr.net",
};

gamers[gamer.id] = gamer;

// ============================

function comb(inp1: number, inp2: number): number;
function comb(inp1: string, inp2: string): string;
function comb(inp1: string, inp2: number): string;
function comb(inp1: number, inp2: string): string;
function comb(inp1: any, inp2: any): any {
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    return inp1 + inp2;
  } else if (typeof inp1 === "string" && typeof inp2 === "string") {
    return inp1 + inp2;
  } else if (typeof inp1 === "string" && typeof inp2 === "number") {
    return inp1 + inp2;
  } else if (typeof inp1 === "number" && typeof inp2 === "string") {
    return inp1 + inp2;
  }
}

function concatenate(strs: string[]): string;
function concatenate(strs: string[], separator: string): string;
function concatenate(strs: any, separator?: any): any {
  if (separator !== undefined) {
    return strs.join(separator);
  } else {
    return strs.join("");
  }
}

let names = ["Alice", "Bob", "Charlie"];

console.log(concatenate(names));
console.log(concatenate(names, ", "));

//

type AdminType = {
  type: "admin";
  name: string;
  priviliges: string[];
};

type UserType = {
  type: "user";
  name: string;
  registrationDate: Date;
};

function checkUser(name: string, type: "user"): UserType;
function checkUser(
  name: string,
  type: "admin",
  priviliges: string[]
): AdminType;
function checkUser(
  name: string,
  type: "admin" | "user",
  privilegesOrRegistrationDate?: string[]
): AdminType | UserType {
  if (type === "admin") {
    return {
      type,
      name,
      priviliges: privilegesOrRegistrationDate as string[],
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

let arrNew: Array<string | number> = [];

arrNew = ["str", 10];

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => resolve("Done!"), 0);
});

promise.then((res) => console.log(res));

// function identity<T>(arg: T): T {
//   return arg;
// }

// let output1 = identity("mystring");
// let output2 = identity(100);

// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// let numberss = [1, 2, 3, 4, 5];
// let firstNum = firstElement(numberss);

// let strings = ["a", "b", "c"];
// let firstStr = firstElement(strings);

type Persona = {
  name: string;
};

type AdditionFields = {
  age: number;
};

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Alisa" }, { age: 29 });

type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach((item) => console.log(item));
}

//
type Personag = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person;

function getPersonInfo(person: Person, key: PersonKeys) {
  return person[key];
}

const john: Personag = {
  name: "John",
  age: 25,
  location: "NY",
};

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
console.log(textStorage.getItems());
// textStorage.addItem(1);

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());
// numberStorage.addItem("2");

class KeyValuePair<TKey, TValue> {
  constructor(private key: TKey, private value: TValue) {}

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

const pair1 = new KeyValuePair("name", "Alice");
console.log(pair1.getKey());
console.log(pair1.getValue());

const pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey());
console.log(pair2.getValue());

//

type Userok = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<Userok>): Userok {
  const defaultUser: Userok = {
    id: Date.now(),
    name: "",
    email: "",
    registered: false,
  };

  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: "Vova", email: "vp@gm.com" });

//

type UserRead = {
  id: number;
  name: string;
  email: string;
};

let alice: UserRead = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

alice.name = "Bob";

let aliceRead: Readonly<UserRead> = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const arrRead: Readonly<string[]> = ["One", "Two", "Three"];

// arrRead.push("Four");

type UserBasicInfo = Pick<UserRead, "id" | "name">;

let userBasicInfo: UserBasicInfo = {
  id: 1,
  name: "John Doe",
  // email: "john@example.com",
};

//

type BaseEmployee = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  startDate: Date;
  // ...і багато інших полів
};

type BaseProject = {
  id: number;
  name: string;
  budget: number;
  deadline: Date;
  // ...і багато інших полів
};

type Assignment = {
  employee: Pick<BaseEmployee, "id" | "firstName" | "lastName">;
  projects: Pick<BaseProject, "id" | "name" | "deadline">[];
  shouldNotifyEmployee?: boolean;
};

//

type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Weekend = "Sat" | "Sun";

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
  Mon: "Понеділок",
  Tue: "Вівторок",
  Wed: "Середа",
  Thu: "Четверг",
  Fri: "П'ятниця",
  Sat: "Субота",
  Sun: "Неділя",
};

//

enum UserRoles {
  admin = "admin",
  manager = "manager",
  employee = "manger",
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRolesStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: true,
  [UserRoles.employee]: true,
};

type InitialFormType = {
  name: string;
  email: string;
  password: string;
};

export type Form = InitialFormType & {
  errors: Partial<Record<keyof InitialFormType, [string]>>;
};

type PersonWithoutLocation = Omit<Personag, "location">;

const obg: PersonWithoutLocation = {
  name: "Kratos",
  age: 23,
};

function greeting() {
  return "Hello, world!";
}

type Greeting = ReturnType<typeof greeting>;

function multiply(a: number, b: number) {
  return a * b;
}

type MultiplyResult = ReturnType<typeof multiply>;

type Callback = (...args: unknown[]) => unknown;

function createLoggedFunction<T extends Callback>(func: T) {
  let funcRef = func;

  const loggedFunction = (...args: Parameters<T>) => {
    console.log(`Function ${func.name} was called with arguments:`, args);
    const result = funcRef(...args) as ReturnType<T>;
    return result;
  };

  return loggedFunction;
}

type MyFunctionType = (a: string, b: number, c: boolean) => void;

type MyParametersType = Parameters<MyFunctionType>

type SomeType = string | null | undefined;

type NonNullableType = NonNullable<SomeType>
