import React,{ Component } from 'react';
import './ButtonBar.scss';
import {Button} from 'react-bootstrap';
export default class ButtonBar extends React.Component{

  constructor (props){
    super(props);
  }
  render(){
    return (
        this.props.type === "create"?
        <div className = "button-group">
          <Button type = "submit" onClick = {this.props.onClick.bind(null,"cancel")}>Отмена</Button>
          <Button type = "submit" bsStyle="primary" onClick = {this.props.onClick.bind(null,"create")}>Создать встречу</Button>
        </div>
        :
        <div className = "button-group">
          <Button onClick = {this.props.onClick.bind(null,"cancel")}>Отмена</Button>
          <Button type = "submit" onClick = {this.props.onClick.bind(null,"delete")}>Удалить встречу</Button>
          <Button type = "submit" bsStyle="primary" onClick = {this.props.onClick.bind(null,"edit")}>Сохранить</Button>
        </div>   
     )
  }
}