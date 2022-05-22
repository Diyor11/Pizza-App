import {actions} from './reducer'

export const selectOrder = (data) => {
    return {type: actions.SELECT, payload: data}
}

export const addCard = data => {
    return {type: actions.ADD_PRODUCT, payload: data}
}

export const setPrice = data => {
    return {type: actions.TOTAL_PRICE}
}