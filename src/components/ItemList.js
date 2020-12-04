import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { increment, decrement, deleteItem } from '../actions/';
import { connect } from 'react-redux';

const ItemList = ({ items, increment, decrement, deleteItem }) => {
  const RenderedItems = items.map((item, idx) => {
    return (
      <Fragment key={idx}>
      <Grid container alignContent="center" justify="flex-start" alignItems="center">
        <ListItem>
          <Grid item x={1}>
            <ListItem button onClick={() => deleteItem(item)} style={{color: 'red'}}>
              <ListItemText>X</ListItemText>
            </ListItem>
          </Grid>
          <Grid item xs={9}>
            <ListItemText primary={item.id} secondary={`Count: ${item.count}`}/>
          </Grid>
          <Grid item x={1}>
            <ListItem button onClick={() => increment(item)}>
              <ListItemText>ʌ</ListItemText>
            </ListItem>
          </Grid>
          <Grid item x={1}>
            <ListItem button onClick={() => decrement(item)}>
              <ListItemText>v</ListItemText>
            </ListItem>
          </Grid>
        </ListItem>
      </Grid>
      <Divider />
      </Fragment>
    );
  });

  return (
    <Container maxWidth="sm">
      <List component="nav"></List>
      {RenderedItems}
    </Container>
  );
};

const mapDispatchToProps = dispatch => item => {
  return {
    increment: (item) => dispatch(increment(item)),
    decrement: (item) => dispatch(decrement(item)),
    deleteItem: (item) => dispatch(deleteItem(item))
  };
}


export default connect(null, mapDispatchToProps)(ItemList);
