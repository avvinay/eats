import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Rupee from '../../Rupee/Rupee';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Order = (props)  => {
  console.log(props);
  const classes = useStyles();
  let bill = (
    <React.Fragment>
      <ListItem>
        <ListItemText>{"Tax :"} <Rupee />{ props.gst} </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>{"Delivery Charges :"}<Rupee />{props.deliveryCharges}</ListItemText>
      </ListItem>
      <ListItem>
      <ListItemText>{"Grand Total :"}<Rupee />{props.total}</ListItemText>
      </ListItem>
    </React.Fragment>
  )
  let items = props.items.map((item) => {
    return (
      <ListItem>
        <ListItemText>
        {item.itemName+"("+item.quantity+")"+"  "}<Rupee />{item.totalPrice}
        </ListItemText>
      </ListItem>
    )
  })
  

  return (
    <List className={classes.root}>
      {items}
      {bill}
    </List>
  );
}




export default Order;

