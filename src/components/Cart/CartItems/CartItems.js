import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CartItem from './CartItem/CartItem';
import {connect} from 'react-redux';
import Bill from './Bill/Bill';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CartItems = (props)  => {
  const classes = useStyles();
  let listItems = props.cart.cartItems.map((item,index) => {
    return <CartItem key={index} {...item} />;
  });

  return (
    <List className={classes.root}>
      {listItems}
      <Bill />
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}


export default connect(mapStateToProps, null)(CartItems);

