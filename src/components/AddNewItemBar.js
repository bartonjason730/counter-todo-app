import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { connect } from 'react-redux';
import { addItem } from '../actions';

const AddNewItemBar = ({dispatch}) => {
  const [typedItem, setTypedItem] = useState('');

  return (
    <Container maxWidth="sm" style={{padding:"20px"}}>
    <form noValidate autoComplete="off">
      <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
      <Grid item/>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Add new item to count"
            variant="outlined"
            onChange={(event) => setTypedItem(event.target.value)}
            value={typedItem}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button variant="contained" fullWidth size="large" onClick={() => dispatch(addItem(typedItem))}>Submit</Button>
        </Grid>
        <Grid item/>
      </Grid>
    </form>
    </Container>
  );
};

export default connect(null, null)(AddNewItemBar);
