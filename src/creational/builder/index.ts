import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBevarege().getMeal();
console.log(meal2); 



const veganDishBuilder = new VeganDishBuilder();
const veganmeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganDishBuilder)
console.log(veganDishBuilder.getPrice());