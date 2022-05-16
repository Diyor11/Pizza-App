import {actions} from './reducer'

export const addOrder = (data) => {
    return {type: actions.ADD_ORDER, payload: data}
}

export const closeMenu = () => {
    return {type: actions.CLOSE_MENU}
}