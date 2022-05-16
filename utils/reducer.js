
export const actions = {
    OPEN_MENU: 'OPEN_MENU',
    CLOSE_MENU: 'CLOSE_MENU',
    ADD_ORDER: 'ADD_ORDER'
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case actions.OPEN_MENU:
            return {...state, openMenu: true}
        case actions.CLOSE_MENU:
            return {...state, openMenu: false}
        default:
            return state
    }
}

export default reducer
