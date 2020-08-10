import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        <ListItemText primary={"Tax :"+ props.gst} />
      </ListItem>
      <ListItem>
        <ListItemText primary={"Delivery Charges :"+ props.deliveryCharges} />
      </ListItem>
      <ListItem>
        <ListItemText primary={"Grand Total :"+ props.total} />
      </ListItem>
    </React.Fragment>
  )
  let items = props.items.map((item) => {
    return (
      <ListItem>
        <ListItemText primary={item.itemName+"("+item.quantity+")"+"  "+item.totalPrice} />
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

