import { MyDataBaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDataBaseFunction;

myDatabaseClassic.add({name: "Anania", age: 23});
myDatabaseClassic.add({name: "Alice", age: 49});
myDatabaseClassic.add({name: "Silas", age: 51});
myDatabaseClassic.remove(2);
myDatabaseClassic.show();

export { myDatabaseClassic }