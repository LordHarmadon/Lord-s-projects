// class Furniture {
//     name: string
//     size: string
//     private _price: number
//     static quantity: number = 0
//     static all: Furniture[] = []
//     static getAveragePrice(): number {
//       if (Furniture.all.length === 0) {
//           return 0; 
//       }
//       let total = 0;
//       for (let i = 0; i < Furniture.all.length; i++) {
//           total += Furniture.all[i].price;
//       }
//       return total / Furniture.all.length;
//   }
//     id: number
//     constructor(name: string, size: string, price: number) {
//        this.name = name
//        this.size = size
//        this.price = price
//        Furniture.quantity++
//        this.id = Furniture.quantity
//        Furniture.all.push(this)
//     }
//     set price(num: number) {
//       if (num > 0 && num <200000)
       
//         this._price = num;
//       else throw new Error(num+'цена неверная')
//     }
//     get price() {
//       return this._price
//     }
//   }
  

//   class chair extends Furniture {
//     protected _legs: number
//     private back: boolean
//     legsLenght: number
//     constructor(name: string, price: number, legs: number, back: boolean, legsLenght: number) {
//       super(name,"515X55",price)
//       this.legs = legs
//       this.back = back
//       this.legsLenght = legsLenght
//     }
//     set legs(num: number) {
//       if (num > 2 && num <500)
//         this._legs = num;
//       else throw new Error('колво ножек вне диапазона')
//     }
//     get legs() {
//       return this._legs
//     }
//   }

//   class wardrobe extends Furniture {
//     material: string
//     sashQuantity: number
//     wardrobeShelvesQuantity: number
//     constructor(name: string, price: number, material: string, sashQuantity: number, wardrobeShelvesQuantity: number ) {
//       super(name,"850X205",price)
//       this.material = material
//       this.sashQuantity = sashQuantity
//       this.wardrobeShelvesQuantity = wardrobeShelvesQuantity
//     }
//   }

//   class shelves extends Furniture {
//     segment: string
//     segmentSize: string
//     constructor(name: string, price: number, segment: string, segmentSize: string ) {
//       super(name,"115X55",price)
//       this.segment = segment
//       this.segmentSize = segmentSize
//     }
//   }

//   class table extends Furniture {
//     tablelegs: number
//     tableTop: string
//     constructor(name: string, price: number, tablelegs: number, tableTop: string ) {
//       super(name,"1000x2000",price)
//       this.tablelegs = tablelegs
//       this.tableTop = tableTop
//     }
//   }


//   let taburetka = new chair("Табуретка",500,4,false,12)
//   let Creslo = new chair("Кресло",16700,8,true,32)
//   let VineWardrobe = new wardrobe("Винный шкаф",150000,"Авиационная сталь",4,2)
//   let KitchenShelf = new shelves("Кресло",16700,"Уголок","Второй")
//   let CircleRoyalKnightsTableForDinner = new table("Обеденный стол рыцарей короля Артура",158000,6,"380X1460")
//   //console.log(taburetka,Creslo,VineWardrobe,KitchenShelf,CircleRoyalKnightsTableForDinner)
//   // console.log(Furniture.quantity)
//   // console.log(Furniture.all)
//   console.log(Furniture.getAveragePrice())
















//кт1 Брежнев Олег
class User {
    private static _count: number = 0;
    private _login: string;
    private _password: string;
    private _grade: number;

    constructor(public name: string, login: string, password: string, grade: number) {
        User._count++;
        if (grade <= 0) {
            throw new Error("Grade должен быть целым положительным числом больше 0");
        }
        this._login = login;
        this._password = password;
        this._grade = grade;
    }
//взаимодействие с логином
    get login(): string {
        return this._login;
    }

    set login(value: string) {
        throw new Error("Невозможно изменить логин!");
    }
//взаимодействия с паролем
    get password(): string {
        return "********";
    }

    set password(newPassword: string) {
        this._password = newPassword;
    }
//взаимодействие с грейдом
    get grade(): never {
        throw new Error("Неизвестное свойство grade");
    }

    set grade(value: number) {
        throw new Error("Неизвестное свойство grade");
    }
//команда показа пользователя
    showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this._login}`);
    }
//сравнения
    eq(other: User): boolean {
        return this._grade === other._grade;
    }

    lt(other: User): boolean {
        return this._grade < other._grade;
    }

    gt(other: User): boolean {
        return this._grade > other._grade;
    }
    
    static get count(): number {
        return User._count;
    }
}
//хаусмастер
class SuperUser extends User {
    private static Admincount: number = 0;

    constructor(name: string, login: string, password: string, public role: string) {
        super(name, login, password, 999);
        SuperUser.Admincount++;
    }

    static get count(): number {
        return SuperUser.Admincount;
    }

    showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
    }
}



// Тестирование
const user1 = new User("Tobey Maguire", "Tobey", "13241324", 3);
const user2 = new User("Harley Davidson", "Harley", "65487910", 2);
const user3 = new User("General Grevous", "Grevous", "37922689", 3);
const user4 = new User("Obi van Kenobi", "Obi van", "65487910", 2);
const admin2 = new SuperUser("Showa Hirohito", "Showa", "00000000", "HouseMaster");
const admin1 = new SuperUser("Joseph Stalin", "Joseph", "11111111", "HouseMaster");
const admin3 = new SuperUser("Winston Churchil", "Winston", "55553456", "HouseMaster");

user1.showInfo();
admin2.showInfo();

console.log(`Всего обычных пользователей: ${User.count}`);
console.log(`Всего супер-пользователей: ${SuperUser.count}`);

console.log(user1.lt(user2)); 
console.log(admin2.gt(user3)); 
console.log(user1.eq(user3));
console.log(admin1.eq(admin3));

// Попытки изменить недоступные атрибуты
user3.name = "Ringo Starr";
user1.password = "Pa$$w0rd";

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);
console.log(admin2.login);
















