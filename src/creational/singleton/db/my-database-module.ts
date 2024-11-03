import { User } from "../interface/user";

const users: User[] = []

export const MyDataBaseModule = {
    
    add(user: User): void {
      users.push(user);
    },

    remove(index: number): void{
      users.splice(index);
    },

    show(): void{
        for(const user of users){
            console.log(user);
        }
    }

}
