import React,{ useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ViewListIcon from '@material-ui/icons/ViewList';
import {connect} from 'react-redux';
import OrderDialog from './OrderDialog/OrderDialog';


const Orders = (props) => {
  

    const [ordersClick, setOrdersClick] = useState(false);

    let dialog = ordersClick ? <OrderDialog orderStatus={ordersClick} /> : null;

    return (
        <div >
            <IconButton aria-label="orders" color="inherit" onClick={() => setOrdersClick(!ordersClick)} >
                <ViewListIcon />
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


export default connect(mapStateToProps,null)(Orders);
