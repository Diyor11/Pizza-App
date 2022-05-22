
export const actions = {
    SELECT: 'SELECT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    TOTAL_PRICE: 'TOTAL_PRICE'
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case actions.SELECT:
            return {...state, selectedOrder: payload}
        case actions.ADD_PRODUCT:
            return {...state, orders: [...state.orders, payload], totalPrice: state.orders.length ? state.orders.reduce((a, b) => a.price + b.price):0}
        case actions.TOTAL_PRICE:
            return {...state, totalPrice: state.totalPrice + payload}
        default:
            return state
    }
}

export default reducer
