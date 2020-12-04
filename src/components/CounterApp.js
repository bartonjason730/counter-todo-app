import React, { Fragment } from "react";
import ItemList from "./ItemList";
import AddNewItemBar from "./AddNewItemBar";
import {connect} from 'react-redux';

const CounterApp = ({items}) => {
  return (
    <Fragment>
        <AddNewItemBar/>
        <ItemList 
          items={items}
        />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
