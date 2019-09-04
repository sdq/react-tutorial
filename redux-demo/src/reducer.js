import Type from './type';

const initialState = {
    foods: ['apple', 'banana']
}

export default (state = initialState, action) => {
    const newState = Object.assign({}, state);
    const newFoods = state.foods.slice();
    switch (action.type) {

        case Type.ADD_FOOD:
            newFoods.push(action.food);
            newState.foods = newFoods;
            return newState
        //TODO: Remove Food
        case Type.REMOVE_FOOD:
                newFoods.pop();
                newState.foods = newFoods;
                return newState

        default:
            return state
    }
}
