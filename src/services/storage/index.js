import { combineReducers } from 'redux'
import {ingredientsReducer} from '../reducers/reducers'

export const rootReducer = combineReducers({
    ingredientsState: ingredientsReducer
})