import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../services/Cart/index';

const useStyles = makeStyles((theme) => ({
    space: {
      paddingRight: 30
    }
  }));


const CartItem = (props) => {
  const classes = useStyles();

  const reduceQuantityHandler = () => {
    props.onReduceQuantity(props.itemId, props.quantity)
}
const increaseQuantityHandler = () => {
    props.onAddQuantity(props.itemId, props.quantity)
}


    return (
        <ListItem>
            <ListItemText primary={props.itemName +' x '+ props.quantity} className={classes.space}   />
            <ListItemText primary={props.totalPrice} className={classes.space}  />

            {/* <ButtonGroup size="small" color="secondary" aria-label="small outlined button group" >
                <Button
                    aria-label="reduce"
                    onClick={() => reduceQuantityHandler()}
                >
                    <RemoveIcon fontSize="small" />
                
                </Button>
                <Button>1</Button>
                <Button
                    aria-label="increase"
                    onClick={() => increaseQuantityHandler()}
                >
                    <AddIcon fontSize="small" />
                </Button>
            </ButtonGroup> */}
        </ListItem>
    )
}


// const mapDispatchToProps = dispatch => {
//     return {
//         onAddQuantity: (item_id, quantity) => {
//             dispatch(actionCreators.increaseQuantity(item_id, quantity))
//         },
//         onReduceQuantity: (item_id, quantity) => {
//             dispatch(actionCreators.reduceQuantity(item_id, quantity));
//           },
//     }
// }

// export default connect(null, mapDispatchToProps)(CartItem);
export default CartItem;