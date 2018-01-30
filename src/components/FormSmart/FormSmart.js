import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from "../Header/Header";
import FormScreen from "../FormScreen/FormScreen";

let formsmart  = (props) => {
    return (
      <div className="main-screen">
       <FormScreen {...props}/>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    handlingEvent: state.handlingEvent,
    events:state.event
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const FormSmart = connect(
  mapStateToProps
)(formsmart)

export default FormSmart;
