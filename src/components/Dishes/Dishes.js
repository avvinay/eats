import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dish from './Dish/Dish1';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
    marginTop: 80,
    overflow: "hidden"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Dishes = () => {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Dish 
            item_id = {1}
            image_url="https://b.zmtcdn.com/data/dish_photos/f7e/3b0bc3809a39f2c0308cf9eccbf59f7e.jpg?fit=around%7C200%3A200" 
            item_name="Chicken Biryani" 
            item_price="280"
            item_description="Delicious chicken biryani served with raitha."
             />
        </Grid>
        <Grid item xs={3}>
          <Dish 
            item_id = {2}
            image_url="https://b.zmtcdn.com/data/dish_photos/2bc/42677600c3385a140ca07327da77a2bc.jpg?fit=around%7C200%3A200" 
            item_name="Egg Biryani" 
            item_price="115"
            item_description="Spicy Fried boiled eggs layered with biryani rice."
             />
        </Grid>
        <Grid item xs={3}>
          <Dish 
            item_id = {3}
            image_url="https://b.zmtcdn.com/data/dish_photos/d35/59f31d6379a6fdb65a5ecba401e2ad35.jpg?fit=around%7C200%3A200" 
            item_name="Veg Biryani" 
            item_price="203"
            item_description="Hyderabadi Veg Dum Biryani with Beans, Cauliflower, Potatoes & Carrots"
             />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {4}
          image_url="https://b.zmtcdn.com/data/dish_photos/06d/0fcba1e2e850931575ed459e44b7206d.jpg?fit=around%7C200%3A200" 
          item_name="Chicken Fry Biryani" 
          item_price="309" 
          item_description="Chicken Fry Piece Biryani + Beverage[250ml]."
          />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {5}
          image_url="https://b.zmtcdn.com/data/pictures/6/246/ba50a5176f9b3abf84a4b734543474a2.jpg?output-format=webp" 
          item_name="Mexican Chicken Pizza" 
          item_price="200"
          item_description="Chicken cubes, salami, capsicum, spicy dip."
           />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {6}
          image_url="https://b.zmtcdn.com/data/pictures/6/246/ba50a5176f9b3abf84a4b734543474a2.jpg?output-format=webp" 
          item_name="Chilli Chicken Pizza" 
          item_price="190"
          item_description="Toasted chicken in chilli and soya sause."
          />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {7}
          image_url="https://b.zmtcdn.com/data/pictures/6/246/ba50a5176f9b3abf84a4b734543474a2.jpg?output-format=webp" 
          item_name="Double Cheese Pizza" 
          item_price="180"
          item_description="3 types of cheese."
          />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {8}
          image_url="https://b.zmtcdn.com/data/dish_photos/5fb/13748082c56fed493370bc4cc15855fb.png?fit=around%7C200%3A200" 
          item_name="Crispy Chicken Burger" 
          item_price="75"
          item_description="Chicken out with the delicious Crispy Chicken burger."
          />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {9}
          image_url="https://b.zmtcdn.com/data/dish_photos/5b0/69991d205ea2f003d91fb27f309fb5b0.png?fit=around%7C200%3A200" 
          item_name="Crispy Veg Supreme" 
          item_price="65"
          item_description="A delicious burger that's 'Made for India'."
          />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {10}
          image_url="https://b.zmtcdn.com/data/dish_photos/2c1/d7bdc8c78f251e8a8f262aa182a732c1.png?fit=around%7C200%3A200" 
          item_name="Chicken Whopper" 
          item_price="159"
          item_description="Bigger - Better - Best."
          />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {11}
          image_url="https://b.zmtcdn.com/data/dish_photos/824/12ded90c389a2656226b86f2ddb92824.jpg?fit=around%7C200%3A200" 
          item_name="Veg Masala Whopper" 
          item_price="189"
          item_description="A special creation for vegetarians!."
          />
        </Grid>
        <Grid item xs={3}>
          <Dish 
          item_id = {12}
          image_url="https://b.zmtcdn.com/data/dish_photos/dca/437bf329cf5ef8d4a9fca4c312a23dca.jpg?fit=around%7C200%3A200" 
          item_name="BK Veggie + Chocolate Shake" 
          item_price="234"
          item_description=""
          />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}


export default Dishes;