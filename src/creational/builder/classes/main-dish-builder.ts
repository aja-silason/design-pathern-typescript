import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Bean, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol{
    private _meal: MealBox = new MealBox();
    
    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice("Arroz", 200);
        const bean = new Bean("Feijão", 800);
        const meat = new Meat("Carne", 2500);
        this._meal.add(rice, bean, meat);
        return this;
    }

    makeBevarege(): this {
        const beverage = new Beverage("Bebida", 250);
        this._meal.add(beverage);
        return this;
    }

    makeDessert(): this {
        const dessert = new Dessert("Sobremesa",  250);
        this._meal.add(dessert);
        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number{
        return this._meal.getPrice();
    }
}