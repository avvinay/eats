import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { connect } from 'react-redux';
import * as actionCreators from '../../../services/Cart/index';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 10,
  },
  media: {
    height: 140,
  },
});

const Dish = (props) => {
  const classes = useStyles();
  const [addClicked, setAddClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [itemName] = useState(props.item_name);
  const [itemPrice] = useState(props.item_price);
  const [itemImage] = useState(props.image_url);
  const [itemId] = useState(props.item_id);
  const [itemDescription] = useState(props.item_description);

  const addItemHandler = () => {
    props.onAddItem({itemId, itemName, itemPrice, quantity: 1, totalPrice: itemPrice});
    console.log(quantity);
  }

  const reduceQuantityHandler = () => {
    console.log("reducer clicked");
    setQuantity(quantity-1);
    console.log(quantity);
    props.onReduceQuantity(itemId, quantity-1);
    if(quantity === 1) {
      props.onRemoveItem(itemId,itemPrice);
    }
  }

  const increaseQuantityHandler = () => {
    console.log("increase clicked");
    setQuantity(quantity + 1);
    console.log(quantity);
    props.onIncreseQuantity(itemId, quantity+1);
  }

  // const quantityChangeHandler = () => {
  //   console.log("called");
  //   let q = props.cart.cartItems.map((item) => {
  //     console.log(item);
  //     if(item.itemId === itemId) {
  //       return item;
  //     }
  //   });
  //   console.log(q);
  // }


  let ActionButton = addClicked && (quantity > 0 ) ?     
  <ButtonGroup size="small" color="secondary" aria-label="small outlined button group">
    <Button
        aria-label="reduce"
        onClick={reduceQuantityHandler}
      >
        <RemoveIcon fontSize="small" />
      
      </Button>
      <Button>{quantity}</Button>
      <Button
        aria-label="increase"
        onClick={increaseQuantityHandler}
      >
        <AddIcon fontSize="small" />
      </Button>
  </ButtonGroup> :
  <Button variant="outlined" color="secondary" onClick={() => { 
    setAddClicked(true);
    setQuantity(1); 
    addItemHandler();
    // quantityChangeHandler();
    }}>
   ADD +
  </Button>;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={itemImage}
          title={itemName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {itemName}
          </Typography>
            <Typography variant="subtitle1"  component="p">
                &#8377;{itemPrice}
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {itemDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {ActionButton}
      {/* <ButtonGroup aria-label="">
          <Button
            aria-label="reduce"
            // onClick={() => {
            //   setCount(Math.max(count - 1, 0));
            // }}
          >
            <RemoveIcon fontSize="small" />
           
          </Button>
          <Button>
            <Typography variant="subtitle1"  component="p">
                1
            </Typography>
          </Button>
          <Button
            aria-label="increase"
            // onClick={() => {
            //   setCount(count + 1);
            // }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup> */}
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (item) => {
      dispatch(actionCreators.addItem(item));
    },
    onIncreseQuantity: (item_id, quantity) => {
      dispatch(actionCreators.increaseQuantity(item_id, quantity));
    },
    onReduceQuantity: (item_id, quantity) => {
      dispatch(actionCreators.reduceQuantity(item_id, quantity));
    },
    onRemoveItem: (item_id,item_price) => {
      dispatch(actionCreators.removeItem(item_id,item_price));
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Dish);