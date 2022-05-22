import { createContext, useReducer } from 'react'
import reducer from './reducer'

const initialState = {
    selectedOrder: {},
    orders: [],
    totalPrice: 0
}

export const Context = createContext()

export default function Provider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}