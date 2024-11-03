import { User } from "../interface/user";


export class MyDataBaseClassic {
    private static _instance: MyDataBaseClassic | null = null;

    private users: User[] = []

    private constructor() {}

    public static get instance(): MyDataBaseClassic {
        if(MyDataBaseClassic._instance === null){
            MyDataBaseClassic._instance = new MyDataBaseClassic();
        }

        return MyDataBaseClassic._instance;
    }

    public add(user: User): void {
        this.users.push(user);
    }

    public remove(index: number): void{
        this.users.splice(index);
    }

    public show(): void{
        for(const user of this.users){
            console.log(user);
        }
    }

}
