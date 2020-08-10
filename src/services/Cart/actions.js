import * as actionTypes from './actionTypes';

export const addItem = (item) => {
    return {
        type: actionTypes.ADD_ITEM,
        value: item
    }
}

export const increaseQuantity = (itemId, quantity) => {
    return {
        type: actionTypes.ADD_QUANTITY,
        value: {
            itemId,
            quantity
        }
    }
}

export const reduceQuantity = (itemId, quantity) => {
    return {
        type: actionTypes.REDUCE_QUANTITY,
        value: {
            itemId,
            quantity
        }
    }
}

export const removeItem = (itemId,itemPrice) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        value: {
            itemId,
            itemPrice
        }
    }
}


export const createOrder = () => {
    return {
        type: actionTypes.CREATE_ORDER
    }
}

export const userLoggedIn = () => {
    return {
        type: actionTypes.USER_LOGGED,
        value: true

    }
}
export const userLoggedOut = () => {
    return {
        type: actionTypes.USER_LOGGED,
        value: false

    }
}





