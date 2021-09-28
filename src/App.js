import logo from './logo.svg';
import './App.css';
import {List, ListItem, Button, Checkbox} from 'react-onsenui';
import MyComp1 from './Comp1';
import React from 'react';
import { AlertDialog } from 'react-onsenui';
import { Segment } from 'react-onsenui';
import { Switch } from 'react-onsenui';
import { SearchInput } from 'react-onsenui';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: true,
      onCancel: false,
      data:"tiger",
      text:""
      
    }
  }
  renderHeader = () => {
    return "Start!"
  }
  modifier = () => {
    console.log("canceled!!!");
  }
  remove = () => {
    console.log("canceled!!!");
  }
  setState=()=>{
    console.log("clicked!!!");
  }
  render() {
    return (
<SearchInput
  value={this.state.text}
  onChange={(event) => { this.setState({text: event.target.value})} }
  modifier='material'
  placeholder='Username' />
    );
  }
}


export default App;
