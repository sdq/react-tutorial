import Type from './type';

export const addFood = (food) => ({
    type: Type.ADD_FOOD,
    food
})

export const removeFood = () => ({
    type: Type.REMOVE_FOOD,
})

