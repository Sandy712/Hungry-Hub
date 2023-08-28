import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { Stack, Rating } from "@mui/material";

const ProdCard = (props) => {
  const { id, title, image, price,value } = props.item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
        price,
        value,
      })
    );
  };

  return (
    <>
      <Card sx={{ maxWidth: 300 }} className="main-card">
        <CardActionArea>
          <img src={image} alt="" className="prod-img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography>Rs.{price}</Typography>
            <Stack spacing={2}>
              <Rating
                value={value}
                precision={0.5}
                readOnly
                // highlightSelectedOnly   this is used for highlighted only one
              />
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => addToCart()}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProdCard;
