import { connect } from 'react-redux'
import Demo from './demo'
import {foods} from './selector'
import * as action from './action'

const mapStateToProps = (state) => ({
    foods: foods(state)
})

const mapDispatchToProps = dispatch => {
    return {
        addFood: (food) => dispatch(action.addFood(food)),
        removeFood: () => dispatch(action.removeFood()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
