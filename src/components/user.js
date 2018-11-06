import React, { Component } from 'react';
import UserTemplate from './user_template';

class User extends Component {

  state = {
    name: 'Nail',
    lastname: 'Khalimov',
    age: 21,
    hob: [1, 2, 3],
    spanish: false,
    message() {console.log('message')},
    car: {brand: 'ford'},
    mother: "Jane",
    color: 'red'
  }

  changeColor() {
    // this.setState({
    //   color: 'blue'
    // })
    this.refs.myColor.style.color = 'blue'
  }

  render() {
    const style = {
      color: this.state.color
    }
    return (
      <div>
        <h4 style={style} ref="myColor">{this.state.mother}</h4>
        <div onClick={() => this.changeColor()}>Change color</div>
        <UserTemplate {...this.state}/>
      </div>
    );
  }
}

export default User;