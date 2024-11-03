import { MyDataBaseFunction  } from "./db/my-database-function";

const myDatabaseClassic = MyDataBaseFunction;
myDatabaseClassic.add({name: "Opahh", age: 23});
myDatabaseClassic.add({name: "Pancha", age: 49});
myDatabaseClassic.add({name: "André", age: 51});
myDatabaseClassic.show();
