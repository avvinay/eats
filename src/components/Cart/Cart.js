import React,{ useState } from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux';
import CartDialog from './CartDialog/CartDialog';


const Cart = (props) => {
  

    const [cartClick, setCartClick] = useState(false);

    let dialog = cartClick ? <CartDialog  cartStatus={cartClick} /> : null;

    return (
        <div>
            <IconButton aria-label="cart" color="inherit" onClick={() => setCartClick(!cartClick)} >
            <Badge badgeContent={props.cart.cartItems.length} color="secondary">
                <ShoppingCartIcon />
            </Badge>
            </IconButton>  
            {dialog}
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps,null)(Cart);
