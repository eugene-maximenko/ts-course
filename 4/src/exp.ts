abstract class FoodProvider {
    constructor(public food: string) { }

    getFood() {
        return this.food
    }
}

interface IFoodProvider {
    food: string

    getFood(): string
}

class Wife extends FoodProvider implements IFoodProvider { }

class Restaurant extends FoodProvider implements IFoodProvider { }

interface IMale {
    eat(): string
}

class LowRankingMale implements IMale {
    eat(this: LowRankingMale) {
        const wife = new Wife('Sandwich')
        const food = wife.getFood()

        return food
    }
}

class AverageRankingMale implements IMale {
    // private wife: Wife

    // constructor(wife: Wife) {
    //     this.wife = wife
    // }

    constructor(public wife: Wife) { }

    eat(this: AverageRankingMale) {
        return this.wife.getFood()
    }
}

class HighRankingMale implements IMale {
    private foodProvider: IFoodProvider

    constructor(foodProvider: IFoodProvider) {
        this.foodProvider = foodProvider
    }

    eat(this: HighRankingMale) {
        const food = this.foodProvider.getFood()
        return food
    }
}

class Fake {

}

new HighRankingMale(new Wife('Sandwich')).eat()
new HighRankingMale(new Restaurant('Steak')).eat()