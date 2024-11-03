import { User } from "../interface/user";


export const MyDataBaseFunction = (function (){
    const users: User[] = []
    return {
    
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
})();

