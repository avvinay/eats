import * as actionTypes from './actionTypes';

const initialState = {
    cartItems: [],
    gst: 50,
    deliveryCharges: 30,
    total: 80,
    orders: [],
    isUserLogged: false
};


const CartReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.ADD_ITEM:
            let newCartItems = [...state.cartItems];
            newCartItems.push(action.value);
            let totalValue = state.total + parseFloat(action.value.itemPrice);

            return {
                ...state,
                cartItems: newCartItems,
                total: totalValue
            };

        case actionTypes.ADD_QUANTITY:
            let newAddItems = [...state.cartItems];
            let totalAddValue = state.total;
            newAddItems.map((item) => {
                if(item.itemId === action.value.itemId) {
                    item.quantity = action.value.quantity;
                    item.totalPrice = item.quantity * item.itemPrice;
                    totalAddValue += parseFloat(item.itemPrice);
                }
                return item;
            });
            return {
                ...state,
                cartItems: newAddItems,
                total: totalAddValue
            }

        // case actionTypes.REDUCE_QUANTITY:
        //     let newRemoveItems = [...state.cartItems];
        //     let totalRemovedValue = state.total;
        //     newRemoveItems.map((item) => {
        //         if(item.itemId === action.value.itemId) {
        //             item.quantity = action.value.quantity;
        //             item.totalPrice -= item.quantity * item.itemPrice;
        //             totalRemovedValue -= parseFloat(item.itemPrice);
        //         }
        //         return item;
        //     });
        //     return {
        //         ...state,
        //         cartItems: newRemoveItems,
        //         total: totalRemovedValue
        //     }
        // case actionTypes.REMOVE_ITEM:
        //     let filterItems = [...state.cartItems];
        //     let filteredItems = filterItems.filter((item) => item.itemId !== action.value.itemId);
        //     let updatedTotalValue = state.total - parseFloat(action.value.itemPrice);
        //     return {
        //         ...state,
        //         cartItems: filteredItems,
        //         total: updatedTotalValue

        //     }
        // case actionTypes.CREATE_ORDER:
        //     let orderItems = [...state.cartItems];
        //     let orderObj = {
        //         items: orderItems,
        //         gst: state.gst,
        //         deliveryCharges: state.deliveryCharges,
        //         total: state.total
        //     };
        //     let orders = [...state.orders];
        //     orders.push(orderObj);
        //     return {
        //         ...state,
        //         cartItems: [],
        //         total: 80,
        //         orders
        //     }
        case actionTypes.USER_LOGGED:
            return {
                ...state,
                isUserLogged: action.value
            }


        default:
            return state;
    }
}

export default CartReducer;







