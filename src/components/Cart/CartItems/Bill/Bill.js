import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'; 


// const useStyles = makeStyles((theme) => ({
    
//   }));

const Bill = (props) => {
//   const classes = useStyles();

    let emptyCart = props.cart.cartItems.length == 0 ? 
    <ListItem>
        <ListItemText>
            <Typography variant="body2">
                Cart is empty please add items
            </Typography>
        </ListItemText>  
    </ListItem>:  
    <React.Fragment>
        <ListItem>
            <ListItemText>
                <Typography variant="body2">
                    Tax: {props.cart.gst}
                </Typography>
            </ListItemText>  
        </ListItem>
        <ListItem>         
            <ListItemText>
                <Typography variant="body2">
                    Delivery Charges: {props.cart.deliveryCharges}
                </Typography>
            </ListItemText>  
        </ListItem>
        <ListItem>          
            <ListItemText>
                <Typography variant="h6">
                    Grand Total: {props.cart.total}
                </Typography>
            </ListItemText>            
        </ListItem>
    </React.Fragment>
    ;

    return (
        <React.Fragment>
           {emptyCart}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}



export default connect(mapStateToProps, null)(Bill);