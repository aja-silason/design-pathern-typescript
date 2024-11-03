import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Bean, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol{
    private _meal: MealBox = new MealBox();
    
    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice("Arroz", 200);
        const bean = new Bean("Feijão", 800);
        this._meal.add(rice, bean);
        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number{
        return this._meal.getPrice();
    }
}